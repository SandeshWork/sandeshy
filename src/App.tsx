import { Suspense, lazy } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { WhatIDo } from './components/WhatIDo';
import { AgentSystems } from './components/AgentSystems';
import { CareerJourney } from './components/CareerJourney';
import { Footer } from './components/Footer';
import { FloatingNav } from './components/FloatingNav';

const ToolsCarousel = lazy(() => import('./components/ToolsCarousel').then(m => ({ default: m.ToolsCarousel })));
const Portfolio = lazy(() => import('./components/Portfolio').then(m => ({ default: m.Portfolio })));

export default function App() {
  return (
    <div style={{ background: '#0A0A0A' }}>
      <Navbar />
      <FloatingNav />
      <Hero />
      <WhatIDo />
      <AgentSystems />
      <Suspense fallback={<div style={{ background: '#0A0A0A', minHeight: 400 }} />}>
        <ToolsCarousel />
      </Suspense>
      <CareerJourney />
      <Suspense fallback={<div style={{ background: '#fff', minHeight: 600 }} />}>
        <Portfolio />
      </Suspense>
      <Footer />
    </div>
  );
}
