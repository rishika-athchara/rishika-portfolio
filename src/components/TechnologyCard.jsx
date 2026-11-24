import { motion } from 'framer-motion';
import TechnologyIcon from './TechnologyIcon';
import { CheckCircle2 } from 'lucide-react';

const TechnologyCard = ({ tech, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 22, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.96 }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl cursor-default transition-all duration-300 w-full h-full min-h-[300px]"
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-glass)',
      }}
    >
      {/* Soft inner ambient glow on hover */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `0 16px 36px ${tech.bgTint || 'rgba(132, 149, 125, 0.15)'}`,
          background: tech.bgTint || 'transparent',
        }}
      />

      {/* Glass reflective shine */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10">
        {/* Top bar: 56-64px standard logo container + Category/Tag badge */}
        <div className="flex items-start justify-between gap-3 mb-5">
          {/* Logo container */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="w-14 h-14 rounded-2xl flex items-center justify-center p-2.5 transition-all duration-300 shrink-0"
            style={{
              background: tech.bgTint || 'rgba(238, 240, 230, 0.7)',
              border: `1px solid ${tech.borderTint || 'var(--border)'}`,
              boxShadow: '0 4px 14px rgba(53, 72, 59, 0.05)',
            }}
          >
            <TechnologyIcon name={tech.icon} size={36} />
          </motion.div>

          {/* Category/Tag badge */}
          {tech.tag && (
            <span
              className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full text-right"
              style={{
                background: 'rgba(238, 240, 230, 0.85)',
                color: 'var(--botanical)',
                border: '1px solid var(--border)',
              }}
            >
              {tech.tag}
            </span>
          )}
        </div>

        {/* Technology Name */}
        <h4
          className="font-serif text-xl sm:text-2xl font-bold mb-2 group-hover:text-[var(--champagne)] transition-colors"
          style={{ color: 'var(--text-primary)' }}
        >
          {tech.name}
        </h4>

        {/* Short Description */}
        {tech.description && (
          <p
            className="text-xs sm:text-sm leading-relaxed mb-6"
            style={{ color: 'var(--text-secondary)' }}
          >
            {tech.description}
          </p>
        )}
      </div>

      {/* Bottom: Skill Level & Animated Progress Bar */}
      <div className="relative z-10 pt-4 border-t border-[var(--border)] mt-auto">
        <div className="flex items-center justify-between text-xs font-semibold mb-2">
          <span style={{ color: 'var(--text-secondary)' }}>
            Proficiency: <span style={{ color: 'var(--botanical)' }}>{tech.level || 'Intermediate'}</span>
          </span>
          <span className="font-mono text-[11px]" style={{ color: 'var(--champagne)' }}>
            {tech.proficiency}%
          </span>
        </div>

        {/* Animated Progress Bar */}
        <div 
          className="w-full h-2 rounded-full overflow-hidden"
          style={{ background: 'rgba(238, 240, 230, 0.9)' }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${tech.proficiency || 70}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, var(--sage) 0%, var(--botanical) 100%)',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TechnologyCard;
