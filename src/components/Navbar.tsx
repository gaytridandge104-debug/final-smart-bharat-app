function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white text-lg">🤖</div>
          <span className="text-lg font-bold text-gray-900">
            Smart<span className="text-blue-600">Bharat</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium text-sm">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#gov-services" className="hover:text-blue-600">Government Services</a>
          <a href="#report-issue" className="hover:text-blue-600">Report Issue</a>
          <a href="#ai-assistant" className="hover:text-blue-600">AI Assistant</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1.5 text-sm text-gray-700">
            🌐 EN
          </button>
          <a href="#" className="hidden sm:block text-blue-600 font-medium text-sm">Sign In</a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-1">
            🚀 Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;