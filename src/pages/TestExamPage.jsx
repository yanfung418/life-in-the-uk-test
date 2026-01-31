import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuestionGrid from '../components/Practice/QuestionGrid';
import { examQuestions } from '../data/exams';

const TestExamPage = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { qIdx: optionIdx }
  const [submitted, setSubmitted] = useState({}); // { qIdx: boolean }
  const [showChinese, setShowChinese] = useState(false);
  
  // Timer State (45 minutes = 2700 seconds)
  const [timeLeft, setTimeLeft] = useState(45 * 60);
  const timerRef = useRef(null);

  // Get questions for this exam
  const questions = examQuestions[examId] || [];
  const currentQuestion = questions[currentQuestionIdx];

  // Start Timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleFinishExam(true); // Trigger finish on timeout
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (idx) => {
    if (submitted[currentQuestionIdx]) return;
    setUserAnswers(prev => ({ ...prev, [currentQuestionIdx]: idx }));
  };

  const handleCheckAnswer = () => {
    if (userAnswers[currentQuestionIdx] === undefined) return;
    setSubmitted(prev => ({ ...prev, [currentQuestionIdx]: true }));
  };

  const handleFinishExam = (timedOut = false) => {
    clearInterval(timerRef.current);
    
    // Calculate scores
    let correctCount = 0;
    let incorrectAnswers = [];

    questions.forEach((q, qIdx) => {
      const selected = userAnswers[qIdx];
      const isCorrect = selected !== undefined && q.correctAnswers.includes(selected);
      
      if (isCorrect) {
        correctCount++;
      } else {
        // Only add to incorrect if they actually submitted/answered it or if we're finishing
        incorrectAnswers.push({
          questionIdx: qIdx,
          question: q.question,
          question_zh: q.question_zh,
          userAnswer: selected !== undefined ? q.options[selected] : "Not answered",
          correctAnswer: q.options[q.correctAnswers[0]],
          explanation: q.explanation,
          explanation_zh: q.explanation_zh,
          options: q.options,
          options_zh: q.options_zh,
          correctAnswers: q.correctAnswers,
          selectedIdx: selected
        });
      }
    });

    const totalQuestions = questions.length;
    const incorrectCount = totalQuestions - correctCount;
    const timeSpent = (45 * 60) - timeLeft;

    // Navigate to results page with state
    navigate(`/exam-results/${examId}`, {
      state: {
        correctCount,
        incorrectCount,
        totalQuestions,
        incorrectAnswers,
        examId,
        timeSpent,
        timedOut,
        mode: 'test'
      }
    });
  };

  const handleNext = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIdx > 0) {
      setCurrentQuestionIdx(prev => prev - 1);
    }
  };

  // Calculate statuses for QuestionGrid
  const statuses = Object.keys(submitted).reduce((acc, qIdx) => {
    const q = questions[qIdx];
    const selected = userAnswers[qIdx];
    const isCorrect = q.correctAnswers.includes(selected);
    acc[parseInt(qIdx) + 1] = isCorrect ? 'correct' : 'incorrect';
    return acc;
  }, {});

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h1 className="text-2xl font-bold">Exam data not found</h1>
        <button onClick={() => navigate('/individual')} className="text-primary hover:underline">
          Back to Individual Tests
        </button>
      </div>
    );
  }

  const isCurrentSubmitted = submitted[currentQuestionIdx];
  const selectedOptionIdx = userAnswers[currentQuestionIdx];

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      <header className="bg-white border-b border-gray-100 py-10 mb-8 sm:py-12 sm:mb-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <button 
            onClick={() => navigate('/individual')}
            className="mb-4 text-sm font-semibold text-primary hover:text-primary-light flex items-center justify-center gap-2 mx-auto transition-colors"
          >
            ← Back to Individual Tests
          </button>
          
          <div className="flex flex-col items-center gap-2 mb-3">
             <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                Exam {examId} - Test Mode
              </h1>
              <div className={`px-4 py-1.5 rounded-full font-bold text-lg shadow-sm border-2 ${
                timeLeft < 300 ? 'bg-red-50 border-red-200 text-red-600 animate-pulse' : 'bg-blue-50 border-blue-200 text-blue-600'
              }`}>
                Time remaining: {formatTime(timeLeft)}
              </div>
          </div>
          
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base font-medium">
            Question {currentQuestionIdx + 1} of {questions.length}
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4">
        <QuestionGrid 
          currentQuestion={currentQuestionIdx + 1}
          totalQuestions={questions.length}
          statuses={statuses}
          onQuestionClick={(id) => setCurrentQuestionIdx(id - 1)}
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 relative overflow-hidden">
             <button
              onClick={() => setShowChinese(!showChinese)}
              className={`absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 shadow-sm border-2 z-10 ${
                showChinese 
                  ? 'bg-blue-600 border-blue-600 text-white' 
                  : 'bg-blue-50 border-blue-200 text-blue-600 hover:border-blue-600 hover:bg-blue-100 hover:scale-110'
              }`}
              title={showChinese ? "Switch to English" : "切換為中文"}
            >
              {showChinese ? 'EN' : '中'}
            </button>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 leading-relaxed pr-14 sm:pr-16">
              <div>{currentQuestion.question}</div>
              {showChinese && currentQuestion.question_zh && (
                <div className="text-lg text-gray-600 mt-3 font-medium">{currentQuestion.question_zh}</div>
              )}
            </h2>
            
            <div className="space-y-4">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedOptionIdx === idx;
                const isCorrect = currentQuestion.correctAnswers.includes(idx);
                
                let optionStyle = "w-full text-left p-5 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 ";
                
                if (isCurrentSubmitted) {
                  if (isCorrect) {
                    optionStyle += "bg-green-50 border-green-500 text-green-900 ";
                  } else if (isSelected) {
                    optionStyle += "bg-red-50 border-red-500 text-red-900 ";
                  } else {
                    optionStyle += "bg-gray-50 border-gray-100 text-gray-400 ";
                  }
                } else {
                  if (isSelected) {
                    optionStyle += "bg-blue-50 border-blue-600 text-blue-900 ";
                  } else {
                    optionStyle += "bg-white border-gray-100 text-gray-700 hover:border-gray-300 hover:bg-gray-50 ";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isCurrentSubmitted}
                    onClick={() => handleSelectOption(idx)}
                    className={optionStyle}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                      isSelected ? 'border-blue-600' : 'border-gray-200'
                    }`}>
                      {isSelected && <div className="w-3 h-3 rounded-full bg-blue-600" />}
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-semibold">{option}</span>
                      {showChinese && currentQuestion.options_zh && (
                        <span className="text-sm opacity-80 mt-1">{currentQuestion.options_zh[idx]}</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {isCurrentSubmitted && (
              <div className="mt-10 p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  {currentQuestion.correctAnswers.includes(selectedOptionIdx) ? (
                    <>
                      <span className="text-3xl">✓</span>
                      <h3 className="text-green-700 font-bold text-xl">Correct!</h3>
                    </>
                  ) : (
                    <>
                      <span className="text-3xl">✗</span>
                      <h3 className="text-red-700 font-bold text-xl">Incorrect</h3>
                    </>
                  )}
                </div>
                <div>
                  <h4 className="text-blue-900 font-bold mb-1">💡 Explanation</h4>
                  <p className="text-blue-800 leading-relaxed">
                     {currentQuestion.explanation}
                  </p>
                  {showChinese && currentQuestion.explanation_zh && (
                    <p className="text-blue-700 leading-relaxed mt-2 text-md">
                      {currentQuestion.explanation_zh}
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className="mt-10 pt-8 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <button className="text-gray-500 font-bold hover:text-gray-700 transition-colors uppercase tracking-wider text-sm">
                  Flag for review
                </button>
                
                <div className="flex gap-3 w-full sm:w-auto">
                  <button 
                    disabled={currentQuestionIdx === 0}
                    onClick={handlePrevious}
                    className="flex-1 sm:flex-none px-8 py-3 rounded-full border border-gray-300 font-bold text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    Previous
                  </button>
                  
                  {!isCurrentSubmitted ? (
                    <button 
                      disabled={selectedOptionIdx === undefined}
                      onClick={handleCheckAnswer}
                      className="flex-1 sm:flex-none px-10 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-200 transition-all"
                    >
                      Check
                    </button>
                  ) : (
                    <button 
                      onClick={currentQuestionIdx === questions.length - 1 ? () => handleFinishExam(false) : handleNext}
                      className="flex-1 sm:flex-none px-10 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
                    >
                      {currentQuestionIdx === questions.length - 1 ? 'Finish Exam' : 'Next'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TestExamPage;
