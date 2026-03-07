import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ExamCard from '../components/IndividualTests/ExamCard';

const IndividualTestsPage = () => {
  const navigate = useNavigate();

  const exams = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    title: `Exam ${i + 1}`,
  }));

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      <Helmet>
        <title>Individual Practice Tests – Life in the UK Test | 18 Mock Exams</title>
        <meta name="description" content="Browse 18 individual Life in the UK practice exam sets. Targeted mock tests covering history, culture, government and law to help you prepare for the British citizenship test." />
        <link rel="canonical" href="https://passlifeintheuktest.uk/individual" />
      </Helmet>
      <header className="bg-white border-b border-gray-100 py-10 mb-8 sm:py-12 sm:mb-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <button 
            onClick={() => navigate('/')}
            className="mb-4 text-sm font-semibold text-primary hover:text-primary-light flex items-center justify-center gap-2 mx-auto transition-colors"
          >
            ← Back to Home
          </button>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Individual Tests
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Select an exam set to practise (18 available).
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {exams.map((exam) => (
            <ExamCard
              key={exam.id}
              title={exam.title}
              onPractice={() => navigate(`/practice/exam/${exam.id}`)}
              onTest={() => navigate(`/test/exam/${exam.id}`)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default IndividualTestsPage;
