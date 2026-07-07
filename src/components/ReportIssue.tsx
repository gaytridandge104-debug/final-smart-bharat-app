import { useState } from "react";

function ReportIssue() {
  const [submitted, setSubmitted] = useState(false);
  const [category, setCategory] = useState("Pothole");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!description.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="report-issue" className="py-24 px-6 bg-blue-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-white text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
            REPORT AN ISSUE
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            See a problem? <span className="text-blue-600">Report it in seconds</span>
          </h2>
          <p className="text-gray-600 text-sm">
            Potholes, broken streetlights, garbage, or any civic issue — we'll route it to the right department.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Issue Reported Successfully</h3>
              <p className="text-gray-600 text-sm mb-6">
                Your complaint ID is <strong>#SB{Math.floor(10000 + Math.random() * 90000)}</strong>. You'll receive updates via SMS.
              </p>
              <button
                onClick={() => { setSubmitted(false); setDescription(""); }}
                className="text-blue-600 font-semibold text-sm"
              >
                Report another issue
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none"
                >
                  <option>Pothole / Road Damage</option>
                  <option>Broken Streetlight</option>
                  <option>Garbage / Sanitation</option>
                  <option>Water Leak</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the issue and its location..."
                  rows={4}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none resize-none"
                />
              </div>

              <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center text-sm text-gray-500">
                📷 Tap to attach a photo (optional)
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full"
              >
                Submit Report
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ReportIssue;