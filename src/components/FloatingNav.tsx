import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'what-i-do', label: 'What I Do' },
  { id: 'agents', label: 'Agents' },
  { id: 'experience', label: 'Experience' },
  { id: 'portfolio', label: 'Case Studies' },
  { id: 'footer', label: 'Contact' },
];

export function FloatingNav() {
  const [active, setActive] = useState('home');
  const [hovered, setHovered] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkWidth = () => setVisible(window.innerWidth >= 1024);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const observers: IntersectionObserver[] = [];

    sections.forEach(section => {
      const el = document.getElementById(section.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(section.id); },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [visible]);

  if (!visible) return null;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      style={{
        position: 'fixed',
        right: 20,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 40,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        alignItems: 'center',
        background: 'rgba(10,10,10,0.6)',
        backdropFilter: 'blur(14px)',
        borderRadius: 999,
        padding: '14px 10px',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {sections.map(section => {
        const isActive = active === section.id;
        const isHovered = hovered === section.id;
        const showLabel = isHovered || isActive;

        return (
          <div
            key={section.id}
            style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
            onMouseEnter={() => setHovered(section.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Label – absolutely positioned to the left, never affects dot layout */}
            <div
              style={{
                position: 'absolute',
                right: 'calc(100% + 12px)',
                top: '50%',
                transform: showLabel ? 'translateY(-50%) translateX(0px)' : 'translateY(-50%) translateX(6px)',
                opacity: showLabel ? 1 : 0,
                pointerEvents: showLabel ? 'auto' : 'none',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              <button
                onClick={() => scrollTo(section.id)}
                style={{
                  background: isActive ? '#FFD60A' : 'rgba(15,15,15,0.95)',
                  color: isActive ? '#000' : 'rgba(255,255,255,0.85)',
                  fontSize: 11,
                  fontWeight: 700,
                  padding: '5px 12px',
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer',
                  letterSpacing: '0.03em',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                  transition: 'background 0.2s ease, color 0.2s ease',
                }}
              >
                {section.label}
              </button>
            </div>

            {/* Dot */}
            <motion.button
              onClick={() => scrollTo(section.id)}
              animate={{
                scale: isActive ? 1.5 : isHovered ? 1.2 : 1,
                backgroundColor: isActive
                  ? '#FFD60A'
                  : isHovered
                  ? 'rgba(255,255,255,0.75)'
                  : 'rgba(255,255,255,0.35)',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                flexShrink: 0,
                boxShadow: isActive ? '0 0 10px rgba(255,214,10,0.65)' : 'none',
              }}
              aria-label={`Go to ${section.label}`}
            />
          </div>
        );
      })}
    </div>
  );
}
