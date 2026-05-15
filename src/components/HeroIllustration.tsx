import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

const bars = [28, 42, 36, 54, 47, 63, 56, 71, 65, 82, 75, 100];

const chips = [
  { label: 'ROAS',  value: '3.2×', color: '#FFD60A', shadow: 'rgba(255,214,10,0.25)',  left: 5,   top: 50,  delay: 0 },
  { label: 'Reach', value: '1.2M', color: '#60A5FA', shadow: 'rgba(96,165,250,0.2)',   left: 278, top: 30,  delay: 0.5 },
  { label: 'CTR',   value: '4.8%', color: '#4ADE80', shadow: 'rgba(74,222,128,0.2)',   left: 5,   top: 408, delay: 1 },
  { label: 'Conv',  value: '18%',  color: '#F472B6', shadow: 'rgba(244,114,182,0.2)',  left: 280, top: 422, delay: 1.5 },
];

export function HeroIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-260, 260], [14, -14]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mx, [-200, 200], [-16, 16]), { stiffness: 200, damping: 30 });

  return (
    <div
      ref={ref}
      onMouseMove={e => {
        const r = ref.current!.getBoundingClientRect();
        mx.set(e.clientX - r.left - r.width / 2);
        my.set(e.clientY - r.top - r.height / 2);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      style={{ width: 400, height: 520, position: 'relative', perspective: 1000 }}
    >

      {/* ── Ambient glow ── */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 380, height: 380,
        background: 'radial-gradient(circle, rgba(255,214,10,0.1) 0%, transparent 68%)',
        pointerEvents: 'none',
      }} />

      {/* ── Subtle dot grid ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 0%, transparent 100%)',
      }} />

      {/* ── Dashed connecting lines ── */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
        <line x1="60"  y1="76"  x2="140" y2="175" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="5 5" />
        <line x1="328" y1="56"  x2="290" y2="175" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="5 5" />
        <line x1="60"  y1="434" x2="130" y2="363" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="5 5" />
        <line x1="330" y1="448" x2="270" y2="363" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="5 5" />
      </svg>

      {/* ── Metric chips ── */}
      {chips.map((chip, i) => (
        <motion.div
          key={chip.label}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1, y: [0, i % 2 === 0 ? -8 : 8, 0] }}
          transition={{
            opacity: { delay: 0.4 + chip.delay, duration: 0.4 },
            scale:   { delay: 0.4 + chip.delay, duration: 0.4 },
            y: { duration: 3.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: chip.delay },
          }}
          style={{
            position: 'absolute',
            left: chip.left,
            top: chip.top,
            zIndex: 10,
            background: 'rgba(10,10,10,0.9)',
            border: `1px solid ${chip.color}28`,
            borderRadius: 14,
            padding: '10px 16px',
            backdropFilter: 'blur(14px)',
            boxShadow: `0 10px 30px rgba(0,0,0,0.55), 0 0 0 1px ${chip.color}14, 0 4px 20px ${chip.shadow}`,
            minWidth: 86,
          }}
        >
          <p style={{
            fontSize: 8, color: 'rgba(255,255,255,0.32)',
            fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', marginBottom: 4,
          }}>
            {chip.label}
          </p>
          <p style={{ fontSize: 20, fontWeight: 900, color: chip.color, lineHeight: 1, letterSpacing: '-0.02em' }}>
            {chip.value}
          </p>
        </motion.div>
      ))}

      {/* ── Main dashboard card (3D tilt) ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        style={{
          position: 'absolute',
          left: 60, top: 155,
          width: 280,
          rotateX, rotateY,
          transformStyle: 'preserve-3d',
          zIndex: 5,
        }}
      >
        {/* Shadow depth plane */}
        <div style={{
          position: 'absolute', inset: 0,
          borderRadius: 22,
          background: 'rgba(0,0,0,0.5)',
          transform: 'translateZ(-24px) translateY(18px) scale(0.96)',
          filter: 'blur(24px)',
        }} />

        {/* Card face */}
        <div style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.03) 100%)',
          border: '1px solid rgba(255,255,255,0.11)',
          borderRadius: 22,
          padding: '24px 22px 20px',
          boxShadow: '0 40px 80px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.14)',
          position: 'relative',
          overflow: 'hidden',
        }}>

          {/* Top sheen */}
          <div style={{
            position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent)',
          }} />

          {/* Header */}
          <div style={{ marginBottom: 18 }}>
            <p style={{
              fontSize: 8, color: 'rgba(255,255,255,0.28)',
              fontWeight: 700, letterSpacing: '0.15em',
              textTransform: 'uppercase', marginBottom: 8,
            }}>
              Campaign Performance
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <span style={{ fontSize: 32, color: '#fff', fontWeight: 900, letterSpacing: '-0.03em' }}>+34%</span>
              <span style={{ fontSize: 11, color: '#4ADE80', fontWeight: 700 }}>↑ vs last month</span>
            </div>
          </div>

          {/* Animated bar chart */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 64 }}>
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.7 + i * 0.045, duration: 0.5, ease: [0.34, 1.4, 0.64, 1] }}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  borderRadius: '3px 3px 0 0',
                  transformOrigin: 'bottom',
                  background: i === bars.length - 1
                    ? '#FFD60A'
                    : `rgba(255,214,10,${0.1 + (i / (bars.length - 1)) * 0.5})`,
                }}
              />
            ))}
          </div>

          {/* X-axis labels */}
          <div style={{ display: 'flex', marginTop: 7 }}>
            {['J','F','M','A','M','J','J','A','S','O','N','D'].map((m, i) => (
              <span key={i} style={{
                flex: 1, textAlign: 'center',
                fontSize: 7, color: 'rgba(255,255,255,0.18)', fontWeight: 600,
              }}>
                {m}
              </span>
            ))}
          </div>

          {/* Platform tags */}
          <div style={{ marginTop: 16, display: 'flex', gap: 6 }}>
            {['Meta Ads', 'Google', 'CRM'].map(tag => (
              <span key={tag} style={{
                fontSize: 9, fontWeight: 700, letterSpacing: '0.06em',
                padding: '3px 9px', borderRadius: 999,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.4)',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

    </div>
  );
}
