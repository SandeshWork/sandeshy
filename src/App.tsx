import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { BriefSection } from "./components/BriefSection";
import { Experience } from "./components/Experience";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";
import { FloatingContactButton } from "./components/FloatingContactButton";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Load Tally popup script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <BriefSection />
        <Experience />
        <Portfolio />
      </main>
      <FloatingContactButton />
      <Footer />
    </div>
  );
}