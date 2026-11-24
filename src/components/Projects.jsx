import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, GitBranch, X, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import GlassCard from './GlassCard';

/* ── individual project card ───────────────────────── */
const ProjectCard = ({ project, index, onClick }) => {
  const isEven = index % 2 === 0;

  /* Unique SVG preview per project */
  const previews = {
    '01': (
      <svg viewBox="0 0 400 240" className="w-full h-full">
        <defs>
          <linearGradient id="g01" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(168,185,154,0.3)" />
            <stop offset="100%" stopColor="rgba(232,237,223,0.6)" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill="url(#g01)" rx="12" />
        {/* Task board columns */}
        {[40, 155, 270].map((x, i) => (
          <g key={i}>
            <rect x={x} y="20" width="95" height="200" rx="8" fill="rgba(255,255,255,0.5)" />
            <text x={x + 10} y="38" fontSize="8" fill="rgba(53,69,53,0.6)" fontWeight="600">
              {['TO DO', 'IN PROGRESS', 'DONE'][i]}
            </text>
            {[55, 90, 125].map((y, j) => (
              j < 3 - i && (
                <rect key={j} x={x + 8} y={y} width="79" height="24" rx="5"
                  fill={i === 1 ? 'rgba(168,185,154,0.5)' : 'rgba(255,255,255,0.65)'}
                  stroke="rgba(168,185,154,0.3)" strokeWidth="0.5"
                />
              )
            ))}
          </g>
        ))}
      </svg>
    ),
    '02': (
      <svg viewBox="0 0 400 240" className="w-full h-full">
        <defs>
          <linearGradient id="g02" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(198,167,123,0.25)" />
            <stop offset="100%" stopColor="rgba(232,221,201,0.5)" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill="url(#g02)" rx="12" />
        {/* Airport runway suggestion */}
        <rect x="150" y="100" width="100" height="40" rx="6" fill="rgba(198,167,123,0.3)" />
        <line x1="200" y1="30" x2="200" y2="210" stroke="rgba(198,167,123,0.5)" strokeWidth="2" strokeDasharray="6,4" />
        {/* Gate indicators */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={40 + i * 80} y="20" width="60" height="35" rx="6"
              fill="rgba(255,255,255,0.55)" stroke="rgba(198,167,123,0.4)" strokeWidth="0.5" />
            <text x={70 + i * 80} y="40" fontSize="9" textAnchor="middle"
              fill="rgba(53,69,53,0.6)" fontWeight="600">
              {['A1', 'B2', 'C3', 'D4'][i]}
            </text>
          </g>
        ))}
        {/* Status bar */}
        <rect x="20" y="175" width="360" height="50" rx="8" fill="rgba(255,255,255,0.4)" />
        <text x="40" y="205" fontSize="10" fill="rgba(53,69,53,0.5)">DEPARTURES · ARRIVALS · OPERATIONS LIVE</text>
      </svg>
    ),
    '03': (
      <svg viewBox="0 0 400 240" className="w-full h-full">
        <defs>
          <linearGradient id="g03" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(143,163,197,0.3)" />
            <stop offset="100%" stopColor="rgba(200,215,235,0.5)" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill="url(#g03)" rx="12" />
        {/* Chart bars */}
        {[80, 55, 90, 65, 110, 70, 95].map((h, i) => (
          <rect key={i} x={28 + i * 48} y={190 - h} width="32" height={h} rx="4"
            fill={i % 2 === 0 ? 'rgba(143,163,197,0.6)' : 'rgba(94,121,153,0.4)'}
          />
        ))}
        {/* Prediction line */}
        <polyline
          points="44,110 92,85 140,100 188,75 236,80 284,60 332,55 380,45"
          fill="none" stroke="rgba(94,121,153,0.8)" strokeWidth="2.5"
          strokeDasharray="5,2"
        />
        {/* Dots on line */}
        {[[44,110],[92,85],[140,100],[188,75],[236,80],[284,60],[332,55]].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="rgba(94,121,153,0.9)" />
        ))}
        <text x="20" y="18" fontSize="9" fill="rgba(53,69,53,0.5)" fontWeight="600">
          PLACEMENT PROBABILITY — ML PREDICTION
        </text>
      </svg>
    ),
    '04': (
      <svg viewBox="0 0 400 240" className="w-full h-full">
        <defs>
          <linearGradient id="g04" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(181,168,213,0.3)" />
            <stop offset="100%" stopColor="rgba(220,214,235,0.5)" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill="url(#g04)" rx="12" />
        {/* City grid suggestion */}
        {[0,1,2,3,4].map(r => [0,1,2,3].map(c => (
          <rect key={`${r}${c}`}
            x={25 + c * 85} y={25 + r * 42}
            width={65} height={30} rx="5"
            fill={Math.random() > 0.5 ? 'rgba(181,168,213,0.4)' : 'rgba(255,255,255,0.4)'}
            stroke="rgba(123,111,170,0.2)" strokeWidth="0.5"
          />
        )))}
        {/* Connecting lines */}
        <line x1="200" y1="0" x2="200" y2="240" stroke="rgba(123,111,170,0.15)" strokeWidth="1" />
        <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(123,111,170,0.15)" strokeWidth="1" />
        <text x="20" y="18" fontSize="9" fill="rgba(53,69,53,0.5)" fontWeight="600">
          SMART CITY — REAL-TIME ANALYTICS
        </text>
      </svg>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <GlassCard
        variant="white"
        className="rounded-4xl overflow-hidden cursor-pointer group"
        onClick={() => onClick(project)}
      >
        {/* Preview image area */}
        <div
          className="relative overflow-hidden"
          style={{ height: 220, background: `linear-gradient(135deg, ${project.color}22 0%, ${project.accent}18 100%)` }}
        >
          <div className="w-full h-full transition-transform duration-700 group-hover:scale-105 origin-center">
            {previews[project.id]}
          </div>
          {/* Category badge */}
          <div
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
            style={{
              background: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(10px)',
              color: 'var(--botanical)',
              letterSpacing: '0.08em',
            }}
          >
            {project.category}
          </div>
          {/* Project number */}
          <div
            className="absolute top-4 right-4 font-serif text-5xl font-bold opacity-20"
            style={{ color: 'var(--botanical)', lineHeight: 1 }}
          >
            {project.id}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-label mb-1" style={{ fontSize: '0.62rem' }}>
                PROJECT {project.id}
              </p>
              <h3
                className="heading-serif text-2xl font-semibold"
                style={{ color: 'var(--botanical)' }}
              >
                {project.name}
              </h3>
            </div>
            <motion.div
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
              style={{ background: 'rgba(53,69,53,0.08)' }}
              whileHover={{ scale: 1.15, backgroundColor: 'var(--botanical)' }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight
                size={16}
                style={{ color: 'var(--botanical)' }}
                className="group-hover:text-white transition-colors"
              />
            </motion.div>
          </div>

          <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
            {project.shortDesc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full font-medium"
                style={{
                  background: `${project.color}22`,
                  color: 'var(--botanical)',
                  border: `1px solid ${project.color}44`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

/* ── modal ─────────────────────────────────────────── */
const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    style={{ background: 'rgba(53,69,53,0.35)', backdropFilter: 'blur(8px)' }}
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, y: 30 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 30 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-4xl p-8"
      style={{
        background: 'rgba(253,252,248,0.95)',
        backdropFilter: 'blur(32px)',
        border: '1px solid rgba(255,255,255,0.8)',
        boxShadow: '0 32px 80px rgba(53,69,53,0.2)',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-label mb-1" style={{ fontSize: '0.62rem' }}>PROJECT {project.id}</p>
          <h2 className="heading-serif text-3xl font-bold" style={{ color: 'var(--botanical)' }}>
            {project.name}
          </h2>
        </div>
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          style={{ background: 'rgba(53,69,53,0.08)' }}
          onClick={onClose}
        >
          <X size={18} style={{ color: 'var(--botanical)' }} />
        </button>
      </div>

      <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
        {project.fullDesc}
      </p>

      <div className="mb-6">
        <p className="text-label mb-3" style={{ fontSize: '0.62rem' }}>TECHNOLOGY STACK</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: 'rgba(168,185,154,0.2)',
                color: 'var(--botanical)',
                border: '1px solid rgba(168,185,154,0.35)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3 flex-wrap items-center">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
            style={{
              background: 'var(--botanical)',
              color: 'var(--porcelain)',
              textDecoration: 'none',
            }}
          >
            <GitBranch size={15} /> View Code on GitHub
          </a>
        )}
      </div>
    </motion.div>
  </motion.div>
);

/* ══════════════════════════════
   PROJECTS SECTION
══════════════════════════════ */
const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden scroll-mt-28 md:scroll-mt-32"
      style={{ background: 'var(--pearl)' }}
    >
      {/* Blob */}
      <div
        className="blob-animate absolute top-0 left-0 w-96 h-96 opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(168,185,154,0.4) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <motion.p
              className="text-label mb-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Selected Projects
            </motion.p>
            <motion.h2
              className="heading-display text-4xl md:text-5xl xl:text-6xl"
              style={{ color: 'var(--text-primary)' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Turning Ideas{' '}
              <span className="heading-serif italic" style={{ color: 'var(--botanical)' }}>
                Into Reality.
              </span>
            </motion.h2>
          </div>
          <motion.p
            className="max-w-sm text-sm leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A curated selection of projects that reflect my passion for building
            purposeful digital solutions across productivity, operations, AI, and smart systems.
          </motion.p>
        </div>

        {/* Grid — asymmetric 2+2 */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={setSelected}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
