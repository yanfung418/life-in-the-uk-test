import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const faqs = [
  {
    q: 'Are the 24 questions always the same for everyone?',
    a: 'No. The questions are drawn randomly from a larger question bank by the test system. Each candidate receives a different set of questions, so the test varies between attempts and between people.',
  },
  {
    q: 'Are the questions multiple choice?',
    a: 'Yes. All 24 questions are multiple choice. Most questions have four answer options and only one correct answer. Some questions may have two correct answers where you must select all that apply.',
  },
  {
    q: 'How much time do I get per question?',
    a: 'You have 45 minutes for the full 24-question test, which averages to just under 2 minutes per question. You can move between questions and review your answers before submitting, so manage your time carefully.',
  },
  {
    q: 'Can I skip a question and come back to it?',
    a: 'Yes. The test software allows you to move forwards and backwards through the questions. You can flag questions you are unsure about and return to them before submitting your final answers.',
  },
];

const HowManyQuestionsPage = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <>
      <Helmet>
        <title>How Many Questions Are in the Life in the UK Test?</title>
        <meta
          name="description"
          content="The Life in the UK Test has 24 multiple-choice questions, 45 minutes, and a 75% pass mark. Learn exactly how the test is structured and what to expect."
        />
        <link rel="canonical" href="https://passlifeintheuktest.uk/how-many-questions-life-in-the-uk-test" />
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
              How Many Questions Are in the Life in the UK Test?
            </h1>
            <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              A complete breakdown of the test format, question types, and time limits.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">

            {/* Section 1 */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">The Test Has 24 Questions</h2>
              <p className="text-gray-600 leading-relaxed">
                The Life in the UK Test always consists of exactly <strong>24 multiple-choice questions</strong>.
                This has been the standard format since 2013 when the current version of the test was introduced.
                There are no variations — every candidate sits the same 24-question format.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-center">
                  <div className="text-3xl font-extrabold text-blue-600">24</div>
                  <div className="text-sm font-semibold text-gray-600 mt-1">Questions</div>
                </div>
                <div className="bg-purple-50 border border-purple-100 rounded-xl p-5 text-center">
                  <div className="text-3xl font-extrabold text-purple-600">45</div>
                  <div className="text-sm font-semibold text-gray-600 mt-1">Minutes</div>
                </div>
                <div className="bg-green-50 border border-green-100 rounded-xl p-5 text-center">
                  <div className="text-3xl font-extrabold text-green-600">18</div>
                  <div className="text-sm font-semibold text-gray-600 mt-1">Correct to Pass</div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">How the Questions Are Generated</h2>
              <p className="text-gray-600 leading-relaxed">
                While the test always has 24 questions, the specific questions you receive are selected randomly
                by the test system from a larger question bank. This means:
              </p>
              <ul className="mt-4 space-y-3 text-gray-600">
                {[
                  'No two test attempts are identical — you will see different questions each time.',
                  'All questions are based on the official handbook, Life in the United Kingdom: A Guide for New Residents (3rd edition).',
                  'Questions are drawn from all topic areas: history, government, culture, law and traditions.',
                  'You cannot predict which exact questions will appear, so you must know the full handbook.',
                ].map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-primary font-bold mt-0.5 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 3 */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What the Questions Look Like</h2>
              <p className="text-gray-600 leading-relaxed">
                Questions are displayed on a computer screen at the test centre. Each question has either two
                or four answer options. Most questions require you to select <strong>one correct answer</strong>.
                Occasionally a question will ask you to select <strong>two correct answers</strong> — these are
                clearly labelled.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                The language used is straightforward and accessible. You do not need specialist knowledge of
                English beyond what is expected for residency. Questions are direct and factual — they test
                whether you know the information from the handbook, not your general knowledge of the UK.
              </p>
              <div className="mt-5 bg-amber-50 border border-amber-100 rounded-xl p-5">
                <p className="text-sm text-amber-800 font-semibold mb-1">Example question format:</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Q: In what year did women get the right to vote in the United Kingdom?</strong><br />
                  A) 1902 &nbsp; B) 1918 &nbsp; C) 1928 &nbsp; D) 1945
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  (This is an illustrative example based on handbook content. Real test questions may differ.)
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Managing Your Time in the Test</h2>
              <p className="text-gray-600 leading-relaxed">
                With 45 minutes for 24 questions, you have approximately <strong>1 minute 52 seconds per
                question</strong>. Most candidates find this sufficient time, but it is important not to spend
                too long on any single question.
              </p>
              <ol className="mt-4 space-y-3 text-gray-600">
                {[
                  { n: '1', title: 'Work through questions in order', body: 'Answer the questions you are confident about first, then return to ones you are unsure about.' },
                  { n: '2', title: 'Do not leave any blank', body: 'There is no penalty for a wrong answer, so always select your best guess rather than leaving a question unanswered.' },
                  { n: '3', title: 'Review before submitting', body: 'Use the remaining time to review flagged questions. Changing an answer is allowed right up until you submit.' },
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
            <h2 className="text-xl font-bold text-gray-900 mb-2">Try a full 24-question timed mock test</h2>
            <p className="text-gray-500 mb-6 text-sm sm:text-base">
              Get comfortable with the exact format before your real test. Free, no account needed.
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

export default HowManyQuestionsPage;
