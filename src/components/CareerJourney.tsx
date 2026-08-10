import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const journeySteps = [
  {
    period: 'Jan 2026 – Present',
    company: 'Mopid',
    companyTagline: 'Hiring Services for BPO & Telecalling · Bangalore',
    title: 'Digital Marketing Specialist',
    isCurrent: true,
    achievements: [
      'Running hiring ads to generate candidate volume for BPO and telecalling roles',
      'Running B2B ads on LinkedIn to bring in new BPO and telecalling companies as clients',
      'Pushing leads into the internal system database directly over API instead of a paid integration platform, same result, no per record cost, no extra tool in the stack',
      'Designed the in office flow from ad click to data capture to screening to onboarding, defining who touches what at each step',
      'Built the WhatsApp hiring flow and currently optimising the message sequences for response rate and drop off at each stage',
      'Built an automation that produces a daily spend and candidate onboarding dashboard, covering every tracked variable with flow charts, trend lines, and stage level breakdowns',
      'Running a Claude powered agent that reads the daily data, writes the analysis, and posts it to Slack, calling out what improved, what dropped, and what needs attention, replacing a manual pull across two systems with one report every morning',
    ],
  },
  {
    period: 'Oct 2023 – Oct 2025',
    company: 'LetsUpgrade',
    companyTagline: 'EdTech · Navi Mumbai',
    title: 'Head of Digital Marketing',
    isCurrent: false,
    achievements: [
      'Ran monthly paid campaigns across Google Ads, Meta Ads, and LinkedIn for four active brands at once',
      'ITM B.Tech: Ran the admissions campaign end to end across Google, Meta, and LinkedIn, from targeting to landing pages to conversion tracking',
      'LISA AI: Generated qualified B2B leads for an AI-based corporate training SaaS platform',
      'LetsUpgrade: Acquired users through a mix of paid and organic channels at scale',
      '12thClass: Drove thousands of student registrations for a 12th class resources platform',
      'Set up end-to-end tracking using GA4, GTM, Meritto CRM, and Meta Pixel',
      'Built automated daily performance reports for Google Ads and Meta Ads to speed up optimisation decisions',
      'Managed a 7-member in-house team: designers, video editors, and marketing executives',
      'Led creative strategy for ads, landing pages, video campaigns, and brand assets',
      'Scaled video production for ITM Universities to 50+ approved videos per month',
      'Owned end-to-end marketing budgets including media spend, tools, and team costs',
    ],
  },
  {
    period: 'Jan 2023 – Sep 2023',
    company: 'LetsUpgrade',
    companyTagline: 'EdTech · Navi Mumbai',
    title: 'Assistant Manager – Digital Marketing',
    isCurrent: false,
    achievements: [
      'Sole owner of paid campaigns and CRM automation, before the marketing team grew to seven',
      'Lowered cost per lead through audience testing, copy optimisation, and funnel improvements',
      'Strengthened lead quality by aligning ad targeting, landing pages, and CRM journeys end-to-end',
      'Grew the Instagram following using content and performance-led distribution strategies',
      'Played a pivotal role in launching ITM B.Tech, delivering the lowest CPL across all verticals',
      'Collaborated closely with design and video teams to improve creative effectiveness and output',
    ],
  },
  {
    period: 'May 2022 – Dec 2022',
    company: 'LetsUpgrade',
    companyTagline: 'EdTech · Navi Mumbai',
    title: 'Special Initiatives Executive',
    isCurrent: false,
    achievements: [
      'Managed large-scale free coding bootcamps and end-to-end learner operations',
      'Improved onboarding and retention rates through structured CRM journeys and communication flows',
      'Supported early paid marketing efforts by handling CRM workflows and campaign operations',
      'Built internal reports to track acquisition, engagement, and drop-off points across the funnel',
      'Managed community channels and mass outreach at scale during early growth stages',
    ],
  },
];

export function CareerJourney() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section
      id="experience"
      style={{ background: '#FAFAFA', padding: '96px 24px' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 64 }}
        >
          <p
            style={{
              color: '#888',
              fontSize: 12,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: 16,
            }}
          >
            Work Experience
          </p>
          <h2
            style={{
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              fontWeight: 900,
              color: '#0A0A0A',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            Where I've
            <br />
            been building.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
            >
              <div
                style={{
                  borderRadius: 20,
                  overflow: 'hidden',
                  border: step.isCurrent ? '1.5px solid #FFD60A' : '1.5px solid #E8E8E8',
                  background: '#fff',
                  boxShadow: step.isCurrent ? '0 4px 32px rgba(255,214,10,0.12)' : '0 2px 12px rgba(0,0,0,0.04)',
                  transition: 'box-shadow 0.2s',
                }}
              >
                {/* Header row */}
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  aria-expanded={expandedIndex === index}
                  aria-controls={`experience-panel-${index}`}
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    textAlign: 'left',
                    background: 'none',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#FAFAFA')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
                >
                  {/* Current dot */}
                  {step.isCurrent && (
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        background: '#FFD60A',
                        flexShrink: 0,
                        boxShadow: '0 0 0 3px rgba(255,214,10,0.2)',
                      }}
                    />
                  )}

                  <div style={{ flex: 1, minWidth: 0 }}>
                    {/* Period + current badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: step.isCurrent ? '#b8980a' : '#999',
                          background: step.isCurrent ? '#FFFBEA' : '#F5F5F5',
                          padding: '3px 10px',
                          borderRadius: 999,
                        }}
                      >
                        {step.period}
                      </span>
                      {step.isCurrent && (
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            color: '#16a34a',
                            background: '#F0FDF4',
                            border: '1px solid #bbf7d0',
                            padding: '2px 8px',
                            borderRadius: 999,
                          }}
                        >
                          Current
                        </span>
                      )}
                    </div>

                    <h3
                      style={{
                        fontSize: 'clamp(17px, 2.5vw, 22px)',
                        fontWeight: 800,
                        color: '#0A0A0A',
                        marginBottom: 4,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ fontSize: 14, color: '#999' }}>
                      {step.company} · {step.companyTagline}
                    </p>
                  </div>

                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ flexShrink: 0 }}
                  >
                    <ChevronDown style={{ width: 20, height: 20, color: '#BABABA' }} />
                  </motion.div>
                </button>

                {/* Expanded body */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      id={`experience-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        style={{
                          padding: '4px 28px 28px 28px',
                          borderTop: '1px solid #F0F0F0',
                        }}
                      >
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 20 }}>
                          {step.achievements.map((item, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -16 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.22, delay: idx * 0.04 }}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 12,
                                color: '#555',
                                fontSize: 15,
                                lineHeight: 1.65,
                              }}
                            >
                              <span
                                style={{
                                  display: 'inline-block',
                                  width: 6,
                                  height: 6,
                                  borderRadius: '50%',
                                  background: '#FFD60A',
                                  flexShrink: 0,
                                  marginTop: 8,
                                }}
                              />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
