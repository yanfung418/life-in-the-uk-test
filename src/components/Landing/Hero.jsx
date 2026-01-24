import React from 'react';

const Hero = () => {
  return (
    <header className="py-12 md:py-20 text-center relative overflow-hidden px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
          Life in the <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">UK Test</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
          Master your British citizenship test with authentic questions. 
          Test your knowledge of UK history, culture, and government with our premium practice platform.
        </p>
      </div>
    </header>
  );
};

export default Hero;
