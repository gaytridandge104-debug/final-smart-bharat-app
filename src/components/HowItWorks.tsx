const steps = [
  { num: 1, icon: "💬", title: "Ask AI", desc: "Type your question in any language. Our AI understands 22 Indian languages and complex government jargon.", color: "bg-blue-100 text-blue-600" },
  { num: 2, icon: "⚙️", title: "Receive Guidance", desc: "Get step-by-step guidance with required documents, forms, and the exact government portal you'll need.", color: "bg-purple-100 text-purple-600" },
  { num: 3, icon: "📤", title: "Submit Request", desc: "Apply directly or report your civic issue through our unified interface with document upload and validation.", color: "bg-green-100 text-green-600" },
  { num: 4, icon: "📈", title: "Track Progress", desc: "Monitor your application or complaint in real-time with push notifications and AI-predicted timelines.", color: "bg-orange-100 text-orange-600" },
];

function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
          HOW IT WORKS
        </span>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Simple as <span className="text-blue-600">1, 2, 3, 4</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We've reduced what used to take days into a 4-step process that takes minutes.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s) => (
          <div key={s.num} className="text-center relative">
            <div className={`w-20 h-20 rounded-full ${s.color} flex items-center justify-center text-3xl mx-auto mb-4 relative`}>
              {s.icon}
              <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gray-900 text-white text-xs flex items-center justify-center">
                {s.num}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
            <p className="text-gray-600 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;