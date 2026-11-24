import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Achievements',   href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume',         href: '#resume' },
  { label: 'Contact',        href: '#contact' },
];

/* ── Animated RA logo ──────────────────── */
const RALogo = ({ onClick }) => (
  <motion.button
    onClick={onClick}
    className="flex items-center gap-3 group shrink-0"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.97 }}
    aria-label="Go to top"
  >
    {/* Monogram badge */}
    <div className="relative">
      <motion.div
        className="w-10 h-10 rounded-[0.75rem] flex items-center justify-center relative overflow-hidden"
        style={{ background: 'var(--botanical)' }}
        whileHover={{ rotate: 3 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        {/* Inner shine */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 55%)',
          }}
        />
        <span
          className="relative z-10 text-sm font-bold tracking-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: 'var(--porcelain)',
            letterSpacing: '-0.01em',
          }}
        >
          RA
        </span>
      </motion.div>
      {/* Soft outer glow */}
      <div
        className="absolute inset-0 rounded-[0.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: '0 0 20px rgba(53,69,53,0.3)',
          background: 'transparent',
        }}
      />
    </div>

    {/* Text block */}
    <div className="hidden sm:flex flex-col leading-none">
      <span
        className="text-sm font-semibold tracking-wide"
        style={{ color: 'var(--botanical)', fontFamily: "'DM Sans', sans-serif" }}
      >
        Rishika Athchara
      </span>
      <span
        className="text-[0.6rem] font-medium tracking-[0.18em] uppercase mt-0.5"
        style={{ color: 'var(--text-muted)' }}
      >
        Personal Portfolio
      </span>
    </div>
  </motion.button>
);

/* ── Desktop Nav Link ──────────────────── */
const NavLink = ({ link, active, onClick }) => (
  <li>
    <button
      onClick={() => onClick(link.href, link.label)}
      className="relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
      style={{
        color: active === link.label ? 'var(--botanical)' : 'var(--text-secondary)',
      }}
      onMouseEnter={(e) => {
        if (active !== link.label)
          e.currentTarget.style.color = 'var(--botanical)';
      }}
      onMouseLeave={(e) => {
        if (active !== link.label)
          e.currentTarget.style.color = 'var(--text-secondary)';
      }}
    >
      {active === link.label && (
        <motion.span
          layoutId="navPill"
          className="absolute inset-0 rounded-full"
          style={{
            background: 'rgba(168,185,154,0.22)',
            border: '1px solid rgba(168,185,154,0.42)',
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
        />
      )}
      <span className="relative z-10">{link.label}</span>
    </button>
  </li>
);

/* ════════════════════════════════════════
   NAVBAR COMPONENT
════════════════════════════════════════ */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDir, setScrollDir]   = useState('up');
  const [active, setActive]         = useState('Home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setScrollDir(y > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = y;

      /* Active section detection with nav offset compensation */
      const ids = navLinks.map(l => l.href.replace('#', ''));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActive(navLinks[i].label);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href, label) => {
    setActive(label);
    setMobileOpen(false);
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -104, duration: 1.2 });
      } else {
        const navOffset = 104;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed z-50 w-full flex justify-center px-4"
        style={{ top: 14 }}
      >
        <motion.div
          className="w-full"
          style={{ maxWidth: '1240px' }}
          animate={{ y: scrolled && scrollDir === 'down' ? 0 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="flex items-center justify-between px-4 sm:px-6 rounded-[2rem]"
            style={{
              height: scrolled ? '58px' : '66px',
              background: scrolled
                ? 'rgba(252,251,247,0.92)'
                : 'rgba(252,251,247,0.78)',
              backdropFilter:  'blur(28px) saturate(1.5)',
              WebkitBackdropFilter: 'blur(28px) saturate(1.5)',
              border: '1px solid rgba(255,255,255,0.85)',
              boxShadow: scrolled
                ? '0 8px 40px rgba(52,70,56,0.12), 0 2px 8px rgba(52,70,56,0.06), inset 0 1px 0 rgba(255,255,255,0.65)'
                : '0 4px 24px rgba(52,70,56,0.07), inset 0 1px 0 rgba(255,255,255,0.5)',
              transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            {/* Logo */}
            <RALogo onClick={() => handleNav('#home', 'Home')} />

            {/* Desktop nav links */}
            <ul className="hidden xl:flex items-center gap-1">
              {navLinks.map(link => (
                <NavLink key={link.label} link={link} active={active} onClick={handleNav} />
              ))}
            </ul>

            {/* Intermediate screens (md-lg) compact nav links */}
            <ul className="hidden md:flex xl:hidden items-center gap-0.5">
              {navLinks.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href, link.label)}
                    className="relative px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
                    style={{
                      color: active === link.label ? 'var(--botanical)' : 'var(--text-secondary)',
                    }}
                  >
                    {active === link.label && (
                      <motion.span
                        layoutId="navPillMd"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'rgba(169,185,154,0.22)',
                          border: '1px solid rgba(169,185,154,0.42)',
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              {/* "Hire Me" CTA – links to Contact */}
              <motion.button
                onClick={() => handleNav('#contact', 'Contact')}
                className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide cursor-pointer"
                style={{
                  background: 'var(--botanical)',
                  color: 'var(--porcelain)',
                  letterSpacing: '0.06em',
                }}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <span>✦</span>
                <span>HIRE ME</span>
              </motion.button>

              {/* Hamburger */}
              <motion.button
                className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                style={{ background: 'rgba(168,185,154,0.18)', color: 'var(--botanical)' }}
                onClick={() => setMobileOpen(v => !v)}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <X size={18} />
                    </motion.span>
                  ) : (
                    <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Menu size={18} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-40 left-4 right-4 rounded-3xl overflow-hidden"
            style={{
              top: 90,
              background: 'rgba(253,252,248,0.95)',
              backdropFilter: 'blur(32px)',
              WebkitBackdropFilter: 'blur(32px)',
              border: '1px solid rgba(255,255,255,0.8)',
              boxShadow: '0 20px 60px rgba(53,69,53,0.16)',
            }}
          >
            {/* Inner shine */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 60%)',
              }}
            />
            <ul className="relative z-10 p-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.055, duration: 0.3 }}
                >
                  <button
                    onClick={() => handleNav(link.href, link.label)}
                    className="w-full text-left px-5 py-3.5 rounded-2xl text-base font-medium transition-all duration-200 flex items-center justify-between"
                    style={{
                      color: active === link.label ? 'var(--botanical)' : 'var(--text-secondary)',
                      background: active === link.label ? 'rgba(168,185,154,0.18)' : 'transparent',
                    }}
                  >
                    <span>{link.label}</span>
                    {active === link.label && (
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--botanical)' }} />
                    )}
                  </button>
                </motion.li>
              ))}
              {/* Mobile hire-me */}
              <motion.li
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.055 }}
                className="pt-2"
              >
                <button
                  onClick={() => handleNav('#contact', 'Contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold tracking-wide"
                  style={{
                    background: 'var(--botanical)',
                    color: 'var(--porcelain)',
                  }}
                >
                  ✦ Hire Me
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
