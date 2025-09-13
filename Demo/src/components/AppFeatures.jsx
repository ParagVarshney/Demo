export default function AppFeatures() {
  const featuresLeft = [
    {
      title: "Single Credit Line, Countless Loans",
      desc: "Apply for a credit line once and access it whenever you need it",
    },
    {
      title: "Fully Digital Process",
      desc: "Complete your instant loan application and enjoy access to funds in less than 15 minutes",
    },
    {
      title: "No Collateral, No Guarantors",
      desc: "No collateral or guarantor is needed for credit line approval",
    },
  ];

  const featuresRight = [
    {
      title: "Attractive Interest Rates",
      desc: "Enjoy affordable interest rates from the Viva Money App",
    },
    {
      title: "Multiple Repayment Options",
      desc: "Repay easily with our online loan app, offering multiple repayment options",
    },
    {
      title: "Instant Fund Transfer",
      desc: "From sign-up to fund disbursement in less than 15 minutes",
    },
  ];

  return (
    <section className="px-6 py-16 bg-gray-50">
      <h2 className="text-2xl font-semibold text-purple-600 text-center mb-10">
        Features of the App
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 max-w-6xl mx-auto">
        <div className="space-y-6">
          {featuresLeft.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-lg">
                📱
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <img
            src="https://media.gettyimages.com/id/533378043/photo/calculator-app.jpg?s=612x612&w=gi&k=20&c=eSEt0HgH9AOMS8UvcwAiMiI2FT-yfCUndLHbBfjgkqs=" 
            alt="App Preview"
            className="w-56 drop-shadow-xl"
          />
        </div>

        <div className="space-y-6">
          {featuresRight.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-lg">
                📱
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
