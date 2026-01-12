import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { CareerJourney } from './components/CareerJourney';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import { ParticlesBackground } from './components/ParticlesBackground';
import { ToolsCarousel } from './components/ToolsCarousel';

export default function App() {
  return (
    <div className='relative min-h-screen bg-white'>
      <ParticlesBackground />
      <div className='relative' style={{ zIndex: 10 }}>
        <Navbar />
        <Hero />
        <ToolsCarousel />
        <CareerJourney />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}
