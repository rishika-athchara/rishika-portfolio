import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Award, Laptop } from 'lucide-react';
import GlassButton from './GlassButton';
import profileImg from '../assets/rishika-profile.jpg';

/* ── decorative organic blob ───────────────────────── */
const Blob = ({ style, className }) => (
  <div
    className={`blob-animate absolute pointer-events-none ${className}`}
    style={style}
  />
);

/* ── improved portrait presentation ───────────────── */
const Portrait = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 120, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 120, damping: 25 });

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-[4/5] group"
      style={{ perspective: 1000, transformStyle: 'preserve-3d', rotateX, rotateY }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {/* Soft sage-colored ambient glow/shadow */}
      <div
        className="absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] transition-all duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(132, 149, 125, 0.4) 0%, rgba(201, 168, 117, 0.18) 65%, transparent 100%)',
          filter: 'blur(28px)',
          transform: 'translateY(14px) scale(0.96)',
          opacity: 0.85,
        }}
      />

      {/* Subtle outer halo ring */}
      <div
        className="absolute -inset-1 rounded-[2.7rem] md:rounded-[3.2rem] pointer-events-none transition-opacity duration-500"
        style={{
          border: '1px solid rgba(227, 231, 218, 0.9)',
          background: 'linear-gradient(135deg, rgba(255, 254, 250, 0.4) 0%, rgba(238, 240, 230, 0.15) 100%)',
        }}
      />

      {/* Large elegant portrait frame */}
      <div
        className="relative w-full h-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden transition-all duration-500"
        style={{
          background: 'linear-gradient(150deg, var(--pistachio) 0%, var(--pearl) 50%, var(--light-sage) 100%)',
          border: '2px solid rgba(255, 255, 255, 0.9)',
          boxShadow: '0 20px 50px -10px rgba(53, 72, 59, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.8)',
        }}
      >
        {/* Genuine portrait photo */}
        <img
          src={profileImg}
          alt="Rishika Athchara"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Soft glass vignette & depth overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 0%, transparent 60%, rgba(53, 72, 59, 0.22) 100%)',
          }}
        />

        {/* Inner light reflection highlight */}
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 55%)',
          }}
        />

        {/* Elegant name badge in portrait base */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase flex items-center gap-2 pointer-events-none"
          style={{
            background: 'rgba(255, 254, 250, 0.9)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid var(--border)',
            color: 'var(--botanical)',
            boxShadow: '0 6px 20px rgba(53, 72, 59, 0.08)',
            whiteSpace: 'nowrap',
            letterSpacing: '0.14em',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <span>RISHIKA ATHCHARA</span>
        </div>
      </div>
    </motion.div>
  );
};

/* ══════════════════════════════
   HERO COMPONENT
══════════════════════════════ */
const Hero = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
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
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--pearl)', paddingTop: '7rem', paddingBottom: '4.5rem' }}
    >
      {/* ── Background blobs ── */}
      <Blob
        className="w-[520px] h-[520px] -top-24 -right-32 opacity-40"
        style={{ background: 'linear-gradient(135deg, rgba(132,149,125,0.2) 0%, rgba(238,240,230,0.4) 100%)' }}
      />
      <Blob
        className="w-[380px] h-[380px] bottom-0 -left-24 opacity-35"
        style={{ background: 'linear-gradient(135deg, rgba(201,168,117,0.16) 0%, rgba(223,230,215,0.3) 100%)' }}
      />
      <Blob
        className="w-[260px] h-[260px] top-1/2 left-1/2 opacity-20"
        style={{ background: 'rgba(132,149,125,0.18)', transform: 'translate(-50%,-50%)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* ── LEFT: Text ── */}
          <div>
            {/* Pill Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-label"
                style={{
                  background: 'rgba(238, 240, 230, 0.8)',
                  border: '1px solid var(--border)',
                  color: 'var(--botanical)',
                }}
              >
                <Sparkles size={12} style={{ color: 'var(--champagne)' }} />
                PERSONAL PORTFOLIO · ASPIRING SOFTWARE DEVELOPER
              </div>
            </motion.div>

            {/* Main headline */}
            <div className="mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="heading-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.08] mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Where{' '}
                <span className="heading-serif italic font-normal" style={{ color: 'var(--champagne)' }}>
                  Creativity
                </span>
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="heading-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.08]"
                style={{ color: 'var(--text-primary)' }}
              >
                Meets{' '}
                <span
                  className="heading-serif italic font-normal"
                  style={{ color: 'var(--botanical)' }}
                >
                  Intelligent
                </span>{' '}
                Technology.
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.44 }}
              className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: 'var(--text-secondary)' }}
            >
              I&apos;m Rishika Athchara, a Computer Science student passionate about
              technology, creativity, and building meaningful digital experiences.
              I enjoy transforming ideas into innovative solutions through code and design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.56 }}
              className="flex flex-wrap gap-4"
            >
              <GlassButton
                variant="primary"
                onClick={() => handleScroll('projects')}
                icon={<ArrowRight size={16} />}
              >
                Explore Projects
              </GlassButton>
              <GlassButton
                variant="secondary"
                onClick={() => handleScroll('about')}
              >
                About Me
              </GlassButton>
              <GlassButton
                variant="secondary"
                onClick={() => handleScroll('resume')}
              >
                View Resume
              </GlassButton>
            </motion.div>

            {/* Verified Stats Strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center gap-6 sm:gap-8 mt-10 pt-8 border-t border-[var(--border)]"
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(201, 168, 117, 0.18)', color: 'var(--champagne)' }}
                >
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold leading-tight" style={{ color: 'var(--botanical)' }}>
                    9.64
                  </div>
                  <div className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: 'var(--text-secondary)' }}>
                    CGPA Distinction
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(132, 149, 125, 0.2)', color: 'var(--botanical)' }}
                >
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold leading-tight" style={{ color: 'var(--botanical)' }}>
                    4+
                  </div>
                  <div className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: 'var(--text-secondary)' }}>
                    Featured Projects
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(132, 149, 125, 0.2)', color: 'var(--botanical)' }}
                >
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-serif text-lg font-bold leading-tight" style={{ color: 'var(--botanical)' }}>
                    Curiosity & Code
                  </div>
                  <div className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: 'var(--text-secondary)' }}>
                    Passion for Technology
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Clean Portrait ── */}
          <div className="relative flex justify-center items-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full flex justify-center"
            >
              <Portrait />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 mt-14"
        >
          <span className="text-label" style={{ color: 'var(--text-muted)', fontSize: '0.62rem' }}>
            SCROLL TO EXPLORE
          </span>
          <div
            className="w-5 h-9 rounded-full border-2 flex items-start justify-center pt-1.5"
            style={{ borderColor: 'var(--border)' }}
          >
            <div
              className="scroll-dot w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--sage)' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
