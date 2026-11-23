import { motion } from 'framer-motion';

const SkillCategory = ({ category, isActive, onClick, count }) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ x: 3 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 flex items-center justify-between group"
      style={{
        background: isActive
          ? 'rgba(168, 185, 154, 0.24)'
          : 'rgba(255, 255, 255, 0.45)',
        border: isActive
          ? '1px solid rgba(168, 185, 154, 0.55)'
          : '1px solid rgba(255, 255, 255, 0.75)',
        boxShadow: isActive
          ? '0 6px 20px rgba(53, 69, 53, 0.08)'
          : '0 2px 8px rgba(53, 69, 53, 0.03)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      {/* Active pill indicator background */}
      {isActive && (
        <motion.div
          layoutId="activeCategoryIndicator"
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(168, 185, 154, 0.28) 0%, rgba(232, 237, 223, 0.4) 100%)',
            border: '1.5px solid rgba(113, 134, 106, 0.45)',
          }}
          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
        />
      )}

      {/* Left: number + icon + label */}
      <div className="relative z-10 flex items-center gap-3.5 min-w-0">
        <span
          className="font-serif text-sm font-semibold tracking-wider opacity-60"
          style={{
            color: isActive ? 'var(--botanical)' : 'var(--text-muted)',
          }}
        >
          {category.num}
        </span>

        <span
          className="text-base select-none"
          style={{
            color: isActive ? 'var(--botanical)' : 'var(--olive)',
          }}
        >
          {category.iconKey}
        </span>

        <span
          className="text-sm font-semibold truncate transition-colors duration-200"
          style={{
            color: isActive ? 'var(--botanical)' : 'var(--text-primary)',
          }}
        >
          {category.label}
        </span>
      </div>

      {/* Right: Count pill */}
      <div className="relative z-10 shrink-0 ml-2">
        <span
          className="text-[0.68rem] font-semibold px-2 py-0.5 rounded-full"
          style={{
            background: isActive ? 'var(--botanical)' : 'rgba(168, 185, 154, 0.25)',
            color: isActive ? 'var(--porcelain)' : 'var(--olive)',
          }}
        >
          {count}
        </span>
      </div>
    </motion.button>
  );
};

export default SkillCategory;
