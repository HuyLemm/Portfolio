import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import EngineeringLab from "./components/EngineeringLab";
import TechStack from "./components/TechStack";
import GitHubStats from "./components/GitHubStats";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white overflow-x-hidden">
      <ScrollProgress />

      <Hero onContactClick={() => setIsContactModalOpen(true)} />
      <About />
      <Experience />
      <FeaturedProjects />
      <EngineeringLab />
      <TechStack />
      <GitHubStats />
      <Footer onContactClick={() => setIsContactModalOpen(true)} />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <ScrollToTop />
    </div>
  );
}