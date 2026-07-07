import { useState } from "react";

const services = [
  {
    icon: "\u{1faaa}",
    title: "Aadhaar",
    desc: "Update, download, and link your Aadhaar ID",
    details: {
      about: "Aadhaar is a 12-digit unique identity number issued by UIDAI to residents of India, used for identity and address verification.",
      documents: ["Proof of Identity (PAN, Passport, Voter ID)", "Proof of Address (utility bill, bank statement)", "Proof of Date of Birth"],
      steps: ["Visit the nearest Aadhaar Seva Kendra or UIDAI portal", "Fill the enrollment or update form", "Submit documents and complete biometric verification", "Track your request with the acknowledgement number"],
      time: "15-90 days",
      fee: "Free for enrollment, Rs 50 for updates",
    },
  },
  {
    icon: "\u2708",
    title: "Passport",
    desc: "Apply, renew, and track passport status",
    details: {
      about: "An Indian passport is an official travel document issued by the Ministry of External Affairs for international travel.",
      documents: ["Proof of Address", "Proof of Date of Birth", "Aadhaar Card", "Passport-size photographs"],
      steps: ["Register on Passport Seva Portal", "Fill the application form and pay the fee online", "Book an appointment at the nearest Passport Seva Kendra", "Visit the PSK for document verification and biometrics", "Complete police verification if required"],
      time: "30-45 days normal, 7-10 days Tatkal",
      fee: "Rs 1,500 normal, Rs 2,000 Tatkal",
    },
  },
  {
    icon: "\u{1f4bc}",
    title: "PAN Card",
    desc: "Apply for new PAN or update existing details",
    details: {
      about: "Permanent Account Number (PAN) is a 10-character alphanumeric identifier issued by the Income Tax Department.",
      documents: ["Proof of Identity", "Proof of Address", "Proof of Date of Birth", "Passport-size photograph"],
      steps: ["Apply online through NSDL or UTIITSL", "Fill Form 49A for Indian citizens", "Upload documents and pay the fee", "Complete e-Sign or send physical documents", "Receive e-PAN by email and physical card by post"],
      time: "15-20 days",
      fee: "Rs 107 for delivery within India",
    },
  },
  {
    icon: "\u{1f697}",
    title: "Driving Licence",
    desc: "Apply, renew DL and check vehicle RC online",
    details: {
      about: "A Driving Licence authorizes a person to operate motor vehicles on public roads, issued by the Regional Transport Office.",
      documents: ["Age proof", "Address proof", "Learner's Licence for permanent DL", "Medical certificate for transport vehicles"],
      steps: ["Apply for a Learner's Licence on the Parivahan portal", "Pass the learner's test", "Book a driving test slot after the waiting period", "Visit the RTO and pass the driving test", "Receive the Driving Licence"],
      time: "30-45 days total",
      fee: "Rs 200-500 depending on licence type",
    },
  },
  {
    icon: "\u{1f393}",
    title: "Scholarships",
    desc: "Find and apply for 200+ government scholarships",
    details: {
      about: "The National Scholarship Portal provides a single-window system for students to apply for central and state scholarships.",
      documents: ["Aadhaar Card", "Bank account details", "Previous year mark sheet", "Income certificate", "Caste certificate if applicable"],
      steps: ["Register on the National Scholarship Portal", "Fill personal, academic, and bank details", "Upload required documents", "Submit the application before the deadline", "Track institute and state verification"],
      time: "2-4 months after verification",
      fee: "Free",
    },
  },
  {
    icon: "\u2764",
    title: "Ayushman Bharat",
    desc: "Health coverage up to Rs 5 lakh per family per year",
    details: {
      about: "Ayushman Bharat PM-JAY provides free health coverage for eligible families for secondary and tertiary hospitalization.",
      documents: ["Aadhaar Card", "Ration Card or family ID", "Mobile number"],
      steps: ["Check eligibility on the PM-JAY portal", "Visit a Common Service Centre or empanelled hospital", "Complete e-KYC verification", "Receive your Ayushman Card", "Use the card for cashless treatment at empanelled hospitals"],
      time: "Same day after verification",
      fee: "Free",
    },
  },
  {
    icon: "\u{1f33e}",
    title: "PM Kisan",
    desc: "Rs 6,000 annual income support for farming families",
    details: {
      about: "PM-KISAN provides income support of Rs 6,000 per year to eligible landholding farmer families.",
      documents: ["Aadhaar Card", "Land ownership documents", "Bank account details"],
      steps: ["Register on the PM-KISAN portal as a new farmer", "Enter Aadhaar, bank, and land details", "Wait for state government land record verification", "Receive installments directly in your bank account"],
      time: "Installments every 4 months",
      fee: "Free",
    },
  },
  {
    icon: "\u{1f4c4}",
    title: "GST Registration",
    desc: "Register your business and file GST returns",
    details: {
      about: "GST Registration enables eligible businesses to collect and remit Goods and Services Tax.",
      documents: ["PAN of business or proprietor", "Aadhaar Card", "Business address proof", "Bank account statement", "Photograph of proprietor or partners"],
      steps: ["Visit the GST portal", "Fill Part A of Form GST REG-01", "Verify mobile and email by OTP", "Fill Part B with business details and documents", "Track ARN until GSTIN is issued"],
      time: "3-7 working days",
      fee: "Free",
    },
  },
  {
    icon: "\u{1f680}",
    title: "Startup India",
    desc: "Register, get tax benefits, and access funding",
    details: {
      about: "Startup India recognition helps eligible startups access tax exemptions, easier compliance, and funding schemes.",
      documents: ["Certificate of incorporation or registration", "PAN of the entity", "Details of directors or partners", "Brief description of business innovation"],
      steps: ["Register the business as a Private Limited, LLP, or Partnership", "Create an account on Startup India", "Fill startup and innovation details", "Upload incorporation documents", "Download the DPIIT recognition certificate after approval"],
      time: "2-7 working days",
      fee: "Free",
    },
  },
];

const moreServices = [
  { icon: "\u{1f3e0}", title: "Ration Card", desc: "Apply for or update ration card details" },
  { icon: "\u{1f5f3}", title: "Voter ID", desc: "Register to vote or update voter details" },
  { icon: "\u{1f474}", title: "Old Age Pension", desc: "Apply for state old-age pension schemes" },
  { icon: "\u{1f3e5}", title: "e-Sanjeevani", desc: "Free online doctor consultation" },
  { icon: "\u{1f4a7}", title: "Jal Jeevan Mission", desc: "Track tap water connection status" },
  { icon: "\u{1f3d7}", title: "PM Awas Yojana", desc: "Apply for affordable housing scheme" },
  { icon: "\u{1f469}", title: "Beti Bachao Beti Padhao", desc: "Girl child welfare scheme benefits" },
  { icon: "\u{1f393}", title: "Skill India", desc: "Free skill training and certification" },
  { icon: "\u{1f68c}", title: "Vehicle RC Transfer", desc: "Transfer vehicle registration ownership" },
  { icon: "\u{1f4cb}", title: "Income Certificate", desc: "Apply for income certificate online" },
  { icon: "\u{1f3e2}", title: "Property Tax", desc: "Pay municipal property tax online" },
  { icon: "\u26a1", title: "Electricity Bill", desc: "Pay or dispute electricity bills" },
  { icon: "\u{1f48a}", title: "Jan Aushadhi", desc: "Locate generic medicine stores nearby" },
  { icon: "\u{1f9fe}", title: "Income Tax Filing", desc: "File ITR through the e-filing portal" },
  { icon: "\u{1f310}", title: "DigiLocker", desc: "Store and access verified documents digitally" },
  { icon: "\u{1f4f1}", title: "UMANG App Services", desc: "Access 1000+ services via UMANG" },
];

function withDefaultDetails(service) {
  if (service.details) return service;

  return {
    ...service,
    details: {
      about: `${service.title} helps citizens complete this government service online or through the nearest authorized centre.`,
      documents: ["Aadhaar or valid photo ID", "Address proof", "Mobile number linked for OTP", "Any service-specific certificate or record"],
      steps: ["Open the official portal or visit the nearest service centre", "Choose the relevant application or update option", "Enter your details and upload documents", "Submit the form and save the acknowledgement number", "Track status from Smart Bharat or the official portal"],
      time: "Varies by department",
      fee: "Depends on service and state rules",
    },
  };
}

function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-2xl">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
          </div>
          <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none" aria-label="Close service details">
            {"\u2715"}
          </button>
        </div>

        <p className="text-gray-600 text-sm mb-5">{service.details.about}</p>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="text-xs text-gray-500 mb-1">Processing Time</div>
            <div className="text-sm font-semibold text-gray-900">{service.details.time}</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="text-xs text-gray-500 mb-1">Fee</div>
            <div className="text-sm font-semibold text-gray-900">{service.details.fee}</div>
          </div>
        </div>

        <div className="mb-5">
          <h4 className="font-semibold text-gray-900 text-sm mb-2">Required Documents</h4>
          <ul className="space-y-1">
            {service.details.documents.map((d) => (
              <li key={d} className="text-sm text-gray-600 flex gap-2">
                <span className="text-green-600">{"\u2713"}</span> {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 text-sm mb-2">How to Apply</h4>
          <ol className="space-y-2">
            {service.details.steps.map((step, i) => (
              <li key={step} className="text-sm text-gray-600 flex gap-2">
                <span className="font-semibold text-blue-600">{i + 1}.</span> {step}
              </li>
            ))}
          </ol>
        </div>

        <a href="#ai-assistant" onClick={onClose} className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full">
          Ask AI About {service.title}
        </a>
      </div>
    </div>
  );
}

function AllServicesModal({ onClose, onSelect }) {
  const [query, setQuery] = useState("");
  const all = [...services, ...moreServices];
  const filtered = all.filter(
    (s) => s.title.toLowerCase().includes(query.toLowerCase()) || s.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">All Government Services</h3>
            <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none" aria-label="Close all services">
              {"\u2715"}
            </button>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services..."
            className="w-full border border-gray-200 rounded-full px-4 py-2.5 text-sm outline-none"
          />
        </div>

        <div className="overflow-y-auto p-6 grid sm:grid-cols-2 gap-3">
          {filtered.map((s) => (
            <button
              key={s.title}
              type="button"
              onClick={() => onSelect(withDefaultDetails(s))}
              className="flex items-start gap-3 border border-gray-100 rounded-xl p-3 text-left hover:bg-blue-50 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-lg shrink-0">{s.icon}</div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">{s.title}</div>
                <div className="text-xs text-gray-500">{s.desc}</div>
              </div>
            </button>
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-gray-500 col-span-2 text-center py-6">No services found for "{query}"</p>
          )}
        </div>
      </div>
    </div>
  );
}

function GovServices() {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="gov-services" className="py-24 px-6 bg-blue-50">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <span className="inline-block bg-white text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4">GOVERNMENT SERVICES</span>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Popular Services <span className="text-blue-600">at Your Fingertips</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Navigate and apply for India's most essential government services, simplified and accelerated by AI.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {services.map((s) => (
          <button key={s.title} type="button" onClick={() => setSelected(s)} className="bg-white rounded-2xl p-5 hover:shadow-md transition-shadow flex flex-col text-left cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-xl">{s.icon}</div>
              <span className="text-gray-400">{"\u2192"}</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
            <p className="text-gray-600 text-sm">{s.desc}</p>
          </button>
        ))}
      </div>

      <div className="text-center">
        <button type="button" onClick={() => setShowAll(true)} className="border border-blue-300 text-blue-700 font-semibold px-6 py-3 rounded-full">
          {"\u229e"} View All 500+ Services
        </button>
      </div>

      <ServiceModal service={selected} onClose={() => setSelected(null)} />
      {showAll && (
        <AllServicesModal
          onClose={() => setShowAll(false)}
          onSelect={(s) => {
            setShowAll(false);
            setSelected(s);
          }}
        />
      )}
    </section>
  );
}

export default GovServices;
