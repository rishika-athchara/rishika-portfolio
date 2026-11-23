import { motion } from 'framer-motion';
import TechnologyIcon from './TechnologyIcon';

const TechnologyCard = ({ tech, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 22, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.95 }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5, scale: 1.03 }}
      className="group relative flex flex-col justify-between p-6 rounded-3xl cursor-default transition-all duration-300"
      style={{
        background: 'rgba(253, 252, 248, 0.82)',
        backdropFilter: 'blur(20px) saturate(1.3)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.3)',
        border: '1px solid rgba(255, 255, 255, 0.85)',
        boxShadow:
          '0 12px 32px rgba(53, 69, 53, 0.06), 0 2px 8px rgba(53, 69, 53, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      }}
    >
      {/* Soft inner ambient glow on hover */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `0 16px 36px ${tech.bgTint || 'rgba(168, 185, 154, 0.2)'}, inset 0 0 0 1px ${tech.borderTint || 'rgba(168, 185, 154, 0.4)'}`,
          background: tech.bgTint || 'transparent',
        }}
      />

      {/* Glass reflective shine */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10">
        {/* Top bar: icon + tag */}
        <div className="flex items-start justify-between gap-3 mb-5">
          {/* Logo container */}
          <motion.div
            whileHover={{ rotate: [-2, 2, 0] }}
            transition={{ duration: 0.3 }}
            className="w-14 h-14 rounded-2xl flex items-center justify-center p-2.5 transition-all duration-300"
            style={{
              background: tech.bgTint || 'rgba(255, 255, 255, 0.7)',
              border: `1px solid ${tech.borderTint || 'rgba(168, 185, 154, 0.3)'}`,
              boxShadow: '0 4px 14px rgba(53, 69, 53, 0.06)',
            }}
          >
            <TechnologyIcon name={tech.icon} size={36} />
          </motion.div>

          {/* Category/Tag badge */}
          {tech.tag && (
            <span
              className="text-[0.62rem] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full"
              style={{
                background: 'rgba(168, 185, 154, 0.18)',
                color: 'var(--olive)',
                border: '1px solid rgba(168, 185, 154, 0.3)',
              }}
            >
              {tech.tag}
            </span>
          )}
        </div>

        {/* Technology Name */}
        <h4
          className="font-serif text-xl font-semibold mb-2 group-hover:text-[var(--botanical)] transition-colors"
          style={{ color: 'var(--text-primary)' }}
        >
          {tech.name}
        </h4>

        {/* Description */}
        {tech.description && (
          <p
            className="text-xs leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            {tech.description}
          </p>
        )}
      </div>

      {/* Verified checkmark badge */}
      {tech.verified && (
        <div className="relative z-10 flex items-center gap-1.5 mt-4 pt-3 border-t border-[rgba(168,185,154,0.18)]">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--olive)' }} />
          <span className="text-[0.62rem] font-medium tracking-wide" style={{ color: 'var(--text-muted)' }}>
            Curriculum & Project Verified
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default TechnologyCard;
