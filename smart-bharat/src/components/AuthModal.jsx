import { useState } from "react";

function AuthModal({ mode, onClose, onSuccess }) {
  const [tab, setTab] = useState(mode || "signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setError("");

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (tab === "signup" && !name.trim()) {
      setError("Please enter your name.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("smartbharat_users") || "{}");

      if (tab === "signup") {
        if (users[email]) {
          setError("An account with this email already exists. Try signing in.");
          setLoading(false);
          return;
        }
        users[email] = { name, email, password };
        localStorage.setItem("smartbharat_users", JSON.stringify(users));
        const user = { name, email };
        localStorage.setItem("smartbharat_session", JSON.stringify(user));
        setLoading(false);
        onSuccess(user);
      } else {
        const existing = users[email];
        if (!existing || existing.password !== password) {
          setError("Incorrect email or password.");
          setLoading(false);
          return;
        }
        const user = { name: existing.name, email };
        localStorage.setItem("smartbharat_session", JSON.stringify(user));
        setLoading(false);
        onSuccess(user);
      }
    }, 700);
  };

  const switchTab = (nextTab) => {
    setTab(nextTab);
    setError("");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-sm w-full p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm">{"\u{1f916}"}</div>
            <span className="font-bold text-gray-900">Smart<span className="text-blue-600">Bharat</span></span>
          </div>
          <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none" aria-label="Close sign in">
            {"\u2715"}
          </button>
        </div>

        <div className="flex bg-gray-100 rounded-full p-1 mb-6">
          <button
            type="button"
            onClick={() => switchTab("signin")}
            className={`flex-1 text-sm font-semibold py-2 rounded-full transition-colors ${tab === "signin" ? "bg-white shadow text-blue-600" : "text-gray-500"}`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => switchTab("signup")}
            className={`flex-1 text-sm font-semibold py-2 rounded-full transition-colors ${tab === "signup" ? "bg-white shadow text-blue-600" : "text-gray-500"}`}
          >
            Get Started
          </button>
        </div>

        <div className="space-y-3">
          {tab === "signup" && (
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none"
            />
          )}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none"
          />

          {error && <p className="text-red-500 text-xs">{error}</p>}

          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold py-3 rounded-full text-sm"
          >
            {loading ? "Please wait..." : tab === "signin" ? "Sign In" : "Create Account"}
          </button>
        </div>

        <p className="text-xs text-gray-400 text-center mt-4">
          By continuing, you agree to Smart Bharat's Terms & Privacy Policy.
        </p>
      </div>
    </div>
  );
}

export default AuthModal;
