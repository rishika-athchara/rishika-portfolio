import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';

/* ── Social links for contact section ─── */
const contactSocials = [
  {
    label: 'GitHub',
    href: 'https://github.com/rishika-athchara',
    color: '#181717',
    bgColor: 'rgba(24,23,23,0.08)',
    emoji: '⌥',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rishika-athchara/',
    color: '#0A66C2',
    bgColor: 'rgba(10,102,194,0.08)',
    emoji: '⚡',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/rishika2406/',
    color: '#FFA116',
    bgColor: 'rgba(255,161,22,0.08)',
    emoji: '⌘',
  },
  {
    label: 'Email',
    href: 'mailto:rishika.athghara2406@gmail.com',
    color: '#D14836',
    bgColor: 'rgba(209,72,54,0.08)',
    emoji: '✉',
  },
];

const validate = ({ name, email, message }) => {
  if (!name.trim()) return 'Please enter your name.';
  if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return 'Please enter a valid email address.';
  if (!message.trim() || message.length < 10)
    return 'Please enter a message of at least 10 characters.';
  return null;
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate(form);
    if (err) { setError(err); return; }
    setError('');
    setStatus('info');
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--pearl)' }}
    >
      {/* blob */}
      <div
        className="blob-animate absolute -top-32 -left-32 w-96 h-96 opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(168,185,154,0.5) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.p
          className="text-label mb-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.p>
        <motion.h2
          className="heading-display text-4xl md:text-5xl xl:text-6xl mb-4 max-w-2xl"
          style={{ color: 'var(--text-primary)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Let's Create Something{' '}
          <span className="heading-serif italic" style={{ color: 'var(--botanical)' }}>
            Meaningful.
          </span>
        </motion.h2>
        <motion.p
          className="text-base md:text-lg leading-relaxed mb-14 max-w-xl"
          style={{ color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Have an interesting idea or want to collaborate? I'd love to connect
          and explore new possibilities.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard variant="white" className="rounded-4xl p-8" hover={false}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-secondary)', letterSpacing: '0.08em' }}>
                    YOUR NAME
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="glass-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-secondary)', letterSpacing: '0.08em' }}>
                    YOUR EMAIL
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className="glass-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-secondary)', letterSpacing: '0.08em' }}>
                    YOUR MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your idea or project…"
                    className="glass-input resize-none"
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-sm px-4 py-3 rounded-xl" style={{ background: 'rgba(220,53,69,0.08)', color: '#c0392b', border: '1px solid rgba(220,53,69,0.2)' }}>
                    <AlertCircle size={15} /> {error}
                  </div>
                )}

                {status === 'info' && (
                  <div className="flex items-start gap-2 text-sm px-4 py-3 rounded-xl" style={{ background: 'rgba(168,185,154,0.2)', color: 'var(--botanical)', border: '1px solid rgba(168,185,154,0.4)' }}>
                    <CheckCircle size={15} className="mt-0.5 shrink-0" />
                    <span>
                      Form validated! To send real emails, integrate{' '}
                      <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>EmailJS</a>{' '}
                      or{' '}
                      <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Formspree</a>.
                    </span>
                  </div>
                )}

                <GlassButton variant="primary" type="submit" icon={<Send size={15} />}>
                  Send Message
                </GlassButton>
              </form>
            </GlassCard>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Quick social links */}
            <GlassCard variant="cream" className="rounded-4xl p-7" hover={false}>
              <p className="text-label mb-5" style={{ fontSize: '0.62rem' }}>FIND ME ONLINE</p>
              <div className="grid grid-cols-2 gap-3">
                {contactSocials.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="flex items-center gap-3 p-3.5 rounded-2xl group"
                    style={{
                      background: 'rgba(255,255,255,0.55)',
                      border: '1px solid rgba(255,255,255,0.78)',
                      boxShadow: '0 2px 8px rgba(53,69,53,0.06)',
                      textDecoration: 'none',
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200"
                      style={{ background: s.bgColor }}
                    >
                      <span style={{ fontSize: '1rem', color: s.color }}>{s.emoji}</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-medium truncate" style={{ color: 'var(--botanical)' }}>
                        {s.label}
                      </span>
                      <ExternalLink size={10} style={{ color: 'var(--text-muted)', marginTop: 1 }} />
                    </div>
                  </motion.a>
                ))}
              </div>
            </GlassCard>

            {/* Quote card */}
            <GlassCard variant="sage" className="rounded-3xl p-7" hover={false}>
              <p className="heading-serif text-xl italic font-semibold mb-3" style={{ color: 'var(--botanical)' }}>
                "The best ideas are born from meaningful conversations."
              </p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Whether it's a project, an opportunity, or just a friendly chat about
                technology — my inbox is always open.
              </p>
              <a
                href="mailto:rishika.athghara2406@gmail.com"
                className="inline-flex items-center gap-2 mt-4 text-sm font-medium"
                style={{ color: 'var(--botanical)', textDecoration: 'none' }}
              >
                <Mail size={14} />
                rishika.athghara2406@gmail.com
              </a>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
