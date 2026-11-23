import { motion } from 'framer-motion';
import { Compass, Lightbulb, Leaf } from 'lucide-react';
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
    title: 'My Journey',
    body: 'A Computer Science student driven by curiosity and a passion for problem-solving. My academic path has been shaped by meaningful projects, continuous learning, and a 9.64 CGPA that reflects genuine dedication.',
  },
  {
    num: '02',
    icon: Lightbulb,
    title: 'My Interests',
    body: "I'm drawn to the intersection of technology and creativity \u2014 from software development and machine learning to UI design and smart systems. I love building things that actually matter to people.",
  },
  {
    num: '03',
    icon: Leaf,
    title: 'My Philosophy',
    body: 'Technology becomes truly meaningful when purpose meets craftsmanship. I believe in learning continuously, iterating thoughtfully, and creating digital experiences that solve real-world challenges with elegance.',
  },
];

const About = () => (
  <section
    id="about"
    className="section-padding relative overflow-hidden"
    style={{ background: 'var(--pistachio)' }}
  >
    {/* Decorative blob */}
    <div
      className="blob-animate absolute -top-40 -right-40 w-[500px] h-[500px] opacity-30"
      style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(168,185,154,0.3) 100%)' }}
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
        <span className="heading-serif italic" style={{ color: 'var(--botanical)' }}>
          Creative Spirit.
        </span>
      </motion.h2>

      {/* Intro */}
      <motion.p
        className="text-base md:text-lg leading-relaxed max-w-2xl mb-16"
        style={{ color: 'var(--text-secondary)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        variants={fadeUp}
      >
        I'm someone who believes that technology becomes meaningful when creativity
        meets problem-solving. I enjoy learning, experimenting with ideas, and
        developing digital experiences that solve real-world challenges.
      </motion.p>

      {/* Grid: cards + CGPA */}
      <div className="grid lg:grid-cols-3 gap-6 items-start">
        {/* Three story cards */}
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
            >
              <GlassCard
                variant="white"
                className="rounded-3xl p-7 h-full"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(53,69,53,0.08)' }}
                  >
                    <Icon size={18} style={{ color: 'var(--botanical)' }} />
                  </div>
                  <span
                    className="font-serif text-4xl font-bold leading-none"
                    style={{ color: 'rgba(53,69,53,0.1)' }}
                  >
                    {card.num}
                  </span>
                </div>
                <h3
                  className="heading-serif text-xl font-semibold mb-3"
                  style={{ color: 'var(--botanical)' }}
                >
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {card.body}
                </p>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>

      {/* CGPA Achievement banner */}
      <motion.div
        className="mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={7}
        variants={fadeUp}
      >
        <GlassCard
          variant="cream"
          className="rounded-4xl p-8 md:p-10 overflow-hidden"
          hover={false}
        >
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
            <div>
              <p className="text-label mb-2">Academic Achievement</p>
              <div className="flex items-baseline gap-3">
                <span
                  className="font-serif font-bold leading-none"
                  style={{ fontSize: 'clamp(5rem, 12vw, 9rem)', color: 'var(--botanical)' }}
                >
                  9.64
                </span>
                <div>
                  <p
                    className="font-serif text-xl font-semibold"
                    style={{ color: 'var(--olive)' }}
                  >
                    CGPA
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    Current Cumulative GPA
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right max-w-xs">
              <p
                className="heading-serif italic text-xl md:text-2xl"
                style={{ color: 'var(--botanical)' }}
              >
                "Excellence is not a destination — it's a continuous practice."
              </p>
            </div>
          </div>
          {/* Decorative */}
          <div
            className="absolute top-0 right-0 w-64 h-64 opacity-10"
            style={{
              background: 'radial-gradient(circle, var(--botanical) 0%, transparent 70%)',
              transform: 'translate(30%, -30%)',
            }}
          />
        </GlassCard>
      </motion.div>
    </div>
  </section>
);

export default About;
