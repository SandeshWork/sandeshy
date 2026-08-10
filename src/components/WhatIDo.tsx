import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const capabilities = [
  {
    number: '01',
    title: 'AI Marketing Agents',
    description:
      'Claude API agents that read campaign data and write the analysis. I design the prompts and set up delivery, so the daily summary lands in Slack or WhatsApp instead of sitting in a dashboard nobody opens.',
    tools: ['Claude API', 'Prompt Design', 'Slack', 'WhatsApp Delivery'],
  },
  {
    number: '02',
    title: 'Paid Media',
    description:
      'Full-funnel campaigns across Meta, Google, LinkedIn, and Reddit. B2C and B2B, D2C and lead gen. I run the ads, the audience testing, and the budget calls that decide what scales and what gets cut.',
    tools: ['Meta Ads', 'Google Ads', 'LinkedIn Ads', 'Reddit Ads'],
  },
  {
    number: '03',
    title: 'Automation & Integration',
    description:
      'API to API lead routing instead of paid integration platforms, WhatsApp Business API flows, and scripts that move data between tools without manual work in between.',
    tools: ['Google Apps Script', 'API Lead Routing', 'n8n', 'Make.com', 'WhatsApp Business API', 'Python'],
  },
  {
    number: '04',
    title: 'Analytics & Tracking',
    description:
      'GA4 setup, GTM configuration, and conversion tracking, feeding into Looker Studio and automated reporting pipelines. I build the measurement layer once, then it keeps reporting on its own.',
    tools: ['Google Analytics 4', 'Google Tag Manager', 'Conversion Tracking', 'Looker Studio', 'Automated Dashboards'],
  },
  {
    number: '05',
    title: 'Technical',
    description:
      'Python for scripts and data pulls, HTML and CSS for landing pages, and Excel or Sheets automation for anything that does not need a full build.',
    tools: ['Python', 'HTML & CSS', 'Excel & Sheets Automation'],
  },
  {
    number: '06',
    title: 'Creative Direction',
    description:
      'Ad copy, landing pages, video scripts, and brochure design. I\'ve led 50+ video/month production pipelines and written high-converting copy across EdTech, SaaS, and D2C brands, always tied to a campaign objective.',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Photoshop', 'Canva', 'Figma'],
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
