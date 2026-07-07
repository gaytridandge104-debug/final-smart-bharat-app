import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureCards from "./components/FeatureCards";
import GovServices from "./components/GovServices";
import HowItWorks from "./components/HowItWorks";
import AIAssistant from "./components/AIAssistant";
import ReportIssue from "./components/ReportIssue";
import Stats from "./components/Stats";
import GovUpdates from "./components/GovUpdates";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";

function App() {
  const [user, setUser] = useState(() => {
    const session = localStorage.getItem("smartbharat_session");
    return session ? JSON.parse(session) : null;
  });
  const [authMode, setAuthMode] = useState(null);
  const [aiQuestion, setAiQuestion] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("smartbharat_session");
    setUser(null);
  };

  return (
    <>
      <Navbar
        user={user}
        onSignInClick={() => setAuthMode("signin")}
        onGetStartedClick={() => setAuthMode("signup")}
        onLogout={handleLogout}
      />
      <Hero onAskQuestion={setAiQuestion} />
      <FeatureCards />
      <GovServices />
      <HowItWorks />
      <AIAssistant initialQuestion={aiQuestion} />
      <ReportIssue />
      <Stats />
      <GovUpdates />
      <Testimonials onGetStartedClick={() => setAuthMode("signup")} />
      <FinalCTA onGetStartedClick={() => setAuthMode("signup")} />
      <Footer />

      {authMode && (
        <AuthModal
          mode={authMode}
          onClose={() => setAuthMode(null)}
          onSuccess={(u) => { setUser(u); setAuthMode(null); }}
        />
      )}
    </>
  );
}

export default App;
