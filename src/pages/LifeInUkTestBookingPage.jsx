import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const faqs = [
  {
    q: 'How far in advance should I book the Life in the UK Test?',
    a: 'It depends on your location and how quickly you need to take the test. In large cities such as London, Manchester, and Birmingham, appointments are often available within 1–2 weeks. In smaller towns or rural areas, availability may be more limited and you may need to book 3–4 weeks in advance. If you have a visa deadline approaching, book as early as possible.',
  },
  {
    q: 'Can I book the test online?',
    a: 'Yes. All bookings are made online through the official booking website at lituktestbooking.co.uk. You will need to create an account, select a test centre, choose a date and time, and pay the £50 fee. You cannot book by phone or in person at the test centre.',
  },
  {
    q: 'What happens if I need to cancel or reschedule?',
    a: 'You can cancel or reschedule your test booking through your official account. If you cancel more than 3 working days before your test, you should receive a full refund. Cancelling within 3 working days, or failing to attend without notice, usually means you forfeit the £50 fee. Always check the current cancellation terms when you book.',
  },
  {
    q: 'Can I book at any test centre in the UK?',
    a: 'Yes. You can book at any approved test centre in England, Wales, Scotland, or Northern Ireland, regardless of where you live. There is no requirement to attend a centre near your home address. If availability is low near you, consider checking centres in nearby towns or cities.',
  },
  {
    q: 'What ID do I need to bring on the day?',
    a: 'You must bring a valid photo ID that matches the name on your booking. Accepted forms of ID include a passport, biometric residence permit (BRP), national identity card issued by an EU or EEA country, or a UK driving licence. You will not be allowed to sit the test without acceptable ID.',
  },
];

const steps = [
  {
    n: '1',
    title: 'Create an account',
    body: (
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
        and register with your name, email address, and a password. This account is used to book and manage your test appointment.
      </>
    ),
  },
  {
    n: '2',
    title: 'Have your documents ready',
    body: 'Before booking, make sure you have your passport or biometric residence permit (BRP) to hand, along with your personal details. You will need these to complete the booking form.',
  },
  {
    n: '3',
    title: 'Find a test centre',
    body: 'Search for approved test centres on the booking website. You can filter by postcode or location. Test centres are located across England, Wales, Scotland, and Northern Ireland — there are more than 30 approved centres available.',
  },
  {
    n: '4',
    title: 'Choose a date and time',
    body: 'Select an available appointment slot at your chosen test centre. Slots are displayed as a calendar. If your preferred centre has no availability, try nearby centres or check back later as cancellations can free up slots.',
  },
  {
    n: '5',
    title: 'Pay the £50 fee',
    body: 'Pay the non-refundable £50 test fee by debit or credit card. Payment is processed securely online. Once payment is confirmed, your appointment is booked.',
  },
  {
    n: '6',
    title: 'Save your confirmation',
    body: 'You will receive a confirmation email with your booking reference number, test centre address, and appointment time. Save this and bring it with you on the day.',
  },
];

const requirements = [
  {
    icon: '🪪',
    title: 'Valid photo ID',
    detail: 'Passport, BRP, EEA national identity card, or UK driving licence. The name must match your booking exactly.',
  },
  {
    icon: '📋',
    title: 'Eligible immigration status',
    detail: 'You must be applying for ILR or British citizenship by naturalisation. Check your eligibility before booking.',
  },
  {
    icon: '📖',
    title: 'Adequate preparation',
    detail: 'While not a technical requirement to book, you should be fully prepared. You pay £50 regardless of your result.',
  },
  {
    icon: '💳',
    title: 'Payment method',
    detail: 'A valid debit or credit card to pay the £50 booking fee online.',
  },
];

const LifeInUkTestBookingPage = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <>
      <Helmet>
        <title>Life in the UK Test Booking: How to Book Your Test in 2026</title>
        <meta
          name="description"
          content="Learn how to book the Life in the UK Test step by step. Find out what documents you need, how much it costs, and tips to get an appointment quickly."
        />
        <link rel="canonical" href="https://passlifeintheuktest.uk/life-in-the-uk-test-booking" />
      </Helmet>

      <div className="min-h-screen bg-gray-50/50 pb-20">

        {/* Header */}
        <header className="bg-white border-b border-gray-100 py-10 mb-10 sm:py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <Link
              to="/"
              className="mb-4 text-sm font-semibold text-primary hover:text-primary-light flex items-center justify-center gap-2 mx-auto transition-colors"
            >
              ← Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mt-2">
              How to Book the Life in the UK Test
            </h1>
            <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              A complete guide to booking your Life in the UK Test appointment — from finding a centre to what to expect on the day.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">

            {/* Section 1 — Overview */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">The Booking Process: An Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                The Life in the UK Test must be booked online through the official booking portal
                (lituktestbooking.co.uk). All approved test centres across England, Wales, Scotland, and Northern Ireland
                are listed on the platform. You can choose any centre regardless of where you live —
                there is no requirement to attend a centre in your home area.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                The entire booking process can be completed in around 10 minutes once you have your
                account and your documents ready. After booking, you will receive an email confirmation with
                your appointment details. There are currently over 30 approved test centres in the UK, so
                most candidates can find a convenient location.
              </p>
              <div className="mt-5 bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-sm text-blue-800">
                  <strong>Important:</strong> The test can only be booked through the official
                  booking website. Be cautious of third-party websites that charge additional fees
                  or claim to offer faster booking — these are not necessary.
                </p>
              </div>
            </section>

            {/* Section 2 — Step by step */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-5">Step-by-Step: How to Book</h2>
              <ol className="space-y-4">
                {steps.map(({ n, title, body }) => (
                  <li key={n} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-extrabold flex items-center justify-center text-sm">
                      {n}
                    </span>
                    <div className="pt-1">
                      <h3 className="font-semibold text-gray-900">{title}</h3>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Section 3 — Requirements */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What You Need Before Booking</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Make sure you have the following ready before you start the booking process:
              </p>
              <div className="space-y-3">
                {requirements.map(({ icon, title, detail }) => (
                  <div key={title} className="flex gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <span className="text-2xl flex-shrink-0">{icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900">{title}</div>
                      <div className="text-sm text-gray-500 mt-0.5">{detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 — Cost */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">How Much Does Booking Cost?</h2>
              <p className="text-gray-600 leading-relaxed">
                The test fee is <strong>£50 per attempt</strong>, paid at the time of booking. This fee
                is set by the UK Home Office and is the same at all approved test centres. There are no
                additional booking or administration fees.
              </p>
              <div className="mt-5 flex justify-center">
                <div className="bg-green-50 border border-green-200 rounded-2xl px-12 py-6 text-center">
                  <div className="text-4xl font-extrabold text-green-600">£50</div>
                  <div className="text-sm font-semibold text-gray-600 mt-1">per attempt — paid at booking</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mt-5">
                If you fail the test or do not attend, you <strong>cannot transfer the fee</strong> to a
                future attempt — you will need to pay £50 again when you rebook.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                Because the fee is non-refundable in most circumstances, it is strongly recommended to
                practise with multiple mock tests and consistently score above 75% before booking your
                real appointment.
              </p>
            </section>

            {/* Section 5 — After booking */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What Happens After You Book?</h2>
              <p className="text-gray-600 leading-relaxed">
                Once your booking is confirmed, you will receive an email with:
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                {[
                  'Your booking reference number',
                  'The full address of your test centre',
                  'Your appointment date and time',
                  'Instructions on what to bring on the day',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary font-bold mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>On the day of your test</strong>, arrive at least 30 minutes before your
                scheduled time. Bring your valid photo ID — if your ID does not match your booking name
                exactly, you may be refused entry and forfeit your fee.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                The test itself takes up to 45 minutes. You will receive your pass or fail result by
                email shortly after completing the test. If you pass, the email will include a unique 
                reference number which you will need for your Indefinite Leave to Remain (ILR) or 
                British citizenship application.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                If you fail, you can rebook the test as many times as you need. You’ll have to pay each time.
              </p>
            </section>

            {/* Section 6 — Tips */}
            <section className="px-6 py-8 sm:px-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Tips to Secure a Test Date Quickly</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Test centre availability varies significantly by location and time of year. Use these
                strategies to get an earlier appointment:
              </p>
              <div className="space-y-3">
                {[
                  {
                    icon: '🔄',
                    title: 'Check multiple centres',
                    detail: 'Search centres in neighbouring towns or cities. A centre 20 miles away may have slots available next week when your local centre shows nothing for a month.',
                  },
                  {
                    icon: '🕐',
                    title: 'Check early in the morning',
                    detail: 'Cancellations are processed overnight and early in the morning. Checking the booking site at 8–9am often reveals newly freed slots.',
                  },
                  {
                    icon: '📅',
                    title: 'Be flexible with days and times',
                    detail: 'Weekday morning slots are often less popular. If you can take time off work, you will likely find earlier availability than weekend slots.',
                  },
                  {
                    icon: '⚡',
                    title: 'Book as soon as you are ready',
                    detail: 'Do not wait until you feel 100% ready to start looking. Check availability early so you know how much time you have, and book once you are consistently passing mock tests.',
                  },
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
            <h2 className="text-xl font-bold text-gray-900 mb-2">Not ready to book yet? Practise first.</h2>
            <p className="text-gray-500 mb-6 text-sm sm:text-base">
              Make sure you consistently pass mock tests before spending £50 on the real thing.
              Our free practice exams replicate the real test format.
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

export default LifeInUkTestBookingPage;
