import { motion } from 'framer-motion';
import { Compass, Lightbulb, Leaf, GraduationCap, Award, Sparkles } from 'lucide-react';
import GlassCard from './GlassCard';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cards = [
  {
    num: '01',
    icon: Compass,
    title: 'Academic Background',
    body: 'Pursuing B.Tech in Computer Science and Engineering with a standout 9.64 CGPA. Grounded in data structures, algorithms, object-oriented design, and database architectures.',
  },
  {
    num: '02',
    icon: Lightbulb,
    title: 'Technical & Development Interests',
    body: 'Drawn to full-stack engineering, responsive frontend design, and scalable backend workflows. Passionate about transforming ideas into clean, reliable, and user-centric software.',
  },
  {
    num: '03',
    icon: Leaf,
    title: 'Personal Philosophy',
    body: 'Technology becomes truly meaningful when purposeful engineering meets refined design. I believe in continuous curiosity, clean code craftsmanship, and solving real-world challenges.',
  },
];

const About = () => (
  <section
    id="about"
    className="section-padding relative overflow-hidden scroll-mt-28 md:scroll-mt-32"
    style={{ background: 'var(--pistachio)' }}
  >
    {/* Decorative blob */}
    <div
      className="blob-animate absolute -top-40 -right-40 w-[500px] h-[500px] opacity-30 pointer-events-none"
      style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(132,149,125,0.3) 100%)' }}
    />

    <div className="container mx-auto px-6 relative z-10">
      {/* Section label */}
      <motion.p
        className="text-label mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        About Me
      </motion.p>

      {/* Heading */}
      <motion.h2
        className="heading-display text-4xl md:text-5xl xl:text-6xl mb-6 max-w-2xl"
        style={{ color: 'var(--text-primary)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={fadeUp}
      >
        Curious Mind.{' '}
        <span className="heading-serif italic font-normal" style={{ color: 'var(--botanical)' }}>
          Creative Spirit.
        </span>
      </motion.h2>

      {/* Intro */}
      <motion.p
        className="text-base md:text-lg leading-relaxed max-w-2xl mb-14"
        style={{ color: 'var(--text-secondary)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        variants={fadeUp}
      >
        I&apos;m Rishika Athchara, an engineering student driven by the belief that software
        should be both functionally robust and visually extraordinary. Through academic rigor
        and hands-on projects, I create digital experiences that solve real-world problems.
      </motion.p>

      {/* Three story cards */}
      <div className="grid md:grid-cols-3 gap-6 items-stretch mb-10">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 3}
              variants={fadeUp}
              className="h-full"
            >
              <GlassCard
                variant="white"
                className="h-full flex flex-col justify-between p-7 rounded-3xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="font-serif text-2xl font-bold"
                      style={{ color: 'var(--champagne)' }}
                    >
                      {card.num}
                    </span>
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center"
                      style={{
                        background: 'rgba(132, 149, 125, 0.18)',
                        color: 'var(--botanical)',
                      }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3
                    className="font-serif text-xl font-bold mb-3"
                    style={{ color: 'var(--botanical)' }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {card.body}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>

      {/* Academic Spotlight Banner */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={6}
        variants={fadeUp}
        className="rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-glass)',
        }}
      >
        <div className="flex items-center gap-4">
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
            style={{ background: 'var(--botanical)', color: 'var(--porcelain)' }}
          >
            <GraduationCap className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--champagne)' }}>
                Academic Distinction
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--champagne)]" />
              <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                B.Tech Computer Science & Engineering
              </span>
            </div>
            <h4 className="text-lg font-bold" style={{ color: 'var(--botanical)' }}>
              Top Cohort Academic Standing · 9.64 Cumulative GPA
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div 
            className="px-5 py-2.5 rounded-2xl text-center"
            style={{ background: 'rgba(238, 240, 230, 0.8)', border: '1px solid var(--border)' }}
          >
            <span className="text-xs font-medium block" style={{ color: 'var(--text-secondary)' }}>Current CGPA</span>
            <span className="text-2xl font-bold font-serif" style={{ color: 'var(--botanical)' }}>9.64</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
