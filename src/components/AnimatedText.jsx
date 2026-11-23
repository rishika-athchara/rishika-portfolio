import { motion } from 'framer-motion';

const AnimatedText = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.03,
  type = 'words',
}) => {
  const items = type === 'chars' ? text.split('') : text.split(' ');

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {items.map((word, i) => (
        <motion.span
          key={i}
          variants={item}
          className="inline-block"
          style={{ marginRight: type === 'words' ? '0.25em' : '0' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
