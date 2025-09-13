import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    { q: "What is Viva Money?", a: "Viva Money is a financial platform offering credit line services." },
    { q: "Are you a Bank or an NBFC?", a: "We are a financial services provider partnering with NBFCs." },
    { q: "What products does Viva Money offer?", a: "We offer personal credit lines, instant loans, and flexible repayment solutions." },
    { q: "What is Viva Money’s Line of Credit?", a: "A credit line is a flexible borrowing limit that you can use as needed." },
    { q: "How is a Credit Line different from a Personal Loan?", a: "With a credit line, you borrow only what you need and pay interest only on that amount." },
    { q: "How can I apply for the Credit Line?", a: "You can apply through our website or mobile app with a few simple steps." },
    { q: "What documents are required to apply?", a: "You will typically need KYC documents like Aadhaar, PAN, and income proof." },
    { q: "How long does approval take?", a: "Most applications are approved within minutes, subject to eligibility checks." },
    { q: "Is my data safe with Viva Money?", a: "Yes, we use advanced encryption and comply with RBI guidelines for data protection." },
    { q: "Do I need a good credit score?", a: "A decent credit score helps, but we evaluate multiple parameters before approval." },
    { q: "What is the minimum and maximum loan amount?", a: "You can borrow as low as ₹5,000 up to ₹5,00,000 depending on eligibility." },
    { q: "What is the repayment tenure?", a: "You can choose flexible repayment tenures ranging from 3 months to 36 months." },
    { q: "Can I prepay my loan?", a: "Yes, prepayment is allowed. Some charges may apply as per policy." },
    { q: "What is the interest rate?", a: "Interest rates are competitive and vary based on your profile." },
    { q: "Are there any hidden charges?", a: "No, all fees and charges are transparently shown before you proceed." },
    { q: "Can I use the loan for business purposes?", a: "Currently, our credit line is meant for personal use only." },
    { q: "What happens if I miss a payment?", a: "Late payment penalties and credit score impact may apply." },
    { q: "Can I increase my credit limit later?", a: "Yes, you can request a credit limit increase after regular usage." },
    { q: "Is there a mobile app available?", a: "Yes, Viva Money has apps on both Android and iOS for easy access." },
    { q: "Do you provide EMI facilities?", a: "Yes, repayments can be done in easy monthly installments." },
    { q: "Is Viva Money available in all cities?", a: "Our services are expanding and currently available in major Indian cities." },
    { q: "Do I need a salary account?", a: "Having a salary account helps but is not mandatory." },
    { q: "Can self-employed individuals apply?", a: "Yes, self-employed professionals can also apply with valid proof of income." },
    { q: "Is there customer support available?", a: "Yes, you can reach out to us via chat, email, or phone support." },
    { q: "How do I close my Viva Money account?", a: "Once all dues are cleared, you can request account closure through our support." }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-2">
        {visibleFaqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm"
          >
            <button
              className="w-full flex justify-between items-center p-3 text-left font-medium"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              {faq.q}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="p-3 text-gray-600">{faq.a}</div>
            )}
          </div>
        ))}
      </div>

      {faqs.length > 5 && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-purple-600 font-semibold hover:underline"
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQ;

