import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { saveIncorrectAnswers } from '../services/storage';

const ExamResultsPage = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const { 
    correctCount = 0, 
    incorrectCount = 0, 
    totalQuestions = 24,
    incorrectAnswers = [],
    timeSpent = 0,
    timedOut = false,
    mode = 'practice'
  } = location.state || {};

  const [showChinese, setShowChinese] = React.useState(false);

  React.useEffect(() => {
    if (incorrectAnswers.length > 0) {
      saveIncorrectAnswers(incorrectAnswers);
    }
  }, [incorrectAnswers]);

  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const passed = percentage >= 75 && !timedOut;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleRetry = () => {
    const path = mode === 'test' ? `/test/exam/${examId}` : `/practice/exam/${examId}`;
    navigate(path);
  };

  const handleBackHome = () => {
    navigate('/');
  };

  return (
      <div className="min-h-screen bg-gray-50/50 pb-20">
          <main className="max-w-4xl mx-auto px-4">
              <div className="max-w-7xl mx-auto px-4 py-6 text-center">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                      Exam {examId} - Results
                  </h1>
              </div>
              {/* Pass/Fail Status */}
              <div className={`rounded-3xl p-10 mb-8 text-center ${
                  passed 
                      ? 'bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200' 
                      : 'bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200'
              }`}>
                  <div className="text-7xl mb-4">
                      {timedOut ? '⌛' : passed ? '🎉' : '📚'}
                  </div>
                  <h2 className={`text-4xl font-extrabold mb-4 ${
                      passed ? 'text-green-700' : 'text-red-700'
                  }`}>
                      {timedOut ? 'Time out - Keep practicing' : passed ? 'Congratulations! You Passed!' : 'Keep Practicing!'}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                      {timedOut ? "You didn't finish within 45 minutes." : "You need 75% (18 out of 24) to pass"}
                  </p>
                  
                  {mode === 'test' && !timedOut && (
                    <div className="mb-6 text-xl font-bold text-blue-700">
                        Your time: {formatTime(timeSpent)}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 px-2">
                      <div className="bg-white rounded-2xl px-4 py-4 sm:px-8 sm:py-6 shadow-sm min-w-[100px] flex-1 sm:flex-none">
                          <div className="text-3xl sm:text-4xl font-bold text-green-600">{correctCount}</div>
                          <div className="text-xs sm:text-sm text-gray-600 font-semibold mt-1">Correct</div>
                      </div>
                      <div className="bg-white rounded-2xl px-4 py-4 sm:px-8 sm:py-6 shadow-sm min-w-[100px] flex-1 sm:flex-none">
                          <div className="text-3xl sm:text-4xl font-bold text-red-600">{incorrectCount}</div>
                          <div className="text-xs sm:text-sm text-gray-600 font-semibold mt-1">Incorrect</div>
                      </div>
                      <div className="bg-white rounded-2xl px-4 py-4 sm:px-8 sm:py-6 shadow-sm min-w-[100px] flex-1 sm:flex-none">
                          <div className="text-3xl sm:text-4xl font-bold text-blue-600">{percentage}%</div>
                          <div className="text-xs sm:text-sm text-gray-600 font-semibold mt-1">Score</div>
                      </div>
                    </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                          onClick={handleRetry}
                          className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
                      >
                          Retry This Exam
                      </button>
                      <button
                          onClick={handleBackHome}
                          className="px-8 py-4 rounded-full border-2 border-gray-300 bg-white text-gray-700 font-bold hover:bg-gray-50 transition-all"
                      >
                          Back to Home
                      </button>
                  </div>
                </div>

        {/* Incorrect Answers Review */}
        {incorrectAnswers.length > 0 && (
          <div className="mt-12">
            <h3 className="md:text-2xl text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">📝</span>
              Review Incorrect Answers ({incorrectAnswers.length})
              <button
                onClick={() => setShowChinese(!showChinese)}
                className={`ml-auto w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 shadow-sm border-2 ${
                  showChinese 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'bg-blue-50 border-blue-200 text-blue-600 hover:border-blue-600 hover:bg-blue-100 hover:scale-110'
                }`}
                title={showChinese ? "Switch to English" : "切換為中文"}
              >
                {showChinese ? 'EN' : '中'}
              </button>
            </h3>
            
            <div className="space-y-6">
              {incorrectAnswers.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <div className="flex items-start gap-3 mb-6">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center text-sm">
                      {item.questionIdx + 1}
                    </span>
                    <div className="flex flex-col">
                      <h4 className="text-lg font-bold text-gray-900 leading-relaxed">
                        {item.question}
                      </h4>
                      {showChinese && item.question_zh && (
                        <p className="text-gray-600 font-medium mt-1">{item.question_zh}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {item.options.map((option, optIdx) => {
                      const isUserAnswer = optIdx === item.selectedIdx;
                      const isCorrectAnswer = item.correctAnswers.includes(optIdx);
                      
                      let optionStyle = "p-4 rounded-xl border-2 flex items-center gap-3 ";
                      
                      if (isCorrectAnswer) {
                        optionStyle += "bg-green-50 border-green-500 text-green-900";
                      } else if (isUserAnswer) {
                        optionStyle += "bg-red-50 border-red-500 text-red-900";
                      } else {
                        optionStyle += "bg-gray-50 border-gray-100 text-gray-400";
                      }

                      return (
                        <div key={optIdx} className={optionStyle}>
                          <div className="flex items-center gap-3">
                            {isCorrectAnswer && <span className="text-xl">✓</span>}
                            {isUserAnswer && !isCorrectAnswer && <span className="text-xl">✗</span>}
                            <div className="flex flex-col">
                              <span className="font-semibold">{option}</span>
                              {showChinese && item.options_zh && (
                                <span className="text-xs opacity-80">{item.options_zh[optIdx]}</span>
                              )}
                            </div>
                          </div>
                          {isUserAnswer && <span className="ml-auto text-sm font-bold">(Your answer)</span>}
                          {isCorrectAnswer && <span className="ml-auto text-sm font-bold">(Correct answer)</span>}
                        </div>
                      );
                    })}
                  </div>
                  <div className="p-5 bg-blue-50/50 rounded-xl border border-blue-100">
                      <div>
                        <h5 className="text-blue-900 font-bold mb-1">💡 Explanation</h5>
                        <p className="text-blue-800 leading-relaxed">
                          {item.explanation}
                        </p>
                        {showChinese && item.explanation_zh && (
                          <p className="text-blue-700 leading-relaxed mt-2 text-md">
                            {item.explanation_zh}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Actions */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center pb-8">
          <button
            onClick={handleRetry}
            className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
          >
            Retry This Exam
          </button>
          <button
            onClick={handleBackHome}
            className="px-8 py-4 rounded-full border-2 border-gray-300 bg-white text-gray-700 font-bold hover:bg-gray-50 transition-all"
          >
            Back to Home
          </button>
        </div>
      </main>
    </div>
  );
};

export default ExamResultsPage;
