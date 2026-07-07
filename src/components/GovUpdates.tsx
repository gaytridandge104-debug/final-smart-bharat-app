const updates = [
  { badge: "Aadhaar", date: "July 2026", title: "New e-KYC service launched for faster verification", summary: "Citizens can now complete Aadhaar e-KYC in under 2 minutes through the app.", emoji: "🪪" },
  { badge: "Health", date: "July 2026", title: "Ayushman Bharat coverage expanded to more districts", summary: "5 crore additional families now eligible for free health coverage.", emoji: "🏥" },
  { badge: "Agriculture", date: "June 2026", title: "PM Kisan 18th installment disbursed", summary: "₹6,000 credited directly to over 9 crore farmer accounts.", emoji: "🌾" },
];

function GovUpdates() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-12 flex-wrap gap-4">
        <div>
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
            GOVERNMENT UPDATES
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Stay Informed, <span className="text-blue-600">Stay Ahead</span>
          </h2>
        </div>
        <button className="border border-blue-300 text-blue-700 font-semibold px-5 py-2.5 rounded-full text-sm">
          📅 View All Updates
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {updates.map((u) => (
          <div key={u.title} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-blue-50 flex items-center justify-center text-5xl">{u.emoji}</div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3 text-xs">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">{u.badge}</span>
                <span className="text-gray-400">{u.date}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{u.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{u.summary}</p>
              <a href="#" className="text-blue-600 text-sm font-semibold">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GovUpdates;