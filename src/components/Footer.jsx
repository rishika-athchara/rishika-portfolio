import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowUp, Mail, ExternalLink } from 'lucide-react';

/* ══════════════════════════════════════════════════
   BRAND SVG ICONS — official shapes, inline SVG
══════════════════════════════════════════════════ */
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M16.102 17.93l-2.697 2.607c-.466.466-1.057.874-1.75 1.224-.693.35-1.438.525-2.235.525-.807 0-1.567-.181-2.282-.543-.715-.361-1.293-.83-1.735-1.408-.442-.577-.798-1.174-1.067-1.791-.269-.617-.417-1.258-.444-1.922V4.715c0-.807.282-1.5.846-2.079.564-.578 1.244-.867 2.04-.867h4.78c.806 0 1.498.293 2.078.879.579.586.869 1.283.869 2.09V7.14h2.344V4.715c0-1.546-.54-2.878-1.618-3.996-1.078-1.117-2.37-1.676-3.873-1.676H7.028c-1.503 0-2.794.552-3.873 1.656-1.078 1.104-1.618 2.433-1.618 3.986v14.5c0 1.56.54 2.898 1.618 4.013 1.079 1.116 2.37 1.675 3.873 1.675 1.502 0 2.794-.559 3.873-1.675l1.618-1.558v2.065h2.344v-5.73l-2.344 2.264v.001zm5.07-9.78c-.773-.773-1.701-1.16-2.782-1.16h-.717V5.634h.717c.473 0 .878.167 1.215.5.337.333.505.734.505 1.206 0 .472-.168.874-.504 1.207-.337.332-.742.499-1.216.499h-.717V7.19h.717c1.082 0 2.009-.386 2.782-1.16.772-.773 1.158-1.699 1.158-2.78 0-1.08-.386-2.007-1.158-2.78C21.172.697 20.246.311 19.165.311h-3.062c-1.082 0-2.009.386-2.782 1.16-.773.772-1.159 1.699-1.159 2.78v2.345h-1.629v2.344h1.629v8.593h2.344V9.49h4.657V7.19h-4.657V4.25c0-.473.168-.875.504-1.207.336-.333.741-.5 1.216-.5h3.062c.473 0 .878.167 1.215.5.337.333.505.734.505 1.207 0 .472-.168.874-.504 1.207-.337.332-.742.499-1.216.499h-1.628V7.19h1.628c1.082 0 2.009-.386 2.782-1.16.773-.772 1.159-1.698 1.159-2.78 0-1.08-.386-2.007-1.159-2.78z"/>
  </svg>
);

const CodeChefIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M11.257.004C5.587.004.75 4.841.75 10.511c0 2.651.978 5.079 2.59 6.934l-2.355 3.086a.75.75 0 0 0 .53 1.28h.008l3.556-.033 1.432 1.675a.75.75 0 0 0 1.148 0l1.432-1.675 3.556.033h.008a.75.75 0 0 0 .53-1.28l-2.355-3.086a9.728 9.728 0 0 0 2.651-6.934c0-5.67-4.837-10.507-3.724-10.507zM12 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM9 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM12 11.5a4.5 4.5 0 0 1-4.5 4.5A4.5 4.5 0 0 1 3 11.5h1.5A3 3 0 0 0 7.5 14.5a3 3 0 0 0 3-3H12z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

/* ── Social links data ──────────────────────────── */
const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/rishika-athchara',
    Icon: GitHubIcon,
    brandColor: '#181717',
    glowColor: 'rgba(24,23,23,0.3)',
    bgGlow: 'rgba(24,23,23,0.07)',
    isInstagram: false,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rishika-athchara/',
    Icon: LinkedInIcon,
    brandColor: '#0A66C2',
    glowColor: 'rgba(10,102,194,0.4)',
    bgGlow: 'rgba(10,102,194,0.07)',
    isInstagram: false,
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/rishika2406/',
    Icon: LeetCodeIcon,
    brandColor: '#FFA116',
    glowColor: 'rgba(255,161,22,0.45)',
    bgGlow: 'rgba(255,161,22,0.07)',
    isInstagram: false,
  },
  {
    label: 'CodeChef',
    href: 'https://www.codechef.com/users/rishika_2406',
    Icon: CodeChefIcon,
    brandColor: '#5B4638',
    glowColor: 'rgba(91,70,56,0.35)',
    bgGlow: 'rgba(91,70,56,0.07)',
    isInstagram: false,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/_rish.06_/',
    Icon: InstagramIcon,
    brandColor: '#DD2A7B',
    glowColor: 'rgba(221,42,123,0.4)',
    bgGlow: 'rgba(221,42,123,0.06)',
    isInstagram: true,
  },
  {
    label: 'Email',
    href: 'mailto:rishika.athghara2406@gmail.com',
    Icon: EmailIcon,
    brandColor: '#D14836',
    glowColor: 'rgba(209,72,54,0.4)',
    bgGlow: 'rgba(209,72,54,0.07)',
    isInstagram: false,
  },
];

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'About',   href: '#about' },
  { label: 'Projects',href: '#projects' },
  { label: 'Skills',  href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

/* ── Single social icon button ──────────────────── */
const SocialIconBtn = ({ link, index }) => {
  const [hovered, setHovered] = useState(false);
  const { label, href, Icon, brandColor, glowColor, bgGlow, isInstagram } = link;
  const isMailto = href.startsWith('mailto');

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 + index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, y: 6, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.85 }}
            transition={{ duration: 0.16 }}
            className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap pointer-events-none z-30"
            style={{
              background: brandColor,
              color: '#fff',
              boxShadow: `0 4px 14px ${glowColor}`,
            }}
          >
            {label}
            {/* Arrow */}
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
              style={{ borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: `5px solid ${brandColor}` }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={href}
        target={isMailto ? '_self' : '_blank'}
        rel="noopener noreferrer"
        aria-label={label}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -6, scale: 1.14 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 450, damping: 22 }}
        className="relative flex items-center justify-center w-12 h-12 rounded-2xl"
        style={{
          background: hovered
            ? (isInstagram ? 'linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)' : bgGlow)
            : 'rgba(255,255,255,0.58)',
          border: hovered
            ? `1px solid ${brandColor}55`
            : '1px solid rgba(255,255,255,0.78)',
          color: hovered ? (isInstagram ? '#fff' : brandColor) : 'var(--olive)',
          boxShadow: hovered
            ? `0 8px 24px ${glowColor}, 0 2px 8px ${glowColor}`
            : '0 2px 8px rgba(53,69,53,0.08)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          transition: 'background 0.25s ease, border 0.25s ease, color 0.2s ease, box-shadow 0.3s ease',
        }}
      >
        {/* Inner shine */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 60%)',
            opacity: hovered ? 0.4 : 1,
            transition: 'opacity 0.25s ease',
          }}
        />
        <span className="relative z-10">
          <Icon />
        </span>
      </motion.a>
    </motion.div>
  );
};

/* ════════════════════════════════════════
   FOOTER COMPONENT
════════════════════════════════════════ */
const Footer = () => {
  const year = new Date().getFullYear();

  const handleNav = (href) =>
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, var(--pearl) 0%, #EFF2E8 55%, var(--pistachio) 100%)',
        borderTop: '1px solid rgba(168,185,154,0.2)',
      }}
    >
      {/* Ambient glows */}
      <div
        className="absolute top-0 left-0 w-96 h-96 opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,185,154,0.65) 0%, transparent 70%)',
          transform: 'translate(-35%, -35%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-72 h-72 opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--botanical) 0%, transparent 70%)',
          transform: 'translate(35%, 35%)',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 opacity-08 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(198,167,123,0.3) 0%, transparent 70%)',
          transform: 'translate(-50%,-50%)',
        }}
      />

      <div className="container mx-auto px-6 pt-16 pb-6 relative z-10">

        {/* ── TOP GRID: brand | nav | social ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">

          {/* A. Brand */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            {/* Logo + name */}
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-[0.85rem] flex items-center justify-center relative overflow-hidden shrink-0"
                style={{ background: 'var(--botanical)' }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 60%)',
                  }}
                />
                <span
                  className="relative z-10 text-sm font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: 'var(--porcelain)' }}
                >
                  RA
                </span>
              </div>
              <div>
                <p
                  className="font-semibold text-base leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif", color: 'var(--botanical)' }}
                >
                  Rishika Athchara
                </p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  Computer Science Student
                </p>
              </div>
            </div>

            {/* Primary tagline */}
            <p
              className="italic leading-relaxed"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
              }}
            >
              "Thoughtfully designed. Creatively developed."
            </p>

            {/* Secondary line */}
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)', maxWidth: 240 }}>
              Building meaningful experiences through creativity and technology.
            </p>

            {/* Availability badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit"
              style={{
                background: 'rgba(168,185,154,0.18)',
                border: '1px solid rgba(168,185,154,0.35)',
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#4CAF50',
                  boxShadow: '0 0 0 3px rgba(76,175,80,0.2)',
                  animation: 'pulse 2s infinite',
                }}
              />
              <span className="text-xs font-medium" style={{ color: 'var(--olive)' }}>
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* B. Quick navigation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            <p
              className="text-xs font-semibold tracking-[0.18em] uppercase"
              style={{ color: 'var(--olive)' }}
            >
              Quick Links
            </p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 + i * 0.055 }}
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className="flex items-center gap-2 text-sm transition-all duration-200"
                    style={{
                      color: 'var(--text-secondary)',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--botanical)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    <span style={{ color: 'var(--champagne)', fontSize: '0.75rem' }}>→</span>
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* C. Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            <p
              className="text-xs font-semibold tracking-[0.18em] uppercase"
              style={{ color: 'var(--olive)' }}
            >
              Connect With Me
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, i) => (
                <SocialIconBtn key={link.label} link={link} index={i} />
              ))}
            </div>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Hover for platform name · Opens in new tab
            </p>
          </motion.div>
        </div>

        {/* ── DECORATIVE DIVIDER ── */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className="flex-1 h-px"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(168,185,154,0.5), transparent)',
            }}
          />
          <div className="flex gap-1.5 items-center">
            {[0,1,2].map(i => (
              <div
                key={i}
                className="rounded-full"
                style={{
                  width: i === 1 ? 8 : 5,
                  height: i === 1 ? 8 : 5,
                  background: i === 1 ? 'var(--champagne)' : 'rgba(198,167,123,0.4)',
                }}
              />
            ))}
          </div>
          <div
            className="flex-1 h-px"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(168,185,154,0.5), transparent)',
            }}
          />
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {year} Rishika Athchara. All rights reserved.
          </p>

          {/* Centre: made with love */}
          <p className="text-xs flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
            Made with
            <motion.span
              animate={{ scale: [1, 1.35, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'inline-flex' }}
            >
              <Heart size={11} style={{ color: 'var(--champagne)', fill: 'var(--champagne)' }} />
            </motion.span>
            care and creativity
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
            style={{
              color: 'var(--botanical)',
              background: 'rgba(168,185,154,0.15)',
              border: '1px solid rgba(168,185,154,0.3)',
              cursor: 'pointer',
            }}
            whileHover={{ y: -2, scale: 1.05, background: 'rgba(168,185,154,0.28)' }}
            whileTap={{ scale: 0.96 }}
          >
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'inline-flex' }}
            >
              <ArrowUp size={12} />
            </motion.span>
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
