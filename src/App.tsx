import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { WhatIDo } from './components/WhatIDo';
import { ToolsCarousel } from './components/ToolsCarousel';
import { CareerJourney } from './components/CareerJourney';
import { FreelanceProjects } from './components/FreelanceProjects';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import { FloatingNav } from './components/FloatingNav';

export default function App() {
  return (
    <div style={{ background: '#0A0A0A' }}>
      <Navbar />
      <FloatingNav />
      <Hero />
      <WhatIDo />
      <ToolsCarousel />
      <CareerJourney />
      <FreelanceProjects />
      <Portfolio />
      <Footer />
    </div>
  );
}
