import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers } from 'lucide-react';
import { skillCategories, technologies } from '../data/skills';
import SkillCategory from './SkillCategory';
import TechnologyCard from './TechnologyCard';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const currentCategory =
    skillCategories.find((c) => c.id === activeCategory) || skillCategories[0];

  const filteredTechnologies = technologies.filter(
    (tech) => tech.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--pistachio)' }}
    >
      {/* Decorative ambient background blobs */}
      <div
        className="blob-animate absolute -bottom-24 -right-24 w-96 h-96 opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(198, 167, 123, 0.4) 0%, transparent 70%)',
        }}
      />
      <div
        className="blob-animate absolute top-12 -left-20 w-80 h-80 opacity-25 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(168, 185, 154, 0.5) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* ── Section Header ── */}
        <div className="max-w-3xl mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-label"
              style={{
                background: 'rgba(168, 185, 154, 0.25)',
                border: '1px solid rgba(168, 185, 154, 0.45)',
              }}
            >
              <Sparkles size={12} style={{ color: 'var(--olive)' }} />
              MY TECHNOLOGY STACK
            </div>
          </motion.div>

          <motion.h2
            className="heading-display text-4xl md:text-5xl xl:text-6xl mb-4"
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Technologies &{' '}
            <span
              className="heading-serif italic"
              style={{ color: 'var(--botanical)' }}
            >
              Tools.
            </span>
          </motion.h2>

          <motion.p
            className="text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A growing toolkit built through academic study, project work, and a
            genuine love for building things with technology.
          </motion.p>
        </div>

        {/* ── Two-Column Layout ── */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">
          {/* ── LEFT: Category Navigation ── */}
          <div className="flex flex-row lg:flex-col gap-2.5 overflow-x-auto pb-3 lg:pb-0">
            {skillCategories.map((cat) => {
              const count = technologies.filter(
                (t) => t.category === cat.id
              ).length;
              return (
                <div key={cat.id} className="shrink-0 lg:shrink w-[240px] sm:w-[260px] lg:w-full">
                  <SkillCategory
                    category={cat}
                    isActive={activeCategory === cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    count={count}
                  />
                </div>
              );
            })}
          </div>

          {/* ── RIGHT: Large Liquid Glass Panel ── */}
          <div
            className="relative rounded-4xl p-6 sm:p-8 min-h-[460px] flex flex-col justify-between"
            style={{
              background: 'rgba(253, 252, 248, 0.65)',
              backdropFilter: 'blur(28px) saturate(1.4)',
              WebkitBackdropFilter: 'blur(28px) saturate(1.4)',
              border: '1.5px solid rgba(255, 255, 255, 0.85)',
              boxShadow:
                '0 16px 48px rgba(53, 69, 53, 0.08), 0 4px 16px rgba(53, 69, 53, 0.04)',
            }}
          >
            {/* Category Banner Header inside panel */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-[rgba(168,185,154,0.25)]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-label text-[0.62rem]">
                    CATEGORY {currentCategory.num}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    •
                  </span>
                  <span
                    className="text-xs font-medium"
                    style={{ color: 'var(--olive)' }}
                  >
                    {filteredTechnologies.length}{' '}
                    {filteredTechnologies.length === 1 ? 'Technology' : 'Technologies'}
                  </span>
                </div>
                <h3
                  className="heading-serif text-2xl font-bold"
                  style={{ color: 'var(--botanical)' }}
                >
                  {currentCategory.label}
                </h3>
                <p
                  className="text-xs mt-1 max-w-xl leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {currentCategory.description}
                </p>
              </div>

              <div
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full shrink-0"
                style={{
                  background: 'rgba(168, 185, 154, 0.18)',
                  border: '1px solid rgba(168, 185, 154, 0.35)',
                }}
              >
                <Layers size={13} style={{ color: 'var(--olive)' }} />
                <span className="text-xs font-medium" style={{ color: 'var(--botanical)' }}>
                  Interactive Grid
                </span>
              </div>
            </div>

            {/* Grid of Technology Cards */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
                >
                  {filteredTechnologies.map((tech, i) => (
                    <TechnologyCard key={tech.id} tech={tech} index={i} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Editable & Expandable Note */}
            <div
              className="mt-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs border-t border-[rgba(168,185,154,0.2)]"
              style={{ color: 'var(--text-muted)' }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: 'var(--champagne)' }} />
                <span>
                  All technologies are verified from coursework, personal projects, and active development.
                </span>
              </div>
              <span className="font-mono text-[0.68rem] bg-white/60 px-2 py-0.5 rounded-md border border-[rgba(168,185,154,0.25)]">
                src/data/skills.js
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
