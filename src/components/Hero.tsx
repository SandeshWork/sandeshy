import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { HeroIllustration } from './HeroIllustration';

const proofStats = [
  { value: '2.5×', label: 'ROAS at Boho Tales' },
  { value: '3', label: 'AI agents in production' },
  { value: '4+ yrs', label: 'EdTech to BPO hiring' },
];

export function Hero() {
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    const check = () => setShowRight(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-20%',
          left: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255,214,10,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255,214,10,0.05) 0%, transparent 70%)',
        }}
      />

      <div style={{ position: 'relative', zIndex: 10 }} className="max-w-7xl mx-auto px-6 w-full pt-24 pb-20">
        <div style={{ display: 'flex', alignItems: 'center', gap: 80 }}>

          {/* ── LEFT ── */}
          <div className="space-y-8" style={{ flex: 1, minWidth: 0 }}>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 text-sm"
              style={{
                padding: '6px 16px',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.04)',
                color: 'rgba(255,255,255,0.65)',
              }}
            >
              <span
                className="inline-block rounded-full"
                style={{ width: 7, height: 7, background: '#4ade80', boxShadow: '0 0 8px #4ade80' }}
              />
              Available for freelance
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
              Bangalore, India
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1
                className="font-black leading-none tracking-tighter"
                style={{ fontSize: 'clamp(60px, 9vw, 116px)', color: '#fff' }}
              >
                Sandesh
                <br />
                <span style={{ color: '#FFD60A' }}>Yewale</span>
              </h1>
            </motion.div>

            {/* Positioning line */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              style={{ color: 'rgba(255,255,255,0.65)', fontSize: 20, fontWeight: 500 }}
            >
              Performance marketer who builds the systems and AI agents underneath the ads.
            </motion.p>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-lg leading-relaxed max-w-lg"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              4+ years running paid media for EdTech, SaaS, D2C and BPO hiring brands.
              I build the systems underneath it too: tracking, lead routing, WhatsApp flows, dashboards and AI agents that read the data and report on it.
            </motion.p>

            {/* Proof strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap"
              style={{ gap: 28 }}
            >
              {proofStats.map(stat => (
                <div key={stat.label}>
                  <p style={{ color: '#FFD60A', fontSize: 26, fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1 }}>
                    {stat.value}
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 4 }}>{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex gap-4 flex-wrap"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 font-bold rounded-full"
                style={{ padding: '14px 28px', background: '#FFD60A', color: '#000' }}
              >
                See the Case Studies
                <ArrowUpRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.button>

              <a
                href="mailto:hireme@sandeshy.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '14px 28px',
                  color: 'rgba(255,255,255,0.65)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 999,
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 500,
                  transition: 'color 0.2s, border-color 0.2s, background 0.2s, transform 0.15s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = '#fff';
                  el.style.borderColor = 'rgba(255,255,255,0.35)';
                  el.style.background = 'rgba(255,255,255,0.05)';
                  el.style.transform = 'scale(1.04)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = 'rgba(255,255,255,0.65)';
                  el.style.borderColor = 'rgba(255,255,255,0.15)';
                  el.style.background = 'transparent';
                  el.style.transform = 'scale(1)';
                }}
              >
                <Mail className="w-4 h-4" />
                hireme@sandeshy.com
              </a>
            </motion.div>

            {/* Domain tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="flex gap-2 flex-wrap pt-2"
            >
              {['Hiring / BPO', 'D2C', 'Healthcare', 'SaaS', 'EdTech'].map(tag => (
                <span
                  key={tag}
                  className="text-xs rounded-full"
                  style={{
                    padding: '4px 12px',
                    color: 'rgba(255,255,255,0.3)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT – 3D Illustration ── */}
          {showRight && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.9 }}
              style={{ flexShrink: 0 }}
            >
              <HeroIllustration />
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)' }}
        />
        <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 11, letterSpacing: '0.1em' }}>SCROLL</span>
      </motion.div>
    </section>
  );
}
