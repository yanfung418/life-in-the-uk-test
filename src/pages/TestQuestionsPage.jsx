import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const faqs = [
  {
    q: 'Can I see official practice questions before the test?',
    a: 'The Home Office does not publish the official question bank. However, all questions are based on the official handbook, Life in the United Kingdom: A Guide for New Residents (3rd edition). Practising with mock tests based on this handbook is the best preparation available.',
  },
  {
    q: 'Do the same questions repeat across test attempts?',
    a: 'Questions are drawn from a set bank, so it is possible to see similar or identical questions on retakes. However, you cannot rely on memorising specific questions — you must understand and know the full content of the handbook.',
  },
  {
    q: 'Are there trick questions in the test?',
    a: 'No. The Life in the UK Test is straightforward and does not use trick questions or deliberate misdirection. All questions are factual and based directly on the official handbook content. If you know the material well, the questions will be clear.',
  },
  {
    q: 'Can I review my answers before submitting?',
    a: 'Yes. The test software allows you to move freely between all 24 questions before you submit. You can flag questions to revisit, change your answers, and review everything within the 45-minute time limit.',
  },
];

const exampleQuestions = [
  {
    topic: 'British History',
    question: 'In which year did the First World War begin?',
    options: ['1910', '1912', '1914', '1916'],
    correct: '1914',
  },
  {
    topic: 'Government',
    question: 'What is the name of the UK\'s upper house of Parliament?',
    options: ['House of Lords', 'House of Commons', 'Senate', 'House of Representatives'],
    correct: 'House of Lords',
  },
  {
    topic: 'Culture & Society',
    question: 'Which flower is the national symbol of England?',
    options: ['Daffodil', 'Thistle', 'Shamrock', 'Tudor rose'],
    correct: 'Tudor rose',
  },
];

const TestQuestionsPage = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <>
      <Helmet>
        <title>Life in the UK Test Questions: Examples and How the Test Works</title>
        <meta
          name="description"
          content="See example Life in the UK Test questions, understand the question format, and learn which topics are tested. Prepare effectively with practice questions."
        />
        <link rel="canonical" href="https://passlifeintheuktest.uk/life-in-the-uk-test-questions" />
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
              Life in the UK Test Questions
            </h1>
            <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Examples of the question format, topics covered, and how to practise effectively.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">

            {/* Section 1 */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What Do the Questions Look Like?</h2>
              <p className="text-gray-600 leading-relaxed">
                All 24 questions in the Life in the UK Test are <strong>multiple-choice</strong>. Each question
                presents either two or four answer options. The vast majority of questions have four options with
                one correct answer. Occasionally, a question will ask you to select two correct answers — this
                will be clearly stated in the question.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                Questions are factual and direct. They test your recall of specific information from the official
                handbook, <em>Life in the United Kingdom: A Guide for New Residents</em> (3rd edition). The
                language used is plain and accessible English.
              </p>
            </section>

            {/* Section 2 — Example questions */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Example Questions</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                The following are illustrative examples based on the official handbook content. They show the
                style and difficulty level of real test questions:
              </p>
              <div className="space-y-5">
                {exampleQuestions.map(({ topic, question, options, correct }) => (
                  <div key={topic} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                    <div className="text-xs font-bold text-primary uppercase tracking-wide mb-2">{topic}</div>
                    <p className="font-semibold text-gray-900 mb-3">{question}</p>
                    <ul className="space-y-1.5">
                      {options.map((opt) => (
                        <li
                          key={opt}
                          className={`text-sm px-3 py-2 rounded-lg border ${
                            opt === correct
                              ? 'bg-green-50 border-green-200 text-green-800 font-semibold'
                              : 'bg-white border-gray-200 text-gray-600'
                          }`}
                        >
                          {opt === correct ? '✓ ' : ''}{opt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">
                These are example questions for illustration only. All real questions are based on the official handbook content.
              </p>
            </section>

            {/* Section 3 */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Topics the Questions Cover</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Questions are drawn from all chapters of the official handbook. The five main topic areas are:
              </p>
              <div className="space-y-3">
                {[
                  { icon: '🏰', topic: 'British History', detail: 'Key events, monarchs, wars, the development of Parliament and democracy, the British Empire and Commonwealth.' },
                  { icon: '🏛️', topic: 'Government & Politics', detail: 'How Parliament and elections work, the roles of the Prime Minister and the monarch, devolved governments, local councils.' },
                  { icon: '🎭', topic: 'Culture & Society', detail: 'Sports, arts, music, national holidays, traditions, the BBC, and well-known British figures.' },
                  { icon: '⚖️', topic: 'Law & Rights', detail: 'The legal system, fundamental rights and responsibilities of residents, housing law, and employment rights.' },
                  { icon: '🍀', topic: 'Traditions & Values', detail: 'British values such as democracy, the rule of law, individual liberty, and mutual respect and tolerance.' },
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

            {/* Section 4 */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">How to Study for the Questions</h2>
              <p className="text-gray-600 leading-relaxed">
                Since all test questions come directly from the official handbook, your study plan should be
                centred on that book. Here is an effective approach:
              </p>
              <ol className="mt-4 space-y-3 text-gray-600">
                {[
                  { n: '1', title: 'Read the handbook cover to cover', body: 'Do not skip any chapters. Questions can appear from any section, including parts that may seem minor or easy to overlook.' },
                  { n: '2', title: 'Take notes on dates and facts', body: 'The test often asks about specific years, names, and numbers. Make flashcards or notes for facts that are easy to confuse, such as dates of key historical events.' },
                  { n: '3', title: 'Practise with realistic mock tests', body: 'Taking full 24-question timed mock tests replicates the real exam experience. Review your wrong answers after each test and revisit the relevant handbook sections.' },
                  { n: '4', title: 'Repeat until you score consistently above 75%', body: 'Once you are consistently scoring 18 or more out of 24 in practice, you are likely ready for the real test.' },
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
            <h2 className="text-xl font-bold text-gray-900 mb-2">Start practising with real mock questions</h2>
            <p className="text-gray-500 mb-6 text-sm sm:text-base">
              Our mock exams are based on the same handbook content as the real test. Free, no sign-up needed.
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

export default TestQuestionsPage;
