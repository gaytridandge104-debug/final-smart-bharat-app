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

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureCards />
      <GovServices />
      <HowItWorks />
      <AIAssistant />
      <ReportIssue />
      <Stats />
      <GovUpdates />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default App;