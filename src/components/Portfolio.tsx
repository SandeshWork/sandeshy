import { motion } from 'motion/react';
import { ExternalLink, FileText, Play, Users, Video, Calendar, TrendingUp } from 'lucide-react';
import image_430c5960 from '../assets/430c5960ce08d40419be78ebd48afa5d8b803bd8.png';

const freelanceCases = [
  {
    client: 'Bohotales',
    url: 'https://www.bohotales.com',
    industry: 'Mid-Premium Home Decor',
    type: 'D2C · E-commerce',
    platform: 'Meta Ads & Shopify CRO',
    platformDetail: 'Facebook & Instagram',
    timeline: 'Apr 2026 – Present',
    roas: '2.5×',
    roasLabel: 'ROAS on Shopify',
    context: 'Running Meta Ads and Shopify CRO for a D2C home decor brand. Built a reporting automation that pulls daily data from GA4, Shopify, and the ad platforms at product level.',
    highlights: [
      'Meta Ads and Shopify CRO run together, not as separate workstreams',
      'Reporting automation pulls GA4, Shopify, and ad platform data daily at product level',
      'Full funnel visible in one place, from spend and traffic to product level revenue',
    ],
    tags: ['Meta Ads', 'Shopify CRO', 'Reporting Automation', 'GA4'],
    accent: '#FF8C42',
  },
  {
    client: 'Simira Diagnostics',
    url: 'https://www.simiradiagnostics.com',
    industry: 'Healthcare / Diagnostics',
    type: 'B2C · Healthcare',
    platform: 'Google, Meta & LinkedIn Ads',
    platformDetail: 'Search, Social & B2B',
    timeline: 'Apr 2026 – Present',
    roas: '2.8×',
    roasLabel: 'ROAS via Google Ads',
    context: 'Running Google Ads, Meta Ads, and LinkedIn Ads to drive patient and lead inquiries, with monthly performance reporting across all three channels.',
    highlights: [
      'Search, social, and LinkedIn campaigns running together for patient and lead inquiries',
      'Monthly performance reporting covers cost per lead and volume by channel',
      'Conversion tracking set up via GTM + GA4 across all campaigns',
    ],
    tags: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Performance Reporting'],
    accent: '#3B82F6',
  },
];

function YtIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const brochures = [
  {
    title: 'Applied AI Engineering Brochure',
    pages: 16,
    link: 'https://drive.google.com/file/d/1X2QyxiEdcpIU-VODod4-j0y_DeA4mHWv/view?usp=sharing',
  },
  {
    title: "BBA iConnect Bachelor's Program",
    pages: 20,
    link: 'https://drive.google.com/file/d/1j1ucb9rjjwQRK9kAF1hbnNjocP1S6VwL/view?usp=sharing',
  },
  {
    title: 'School of FutureTech (B.Tech CSE)',
    pages: 20,
    link: 'https://drive.google.com/file/d/1IX6ex8j7WIURvM0nkEt5lHVQ8bwA-06U/view?usp=sharing',
  },
];

const channelStats = [
  { icon: Video, label: 'Content Types', value: 'Podcasts · Reels · Ads · Interviews' },
  { icon: Users, label: 'Team', value: 'Production Lead + Editor Team' },
  { icon: Calendar, label: 'Volume', value: '~50 videos / month' },
  { icon: YtIcon, label: 'Channel', value: 'School of FutureTech' },
];

export function Portfolio() {
  return (
    <section id="portfolio" style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 72 }}
        >
          <p style={{ color: '#888', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>
            Portfolio
          </p>
          <h2 style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 900, color: '#0A0A0A', lineHeight: 1, letterSpacing: '-0.02em' }}>
            Work that
            <br />
            <span style={{ color: '#FFD60A' }}>speaks for itself.</span>
          </h2>
        </motion.div>

        {/* ── YouTube Channel Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 80 }}
        >
          <p style={{ color: '#888', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>
            YouTube Channel Management
          </p>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: '#0A0A0A', marginBottom: 32, letterSpacing: '-0.01em' }}>
            School of FutureTech
          </h3>

          <div
            style={{
              background: '#0A0A0A',
              borderRadius: 24,
              padding: '40px 40px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 40,
              alignItems: 'center',
            }}
          >
            {/* Left: channel identity */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 16,
                    background: '#FF0000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <YtIcon style={{ width: 28, height: 28, color: '#fff' }} />
                </div>
                <div>
                  <p style={{ color: '#fff', fontWeight: 800, fontSize: 18, lineHeight: 1.2 }}>School of FutureTech</p>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 4 }}>
                    Managed end-to-end channel operations
                  </p>
                </div>
              </div>

              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.75, marginBottom: 28 }}>
                Led full YouTube production for School of FutureTech, managing a team of video editors, overseeing
                content strategy, and driving output across formats including podcasts, short-form reels, brand ads,
                and faculty interviews.
              </p>

              <motion.a
                href="https://www.youtube.com/@schooloffuturetech"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '12px 24px',
                  background: '#FF0000',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 14,
                  borderRadius: 999,
                  textDecoration: 'none',
                }}
              >
                <Play style={{ width: 14, height: 14 }} />
                Visit Channel
              </motion.a>
            </div>

            {/* Right: stat grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {channelStats.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  style={{
                    padding: '18px 16px',
                    borderRadius: 14,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <Icon style={{ width: 16, height: 16, color: '#FFD60A', marginBottom: 10 }} />
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
                    {label}
                  </p>
                  <p style={{ fontSize: 13, color: '#fff', fontWeight: 700, lineHeight: 1.4 }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Event Marketing ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 80 }}
        >
          <p style={{ color: '#888', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>
            Event Marketing
          </p>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: '#0A0A0A', marginBottom: 32, letterSpacing: '-0.01em' }}>
            GenAI Hackathon
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 32,
              alignItems: 'start',
            }}
          >
            <motion.a
              href="https://drive.google.com/drive/folders/1f_GTMskf_hsuLIUnB52_e71Oj1Guq8F9?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.015 }}
              style={{
                display: 'block',
                borderRadius: 20,
                overflow: 'hidden',
                border: '1px solid #E8E8E8',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                position: 'relative',
              }}
            >
              <img
                src={image_430c5960}
                alt="GenAI Hackathon Event"
                style={{ width: '100%', display: 'block', height: 200, objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 12,
                  right: 12,
                  background: 'rgba(0,0,0,0.72)',
                  color: '#fff',
                  fontSize: 11,
                  fontWeight: 600,
                  padding: '4px 10px',
                  borderRadius: 999,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                  backdropFilter: 'blur(8px)',
                }}
              >
                <ExternalLink style={{ width: 11, height: 11 }} />
                View Gallery
              </div>
            </motion.a>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ color: '#444', fontSize: 15, lineHeight: 1.75 }}>
                End-to-end event marketing execution, from awareness campaigns and registrations to on-ground
                branding, communication, and post-event content. Managed the full marketing operation for a GenAI
                hackathon hosted by LetsUpgrade.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Event Strategy', 'Email & WhatsApp Campaigns', 'On-Ground Branding', 'Post-Event Content'].map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      padding: '5px 14px',
                      borderRadius: 999,
                      background: '#F5F5F5',
                      color: '#555',
                      border: '1px solid #E8E8E8',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Freelance Case Studies ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 80 }}
        >
          <p style={{ color: '#888', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>
            Freelance Consulting
          </p>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: '#0A0A0A', marginBottom: 8, letterSpacing: '-0.01em' }}>
            Performance Marketing
          </h3>
          <p style={{ color: '#888', fontSize: 15, marginBottom: 32 }}>
            Paid acquisition campaigns managed independently alongside full-time work
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
            {freelanceCases.map((c, index) => (
              <motion.div
                key={c.client}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: '#0A0A0A',
                  borderRadius: 20,
                  padding: 28,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                  border: '1px solid rgba(255,255,255,0.07)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* top accent line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(90deg, ${c.accent}, transparent)`,
                  borderRadius: '20px 20px 0 0',
                }} />

                {/* Header row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                        padding: '3px 8px', borderRadius: 999,
                        background: 'rgba(255,214,10,0.1)', color: '#FFD60A',
                        border: '1px solid rgba(255,214,10,0.2)',
                      }}>
                        Freelance
                      </span>
                      <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                        padding: '3px 8px', borderRadius: 999,
                        background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.45)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}>
                        {c.platform}
                      </span>
                    </div>
                    <h4 style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: '-0.01em' }}>
                      {c.client}
                    </h4>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>{c.type} · {c.timeline}</p>
                  </div>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: '1px solid rgba(255,255,255,0.12)',
                      background: 'rgba(255,255,255,0.05)',
                      color: 'rgba(255,255,255,0.45)',
                      textDecoration: 'none', transition: 'all 0.2s',
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
                      el.style.color = 'rgba(255,255,255,0.45)';
                    }}
                  >
                    <ExternalLink style={{ width: 14, height: 14 }} />
                  </a>
                </div>

                {/* ROAS stat */}
                <div style={{
                  padding: '16px 20px', borderRadius: 14,
                  background: 'rgba(255,214,10,0.06)',
                  border: '1px solid rgba(255,214,10,0.15)',
                  display: 'flex', alignItems: 'center', gap: 14,
                }}>
                  <TrendingUp style={{ width: 20, height: 20, color: '#FFD60A', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: 28, fontWeight: 900, color: '#FFD60A', lineHeight: 1, letterSpacing: '-0.02em' }}>
                      {c.roas}
                    </p>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 3, fontWeight: 600 }}>
                      {c.roasLabel}
                    </p>
                  </div>
                </div>

                {/* Context */}
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
                  {c.context}
                </p>

                {/* Highlights */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'none', padding: 0, margin: 0 }}>
                  {c.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{
                        width: 5, height: 5, borderRadius: '50%', marginTop: 7, flexShrink: 0,
                        background: c.accent,
                      }} />
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {c.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 8,
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      color: 'rgba(255,255,255,0.4)',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Design & Print ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p style={{ color: '#888', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>
            Design & Print
          </p>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: '#0A0A0A', marginBottom: 8, letterSpacing: '-0.01em' }}>
            Programme Brochures
          </h3>
          <p style={{ color: '#888', fontSize: 15, marginBottom: 32 }}>
            Designed for ITM University admissions campaigns
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 16,
            }}
          >
            {brochures.map((brochure, index) => (
              <motion.a
                key={index}
                href={brochure.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  padding: 24,
                  borderRadius: 16,
                  border: '1px solid #E8E8E8',
                  background: '#fff',
                  textDecoration: 'none',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = '#FFD60A';
                  el.style.boxShadow = '0 8px 32px rgba(255,214,10,0.15)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = '#E8E8E8';
                  el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)';
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: '#FFFBEA',
                    border: '1px solid rgba(255,214,10,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FileText style={{ width: 22, height: 22, color: '#b8980a' }} />
                </div>

                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: '#0A0A0A', lineHeight: 1.4, marginBottom: 6 }}>
                    {brochure.title}
                  </h4>
                  <p style={{ fontSize: 13, color: '#AAA' }}>{brochure.pages} pages</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, color: '#b8980a' }}>
                  View PDF
                  <ExternalLink style={{ width: 13, height: 13 }} />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
