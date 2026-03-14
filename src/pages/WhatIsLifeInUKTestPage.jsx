import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const WhatIsLifeInUKTestPage = () => {
  return (
    <>
      <Helmet>
        <title>What is the Life in the UK Test? Format, Questions &amp; Pass Mark</title>
        <meta
          name="description"
          content="Learn what the Life in the UK Test is, how many questions it has, the pass mark, and how to prepare for the British citizenship test."
        />
        <link rel="canonical" href="https://passlifeintheuktest.uk/what-is-the-life-in-the-uk-test" />
      </Helmet>

      <div className="min-h-screen bg-gray-50/50 pb-20">

        {/* Page header */}
        <header className="bg-white border-b border-gray-100 py-10 mb-10 sm:py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <Link
              to="/"
              className="mb-4 text-sm font-semibold text-primary hover:text-primary-light flex items-center justify-center gap-2 mx-auto transition-colors"
            >
              ← Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mt-2">
              What is the Life in the UK Test?
            </h1>
            <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Everything you need to know about the official British citizenship and settlement test.
            </p>
          </div>
        </header>

        {/* Main content */}
        <main className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">

            {/* Section 1 */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Overview of the Life in the UK Test</h2>
              <p className="text-gray-600 leading-relaxed">
                The Life in the UK Test is an official computer-based exam administered by the UK Home Office.
                It is designed to assess whether applicants for British citizenship or Indefinite Leave to Remain (ILR)
                have a sufficient knowledge of British life, history, culture, and values.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                The test was introduced in 2005 and is a legal requirement for most people applying to settle
                permanently in the United Kingdom or to become a British citizen. Passing the test demonstrates
                that you have integrated into British society and understand the country's customs and democratic
                principles.
              </p>
            </section>

            {/* Section 2 */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Who Needs to Take the Test?</h2>
              <p className="text-gray-600 leading-relaxed">
                You are required to take the Life in the UK Test if you are applying for:
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span><strong>Indefinite Leave to Remain (ILR)</strong> — permanent residency in the UK</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span><strong>British citizenship by naturalisation</strong> — becoming a British national</span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                Certain groups are exempt, including children under 18, people aged 65 and over, and those
                with a long-term physical or mental condition that prevents them from taking the test.
              </p>
            </section>

            {/* Section 3 */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Test Format</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                The test is taken at an approved test centre on a computer. Here is the format:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-center">
                  <div className="text-3xl font-extrabold text-blue-600">24</div>
                  <div className="text-sm font-semibold text-gray-600 mt-1">Questions</div>
                </div>
                <div className="bg-purple-50 border border-purple-100 rounded-xl p-5 text-center">
                  <div className="text-3xl font-extrabold text-purple-600">45</div>
                  <div className="text-sm font-semibold text-gray-600 mt-1">Minutes</div>
                </div>
                <div className="bg-green-50 border border-green-100 rounded-xl p-5 text-center">
                  <div className="text-3xl font-extrabold text-green-600">18/24</div>
                  <div className="text-sm font-semibold text-gray-600 mt-1">To Pass (75%)</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mt-5">
                Questions are multiple choice. You must answer at least <strong>18 out of 24 questions correctly</strong> (75%)
                to pass. If you fail, you can rebook the test as many times as you need. You will have to pay the test fee each time.
                The fee is currently £50 per attempt.
              </p>
            </section>

            {/* Section 4 */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Topics Covered</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All questions are based on the official handbook, <em>Life in the United Kingdom: A Guide for New Residents</em>.
                The test covers five main topic areas:
              </p>
              <div className="space-y-3">
                {[
                  { icon: '🏰', topic: 'British History', detail: 'From prehistoric Britain through to the modern era, including the World Wars and the development of democracy.' },
                  { icon: '🏛️', topic: 'Government & Politics', detail: 'How Parliament works, the role of the monarch, devolved governments in Scotland, Wales and Northern Ireland, and the voting system.' },
                  { icon: '🎭', topic: 'Culture & Society', detail: 'Sports, arts, the BBC, national holidays, and British traditions and customs that shape everyday life.' },
                  { icon: '⚖️', topic: 'Law & Your Rights', detail: 'The legal system, fundamental rights and responsibilities of residents, and key laws protecting citizens.' },
                  { icon: '🍀', topic: 'Traditions & Values', detail: 'British values including tolerance, freedom of speech, and respect for the rule of law.' },
                ].map(({ icon, topic, detail }) => (
                  <div key={topic} className="flex gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <span className="text-2xl flex-shrink-0">{icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900">{topic}</div>
                      <div className="text-sm text-gray-500 mt-0.5">{detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5 */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">How to Prepare</h2>
              <p className="text-gray-600 leading-relaxed">
                The most effective way to prepare for the Life in the UK Test is to:
              </p>
              <ol className="mt-3 space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">1</span>
                  <span>
                    <strong>Read the official handbook</strong> — <em>Life in the United Kingdom: A Guide for New Residents</em>
                    (3rd edition). All test questions are taken directly from this book.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">2</span>
                  <span>
                    <strong>Take mock exams</strong> — practising with realistic timed tests is one of the best ways
                    to identify weak areas and build confidence under exam conditions.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">3</span>
                  <span>
                    <strong>Review your mistakes</strong> — after each practice test, focus on the questions you got
                    wrong and revisit the relevant sections of the handbook.
                  </span>
                </li>
              </ol>
            </section>

          </div>

          {/* CTA section */}
          <div className="mt-10 bg-gradient-to-br from-primary/5 to-blue-50 border border-primary/10 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Ready to start practising?</h2>
            <p className="text-gray-500 mb-6 text-sm sm:text-base">
              Use our free mock exams to prepare for the real test. No account needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/individual"
                className="px-6 py-3 rounded-full bg-primary text-white font-bold hover:bg-primary-light shadow-lg shadow-primary/20 transition-all text-sm"
              >
                Browse Individual Tests
              </Link>
              <Link
                to="/test"
                className="px-6 py-3 rounded-full bg-white text-primary border-2 border-primary font-bold hover:bg-primary/5 transition-all text-sm"
              >
                Take a Random Mock Test
              </Link>
            </div>
          </div>
        </main>

      </div>
    </>
  );
};

export default WhatIsLifeInUKTestPage;
