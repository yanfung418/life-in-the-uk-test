import React from 'react';

const QuestionGrid = ({ currentQuestion = 1, statuses = {}, totalQuestions = 24, onQuestionClick }) => {
  const questions = Array.from({ length: totalQuestions }, (_, i) => i + 1);

  const getStatusStyles = (qId) => {
    const status = statuses[qId];
    const isCurrent = currentQuestion === qId;
    
    let baseStyles = "h-10 w-full rounded-lg flex items-center justify-center text-base font-semibold transition-all duration-200 cursor-pointer border ";
    
    if (isCurrent) {
      baseStyles += "bg-blue-600 text-white border-blue-700 ring-2 ring-blue-600 ring-offset-2 ";
    } else if (status === 'correct') {
      baseStyles += "bg-green-500 text-white border-green-600 ";
    } else if (status === 'incorrect') {
      baseStyles += "bg-red-500 text-white border-red-600 ";
    } else {
      baseStyles += "bg-white text-gray-600 border-gray-300 hover:bg-gray-100 ";
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
