import React from 'react';

const ModeCard = ({ title, description, icon, onClick, actionText = "Start" }) => {
  return (
    <div 
      className="group bg-surface rounded-3xl p-8 flex flex-col items-center text-center gap-4 shadow-md border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary-light h-full relative overflow-hidden"
    >
      <div className="text-3xl mb-2 bg-bg w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      
      <p className="text-gray-600 text-base flex-grow mb-6">
        {description}
      </p>
      
      <button 
        className="w-full bg-primary text-white py-3 px-6 rounded-xl font-semibold text-base flex items-center justify-center gap-2 transition-colors duration-300 group-hover:bg-primary-light"
        onClick={onClick}
      >
        {actionText}
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>
    </div>
  );
};

export default ModeCard;
