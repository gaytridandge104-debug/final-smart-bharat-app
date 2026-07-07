import { useState } from "react";

const updates = [
  {
    badge: "Aadhaar",
    date: "July 2026",
    title: "New e-KYC service launched for faster verification",
    summary: "Citizens can now complete Aadhaar e-KYC in under 2 minutes through the app.",
    detail: "The new flow helps citizens verify identity faster before applying for services that need Aadhaar-based confirmation. Keep your Aadhaar-linked mobile number active for OTP verification.",
    emoji: "\u{1faaa}",
  },
  {
    badge: "Health",
    date: "July 2026",
    title: "Ayushman Bharat coverage expanded to more districts",
    summary: "5 crore additional families now eligible for free health coverage.",
    detail: "Eligible citizens can check coverage, complete e-KYC, and use the Ayushman card for cashless treatment at empanelled hospitals.",
    emoji: "\u{1f3e5}",
  },
  {
    badge: "Agriculture",
    date: "June 2026",
    title: "PM Kisan installment disbursed",
    summary: "Rs 6,000 annual support continues to be credited directly to eligible farmer accounts.",
    detail: "Farmers should confirm Aadhaar seeding, land record verification, and bank details to avoid payment delays.",
    emoji: "\u{1f33e}",
  },
];

function UpdateModal({ update, updatesList, onClose }) {
  if (!update && !updatesList) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between mb-5">
          <h3 className="text-xl font-bold text-gray-900">{update ? update.title : "All Government Updates"}</h3>
          <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none" aria-label="Close updates">
            {"\u2715"}
          </button>
        </div>

        {update ? (
          <div>
            <div className="h-28 bg-blue-50 rounded-xl flex items-center justify-center text-5xl mb-5">{update.emoji}</div>
            <div className="flex items-center gap-2 mb-3 text-xs">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">{update.badge}</span>
              <span className="text-gray-400">{update.date}</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">{update.summary}</p>
            <p className="text-gray-700 text-sm">{update.detail}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {updatesList.map((item) => (
              <div key={item.title} className="border border-gray-100 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2 text-xs">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">{item.badge}</span>
                  <span className="text-gray-400">{item.date}</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.summary}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function GovUpdates() {
  const [selectedUpdate, setSelectedUpdate] = useState(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="updates" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-12 flex-wrap gap-4">
        <div>
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
            GOVERNMENT UPDATES
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Stay Informed, <span className="text-blue-600">Stay Ahead</span>
          </h2>
        </div>
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="border border-blue-300 text-blue-700 font-semibold px-5 py-2.5 rounded-full text-sm"
        >
          {"\u{1f4c5}"} View All Updates
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
              <button type="button" onClick={() => setSelectedUpdate(u)} className="text-blue-600 text-sm font-semibold">
                Read More {"\u2192"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <UpdateModal update={selectedUpdate} onClose={() => setSelectedUpdate(null)} />
      {showAll && <UpdateModal updatesList={updates} onClose={() => setShowAll(false)} />}
    </section>
  );
}

export default GovUpdates;
