import "./App.css";
import Navbar from "./navbar/Navbar";
import HeroSection from "./hero-section/HeroSection";
import ClientTrustSection from "./client-trust-section/ClientTrustSection";
import Companies from "./companies/Companies";
import CaseStudies from "./case-studies/CaseStudies";
import Teams from "./team/Teams";
import Services from "./services/Services";
import { MeetCarousel } from "./meet-people/MeetCarousel";
import { CustomerCarousel } from "./customers/CustomerCarousel";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services/> 
      <ClientTrustSection/>
      <MeetCarousel/>
      <Companies/>
      <CustomerCarousel/>
      <CaseStudies/>
      <Teams/>
    </>
  );
}

export default App;
