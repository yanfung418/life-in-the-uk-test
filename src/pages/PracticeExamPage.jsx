import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PracticeExamPage = () => {
  const { examId } = useParams();
  const navigate = useNavigate();

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
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Exam {examId} - Practice Mode
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base font-medium">
            Question 1 of 24
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4">
        {/* Placeholder for future Q&A content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
          <p className="text-gray-600 mb-4">Core Q&A content will be implemented here.</p>
          <div className="w-16 h-1 w-16 bg-primary/20 mx-auto rounded-full duration-1000 animate-pulse"></div>
        </div>
      </main>
    </div>
  );
};

export default PracticeExamPage;
