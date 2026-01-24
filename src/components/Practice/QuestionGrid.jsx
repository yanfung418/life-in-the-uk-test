import React from 'react';

const QuestionGrid = ({ currentQuestion = 1, statuses = {}, totalQuestions = 24, onQuestionClick }) => {
  const questions = Array.from({ length: totalQuestions }, (_, i) => i + 1);

  const getStatusStyles = (qId) => {
    const status = statuses[qId];
    const isCurrent = currentQuestion === qId;
    
    let baseStyles = "h-10 w-full rounded-lg flex items-center justify-center text-base font-semibold transition-all duration-200 cursor-pointer border ";
    
    if (isCurrent) {
      baseStyles += "bg-blue-600 text-white ";
    } else {
      baseStyles += "bg-white text-gray-600 border-gray-300 hover:bg-gray-200 ";
    }

    return baseStyles;
  };

  return (
    <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-2 sm:gap-3 mb-8">
      {questions.map((qId) => (
        <button
          key={qId}
          onClick={() => onQuestionClick?.(qId)}
          className={getStatusStyles(qId)}
          aria-label={`Question ${qId}`}
        >
          {qId}
        </button>
      ))}
    </div>
  );
};

export default QuestionGrid;
