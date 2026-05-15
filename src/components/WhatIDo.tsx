import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const capabilities = [
  {
    number: '01',
    title: 'Performance Marketing',
    description:
      'Full-funnel paid campaigns across Google, Meta, and LinkedIn. I handle audience research, ad copy, bid strategy, and budget allocation, focused on minimising cost per lead while maximising quality and revenue output.',
    tools: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Reddit Ads'],
  },
  {
    number: '02',
    title: 'Analytics & Tracking',
    description:
      'GA4 setup, GTM configuration, custom event tracking, and Looker Studio dashboards. I build the measurement layer that reveals what\'s actually driving results, so you know exactly where to invest and what to cut.',
    tools: ['Google Analytics 4', 'Google Tag Manager', 'Looker Studio', 'Meta Pixel', 'MongoDB Charts'],
  },
  {
    number: '03',
    title: 'Creative Direction',
    description:
      'Ad copy, landing pages, video scripts, and brochure design. I\'ve led 50+ video/month production pipelines and written high-converting copy across EdTech, SaaS, and D2C brands, always tied to a campaign objective.',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Photoshop', 'Canva', 'Figma'],
  },
  {
    number: '04',
    title: 'Automation & CRM',
    description:
      'WhatsApp workflows, lead routing, automated reporting, and CRM integration. I use n8n, Make.com, and Zapier to eliminate manual overhead and build marketing operations that scale without scaling the team.',
    tools: ['n8n', 'Make.com', 'Zapier', 'Customer.io', 'LeadSquared', 'Meritto'],
  },
];

export function WhatIDo() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="what-i-do" style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 72 }}
        >
          <p
            style={{
              color: '#b8980a',
              fontSize: 12,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: 20,
            }}
          >
            What I Do
          </p>
          <h2
            style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              color: '#0A0A0A',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            Full-stack
            <br />
            <span style={{ color: '#FFD60A' }}>marketing.</span>
          </h2>
        </motion.div>

        {/* Capability list */}
        <div style={{ borderTop: '1px solid #E5E5E5' }}>
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              style={{ borderBottom: '1px solid #E5E5E5' }}
            >
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="group"
                style={{
                  width: '100%',
                  padding: '28px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 24,
                  textAlign: 'left',
                  background: 'none',
                  cursor: 'pointer',
                }}
              >
                {/* Number */}
                <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 13,
                    color: '#CACACA',
                    flexShrink: 0,
                    width: 36,
                  }}
                >
                  {cap.number}
                </span>

                {/* Title */}
                <h3
                  style={{
                    flex: 1,
                    fontSize: 'clamp(22px, 3vw, 32px)',
                    fontWeight: 800,
                    color: active === index ? '#FFD60A' : '#0A0A0A',
                    letterSpacing: '-0.01em',
                    transition: 'color 0.2s',
                  }}
                >
                  {cap.title}
                </h3>

                {/* Toggle icon */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    background: active === index ? '#FFD60A' : 'transparent',
                    border: active === index ? '2px solid #FFD60A' : '2px solid #E5E5E5',
                    transition: 'all 0.2s',
                  }}
                >
                  {active === index
                    ? <Minus style={{ width: 16, height: 16, color: '#000' }} />
                    : <Plus style={{ width: 16, height: 16, color: '#888' }} />}
                </div>
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      style={{
                        paddingLeft: 60,
                        paddingRight: 60,
                        paddingBottom: 32,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 20,
                      }}
                    >
                      <p style={{ color: '#555', fontSize: 17, lineHeight: 1.7, maxWidth: 680 }}>
                        {cap.description}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {cap.tools.map(tool => (
                          <span
                            key={tool}
                            style={{
                              padding: '6px 14px',
                              background: '#F5F5F5',
                              border: '1px solid #E8E8E8',
                              borderRadius: 999,
                              fontSize: 13,
                              fontWeight: 600,
                              color: '#444',
                            }}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
