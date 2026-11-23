import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import GlassButton from './GlassButton';

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
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 120, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 120, damping: 25 });

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
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {/* Soft sage-colored ambient glow/shadow */}
      <div
        className="absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] transition-all duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(168, 185, 154, 0.45) 0%, rgba(198, 167, 123, 0.2) 65%, transparent 100%)',
          filter: 'blur(30px)',
          transform: 'translateY(16px) scale(0.96)',
          opacity: 0.85,
        }}
      />

      {/* Subtle outer halo ring */}
      <div
        className="absolute -inset-1 rounded-[2.7rem] md:rounded-[3.2rem] pointer-events-none transition-opacity duration-500"
        style={{
          border: '1.5px solid rgba(255, 255, 255, 0.75)',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(248, 246, 239, 0.1) 100%)',
        }}
      />

      {/* Large elegant portrait frame */}
      <div
        className="relative w-full h-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden transition-all duration-500"
        style={{
          background: 'linear-gradient(150deg, var(--pistachio) 0%, var(--beige) 45%, var(--sage) 100%)',
          border: '2px solid rgba(255, 255, 255, 0.85)',
          boxShadow: '0 24px 60px -12px rgba(53, 69, 53, 0.16), 0 12px 28px -6px rgba(113, 134, 106, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.75)',
        }}
      >
        {/* Abstract portrait artwork */}
        <svg
          viewBox="0 0 380 475"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="heroPortraitBg" cx="50%" cy="40%" r="65%">
              <stop offset="0%" stopColor="#E8EDDF" />
              <stop offset="60%" stopColor="#E8DDC9" />
              <stop offset="100%" stopColor="#A8B99A" stopOpacity="0.55" />
            </radialGradient>
            <linearGradient id="silhouetteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#71866A" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#354535" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="accentGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C6A77B" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#A8B99A" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          <rect width="380" height="475" fill="url(#heroPortraitBg)" />

          {/* Abstract background halos */}
          <circle cx="190" cy="180" r="140" fill="url(#accentGlow)" filter="blur(20px)" />
          <circle cx="190" cy="165" r="95" fill="rgba(255, 255, 255, 0.45)" />

          {/* Abstract silhouette & organic botanical shapes */}
          <ellipse cx="190" cy="165" rx="64" ry="72" fill="url(#silhouetteGrad)" />
          <ellipse cx="190" cy="165" rx="48" ry="55" fill="rgba(113, 134, 106, 0.22)" />

          {/* Shoulder/torso curve */}
          <path
            d="M 60 475 Q 90 325 190 300 Q 290 325 320 475"
            fill="url(#silhouetteGrad)"
          />

          {/* Botanical flowing lines */}
          <path
            d="M 30 440 Q 80 360 55 260 Q 75 285 110 245"
            stroke="rgba(113, 134, 106, 0.35)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 350 460 Q 310 370 335 270 Q 320 295 285 255"
            stroke="rgba(198, 167, 123, 0.4)"
            strokeWidth="2"
            fill="none"
          />

          {/* Leaves */}
          <ellipse cx="60" cy="255" rx="10" ry="18" fill="rgba(113, 134, 106, 0.3)" transform="rotate(-32 60 255)" />
          <ellipse cx="105" cy="240" rx="9" ry="16" fill="rgba(113, 134, 106, 0.25)" transform="rotate(25 105 240)" />
          <ellipse cx="320" cy="265" rx="10" ry="18" fill="rgba(198, 167, 123, 0.32)" transform="rotate(30 320 265)" />
          <ellipse cx="285" cy="250" rx="9" ry="16" fill="rgba(198, 167, 123, 0.25)" transform="rotate(-25 285 250)" />

          {/* Elegant name badge in portrait base */}
          <text
            x="190"
            y="415"
            textAnchor="middle"
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontSize="15"
            fontWeight="600"
            fill="rgba(53, 69, 53, 0.65)"
            letterSpacing="3"
          >
            RISHIKA ATHCHARA
          </text>
        </svg>

        {/* Soft glass overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 0%, transparent 45%, rgba(53, 69, 53, 0.05) 100%)',
          }}
        />

        {/* Inner light reflection highlight */}
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, transparent 55%)',
          }}
        />
      </div>

      {/* Subtle photo hint badge */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-xs font-medium tracking-wide flex items-center gap-1.5 transition-all duration-300 pointer-events-none"
        style={{
          background: 'rgba(253, 252, 248, 0.78)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.85)',
          color: 'var(--text-secondary)',
          boxShadow: '0 4px 16px rgba(53, 69, 53, 0.08)',
          whiteSpace: 'nowrap',
        }}
      >
        <span>📸</span>
        <span>Add your portrait here</span>
      </div>
    </motion.div>
  );
};

/* ══════════════════════════════
   HERO COMPONENT
══════════════════════════════ */
const Hero = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--pearl)', paddingTop: '6.5rem', paddingBottom: '4rem' }}
    >
      {/* ── Background blobs ── */}
      <Blob
        className="w-[500px] h-[500px] -top-24 -right-32 opacity-45"
        style={{ background: 'linear-gradient(135deg, rgba(168,185,154,0.22) 0%, rgba(232,237,223,0.35) 100%)' }}
      />
      <Blob
        className="w-[380px] h-[380px] bottom-0 -left-24 opacity-35"
        style={{ background: 'linear-gradient(135deg, rgba(198,167,123,0.18) 0%, rgba(232,221,201,0.3) 100%)' }}
      />
      <Blob
        className="w-[260px] h-[260px] top-1/2 left-1/2 opacity-25"
        style={{ background: 'rgba(168,185,154,0.2)', transform: 'translate(-50%,-50%)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* ── LEFT: Text ── */}
          <div>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-label"
                style={{
                  background: 'rgba(168,185,154,0.2)',
                  border: '1px solid rgba(168,185,154,0.35)',
                }}
              >
                <Sparkles size={12} style={{ color: 'var(--olive)' }} />
                PERSONAL PORTFOLIO · CREATIVE DEVELOPER
              </div>
            </motion.div>

            {/* Main heading */}
            <div className="mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="heading-display text-5xl md:text-6xl xl:text-7xl mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Where{' '}
                <span style={{ color: 'var(--botanical)', fontStyle: 'italic' }}>
                  Creativity
                </span>
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="heading-display text-5xl md:text-6xl xl:text-7xl"
                style={{ color: 'var(--text-primary)' }}
              >
                Meets{' '}
                <span
                  className="heading-serif"
                  style={{ color: 'var(--botanical)', fontStyle: 'italic' }}
                >
                  Intelligent
                </span>
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
                className="heading-display text-5xl md:text-6xl xl:text-7xl"
                style={{ color: 'var(--text-primary)' }}
              >
                Technology.
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.56 }}
              className="text-base md:text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              I'm Rishika Athchara, a Computer Science student passionate about
              technology, creativity, and building meaningful digital experiences.
              I enjoy transforming ideas into innovative solutions through code and design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.68 }}
              className="flex flex-wrap gap-4"
            >
              <GlassButton
                variant="primary"
                onClick={() => handleScroll('projects')}
                icon={<ArrowRight size={16} />}
              >
                Explore My Work
              </GlassButton>
              <GlassButton
                variant="secondary"
                onClick={() => handleScroll('about')}
              >
                About Me
              </GlassButton>
            </motion.div>

            {/* Quick stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.82 }}
              className="flex flex-wrap items-center gap-6 mt-12"
            >
              {[
                { label: 'CGPA', value: '9.64' },
                { label: 'Projects', value: '4+' },
                { label: 'Passion', value: '∞' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <span
                    className="font-serif text-3xl font-semibold"
                    style={{ color: 'var(--botanical)' }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-label">{stat.label}</span>
                </div>
              ))}
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
          transition={{ delay: 1.4 }}
          className="flex flex-col items-center gap-2 mt-16 md:mt-20"
        >
          <span className="text-label" style={{ color: 'var(--text-muted)', fontSize: '0.6rem' }}>
            SCROLL TO EXPLORE
          </span>
          <div
            className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-1.5"
            style={{ borderColor: 'rgba(113,134,106,0.4)' }}
          >
            <div
              className="scroll-dot w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--olive)' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
