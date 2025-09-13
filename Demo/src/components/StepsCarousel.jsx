import { useState } from "react";

export default function StepsCarousel() {
  const steps = [
    {
      title: "Register on the app",
      desc: "Sign up quickly with your mobile number and basic details.",
      img: "https://static.vivamoney.in/uploads/slide_1_img_171b9c1821.png",
    },
    {
      title: "KYC Verification & Digital Contract Signing",
      desc: "Just a quick video call, then sign the loan agreement digitally, with zero paperwork.",
      img: "https://static.vivamoney.in/uploads/slide_2_img_ccb5e5882d.png",
    },
    {
      title: "Get instant approval",
      desc: "Receive loan approval in less than 15 minutes.",
      img: "https://static.vivamoney.in/uploads/slide_4_img_369ba7d5b4.png",
    },
    {
      title: "Start withdrawing",
      desc: "Withdraw funds anytime into your bank account.",
      img: "https://static.vivamoney.in/uploads/slide_5_img_62b9777635.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="px-6 py-12 relative">
      <h2 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        Steps to Apply for Loan
      </h2>

      <div className="bg-white rounded-2xl shadow p-8 flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto relative">
        
        <div className="w-40 h-80 bg-black rounded-3xl p-2 flex items-center justify-center shadow-lg">
          <img
            src={steps[current].img}
            alt={steps[current].title}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        
        <div className="text-center md:text-left max-w-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {steps[current].title}
          </h3>
          <p className="text-gray-600">{steps[current].desc}</p>
        </div>

        
        <button
          onClick={prevSlide}
          className="absolute left-2 md:-left-10 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-purple-500 hover:text-white p-3 rounded-full shadow transition"
        >
          ◀
        </button>

        
        <button
          onClick={nextSlide}
          className="absolute right-2 md:-right-10 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-purple-500 hover:text-white p-3 rounded-full shadow transition"
        >
          ▶
        </button>
      </div>

      
      <div className="flex justify-center gap-3 mt-6">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              current === i ? "bg-purple-600 scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
