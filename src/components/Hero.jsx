import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
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
        {/* Real portrait photo */}
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
              'linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 0%, transparent 55%, rgba(53, 69, 53, 0.28) 100%)',
          }}
        />

        {/* Inner light reflection highlight */}
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, transparent 55%)',
          }}
        />

        {/* Elegant name badge in portrait base */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase flex items-center gap-2 pointer-events-none"
          style={{
            background: 'rgba(253, 252, 248, 0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.9)',
            color: 'var(--botanical)',
            boxShadow: '0 6px 20px rgba(53, 69, 53, 0.12)',
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
