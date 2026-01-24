import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Landing/Hero';
import ModeCard from '../components/Landing/ModeCard';

const LandingPage = () => {
  const navigate = useNavigate();

  const modes = [
    {
      id: 'practice',
      title: 'Practice Mode',
      description: 'Practice with all available questions. No time limit, instant feedback. Perfect for learning at your own pace.',
      icon: '📚',
      path: '/practice'
    },
    {
      id: 'test',
      title: 'Test Mode',
      description: 'Take the official test format: 24 questions, 45 minutes, pass with 75%. Experience the real exam pressure.',
      icon: '⏱️',
      path: '/test'
    },
    {
      id: 'individual',
      title: 'Individual Tests',
      description: 'Focus on specific topics or difficult areas. Choose from a library of specialized practice sets.',
      icon: '🎯',
      path: '/individual'
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      <Hero />
      
      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto -mt-8 relative z-10">
          {modes.map((mode) => (
            <ModeCard
              key={mode.id}
              title={mode.title}
              description={mode.description}
              icon={mode.icon}
              onClick={() => navigate(mode.path)}
              actionText="Start Practice"
            />
          ))}
        </div>

        <section className="mt-20 text-center max-w-2xl mx-auto text-gray-500 text-sm">
          <p>
            This website is for practice purposes only. Not affiliated with the official Life in the UK Test.
          </p>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
