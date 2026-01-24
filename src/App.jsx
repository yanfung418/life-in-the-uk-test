import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

// Simple placeholders for now
const PlaceHolder = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center flex-col gap-4">
    <h1 className="text-4xl font-bold text-primary">{title}</h1>
    <p className="text-gray-600">Coming soon...</p>
    <a href="/" className="text-primary hover:underline">Back to Home</a>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/practice" element={<PlaceHolder title="Practice Mode" />} />
      <Route path="/test" element={<PlaceHolder title="Test Mode" />} />
      <Route path="/individual" element={<PlaceHolder title="Individual Tests" />} />
    </Routes>
  );
}

export default App;
