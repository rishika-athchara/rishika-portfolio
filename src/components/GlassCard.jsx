import { motion } from 'framer-motion';

const GlassCard = ({
  children,
  className = '',
  variant = 'white',
  hover = true,
  onClick,
  style = {},
  as = 'div',
}) => {
  const variants = {
    white: 'glass-surface',
    cream: 'glass-cream',
    sage: 'glass-sage',
    pistachio: 'glass-pistachio',
  };

  const Tag = motion[as] || motion.div;

  return (
    <Tag
      className={`relative ${variants[variant]} ${className}`}
      style={style}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow:
                '0 16px 48px rgba(53,69,53,0.14), 0 4px 16px rgba(53,69,53,0.08)',
            }
          : {}
      }
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
    >
      {/* Inner highlight */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit]"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, transparent 55%)',
          zIndex: 0,
        }}
      />
      <div className="relative z-10">{children}</div>
    </Tag>
  );
};

export default GlassCard;
