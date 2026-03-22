import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ALL_CENTRES } from '../data/centres';

const NATIONS = ['All', 'England', 'Scotland', 'Wales', 'Northern Ireland'];

const faqs = [
  {
    q: 'How many Life in the UK test centres are there?',
    a: 'There are more than 30 approved test centres across the UK, covering all major cities and many towns in England, Scotland, Wales, and Northern Ireland. The exact number can change as new centres are added or existing ones close, so always check the official booking website for the latest list.',
  },
  {
    q: 'Can I take the test at any centre, or must I go to the nearest one?',
    a: 'You can book your test at any approved centre in the UK — you are not restricted to the one closest to your home address. Many candidates choose a centre based on convenience, travel distance, or the first available appointment date.',
  },
  {
    q: 'What ID do I need to bring to the test centre?',
    a: 'You must bring the same valid photo ID that you used when booking the test. Acceptable documents include a passport, biometric residence permit (BRP), or national identity card. Your ID must not be expired. You will not be allowed to sit the test without it.',
  },
  {
    q: 'What happens if I arrive late to the test centre?',
    a: 'If you arrive late, you may be refused entry and forfeit your fee. Centres typically require you to check in at least 30 minutes before your scheduled test time. Always plan your journey with extra time to account for traffic or public transport delays.',
  },
];

const TestCentresPage = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const [activeNation, setActiveNation] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return ALL_CENTRES.filter((c) => {
      const nationMatch = activeNation === 'All' || c.country === activeNation;
      const searchMatch =
        !q ||
        c.city.toLowerCase().includes(q) ||
        c.centre_name.toLowerCase().includes(q) ||
        c.postcode.toLowerCase().includes(q);
      return nationMatch && searchMatch;
    });
  }, [activeNation, search]);

  // Group filtered results by country for display
  const grouped = useMemo(() => {
    const order = ['England', 'Scotland', 'Wales', 'Northern Ireland'];
    return order
      .map((nation) => ({
        nation,
        centres: filtered.filter((c) => c.country === nation),
      }))
      .filter((g) => g.centres.length > 0);
  }, [filtered]);

  return (
    <>
      <Helmet>
        <title>Life in the UK Test Centres Near You (Full List + Search by City)</title>
        <meta
          name="description"
          content="Find your nearest Life in the UK test centre. Browse all official UK locations and search by city or postcode to book your test easily."
        />
        <link rel="canonical" href="https://passlifeintheuktest.uk/life-in-the-uk-test-centres" />
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
              Life in the UK Test Centres
            </h1>
            <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Find an official test centre near you, learn how to book, and know exactly what to expect on your test day.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">

            {/* Section 1 — Directory */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Find Your Nearest Test Centre</h2>
              <p className="text-gray-500 text-sm mb-5">
                Browse all official centres below. Filter by nation or search by city, centre name, or postcode.
              </p>

              {/* Search + filter controls */}
              <div className="flex flex-col gap-4 mb-8">
                <div className="relative">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by city, name or postcode…"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-gray-100 bg-gray-50/50 text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/30 focus:bg-white transition-all shadow-sm"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  {search && (
                    <button
                      onClick={() => setSearch('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <span className="text-xl leading-none">×</span>
                    </button>
                  )}
                </div>
                
                <div className="flex gap-2 flex-wrap">
                  {NATIONS.map((n) => (
                    <button
                      key={n}
                      onClick={() => setActiveNation(n)}
                      className={`px-5 py-3 rounded-xl text-base font-bold transition-all border ${
                        activeNation === n
                          ? 'bg-primary text-white border-primary shadow-md shadow-primary/20 scale-[1.02]'
                          : 'bg-white text-gray-500 border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {n === 'All' ? 'All UK' : n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results */}
              {filtered.length === 0 ? (
                <div className="text-center py-10 text-gray-500 text-sm">
                  No centres match your search. Try a different city or postcode.
                </div>
              ) : (
                <div className="space-y-6">
                  {grouped.map(({ nation, centres }) => (
                    <div key={nation}>
                      <h3 className="text-base font-bold uppercase tracking-widest text-gray-700 mb-4 flex items-center gap-2">
                        <span>{nation}</span>
                      </h3>
                      <div className="space-y-2">
                        {centres.map((c) => (
                          <div
                            key={c.centre_name}
                            className="group flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:bg-gray-50/50 hover:border-primary/20 hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="font-bold text-gray-900 text-base leading-snug group-hover:text-primary transition-colors">
                                {c.centre_name}
                              </div>
                              <div className="text-gray-600 text-base mt-2 leading-relaxed">
                                {c.address}, {c.city}, {c.postcode}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-gray-500 text-xs mt-5 leading-relaxed">
                Centre details are accurate to the best of our knowledge but may change. Always confirm your venue
                via the official booking site at{' '}
                <a 
                  href="https://www.lituktestbooking.co.uk/lituk-web/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold text-gray-600 hover:text-primary transition-colors"
                >
                  lituktestbooking.co.uk
                </a>{' '}
                before travelling.
              </p>
            </section>

            {/* Section 2 — What are test centres */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What Are Life in the UK Test Centres?</h2>
              <p className="text-gray-600 leading-relaxed">
                Life in the UK test centres are official, Government-approved venues where you take the Life in the
                UK Test in person. The test is taken on a computer at a supervised station inside the centre. You
                cannot take the test at home or online — you must attend an approved venue in person.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                Centres are run by approved providers on behalf of the UK Home Office. They are located
                across England, Scotland, Wales, and Northern Ireland, making it possible for most people to find
                a centre within a reasonable travelling distance.
              </p>
            </section>

            {/* Section 3 — How to book */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">How to Book Your Test</h2>
              <p className="text-gray-600 leading-relaxed">
                Booking your Life in the UK Test is done entirely online. You cannot walk into a centre and take
                the test without a prior booking. Follow these steps to secure your appointment:
              </p>
              <ol className="mt-4 space-y-3 text-gray-600">
                {[
                  { n: '1', title: 'Create an account', body: (
                    <>
                      Visit{' '}
                      <a 
                        href="https://www.lituktestbooking.co.uk/lituk-web/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary font-semibold hover:underline"
                      >
                        lituktestbooking.co.uk
                      </a>{' '}
                      and register with your name, email address, and a password.
                    </>
                  )},
                  { n: '2', title: 'Enter your personal details', body: 'Provide your date of birth, nationality, and the type of photo ID you will bring to the test.' },
                  { n: '3', title: 'Choose a test centre and date', body: 'Search by postcode to see available centres and select an appointment time that suits you.' },
                  { n: '4', title: 'Pay the £50 fee', body: 'Payment is made by debit or credit card. You will receive a booking confirmation email — keep this safe.' },
                  { n: '5', title: 'Attend your appointment', body: 'Arrive on time with the same photo ID you used during booking. You will not be admitted without it.' },
                ].map(({ n, title, body }) => (
                  <li key={n} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      {n}
                    </span>
                    <span>
                      <strong>{title}</strong> — {body}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="text-gray-500 text-sm mt-4">
                For a full step-by-step walkthrough, see our{' '}
                <Link to="/life-in-the-uk-test-booking" className="text-primary font-semibold hover:underline">
                  Life in the UK Test booking guide
                </Link>
                .
              </p>
            </section>

            {/* Section 4 — What happens on test day */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What Happens on Test Day?</h2>
              <p className="text-gray-600 leading-relaxed">
                Knowing what to expect can help you feel calm and confident when you arrive at the test centre.
                Here is a step-by-step overview of what the day typically looks like:
              </p>
              <div className="mt-5 space-y-3">
                {[
                  { icon: '🪪', title: 'Identity check on arrival', detail: 'A member of staff will check your photo ID against your booking. Make sure your name and details match exactly.' },
                  { icon: '📦', title: 'Store your belongings', detail: 'You will be asked to leave your phone, bag, and any notes in a secure locker or designated area. No personal items are allowed at your computer station.' },
                  { icon: '🖥️', title: 'Sit the test', detail: 'You will be taken to a computer terminal where the test will begin. You have 45 minutes to answer 24 multiple-choice questions. The questions are drawn randomly from the official handbook topics.' },
                  { icon: '📧', title: 'Receive your result by email', detail: 'After completing the test, your result will be sent to you by email. If you pass, the email will include a unique reference number which you will need when applying for Indefinite Leave to Remain (ILR) or British citizenship.' }
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
              <p className="text-gray-500 text-sm mt-4">
                To understand how your result is calculated, read our guide on the{' '}
                <Link to="/life-in-the-uk-test-pass-mark" className="text-primary font-semibold hover:underline">
                  Life in the UK Test pass mark
                </Link>
                .
              </p>
            </section>

            {/* Section 5 — Tips for passing */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Tips for Passing the Test</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Walking into the test centre well-prepared is the most important thing you can do. Here are the
                most effective ways to get ready:
              </p>
              <ol className="space-y-3 text-gray-600">
                {[
                  { n: '1', title: 'Read the official handbook cover to cover', body: 'Every question in the real test is based on the 3rd edition of Life in the United Kingdom: A Guide for New Residents. Reading it thoroughly — ideally more than once — is essential.' },
                  { n: '2', title: 'Practise with realistic mock tests', body: 'Use practice tests that mirror the format of the real exam: 24 questions, 45 minutes, multiple choice. Our free practice tests are structured exactly this way.' },
                  { n: '3', title: 'Focus on your weak areas', body: 'After each practice test, review the questions you got wrong and go back to those sections of the handbook. Targeted revision is more efficient than re-reading everything.' },
                  { n: '4', title: 'Aim to score above the pass mark consistently', body: 'The pass mark is 18 out of 24 (75%). Try to consistently score 20 or more in practice before booking your real test. This gives you a safety buffer on the day.' },
                  { n: '5', title: 'Familiarise yourself with the test format', body: 'Knowing what types of questions to expect removes uncertainty. See our guide on Life in the UK Test questions to understand the style and difficulty of the questions.' },
                ].map(({ n, title, body }) => (
                  <li key={n} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      {n}
                    </span>
                    <span>
                      <strong>{title}</strong> — {body}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="text-gray-500 text-sm mt-4">
                Explore our full set of{' '}
                <Link to="/life-in-the-uk-test-questions" className="text-primary font-semibold hover:underline">
                  Life in the UK Test questions
                </Link>{' '}
                to practise and build confidence before your test day.
              </p>
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
            <h2 className="text-xl font-bold text-gray-900 mb-2">Ready to practise before your test day?</h2>
            <p className="text-gray-500 mb-6 text-sm sm:text-base">
              Use our free timed mock exams to build confidence and make sure you pass first time.
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

export default TestCentresPage;
