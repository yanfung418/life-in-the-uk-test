import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-3 text-sm font-semibold text-gray-500">
          <Link to="/" className="hover:text-gray-800 transition-colors">Home</Link>
          <Link to="/individual" className="hover:text-gray-800 transition-colors">Individual Tests</Link>
          <Link to="/test" className="hover:text-gray-800 transition-colors">Random Test Mode</Link>
          <Link to="/review-incorrect" className="hover:text-gray-800 transition-colors">Review Incorrect</Link>
        </nav>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 text-xs font-medium text-gray-400">
          <Link to="/what-is-the-life-in-the-uk-test" className="hover:text-gray-600 transition-colors">What is the Life in the UK Test?</Link>
          <Link to="/life-in-the-uk-test-pass-mark" className="hover:text-gray-600 transition-colors">Pass Mark</Link>
          <Link to="/how-many-questions-life-in-the-uk-test" className="hover:text-gray-600 transition-colors">How Many Questions?</Link>
          <Link to="/life-in-the-uk-test-cost" className="hover:text-gray-600 transition-colors">Test Cost</Link>
          <Link to="/life-in-the-uk-test-questions" className="hover:text-gray-600 transition-colors">Test Questions</Link>
        </nav>
        <p className="text-center text-gray-400 text-sm">
          This website is an independent practice resource and is not affiliated with or endorsed by the UK Government or the official Life in the UK Test.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
