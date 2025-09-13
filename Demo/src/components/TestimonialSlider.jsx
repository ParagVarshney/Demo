import React, { useState } from "react";

const testimonials = [
  {
    name: "Vivek Sai Redapangi",
    location: "Karnataka",
    image: "https://static.vivamoney.in/uploads/avatar_img_2_75372128a6.webp",
    text: "The Grace Period feature of Viva Money acts as a helping hand as this instant loan app gives me a free hand to spend..."
  },
  {
    name: "Shanu Bhardwaj",
    location: "Maharashtra",
    image: "https://static.vivamoney.in/uploads/avatar_img_5_29f9dc1e86.webp",
    text: "It’s almost like borrowing money from your parents, you know? It’s fast and you can really count on them..."
  },
  {
    name: "Ankit Shankar",
    location: "Gujarat",
    image: "https://static.vivamoney.in/uploads/avatar_img_1_376e422812.webp",
    text: "I think it took me less than 15 minutes to get my account and start withdrawing money..."
  },
  {
    name: "Priya Mehta",
    location: "Delhi",
    image: "https://static.vivamoney.in/uploads/avatar_img_4_5644889dac.webp",
    text: "This app has really helped me during emergencies. Highly recommended for everyone."
  },
  {
    name: "Rohit Sharma",
    location: "Mumbai",
    image: "https://static.vivamoney.in/uploads/avatar_img_3_7bc52f09f9.webp",
    text: "Easy to use, instant approvals, and great customer support. Couldn’t ask for more!"
  }
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current < testimonials.length - 3) {
      setCurrent((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-purple-600">
        Why People Love Viva Money
      </h2>

      <div className="flex items-center">
        
        <button
          onClick={prevSlide}
          className="p-2 bg-gray-100 rounded-full shadow mx-2 hover:bg-gray-200 disabled:opacity-50"
          disabled={current === 0}
        >
          ◀
        </button>

        
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
          >
            {testimonials.map((t, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-4">
                <div className="bg-white shadow-md rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{t.name}</h3>
                      <p className="text-gray-500 text-sm">{t.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <button
          onClick={nextSlide}
          className="p-2 bg-gray-100 rounded-full shadow mx-2 hover:bg-gray-200 disabled:opacity-50"
          disabled={current >= testimonials.length - 3}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
