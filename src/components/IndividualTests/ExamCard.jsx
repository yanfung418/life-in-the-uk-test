import React from 'react';

const ExamCard = ({ title, onPractice, onTest }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 flex flex-col items-center gap-4 transition-all hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5 group">
      <div className="text-lg font-bold text-black group-hover:text-primary transition-colors">
        {title}
      </div>
      
      <div className="flex w-full gap-2">
        <button 
          onClick={onPractice}
          className="flex-1 flex flex-col items-center justify-center gap-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-all active:scale-95 border tracking-tight"
          title="Practice Mode"
        >
          <span>Practice</span>
        </button>
        <button 
          onClick={onTest}
          className="flex-1 flex flex-col items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all active:scale-95 border border-indigo-100 tracking-tight"
          title="Test Mode"
        >
          <span>Test</span>
        </button>
      </div>
    </div>
  );
};

export default ExamCard;
