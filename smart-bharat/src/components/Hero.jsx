import { useState } from "react";

function Hero({ onAskQuestion }) {
  const [question, setQuestion] = useState("");

  const askQuestion = () => {
    const prompt = question.trim() || "How can Smart Bharat help me with government services?";
    onAskQuestion(prompt);
    document.getElementById("ai-assistant")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="bg-blue-50 pt-16 pb-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-white border border-blue-200 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-6">
            {"\u25cf"} Powered by Google AI - Government of India Initiative
          </span>

          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Your AI-Powered<br />
            <span className="text-blue-600">Government</span><br />
            Companion
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-md">
            Smart Bharat simplifies your access to 500+ government services
            using the power of artificial intelligence - in your language, at
            your pace, anytime.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="flex-1 flex items-center bg-white border border-blue-200 rounded-full px-4 py-3">
              <span className="mr-2">{"\u2728"}</span>
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && askQuestion()}
                placeholder="Ask anything about government services..."
                className="flex-1 outline-none text-sm text-gray-700"
              />
              <button
                type="button"
                onClick={askQuestion}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-1 ml-2"
              >
                {"\u27a4"} Ask AI
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center mb-6">
            <a href="#report-issue" className="border border-blue-300 text-blue-700 font-semibold text-sm px-4 py-2 rounded-full flex items-center gap-1">
              {"\u26a0"} Report Issue
            </a>
            <span className="text-gray-500 text-sm">Trusted by 1,00,000+ citizens</span>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>{"\u2713"} DigiLocker Integrated</span>
            <span>{"\u2713"} UMANG Powered</span>
            <span>{"\u2713"} Aadhaar Verified</span>
            <span>{"\u2713"} ISO 27001</span>
          </div>
        </div>

        <div className="flex items-center justify-center relative">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white text-6xl shadow-xl">
            {"\u{1f916}"}
          </div>
          <span className="absolute top-4 left-0 bg-white text-xs px-3 py-1.5 rounded-full shadow text-gray-700">Jobs</span>
          <span className="absolute top-4 right-0 bg-white text-xs px-3 py-1.5 rounded-full shadow text-gray-700">Transport</span>
          <span className="absolute bottom-4 left-4 bg-white text-xs px-3 py-1.5 rounded-full shadow text-gray-700">Health</span>
          <span className="absolute bottom-4 right-4 bg-white text-xs px-3 py-1.5 rounded-full shadow text-gray-700">Education</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
