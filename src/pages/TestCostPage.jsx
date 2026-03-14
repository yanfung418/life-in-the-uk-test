import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const faqs = [
  {
    q: 'Is the £50 test fee refundable if I cancel?',
    a: 'You may be able to reschedule or cancel your test booking and receive a refund if you give sufficient notice — typically more than 3 working days before your appointment. Cancelling within 3 working days or not attending without notice usually means you forfeit the fee. Always check the cancellation policy of your specific test centre at the time of booking.',
  },
  {
    q: 'Can the test fee be waived?',
    a: 'No. There are no fee waivers available for the Life in the UK Test. All candidates, regardless of income or circumstances, are required to pay the £50 fee for each attempt.',
  },
  {
    q: 'Is the fee the same at all test centres?',
    a: 'Yes. The test fee is set by the Home Office and is £50 at all approved test centres throughout the UK.',
  },
  {
    q: 'Do I pay the full fee again if I fail and retake?',
    a: 'Yes. Each attempt requires a separate payment of £50. There are no discounts for retakes. This is one of the strongest reasons to prepare thoroughly before your first attempt.',
  },
];

const TestCostPage = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <>
      <Helmet>
        <title>Life in the UK Test Cost: How Much Does the Test Cost in 2026?</title>
        <meta
          name="description"
          content="The Life in the UK Test costs £50 per attempt in 2026. Learn what's included, the cancellation policy, and how to avoid paying more than once."
        />
        <link rel="canonical" href="https://passlifeintheuktest.uk/life-in-the-uk-test-cost" />
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
              Life in the UK Test Cost
            </h1>
            <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              How much does the Life in the UK Test cost in 2026, and what does the fee cover?
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">

            {/* Section 1 */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">The Test Fee is £50 Per Attempt</h2>
              <p className="text-gray-600 leading-relaxed">
                The Life in the UK Test costs <strong>£50 per attempt</strong>. The fee must be paid
                at the time of booking, and no discounts or exemptions apply.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="bg-green-50 border border-green-200 rounded-2xl px-12 py-8 text-center">
                  <div className="text-5xl font-extrabold text-green-600">£50</div>
                  <div className="text-sm font-semibold text-gray-600 mt-2">Per attempt (2026)</div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What Does the Fee Include?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The £50 fee covers everything associated with taking the test at an approved centre:
              </p>
              <div className="space-y-3">
                {[
                  { icon: '🖥️', title: 'Test session', detail: 'A supervised 45-minute test session at an approved centre with an official terminal.' },
                  { icon: '�', title: 'Result by email', detail: 'After completing the test, your result will be sent to you by email. Make sure to check your inbox (and spam folder) for the official notification.' },
                  { icon: '🆔', title: 'Unique Reference Number', detail: 'If you pass, the email will include a reference number you will need for your settlement or citizenship application.' }
                ].map(({ icon, title, detail }) => (
                  <div key={title} className="flex gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <span className="text-2xl flex-shrink-0">{icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900">{title}</div>
                      <div className="text-sm text-gray-500 mt-0.5">{detail}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-5">
                <p className="text-sm text-blue-800 leading-relaxed">
                  <strong>Important:</strong> On the day of your test, arrive at least <strong>30 minutes</strong> before 
                  your scheduled time. Bring your valid photo ID — if your ID does not match your booking name 
                  exactly, you may be refused entry and forfeit your fee.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">The Cost of Retaking the Test</h2>
              <p className="text-gray-600 leading-relaxed">
                If you fail the Life in the UK Test, you can rebook the test as many times as you need. 
                You will have to pay the full £50 fee for each attempt.
              </p>
            </section>

            {/* Section 4 */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">How to Avoid Paying More Than Once</h2>
              <p className="text-gray-600 leading-relaxed">
                The best way to minimise cost is to pass on your first attempt. Candidates who prepare
                thoroughly before booking their test are significantly more likely to pass first time.
              </p>
              <ol className="mt-4 space-y-3 text-gray-600">
                {[
                  { n: '1', title: 'Take multiple practice tests', body: 'Consistently scoring 18+ out of 24 in practice tests before your real test date is a strong indicator that you are ready.' },
                  { n: '2', title: 'Read the official handbook', body: 'All test questions come from the 3rd edition handbook. It is a good idea to read and understand the entire book before booking your test, as every question in the exam comes from its topics.' },
                  { n: '3', title: 'Book when you are confident', body: 'There is no requirement to book your test by a specific date unless your visa deadline is approaching. Take the time you need to prepare properly.' },
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
            <h2 className="text-xl font-bold text-gray-900 mb-2">Prepare to pass first time — for free</h2>
            <p className="text-gray-500 mb-6 text-sm sm:text-base">
              Use our free mock exams to practise before spending £50 on your real test.
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

export default TestCostPage;
