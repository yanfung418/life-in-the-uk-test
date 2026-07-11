import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    const formData = new FormData(e.target);
    // Add the Web3Forms access key
    formData.append("access_key", "6b8ccfcf-8d59-48bc-a189-be87cfc62137");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      <Helmet>
        <title>Contact Us – Life in the UK Test Practice</title>
        <meta name="description" content="Get in touch with us if you have any questions, feedback, or issues regarding the Life in the UK Test practice platform." />
      </Helmet>

      <main className="max-w-2xl mx-auto px-4 pt-10">
        <Link to="/" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors mb-8 group">
           <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Home
        </Link>
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Contact Us</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Have a question, feedback, or encountered an issue with a test question? Send us a message and we’ll respond as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot Spam Protection for Web3Forms */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-2">Your Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                required 
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none transition-all"
                placeholder="e.g. John Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-2">Email Address</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required 
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-2">Message</label>
              <textarea 
                name="message" 
                id="message" 
                required 
                rows="5"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none transition-all resize-y"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-md
                ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg shadow-blue-200 hover:-translate-y-0.5'}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="p-4 mt-4 bg-green-50 text-green-800 border-2 border-green-200 rounded-xl text-center font-medium">
                🎉 Message sent successfully! We will get back to you soon.
              </div>
            )}
            
            {status === 'error' && (
              <div className="p-4 mt-4 bg-red-50 text-red-800 border-2 border-red-200 rounded-xl text-center font-medium">
                Oops! Something went wrong. Please check your connection and try again.
              </div>
            )}
          </form>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
