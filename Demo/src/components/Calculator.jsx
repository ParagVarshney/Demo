import { useState } from "react";

export default function Calculator() {
  const [credit, setCredit] = useState(25000);
  const [months, setMonths] = useState(5);

  const fee = 1771;
  const totalDue = credit + fee;
  const firstEmi = Math.round((credit + fee) / months + 1800);
  const nextEmi = Math.round((credit + fee) / months);

  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text text-transparent">
        Personal Loan EMI Calculator
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-white rounded-2xl shadow p-6 space-y-6">
          
          <div>
            <label className="block text-gray-600 mb-2">
              Choose your credit limit
            </label>
            <div className="text-xl font-semibold mb-2">₹{credit.toLocaleString()}</div>
            <input
              type="range"
              min="5000"
              max="200000"
              step="1000"
              value={credit}
              onChange={(e) => setCredit(Number(e.target.value))}
              className="w-full accent-purple-600"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>₹5,000</span>
              <span>₹2,00,000</span>
            </div>
          </div>

          
          <div>
            <label className="block text-gray-600 mb-2">Choose a loan term</label>
            <div className="flex gap-3">
              {[5, 10, 20].map((m) => (
                <button
                  key={m}
                  onClick={() => setMonths(m)}
                  className={`px-5 py-2 rounded-full font-medium transition ${
                    months === m
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {m} months
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              This loan term will be valid if you do not repay the amount before
              the end of the Grace Period. You can always change this later.
            </p>
          </div>
        </div>

        
        <div className="flex flex-col gap-6">
          
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Repayment within Grace Period
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Settle the full amount within the Grace Period up to 51 days and pay 0 interest
            </p>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              ₹{totalDue.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">up to 20 October 2025</div>
            <div className="text-xs text-gray-400 mt-2">
              The payment includes fees of ₹{fee.toLocaleString()}
            </div>
          </div>

          <div className="text-center font-medium text-gray-500">OR</div>

          
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              EMI Repayment
            </h3>
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">First EMI:</p>
                <p className="text-2xl font-bold text-gray-900">
                  ₹{firstEmi.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">up to 31 October 2025</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Next EMIs:</p>
                <p className="text-2xl font-bold text-gray-900">
                  ₹{nextEmi.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">last day of each month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
