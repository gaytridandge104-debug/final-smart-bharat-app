function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10 mb-10">
        <div className="md:col-span-2">
          <a href="#top" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">{"\u{1f916}"}</div>
            <span className="text-white font-bold">Smart<span className="text-blue-400">Bharat</span></span>
          </a>
          <p className="text-sm text-gray-400 mb-4">
            AI-powered government citizen assistant built in collaboration
            with Google and the Government of India to simplify civic life.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs border border-gray-700 rounded-full px-3 py-1">MeitY Recognized</span>
            <span className="text-xs border border-gray-700 rounded-full px-3 py-1">Digital India</span>
            <span className="text-xs border border-gray-700 rounded-full px-3 py-1">Startup India</span>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">PRODUCT</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#ai-assistant" className="hover:text-white">AI Assistant</a></li>
            <li><a href="#gov-services" className="hover:text-white">Government Services</a></li>
            <li><a href="#report-issue" className="hover:text-white">Report Issue</a></li>
            <li><a href="#report-issue" className="hover:text-white">Complaint Tracking</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">SERVICES</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#gov-services" className="hover:text-white">Aadhaar</a></li>
            <li><a href="#gov-services" className="hover:text-white">Passport</a></li>
            <li><a href="#gov-services" className="hover:text-white">PAN Card</a></li>
            <li><a href="#gov-services" className="hover:text-white">Driving Licence</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">COMPANY</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:text-white">About Us</a></li>
            <li><a href="#updates" className="hover:text-white">Blog</a></li>
            <li><a href="#contact" className="hover:text-white">Careers</a></li>
            <li><a href="#contact" className="hover:text-white">Press Kit</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-6 text-xs text-gray-500 text-center">
        Copyright 2026 Smart Bharat. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
