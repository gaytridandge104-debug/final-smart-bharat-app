import { useState } from "react";

function Navbar({ user, onSignInClick, onGetStartedClick, onLogout }) {
  const [language, setLanguage] = useState("EN");

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white text-lg">{"\u{1f916}"}</div>
          <span className="text-lg font-bold text-gray-900">
            Smart<span className="text-blue-600">Bharat</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium text-sm">
          <a href="#top" className="hover:text-blue-600">Home</a>
          <a href="#gov-services" className="hover:text-blue-600">Government Services</a>
          <a href="#report-issue" className="hover:text-blue-600">Report Issue</a>
          <a href="#ai-assistant" className="hover:text-blue-600">AI Assistant</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setLanguage((current) => (current === "EN" ? "HI" : "EN"))}
            className="hidden sm:flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1.5 text-sm text-gray-700"
            aria-label="Toggle language"
          >
            {"\u{1f310}"} {language}
          </button>

          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-700 hidden sm:block">
                Hi, <span className="font-semibold">{user.name}</span>
              </span>
              <button type="button" onClick={onLogout} className="text-sm text-gray-500 hover:text-red-500">
                Logout
              </button>
            </div>
          ) : (
            <>
              <button type="button" onClick={onSignInClick} className="hidden sm:block text-blue-600 font-medium text-sm">
                Sign In
              </button>
              <button
                type="button"
                onClick={onGetStartedClick}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-1"
              >
                {"\u{1f680}"} Get Started
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
