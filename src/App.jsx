import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import IndividualTestsPage from './pages/IndividualTestsPage';
import PracticeExamPage from './pages/PracticeExamPage';

// Simple placeholders for now
const PlaceHolder = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center flex-col gap-4 text-center px-4">
    <h1 className="text-4xl font-bold text-primary">{title}</h1>
    <p className="text-gray-600">Coming soon...</p>
    <a href="/" className="text-primary font-semibold hover:underline">← Back to Home</a>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/practice" element={<PlaceHolder title="Practice Mode" />} />
      <Route path="/test" element={<PlaceHolder title="Test Mode" />} />
      <Route path="/individual" element={<IndividualTestsPage />} />
      <Route path="/practice/exam/:examId" element={<PracticeExamPage />} />
    </Routes>
  );
}

export default App;
