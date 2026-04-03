import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-100 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 mb-10">
          
          {/* Left Side: Navigation Links (Grouped together) */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            {/* Column 1: Main Links */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">Practice</h3>
              <nav className="flex flex-col gap-3 text-sm font-medium text-gray-500">
                <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                <Link to="/individual" className="hover:text-blue-600 transition-colors">Individual Tests</Link>
                <Link to="/test" className="hover:text-blue-600 transition-colors">Random Test Mode</Link>
                <Link to="/review-incorrect" className="hover:text-blue-600 transition-colors">Review Incorrect</Link>
              </nav>
            </div>

            {/* Column 2: Resources & Info */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">Information</h3>
              <nav className="flex flex-col gap-3 text-sm font-medium text-gray-500">
                <Link to="/what-is-the-life-in-the-uk-test" className="hover:text-blue-600 transition-colors">What is the Test?</Link>
                <Link to="/life-in-the-uk-test-pass-mark" className="hover:text-blue-600 transition-colors">Pass Mark</Link>
                <Link to="/how-many-questions-life-in-the-uk-test" className="hover:text-blue-600 transition-colors">How Many Questions?</Link>
                <Link to="/life-in-the-uk-test-cost" className="hover:text-blue-600 transition-colors">Test Cost</Link>
                <Link to="/life-in-the-uk-test-questions" className="hover:text-blue-600 transition-colors">Test Questions</Link>
                <Link to="/life-in-the-uk-test-booking" className="hover:text-blue-600 transition-colors">How to Book</Link>
                <Link to="/life-in-the-uk-test-centres" className="hover:text-blue-600 transition-colors">Test Centres</Link>
              </nav>
            </div>
          </div>

          {/* Right Side: Support / Buy Me a Coffee */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right mt-2 md:mt-0">
            <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">Support</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[240px] mb-4">
              If you have found this site useful, feel free to support ☕
            </p>
            <a href="https://www.buymeacoffee.com/lifeintheuktest" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=lifeintheuktest&button_colour=FFDD00&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=ffffff" 
                alt="Buy me a coffee" 
                className="h-[40px] hover:opacity-90 hover:scale-[1.02] transition-all object-contain"
              />
            </a>
          </div>

        </div>

        {/* Disclaimer / Bottom Bar */}
        <div className="pt-8 border-t border-gray-100">
          <p className="text-center text-gray-400 text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto">
            This website is an independent practice resource and is not affiliated with or endorsed by the UK Government or the official Life in the UK Test.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
