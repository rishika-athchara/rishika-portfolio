import { motion } from 'framer-motion';

const GlassButton = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  icon,
  type = 'button',
}) => {
  if (variant === 'primary') {
    return (
      <motion.button
        type={type}
        className={`btn-primary ${className}`}
        whileHover={{ y: -2, scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        onClick={onClick}
      >
        {children}
        {icon && <span className="ml-1">{icon}</span>}
      </motion.button>
    );
  }

  return (
    <motion.button
      type={type}
      className={`btn-secondary ${className}`}
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      onClick={onClick}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </motion.button>
  );
};

export default GlassButton;
