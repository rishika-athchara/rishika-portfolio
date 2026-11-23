import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Philosophy = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-32"
      style={{
        background: 'linear-gradient(135deg, var(--pistachio) 0%, var(--pearl) 50%, var(--beige) 100%)',
      }}
    >
      {/* Parallax blobs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <div
          className="blob-animate absolute top-10 left-10 w-72 h-72 opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(168,185,154,0.5) 0%, transparent 70%)' }}
        />
        <div
          className="blob-animate absolute bottom-10 right-10 w-56 h-56 opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(198,167,123,0.5) 0%, transparent 70%)',
            animationDelay: '3s',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        {/* Decorative em-dash lines */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16" style={{ background: 'var(--champagne)' }} />
          <span className="text-label" style={{ color: 'var(--champagne)' }}>DESIGN PHILOSOPHY</span>
          <div className="h-px w-16" style={{ background: 'var(--champagne)' }} />
        </div>

        {/* Large quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="heading-serif mx-auto max-w-4xl"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
            lineHeight: 1.3,
            color: 'var(--botanical)',
            fontStyle: 'italic',
            fontWeight: 500,
          }}
        >
          "Good design is not just about how things look.
          <br />
          It's about how{' '}
          <span
            className="heading-display not-italic"
            style={{ color: 'var(--olive)', fontStyle: 'normal' }}
          >
            ideas come to life.
          </span>
          "
        </motion.blockquote>

        {/* Attribution */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-label"
          style={{ color: 'var(--text-muted)' }}
        >
          — Rishika Athchara · Creative Philosophy
        </motion.p>

        {/* Decorative dots */}
        <div className="flex justify-center gap-2 mt-10">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                background: i === 1 ? 'var(--champagne)' : 'rgba(198,167,123,0.4)',
              }}
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Philosophy;
