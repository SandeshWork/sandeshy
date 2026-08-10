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

const alsoWorkedWith = [
  {
    name: 'CE Infrastructure',
    url: 'https://www.ceinfrastructure.in',
    displayUrl: 'ceinfrastructure.in',
    description: 'LinkedIn growth and website build for a B2B infrastructure company.',
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
          style={{ marginBottom: 56 }}
        >
          <p style={{ color: '#888', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>
            Case Studies
          </p>
          <h2 style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 900, color: '#0A0A0A', lineHeight: 1, letterSpacing: '-0.02em' }}>
            Work that
            <br />
            <span style={{ color: '#FFD60A' }}>speaks for itself.</span>
          </h2>
        </motion.div>

        {/* ── Case Studies ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 24 }}
        >
          <p style={{ color: '#888', fontSize: 15, marginBottom: 32, maxWidth: 560 }}>
            Paid media accounts I run independently through HookHunters Digital, alongside full-time work at Mopid.
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
                        background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.55)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}>
                        {c.platform}
                      </span>
                    </div>
                    <h4 style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: '-0.01em' }}>
                      {c.client}
                    </h4>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{c.type} · {c.timeline}</p>
                  </div>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${c.client} website`}
                    style={{
                      width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: '1px solid rgba(255,255,255,0.12)',
                      background: 'rgba(255,255,255,0.05)',
                      color: 'rgba(255,255,255,0.55)',
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
                      el.style.color = 'rgba(255,255,255,0.55)';
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
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 3, fontWeight: 600 }}>
                      {c.roasLabel}
                    </p>
                  </div>
                </div>

                {/* Context */}
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
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
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{h}</span>
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
                      color: 'rgba(255,255,255,0.5)',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Also worked with ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: 88, paddingTop: 8 }}
        >
          <p style={{ fontSize: 12, color: '#AAA', display: 'flex', flexWrap: 'wrap', gap: '6px 10px', alignItems: 'center' }}>
            <span style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#999' }}>Also worked with:</span>
            {alsoWorkedWith.map((p, i) => (
              <span key={p.name}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#666', textDecoration: 'underline', textUnderlineOffset: 3 }}
                >
                  {p.name}
                </a>
                {' — '}{p.description}
                {i < alsoWorkedWith.length - 1 ? ',' : ''}
              </span>
            ))}
          </p>
        </motion.div>

        {/* ── Also Built ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ paddingTop: 40, borderTop: '1px solid #EEE' }}
        >
          <p style={{ color: '#AAA', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 28 }}>
            Also Built — Creative &amp; Event Production
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 40 }}>
            {/* YouTube channel, condensed */}
            <div style={{ background: '#FAFAFA', borderRadius: 16, padding: 22, border: '1px solid #EEE' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: '#FF0000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <YtIcon style={{ width: 15, height: 15, color: '#fff' }} />
                </div>
                <p style={{ fontWeight: 700, fontSize: 14, color: '#0A0A0A' }}>School of FutureTech — YouTube</p>
              </div>
              <p style={{ fontSize: 13, color: '#777', lineHeight: 1.6, marginBottom: 14 }}>
                Led full channel production: podcasts, reels, ads, and faculty interviews, ~50 videos/month with a production lead and editor team.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 14, fontSize: 11, color: '#999' }}>
                {channelStats.slice(0, 2).map(({ label, value }) => (
                  <span key={label}>{label}: <b style={{ color: '#555' }}>{value}</b></span>
                ))}
              </div>
              <a
                href="https://www.youtube.com/@schooloffuturetech"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 12, fontWeight: 700, color: '#b8980a', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5 }}
              >
                <Play style={{ width: 11, height: 11 }} />
                Visit Channel
              </a>
            </div>

            {/* GenAI hackathon, condensed */}
            <div style={{ background: '#FAFAFA', borderRadius: 16, padding: 22, border: '1px solid #EEE' }}>
              <div style={{ display: 'flex', gap: 14, marginBottom: 12 }}>
                <img
                  src={image_430c5960}
                  alt="GenAI Hackathon Event"
                  style={{ width: 64, height: 64, borderRadius: 10, objectFit: 'cover', flexShrink: 0 }}
                />
                <div>
                  <p style={{ fontWeight: 700, fontSize: 14, color: '#0A0A0A', marginBottom: 4 }}>GenAI Hackathon — Event Marketing</p>
                  <p style={{ fontSize: 12, color: '#999' }}>Hosted by LetsUpgrade</p>
                </div>
              </div>
              <p style={{ fontSize: 13, color: '#777', lineHeight: 1.6, marginBottom: 14 }}>
                End-to-end event marketing: awareness, registrations, on-ground branding, and post-event content.
              </p>
              <a
                href="https://drive.google.com/drive/folders/1f_GTMskf_hsuLIUnB52_e71Oj1Guq8F9?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 12, fontWeight: 700, color: '#b8980a', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5 }}
              >
                <ExternalLink style={{ width: 11, height: 11 }} />
                View Gallery
              </a>
            </div>
          </div>

          {/* Brochures, condensed row */}
          <div>
            <p style={{ fontSize: 12, color: '#999', marginBottom: 14 }}>Programme brochures designed for ITM University admissions campaigns:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {brochures.map((brochure, index) => (
                <a
                  key={index}
                  href={brochure.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '9px 14px', borderRadius: 10, border: '1px solid #E8E8E8',
                    background: '#fff', textDecoration: 'none', fontSize: 12.5, color: '#555', fontWeight: 600,
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = '#FFD60A')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = '#E8E8E8')}
                >
                  <FileText style={{ width: 13, height: 13, color: '#b8980a', flexShrink: 0 }} />
                  {brochure.title}
                  <span style={{ color: '#AAA', fontWeight: 400 }}>· {brochure.pages}p</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
