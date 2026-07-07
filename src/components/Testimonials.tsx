const testimonials = [
  { name: "Priya Sharma", role: "Small Business Owner, Jaipur", tag: "Startup India User", text: "I registered my startup and got GST certification within 3 days — something that used to take months of back-and-forth. Smart Bharat's AI guided me through every document and form.", initials: "PS" },
  { name: "Rajendra Kumar", role: "Farmer, Vidarbha, Maharashtra", tag: "PM Kisan Beneficiary", text: "I never thought I could access government schemes without going to the block office. Smart Bharat helped me get PM Kisan benefits and apply for the Kisan Credit Card from my phone, in Hindi.", initials: "RK" },
  { name: "Dr. Ananya Nair", role: "Assistant Professor, Kochi", tag: "Issue Reporter", text: "Reporting a broken flyover light in my area used to be frustrating — multiple offices, no follow-up. With Smart Bharat, I reported it on Sunday and got confirmation of repair by Tuesday.", initials: "AN" },
];

function Testimonials() {
  return (
    <section className="py-24 px-6 bg-blue-50">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Real citizens, real experiences
        </h2>
        <p className="text-gray-600">
          Here's how Smart Bharat is making a difference.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-yellow-400 mb-3">★★★★★</div>
            <p className="text-gray-700 text-sm mb-6">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-700 text-sm">
                {t.initials}
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                <div className="text-xs text-gray-500">{t.role}</div>
                <span className="inline-block mt-1 bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded-full">{t.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full">
          ✨ Start Your Journey — It's Free
        </button>
      </div>
    </section>
  );
}

export default Testimonials;