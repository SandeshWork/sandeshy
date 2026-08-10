import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const HIRE_URL = 'https://www.hookhunters.com';

const navLinks = [
  { label: 'What I Do', id: 'what-i-do' },
  { label: 'Agents', id: 'agents' },
  { label: 'Experience', id: 'experience' },
  { label: 'Case Studies', id: 'portfolio' },
  { label: 'Contact', id: 'footer' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) return;

    const allSections = [{ id: 'home' }, ...navLinks];
    const observers: IntersectionObserver[] = [];

    allSections.forEach(section => {
      const el = document.getElementById(section.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(section.id); },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [isHome]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <motion.div whileHover={{ scale: 1.04 }} style={{ color: '#fff', fontWeight: 800, fontSize: 18, letterSpacing: '-0.01em' }}>
            sandeshy<span style={{ color: '#FFD60A' }}>.</span>
          </motion.div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          {isHome && navLinks.map(link => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  fontSize: 13,
                  fontWeight: isActive ? 700 : 400,
                  color: isActive ? '#FFD60A' : 'rgba(255,255,255,0.5)',
                  position: 'relative',
                  padding: '4px 0',
                  transition: 'color 0.2s',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    style={{
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: '#FFD60A',
                      borderRadius: 2,
                    }}
                  />
                )}
              </button>
            );
          })}

          <a href={HIRE_URL} target="_blank" rel="noopener noreferrer">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: 'inline-block',
                padding: '8px 20px',
                background: '#FFD60A',
                color: '#000',
                fontSize: 13,
                fontWeight: 800,
                borderRadius: 999,
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#FFE040')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#FFD60A')}
            >
              Hire Me
            </motion.span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(o => !o)} style={{ color: '#fff', padding: 8, background: 'none', border: 'none', cursor: 'pointer' }} className="md:hidden">
          {menuOpen ? <X style={{ width: 22, height: 22 }} /> : <Menu style={{ width: 22, height: 22 }} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: '#0A0A0A', borderTop: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}
            className="md:hidden"
          >
            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {isHome && navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  style={{
                    textAlign: 'left',
                    fontSize: 16,
                    fontWeight: activeSection === link.id ? 700 : 400,
                    color: activeSection === link.id ? '#FFD60A' : 'rgba(255,255,255,0.65)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px 0',
                  }}
                >
                  {link.label}
                </button>
              ))}
              <a href={HIRE_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none' }}>
                <div style={{ marginTop: 8, padding: '12px 0', background: '#FFD60A', color: '#000', fontWeight: 800, borderRadius: 999, textAlign: 'center', fontSize: 14 }}>
                  Hire Me
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
