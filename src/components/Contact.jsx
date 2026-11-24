import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Mail, 
  CheckCircle, 
  AlertCircle, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import GlassButton from './GlassButton';

/* ── Authentic Brand SVG Icons ── */
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M16.102 17.93l-2.697 2.607c-.466.466-1.057.874-1.75 1.224-.693.35-1.438.525-2.235.525-.807 0-1.567-.181-2.282-.543-.715-.361-1.293-.83-1.735-1.408-.442-.577-.798-1.174-1.067-1.791-.269-.617-.417-1.258-.444-1.922V4.715c0-.807.282-1.5.846-2.079.564-.578 1.244-.867 2.04-.867h4.78c.806 0 1.498.293 2.078.879.579.586.869 1.283.869 2.09V7.14h2.344V4.715c0-1.546-.54-2.878-1.618-3.996-1.078-1.117-2.37-1.676-3.873-1.676H7.028c-1.503 0-2.794.552-3.873 1.656-1.078 1.104-1.618 2.433-1.618 3.986v14.5c0 1.56.54 2.898 1.618 4.013 1.079 1.116 2.37 1.675 3.873 1.675 1.502 0 2.794-.559 3.873-1.675l1.618-1.558v2.065h2.344v-5.73l-2.344 2.264v.001zm5.07-9.78c-.773-.773-1.701-1.16-2.782-1.16h-.717V5.634h.717c.473 0 .878.167 1.215.5.337.333.505.734.505 1.206 0 .472-.168.874-.504 1.207-.337.332-.742.499-1.216.499h-.717V7.19h.717c1.082 0 2.009-.386 2.782-1.16.772-.773 1.158-1.699 1.158-2.78 0-1.08-.386-2.007-1.158-2.78C21.172.697 20.246.311 19.165.311h-3.062c-1.082 0-2.009.386-2.782 1.16-.773.772-1.159 1.699-1.159 2.78v2.345h-1.629v2.344h1.629v8.593h2.344V9.49h4.657V7.19h-4.657V4.25c0-.473.168-.875.504-1.207.336-.333.741-.5 1.216-.5h3.062c.473 0 .878.167 1.215.5.337.333.505.734.505 1.207 0 .472-.168.874-.504 1.207-.337.332-.742.499-1.216.499h-1.628V7.19h1.628c1.082 0 2.009-.386 2.782-1.16.773-.772 1.159-1.698 1.159-2.78 0-1.08-.386-2.007-1.159-2.78z"/>
  </svg>
);

const CodeChefIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M11.257.004C5.587.004.75 4.841.75 10.511c0 2.651.978 5.079 2.59 6.934l-2.355 3.086a.75.75 0 0 0 .53 1.28h.008l3.556-.033 1.432 1.675a.75.75 0 0 0 1.148 0l1.432-1.675 3.556.033h.008a.75.75 0 0 0 .53-1.28l-2.355-3.086a9.728 9.728 0 0 0 2.651-6.934c0-5.67-4.837-10.507-3.724-10.507zM12 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM9 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM12 11.5a4.5 4.5 0 0 1-4.5 4.5A4.5 4.5 0 0 1 3 11.5h1.5A3 3 0 0 0 7.5 14.5a3 3 0 0 0 3-3H12z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

/* ── Social profiles list ─── */
const contactSocials = [
  {
    label: 'GitHub',
    username: '@rishika-athchara',
    href: 'https://github.com/rishika-athchara',
    color: '#181717',
    bgColor: 'rgba(24,23,23,0.08)',
    Icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    username: 'rishika-athchara',
    href: 'https://www.linkedin.com/in/rishika-athchara/',
    color: '#0A66C2',
    bgColor: 'rgba(10,102,194,0.08)',
    Icon: LinkedInIcon,
  },
  {
    label: 'LeetCode',
    username: 'rishika2406',
    href: 'https://leetcode.com/u/rishika2406/',
    color: '#FFA116',
    bgColor: 'rgba(255,161,22,0.08)',
    Icon: LeetCodeIcon,
  },
  {
    label: 'CodeChef',
    username: 'rishika_2406',
    href: 'https://www.codechef.com/users/rishika_2406',
    color: '#5B4638',
    bgColor: 'rgba(91,70,56,0.08)',
    Icon: CodeChefIcon,
  },
  {
    label: 'Instagram',
    username: '@_rish.06_',
    href: 'https://www.instagram.com/_rish.06_/',
    color: '#DD2A7B',
    bgColor: 'rgba(221,42,123,0.08)',
    Icon: InstagramIcon,
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
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = 'rishika.athghara2406@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

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
      className="section-padding relative overflow-hidden scroll-mt-28 md:scroll-mt-32"
      style={{ background: 'var(--pearl)' }}
    >
      {/* Background Ambience */}
      <div
        className="blob-animate absolute -top-32 -left-32 w-96 h-96 opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(132,149,125,0.45) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-10 -right-20 w-80 h-80 rounded-full opacity-20 pointer-events-none blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--champagne) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
            style={{
              background: 'rgba(238, 240, 230, 0.85)',
              color: 'var(--botanical)',
              border: '1px solid var(--border)',
            }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--champagne)' }} />
            <span>Let&apos;s Connect</span>
          </motion.div>

          <motion.h2
            className="heading-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ color: 'var(--botanical)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let&apos;s Create Something{' '}
            <span className="heading-serif italic font-normal" style={{ color: 'var(--champagne)' }}>
              Meaningful.
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Have an interesting idea, internship opportunity, or want to collaborate? I&apos;d love to connect and build something extraordinary together.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact form - 7 cols */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div 
              className="rounded-3xl p-6 sm:p-8 relative"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-glass)',
              }}
            >
              <h3 className="text-xl font-bold mb-5" style={{ color: 'var(--botanical)' }}>
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                    Your Name
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
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                    Your Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@organization.com"
                    className="glass-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell me about your project, idea, or questions..."
                    className="glass-input resize-none"
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-xs sm:text-sm px-4 py-3 rounded-xl" style={{ background: 'rgba(220,53,69,0.08)', color: '#c0392b', border: '1px solid rgba(220,53,69,0.2)' }}>
                    <AlertCircle size={15} /> {error}
                  </div>
                )}

                {status === 'info' && (
                  <div className="flex items-start gap-2 text-xs sm:text-sm px-4 py-3 rounded-xl" style={{ background: 'rgba(132,149,125,0.2)', color: 'var(--botanical)', border: '1px solid rgba(132,149,125,0.4)' }}>
                    <CheckCircle size={15} className="mt-0.5 shrink-0" />
                    <span>
                      Message prepared! You can also reach out directly to{' '}
                      <a href={`mailto:${emailAddress}`} className="font-semibold underline">
                        {emailAddress}
                      </a>.
                    </span>
                  </div>
                )}

                <div className="pt-2">
                  <GlassButton variant="primary" type="submit" icon={<Send size={15} />}>
                    Send Message
                  </GlassButton>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Quick contact & social card - 5 cols */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-6"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {/* Primary Email Card with Copy Feature */}
            <div 
              className="rounded-3xl p-6 sm:p-7 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(238, 240, 230, 0.9) 0%, rgba(247, 246, 240, 0.95) 100%)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-glass)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: 'var(--botanical)', color: 'var(--porcelain)' }}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider block" style={{ color: 'var(--botanical)' }}>
                    Direct Email
                  </span>
                  <span className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>
                    Fastest response within 24 hours
                  </span>
                </div>
              </div>

              <div 
                className="p-3 rounded-2xl mb-4 font-mono text-xs sm:text-sm break-all font-medium flex items-center justify-between gap-2"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  color: 'var(--botanical)',
                }}
              >
                <span>{emailAddress}</span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all hover:scale-105"
                  style={{
                    background: 'var(--botanical)',
                    color: 'var(--porcelain)',
                  }}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all hover:scale-105 cursor-pointer"
                  style={{
                    background: copiedEmail ? 'var(--sage)' : 'var(--card-bg)',
                    color: copiedEmail ? '#FFFFFF' : 'var(--botanical)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
                </button>
              </div>
            </div>

            {/* Social profiles list */}
            <div 
              className="rounded-3xl p-6 sm:p-7"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-glass)',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--botanical)' }}>
                  Developer & Social Profiles
                </span>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[var(--pistachio)] text-[var(--botanical)]">
                  5 Verified Links
                </span>
              </div>

              <div className="space-y-2.5">
                {contactSocials.map((s) => {
                  const Icon = s.Icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-2xl transition-all duration-200 group hover:-translate-y-0.5"
                      style={{
                        background: 'rgba(238, 240, 230, 0.45)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                          style={{ background: s.bgColor, color: s.color }}
                        >
                          <Icon />
                        </div>
                        <div>
                          <div className="text-xs font-semibold leading-tight group-hover:text-[var(--champagne)] transition-colors" style={{ color: 'var(--botanical)' }}>
                            {s.label}
                          </div>
                          <div className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>
                            {s.username}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: 'var(--text-secondary)' }} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
