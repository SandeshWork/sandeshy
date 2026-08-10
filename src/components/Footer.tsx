import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

function LinkedInIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socials = [
  {
    Icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/sandesh-yewale-13fb01/',
    label: 'LinkedIn',
  },
  {
    Icon: InstagramIcon,
    href: 'https://www.instagram.com/hookhunters_/',
    label: 'Instagram',
  },
];

export function Footer() {
  return (
    <footer
      id="footer"
      style={{
        background: '#0A0A0A',
        padding: '96px 24px 48px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top border glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(255,214,10,0.4), transparent)',
        }}
      />

      {/* Background grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Big CTA headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 64 }}
        >
          <h2
            style={{
              fontSize: 'clamp(40px, 7vw, 96px)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              marginBottom: 32,
            }}
          >
            Want the media
            <br />
            <span style={{ color: '#FFD60A' }}>and the systems, one hire?</span>
          </h2>

          <p
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: 18,
              maxWidth: 480,
              lineHeight: 1.6,
              marginBottom: 40,
            }}
          >
            Whether it's a full-funnel campaign, a tracking setup, or a marketing system, I'm open to the right opportunity.
          </p>

          <div className="flex gap-4 flex-wrap" style={{ alignItems: 'center' }}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hireme@sandeshy.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '16px 32px',
                background: '#FFD60A',
                color: '#000',
                fontWeight: 800,
                fontSize: 16,
                borderRadius: 999,
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.15s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#FFE040';
                el.style.transform = 'scale(1.04)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#FFD60A';
                el.style.transform = 'scale(1)';
              }}
            >
              hireme@sandeshy.com
              <ArrowUpRight style={{ width: 18, height: 18 }} />
            </a>

            <a
              href="https://drive.google.com/uc?export=download&id=10hsISQ3Jo0dk6JZStQVcGKKfjGrXMbF5"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '16px 24px',
                color: 'rgba(255,255,255,0.65)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 999,
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 600,
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = '#fff';
                el.style.borderColor = 'rgba(255,255,255,0.35)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'rgba(255,255,255,0.65)';
                el.style.borderColor = 'rgba(255,255,255,0.15)';
              }}
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 24,
            paddingTop: 40,
            borderTop: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {/* Logo */}
          <span style={{ color: '#fff', fontWeight: 800, fontSize: 18, letterSpacing: '-0.01em' }}>
            sandeshy<span style={{ color: '#FFD60A' }}>.</span>
          </span>

          {/* Social links */}
          <div style={{ display: 'flex', gap: 12 }}>
            {socials.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.04)',
                  color: 'rgba(255,255,255,0.55)',
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
                  el.style.background = 'rgba(255,255,255,0.04)';
                  el.style.borderColor = 'rgba(255,255,255,0.12)';
                  el.style.color = 'rgba(255,255,255,0.55)';
                }}
              >
                <Icon style={{ width: 17, height: 17 }} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 13 }}>
            © 2026 Sandesh Yewale
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
