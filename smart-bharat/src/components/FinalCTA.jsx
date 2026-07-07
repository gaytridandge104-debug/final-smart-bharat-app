import { useState } from "react";

function DemoModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 text-left" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between mb-5">
          <h3 className="text-xl font-bold text-gray-900">Smart Bharat Demo</h3>
          <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none" aria-label="Close demo">
            {"\u2715"}
          </button>
        </div>
        <div className="space-y-4 text-sm text-gray-600">
          <p><strong className="text-gray-900">1.</strong> Ask the AI about a service such as Aadhaar, PM Kisan, passport, GST, or scholarships.</p>
          <p><strong className="text-gray-900">2.</strong> Open Government Services to see documents, fees, timelines, and step-by-step guidance.</p>
          <p><strong className="text-gray-900">3.</strong> Use Report Issue to submit a civic complaint and receive a sample tracking ID.</p>
        </div>
        <a href="#ai-assistant" onClick={onClose} className="mt-6 block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full">
          Try AI Assistant
        </a>
      </div>
    </div>
  );
}

function FinalCTA({ onGetStartedClick }) {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-cyan-500">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Ready to experience Smart Governance?
        </h2>
        <p className="text-blue-50 mb-8 max-w-xl mx-auto">
          Join 1,00,000+ citizens who are already using Smart Bharat to access government services effortlessly.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button type="button" onClick={onGetStartedClick} className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full">
            {"\u{1f680}"} Get Started Free
          </button>
          <button
            type="button"
            onClick={() => setShowDemo(true)}
            className="border border-white/60 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2"
          >
            {"\u25b6"} Watch Demo
          </button>
        </div>
      </div>

      {showDemo && <DemoModal onClose={() => setShowDemo(false)} />}
    </section>
  );
}

export default FinalCTA;
