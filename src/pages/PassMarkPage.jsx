import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const faqs = [
  {
    q: 'Do I need to answer exactly 18 questions correctly to pass?',
    a: 'Yes. The pass mark is exactly 18 out of 24 correct answers, which equals 75%. Answering 17 or fewer correctly means you have not passed, regardless of which questions you got right.',
  },
  {
    q: 'Is the 75% pass mark the same for everyone?',
    a: 'Yes. The pass mark is fixed at 75% for all candidates regardless of nationality, age, or which test centre you attend. There are no variations or adjustments.',
  },
  {
    q: 'How many times can I retake the test if I fail?',
    a: 'There is no limit on the number of retakes. You can rebook the test as many times as you need, but you must pay the £50 fee each time. It is strongly recommended to use practice tests to prepare thoroughly before your attempt.',
  },
  {
    q: 'Will I be told which questions I got wrong after the test?',
    a: 'No. You will only be told whether you passed or failed. You will not receive a breakdown of which individual questions you answered incorrectly. This is why practising with mock tests and reviewing incorrect answers is especially valuable.',
  },
];

const PassMarkPage = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <>
      <Helmet>
        <title>Life in the UK Test Pass Mark: How Many Questions Do You Need to Pass?</title>
        <meta
          name="description"
          content="Find out the Life in the UK Test pass mark, how many correct answers you need out of 24, and what happens if you fail. Updated for 2026."
        />
        <link rel="canonical" href="https://passlifeintheuktest.uk/life-in-the-uk-test-pass-mark" />
      </Helmet>

      <div className="min-h-screen bg-gray-50/50 pb-20">

        <header className="bg-white border-b border-gray-100 py-10 mb-10 sm:py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <Link
              to="/"
              className="mb-4 text-sm font-semibold text-primary hover:text-primary-light flex items-center justify-center gap-2 mx-auto transition-colors"
            >
              ← Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mt-2">
              Life in the UK Test Pass Mark
            </h1>
            <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              How many questions do you need to answer correctly to pass the Life in the UK Test?
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">

            {/* Section 1 */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is the Pass Mark?</h2>
              <p className="text-gray-600 leading-relaxed">
                To pass the Life in the UK Test, you must answer at least <strong>18 out of 24 questions
                correctly</strong>. This is a pass mark of <strong>75%</strong>. Answering 17 or fewer
                questions correctly means you have failed, and you will need to retake the test.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-center">
                  <div className="text-3xl font-extrabold text-blue-600">24</div>
                  <div className="text-sm font-semibold text-gray-600 mt-1">Total Questions</div>
                </div>
                <div className="bg-green-50 border border-green-100 rounded-xl p-5 text-center">
                  <div className="text-3xl font-extrabold text-green-600">18</div>
                  <div className="text-sm font-semibold text-gray-600 mt-1">Required to Pass</div>
                </div>
                <div className="bg-purple-50 border border-purple-100 rounded-xl p-5 text-center">
                  <div className="text-3xl font-extrabold text-purple-600">75%</div>
                  <div className="text-sm font-semibold text-gray-600 mt-1">Pass Percentage</div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">How the Pass Mark is Calculated</h2>
              <p className="text-gray-600 leading-relaxed">
                The test always consists of exactly 24 questions, and the pass mark is always 75%. This means
                the minimum number of correct answers required will always be 18, regardless of the difficulty
                of the specific questions you receive.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                Questions are drawn from the full content of the official handbook,{' '}
                <em>Life in the United Kingdom: A Guide for New Residents</em> (3rd edition). Each test is
                computer-generated and may differ from previous attempts, so you cannot predict which specific
                questions will appear.
              </p>
            </section>

            {/* Section 3 */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What Happens if You Fail?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you do not reach the pass mark, you can rebook as many times as you need. Here is what you need to know:
              </p>
              <ul className="space-y-3 text-gray-600">
                {[
                  'You will receive your pass or fail result by email shortly after the test.',
                  'If you pass, the email includes the unique reference number needed for your application.',
                  'You can rebook the test immediately if you fail, but you must pay the £50 fee again.',
                  'There is no limit to the number of times you can retake the test.',
                  'Your visa application will not be affected until you are required to submit evidence of passing.',
                ].map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-primary font-bold mt-0.5 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 4 */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Tips for Reaching the Pass Mark</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The most effective way to consistently score above 75% is systematic preparation:
              </p>
              <ol className="space-y-3 text-gray-600">
                {[
                  { n: '1', title: 'Read the full official handbook', body: 'Every question in the real test comes directly from the handbook. Read it thoroughly at least twice before your test date.' },
                  { n: '2', title: 'Practise under timed conditions', body: 'The real test gives you 45 minutes for 24 questions. Practice under this time pressure to avoid running out of time on the day.' },
                  { n: '3', title: 'Target your weak topics', body: 'After each mock test, review the questions you got wrong and revisit those sections of the handbook. Focused revision is more efficient than re-reading everything.' },
                  { n: '4', title: 'Aim higher than 75%', body: 'Aim to consistently score 20+ out of 24 in practice. This gives you a buffer for unfamiliar questions on the day.' },
                ].map(({ n, title, body }) => (
                  <li key={n} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">{n}</span>
                    <span><strong>{title}</strong> — {body}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* FAQ */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenIdx(openIdx === i ? null : i)}
                      className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                      <span className="text-gray-400 flex-shrink-0 text-lg">{openIdx === i ? '−' : '+'}</span>
                    </button>
                    {openIdx === i && (
                      <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* CTA */}
          <div className="mt-10 bg-gradient-to-br from-primary/5 to-blue-50 border border-primary/10 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Practice until you consistently hit 75%+</h2>
            <p className="text-gray-500 mb-6 text-sm sm:text-base">
              Use our free timed mock exams to build confidence before your real test.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/test"
                className="px-6 py-3 rounded-full bg-primary text-white font-bold hover:bg-primary-light shadow-lg shadow-primary/20 transition-all text-sm"
              >
                Take a Timed Mock Test
              </Link>
              <Link
                to="/individual"
                className="px-6 py-3 rounded-full bg-white text-primary border-2 border-primary font-bold hover:bg-primary/5 transition-all text-sm"
              >
                Browse Individual Tests
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PassMarkPage;
