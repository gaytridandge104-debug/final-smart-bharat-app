const services = [
  { icon: "🪪", title: "Aadhaar", desc: "Update, download, and link your Aadhaar ID" },
  { icon: "✈️", title: "Passport", desc: "Apply, renew, and track passport status" },
  { icon: "💼", title: "PAN Card", desc: "Apply for new PAN or update existing details" },
  { icon: "🚗", title: "Driving Licence", desc: "Apply, renew DL and check vehicle RC online" },
  { icon: "🎓", title: "Scholarships", desc: "Find and apply for 200+ government scholarships" },
  { icon: "❤️", title: "Ayushman Bharat", desc: "Health coverage up to ₹5 lakh per family per year" },
  { icon: "🌾", title: "PM Kisan", desc: "₹6,000 annual income support for farming families" },
  { icon: "📄", title: "GST Registration", desc: "Register your business and file GST returns" },
  { icon: "🚀", title: "Startup India", desc: "Register, get tax benefits, and access funding" },
];

function GovServices() {
  return (
    <section id="gov-services" className="py-24 px-6 bg-blue-50">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <span className="inline-block bg-white text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
          GOVERNMENT SERVICES
        </span>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Popular Services <span className="text-blue-600">at Your Fingertips</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Navigate and apply for India's most essential government services, simplified and accelerated by AI.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {services.map((s) => (
          <div key={s.title} className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-xl">
                {s.icon}
              </div>
              <span className="text-gray-400">→</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
            <p className="text-gray-600 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="border border-blue-300 text-blue-700 font-semibold px-6 py-3 rounded-full">
          ⊞ View All 500+ Services
        </button>
      </div>
    </section>
  );
}

export default GovServices;