import "./App.css";
import Navbar from "./navbar/Navbar";
import HeroSection from "./hero-section/HeroSection";
import ClientTrustSection from "./client-trust-section/ClientTrustSection";
import Companies from "./companies/Companies";
import CaseStudies from "./case-studies/CaseStudies";
import Teams from "./team/Teams";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ClientTrustSection/>
      <Companies/>
      <CaseStudies/>
      <Teams/>
    </>
  );
}

export default App;
