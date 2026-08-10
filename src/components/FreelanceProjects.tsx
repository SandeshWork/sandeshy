import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    index: '01',
    name: 'Boho Tales',
    url: 'https://www.bohotales.com',
    displayUrl: 'bohotales.com',
    sector: 'D2C · Home Decor',
    focus: 'Meta Ads & Shopify CRO',
    description:
      'Running Meta Ads and Shopify CRO at 2.5 ROAS. Built a reporting automation that pulls daily data from GA4, Shopify, and the ad platforms at product level, so the full funnel is visible in one place, from spend and traffic to product level revenue.',
    tags: ['Meta Ads', 'Shopify CRO', 'Reporting Automation', 'GA4'],
    accent: '#FF8C42',
  },
  {
    index: '02',
    name: 'Simira Diagnostics',
    url: 'https://www.simiradiagnostics.com',
    displayUrl: 'simiradiagnostics.com',
    sector: 'B2C · Healthcare',
    focus: 'Lead Generation',
    description:
      'Running Google Ads, Meta Ads, and LinkedIn Ads to drive patient inquiries. Monthly performance reporting covers cost per lead and volume across all three channels.',
    tags: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Performance Reporting'],
    accent: '#3B82F6',
  },
  {
    index: '03',
    name: 'CE Infrastructure',
    url: 'https://www.ceinfrastructure.in',
    displayUrl: 'ceinfrastructure.in',
    sector: 'B2B · Infrastructure',
    focus: 'LinkedIn Growth',
    description:
      'Helping CE Infrastructure build credibility and visibility on LinkedIn to open new business opportunities. Also designed and built their website, giving the brand a strong digital foundation to grow from.',
    tags: ['LinkedIn Strategy', 'Content Marketing', 'Organic Growth', 'Website Development'],
    accent: '#8B5CF6',
  },
];

export function FreelanceProjects() {
  return (
    <section
      id="freelance-work"
      style={{
        background: '#0F0F0F',
        padding: '96px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(255,214,10,0.3), transparent)',
        }}
      />

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
              color: 'rgba(255,255,255,0.3)',
              fontSize: 12,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: 16,
            }}
          >
            Freelance Work
          </p>
          <h2
            style={{
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              marginBottom: 20,
            }}
          >
            Brands I'm
            <br />
            <span style={{ color: '#FFD60A' }}>building right now.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 17, maxWidth: 480, lineHeight: 1.6 }}>
            Independently managed projects alongside full-time work, each with a different challenge and channel focus.
          </p>
        </motion.div>

        {/* Project cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              style={{
                borderRadius: 20,
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)',
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                transition: 'border-color 0.2s, background 0.2s',
                backdropFilter: 'blur(10px)',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.16)';
                el.style.background = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.08)';
                el.style.background = 'rgba(255,255,255,0.03)';
              }}
            >
              {/* Top row */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.2)',
                  }}
                >
                  {project.index}
                </span>

                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = '#FFD60A';
                    el.style.borderColor = '#FFD60A';
                    el.style.color = '#000';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'rgba(255,255,255,0.05)';
                    el.style.borderColor = 'rgba(255,255,255,0.12)';
                    el.style.color = 'rgba(255,255,255,0.5)';
                  }}
                >
                  <ArrowUpRight style={{ width: 15, height: 15 }} />
                </motion.a>
              </div>

              {/* Name + URL */}
              <div>
                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 800,
                    color: '#fff',
                    letterSpacing: '-0.01em',
                    marginBottom: 4,
                  }}
                >
                  {project.name}
                </h3>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{project.displayUrl}</p>
              </div>

              {/* Sector + focus tags */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: 999,
                    background: 'rgba(255,255,255,0.07)',
                    color: 'rgba(255,255,255,0.55)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {project.sector}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: 999,
                    background: 'rgba(255,214,10,0.08)',
                    color: '#FFD60A',
                    border: '1px solid rgba(255,214,10,0.15)',
                  }}
                >
                  {project.focus}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  color: 'rgba(255,255,255,0.45)',
                  fontSize: 14,
                  lineHeight: 1.7,
                  flex: 1,
                }}
              >
                {project.description}
              </p>

              {/* Service tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      padding: '5px 10px',
                      borderRadius: 8,
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      color: 'rgba(255,255,255,0.4)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
