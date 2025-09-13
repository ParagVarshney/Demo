export default function FeaturesRow() {
  const features = [
    {
      icon: "https://static.vivamoney.in/uploads/advantage_1_img_be3bfa04ad.svg",
      title: "0% Interest Rate",
      desc: "If repaid within the Grace Period, up to 51 days",
    },
    {
      icon: "https://static.vivamoney.in/uploads/advantage_2_img_5f48d39784.svg",
      title: "Credit Line with EMI",
      desc: "Withdraw & Repay in easy EMI of 5-20 months",
    },
    {
      icon: "https://static.vivamoney.in/uploads/advantage_3_img_115d752750.svg",
      title: "Lightning-Fast Approvals",
      desc: "Get approval in less than 15 minutes",
    },
    {
      icon: "https://static.vivamoney.in/uploads/advantage_4_img_a10b5cb81e.svg",
      title: "Zero Paper",
      desc: "100% Digital Processes with no paperwork",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 py-10">
      {features.map((f, i) => (
        <div
          key={i}
          className="flex flex-col items-start p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
        >
          {/* Icon Box */}
          <div className="mb-4 p-3 bg-gray-100 rounded-xl flex items-center justify-center">
            <img src={f.icon} alt={f.title} className="w-8 h-8" />
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>

          {/* Description */}
          <p className="text-sm text-gray-600">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
