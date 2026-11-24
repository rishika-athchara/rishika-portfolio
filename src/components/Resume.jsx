import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Eye, 
  Mail, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  BookOpen
} from 'lucide-react';

const RESUME_PATH = '/resume/rishika-resume.pdf';

const Resume = () => {
  const [hasPdf] = useState(true);

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -104, duration: 1.2 });
      } else {
        const navOffset = 104;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section 
      id="resume" 
      className="section-padding relative overflow-hidden scroll-mt-28 md:scroll-mt-32"
      style={{ background: 'var(--pearl)' }}
    >
      {/* Background Ambience */}
      <div 
        className="blob-animate absolute top-1/4 -right-32 w-96 h-96 rounded-full pointer-events-none opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--sage) 0%, transparent 70%)' }}
      />
      <div 
        className="blob-animate absolute bottom-10 -left-20 w-80 h-80 rounded-full pointer-events-none opacity-25 blur-2xl"
        style={{ background: 'radial-gradient(circle, var(--champagne) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
            style={{
              background: 'rgba(238, 240, 230, 0.85)',
              color: 'var(--botanical)',
              border: '1px solid var(--border)',
            }}
          >
            <FileText className="w-3.5 h-3.5" style={{ color: 'var(--champagne)' }} />
            <span>Curriculum Vitae</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-display text-4xl md:text-5xl xl:text-6xl mb-4"
            style={{ color: 'var(--botanical)' }}
          >
            Resume &{' '}
            <span className="heading-serif italic font-normal" style={{ color: 'var(--champagne)' }}>
              Credentials.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            A comprehensive profile of academic distinction, hands-on software engineering projects, and technical foundations.
          </motion.p>
        </div>

        {/* Two-Column Presentation Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ── LEFT: Profile Details (7 Cols) ── */}
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Identity & Introduction Card */}
            <div 
              className="rounded-3xl p-6 sm:p-8 relative overflow-hidden"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-glass)',
              }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold" style={{ color: 'var(--botanical)' }}>
                    Rishika Athchara
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase mt-0.5" style={{ color: 'var(--sage)' }}>
                    Computer Science Engineering Student · Aspiring Software Developer
                  </p>
                </div>
                <div 
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold"
                  style={{ background: 'rgba(201, 168, 117, 0.18)', color: 'var(--champagne)', border: '1px solid rgba(201,168,117,0.35)' }}
                >
                  CGPA: 9.64
                </div>
              </div>

              <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Motivated Computer Science undergraduate dedicated to building impactful digital solutions. Strong foundation in object-oriented programming in Java and C, responsive frontends with React and Tailwind CSS, and robust full-stack project development.
              </p>

              {/* Education Block */}
              <div className="p-4 sm:p-5 rounded-2xl mb-6" style={{ background: 'rgba(238, 240, 230, 0.65)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-2 mb-2 font-semibold text-xs uppercase tracking-wider" style={{ color: 'var(--botanical)' }}>
                  <GraduationCap className="w-4 h-4" style={{ color: 'var(--champagne)' }} />
                  <span>Education</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <h4 className="text-sm font-bold" style={{ color: 'var(--botanical)' }}>
                    Bachelor of Technology — Computer Science & Engineering
                  </h4>
                  <span className="text-xs font-semibold" style={{ color: 'var(--sage)' }}>
                    2023 – 2027
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Consistent academic distinction maintaining a <strong>9.64 CGPA</strong>. Coursework includes Data Structures & Algorithms, OOP, Database Systems, Computer Networks, and Operating Systems.
                </p>
              </div>

              {/* Key Competencies Strip */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider mb-2.5" style={{ color: 'var(--botanical)' }}>
                  Key Skills Summary
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Java', 'C', 'JavaScript', 'Python',
                    'React.js', 'Tailwind CSS', 'HTML5 & CSS3',
                    'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'SQL',
                    'Git & GitHub', 'VS Code', 'REST APIs'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: 'rgba(238, 240, 230, 0.8)',
                        color: 'var(--botanical)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all hover:scale-105"
                style={{
                  background: 'var(--botanical)',
                  color: 'var(--porcelain)',
                  boxShadow: '0 4px 14px rgba(53, 72, 59, 0.2)',
                }}
              >
                <Eye className="w-4 h-4" />
                <span>View Full Resume</span>
              </a>

              <a
                href={RESUME_PATH}
                download="Rishika_Athchara_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all hover:scale-105"
                style={{
                  background: 'var(--card-bg)',
                  color: 'var(--botanical)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-glass)',
                }}
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>

              <button
                type="button"
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all hover:scale-105"
                style={{
                  background: 'rgba(238, 240, 230, 0.85)',
                  color: 'var(--botanical)',
                  border: '1px solid var(--border)',
                }}
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>
          </motion.div>

          {/* ── RIGHT: Resume Document Preview Card (5 Cols) ── */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div 
              className="rounded-3xl p-6 sm:p-7 relative overflow-hidden"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-elevated)',
              }}
            >
              {/* Document Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[var(--border)]">
                <div className="flex items-center gap-2.5">
                  <div 
                    className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs"
                    style={{ background: 'var(--botanical)', color: 'var(--porcelain)' }}
                  >
                    RA
                  </div>
                  <div>
                    <span className="text-xs font-bold block" style={{ color: 'var(--botanical)' }}>
                      rishika-resume.pdf
                    </span>
                    <span className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>
                      Official Curriculum Vitae
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-semibold" style={{ color: 'var(--botanical)' }}>
                    Verified File
                  </span>
                </div>
              </div>

              {/* Realistic Document Preview Surface */}
              <div 
                className="rounded-2xl p-5 mb-5 border border-[var(--border)] text-left shadow-inner relative overflow-hidden"
                style={{ background: '#FAF9F5' }}
              >
                {/* Paper watermark */}
                <div className="absolute right-4 top-4 font-serif text-5xl font-bold opacity-5 pointer-events-none select-none">
                  RA
                </div>

                {/* Header inside paper */}
                <div className="mb-4 pb-3 border-b border-stone-200">
                  <h4 className="font-serif text-lg font-bold" style={{ color: 'var(--botanical)' }}>
                    Rishika Athchara
                  </h4>
                  <p className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>
                    rishika.athghara2406@gmail.com · github.com/rishika-athchara
                  </p>
                </div>

                {/* Section: Education */}
                <div className="mb-3">
                  <div className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--botanical)' }}>
                    Education
                  </div>
                  <div className="text-xs font-semibold" style={{ color: 'var(--charcoal)' }}>
                    B.Tech in Computer Science and Engineering
                  </div>
                  <div className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>
                    CGPA: <strong>9.64</strong> / 10.0 (Top Academic Standing)
                  </div>
                </div>

                {/* Section: Core Projects */}
                <div className="mb-3">
                  <div className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--botanical)' }}>
                    Key Engineering Projects
                  </div>
                  <ul className="text-[11px] space-y-1" style={{ color: 'var(--text-secondary)' }}>
                    <li>• <strong>TaskTutor</strong>: Full-stack educational task management system.</li>
                    <li>• <strong>AirportFlow</strong>: Real-time airport operations & queue simulation.</li>
                    <li>• <strong>PlacementPredict</strong>: Machine learning career outcome modeling.</li>
                    <li>• <strong>Smart City Management</strong>: Urban resource & traffic IoT hub.</li>
                  </ul>
                </div>

                {/* Section: Technical Focus */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--botanical)' }}>
                    Core Technical Strengths
                  </div>
                  <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Java, C, JavaScript, Python, React.js, Tailwind CSS, Node.js, SQL, MongoDB.
                  </p>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="flex items-center justify-between gap-2 pt-2">
                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline"
                  style={{ color: 'var(--botanical)' }}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Open PDF in New Tab</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <a
                  href={RESUME_PATH}
                  download="Rishika_Athchara_Resume.pdf"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline"
                  style={{ color: 'var(--champagne)' }}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Direct Download</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
