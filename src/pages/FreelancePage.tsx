import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingContactButton } from "../components/FloatingContactButton";
import { FreelanceHero } from "../components/freelance/FreelanceHero";
import { Services } from "../components/freelance/Services";
import { Plans } from "../components/freelance/Plans";
import { FAQ } from "../components/freelance/FAQ";
import { CTA } from "../components/freelance/CTA";
import { useEffect } from "react";

export default function FreelancePage() {
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
        <FreelanceHero />
        <Services />
        <Plans />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
