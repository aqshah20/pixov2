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
import { ResourcesCarousel } from "./resources/Resources";
import HireCta from "./footer/HireCta";
import DevelopmentAproach from "./development-aproach/DevelopmentAproach";
import TechStack from "./tech-stack/TechStack";
import Footer from "./footer/Footer";

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
      <DevelopmentAproach/>
      <TechStack/>
      <ResourcesCarousel/>
      <HireCta/>
      <Footer/>
    </>
  );
}

export default App;
