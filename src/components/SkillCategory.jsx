import { motion } from 'framer-motion';

const SkillCategory = ({ category, isActive, onClick, count }) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full text-left px-5 py-3.5 sm:py-4 rounded-2xl transition-all duration-200 flex items-center justify-between group overflow-hidden"
      style={{
        background: isActive
          ? 'var(--botanical)'
          : 'rgba(255, 254, 250, 0.75)',
        border: isActive
          ? '1px solid var(--botanical)'
          : '1px solid var(--border)',
        boxShadow: isActive
          ? '0 6px 20px rgba(53, 72, 59, 0.16)'
          : '0 2px 8px rgba(53, 72, 59, 0.03)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      {/* Left: number + icon + label */}
      <div className="relative z-10 flex items-center gap-3.5 min-w-0">
        <span
          className="font-serif text-sm font-semibold tracking-wider transition-colors duration-200"
          style={{
            color: isActive ? 'var(--champagne)' : 'var(--text-muted)',
            opacity: isActive ? 1 : 0.6,
          }}
        >
          {category.num}
        </span>

        <span
          className="text-base select-none transition-colors duration-200"
          style={{
            color: isActive ? 'var(--porcelain)' : 'var(--sage)',
          }}
        >
          {category.iconKey}
        </span>

        <span
          className="text-sm font-semibold truncate transition-colors duration-200"
          style={{
            color: isActive ? 'var(--porcelain)' : 'var(--text-primary)',
          }}
        >
          {category.label}
        </span>
      </div>

      {/* Right: Count pill */}
      <div className="relative z-10 shrink-0 ml-2">
        <span
          className="text-[0.68rem] font-bold px-2.5 py-0.5 rounded-full transition-colors duration-200"
          style={{
            background: isActive ? 'rgba(255, 254, 250, 0.2)' : 'rgba(238, 240, 230, 0.8)',
            color: isActive ? '#FFFFFF' : 'var(--botanical)',
            border: isActive ? '1px solid rgba(255,255,255,0.3)' : '1px solid var(--border)',
          }}
        >
          {count}
        </span>
      </div>
    </motion.button>
  );
};

export default SkillCategory;
