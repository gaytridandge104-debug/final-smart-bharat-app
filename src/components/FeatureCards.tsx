const features = [
  { icon: "🤖", title: "AI Assistant", desc: "Get instant answers about any government scheme, form, or procedure in plain language — available 24/7.", color: "bg-blue-100" },
  { icon: "⚠️", title: "Report Public Issue", desc: "Report potholes, broken streetlights, garbage, or civic issues directly to authorities with photos and location.", color: "bg-red-100" },
  { icon: "🏛️", title: "Government Services", desc: "Access 500+ government services — apply, track, and manage from Aadhaar to passport renewals in one place.", color: "bg-green-100" },
  { icon: "🎯", title: "Complaint Tracking", desc: "Follow your complaints in real-time with AI-predicted resolution timelines and escalation alerts.", color: "bg-purple-100" },
];

function FeatureCards() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
          CORE FEATURES
        </span>
        <h2 className="text-4xl font-extrabold text-gray-900">
          Everything you need, <span className="text-blue-600">all in one place</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center text-2xl mb-4`}>
              {f.icon}
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{f.desc}</p>
            <a href="#" className="text-blue-600 text-sm font-semibold">Learn more →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureCards;