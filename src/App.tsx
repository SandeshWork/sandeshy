import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { BriefSection } from "./components/BriefSection";
import { Experience } from "./components/Experience";
import { Portfolio } from "./components/Portfolio";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <BriefSection />
        <Experience />
        <Portfolio />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
