export default function Hero() {
  return (
    <section className="bg-white rounded-xl m-6 p-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl  text-gray-800">
          India’s 1st Personal Line of Credit
        </h1>
        <ul className="list-disc pl-6 text-gray-700 space-y-6">
          <li>Credit Limit up to ₹2,00,000</li>
          <li>0% interest for up to 51 days</li>
          <li>Secure Personal Loan App</li>
          <li>Revolving Line of Credit</li>
          <li>Direct Bank Transfer</li>
        </ul>
        <div className=" items-center gap-4">
            <p className="text-2xl">Download Mobile App</p>
          <div className="w-20 h-20 bg-gray-300 flex items-center justify-center">
            <img src="https://static.vivamoney.in/uploads/mb_qr_code_b270e8e5_276586c2cb.png"></img>
          </div>
          <div className="space-y-2">
            <button className="bg-black text-white px-4 py-2 rounded">
               ▶️Google Play
            </button>
            <button className="bg-black text-white px-4 py-2 rounded">
              App Store
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" bg-white-200 rounded-full flex items-center justify-center">
          <img className="w-[450px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbC98CQuS7mJNZwetL-GtEyrvMMV3IPylTKw&s"></img>
        </div>
      </div>
    </section>
  );
}

