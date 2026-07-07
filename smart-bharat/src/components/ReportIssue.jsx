import { useState } from "react";

function ReportIssue() {
  const [submitted, setSubmitted] = useState(false);
  const [category, setCategory] = useState("Pothole / Road Damage");
  const [description, setDescription] = useState("");
  const [photoName, setPhotoName] = useState("");
  const [complaintId, setComplaintId] = useState("");
  const [error, setError] = useState("");

  const resetForm = () => {
    setSubmitted(false);
    setDescription("");
    setPhotoName("");
    setComplaintId("");
    setError("");
  };

  const handleSubmit = () => {
    if (!description.trim()) {
      setError("Please describe the issue and its location before submitting.");
      return;
    }

    setError("");
    setComplaintId(`SB${Math.floor(10000 + Math.random() * 90000)}`);
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
            Potholes, broken streetlights, garbage, or any civic issue - we'll route it to the right department.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">{"\u2705"}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Issue Reported Successfully</h3>
              <p className="text-gray-600 text-sm mb-2">
                Your complaint ID is <strong>#{complaintId}</strong>.
              </p>
              <p className="text-gray-500 text-xs mb-6">
                Category: {category}. You'll receive sample updates via SMS.
              </p>
              <button type="button" onClick={resetForm} className="text-blue-600 font-semibold text-sm">
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
                  onChange={(e) => {
                    setDescription(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="Describe the issue and its location..."
                  rows={4}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none resize-none"
                />
              </div>

              <label className="block border border-dashed border-gray-300 rounded-lg p-6 text-center text-sm text-gray-500 cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={(e) => setPhotoName(e.target.files?.[0]?.name || "")}
                />
                <span className="block mb-1">{"\u{1f4f7}"} Attach a photo (optional)</span>
                {photoName && <span className="text-blue-600 font-medium">{photoName}</span>}
              </label>

              {error && <p className="text-red-500 text-xs">{error}</p>}

              <button
                type="button"
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
