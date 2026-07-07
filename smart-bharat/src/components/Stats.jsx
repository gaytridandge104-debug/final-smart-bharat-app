const stats = [
  { value: "1,00,000+", label: "Citizens Assisted", sub: "Across 28 states and 8 UTs", color: "text-white" },
  { value: "5,000+", label: "Complaints Resolved", sub: "Avg. resolution in 4.2 days", color: "text-green-300" },
  { value: "500+", label: "Government Services", sub: "All central & state schemes", color: "text-purple-300" },
  { value: "24/7", label: "AI Support", sub: "Always on, never offline", color: "text-orange-300" },
];

function Stats() {
  return (
    <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-20 px-6 text-white">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="inline-block border border-white/30 text-xs font-medium px-3 py-1 rounded-full mb-4">
          OUR IMPACT
        </span>
        <h2 className="text-4xl font-extrabold mb-4">
          Transforming Governance, One Citizen at a Time
        </h2>
        <p className="text-blue-100">
          Real numbers, real impact. Smart Bharat is already changing lives across India.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
            <div className={`text-3xl font-extrabold mb-1 ${s.color}`}>{s.value}</div>
            <div className="font-semibold mb-1">{s.label}</div>
            <div className="text-xs text-blue-200">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;