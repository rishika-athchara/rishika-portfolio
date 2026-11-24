import { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Calendar, 
  Building2, 
  ExternalLink, 
  Eye, 
  Sparkles, 
  X, 
  ShieldCheck, 
  FileText,
  Download
} from 'lucide-react';
import { certifications, certificationCategories } from '../data/certifications';

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalCert, setActiveModalCert] = useState(null);
  const headingId = useId();

  // Filter certifications
  const filteredCertifications = selectedCategory === 'All'
    ? certifications
    : certifications.filter(item => item.category === selectedCategory);

  return (
    <section 
      id="certifications" 
      className="relative section-padding overflow-hidden scroll-mt-28 md:scroll-mt-32"
      aria-labelledby={headingId}
      style={{ background: 'var(--pearl)' }}
    >
      {/* Background Subtle Ambience */}
      <div 
        className="absolute top-1/3 -left-32 w-96 h-96 rounded-full pointer-events-none opacity-35 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--pistachio) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-12 -right-20 w-80 h-80 rounded-full pointer-events-none opacity-30 blur-2xl"
        style={{ background: 'radial-gradient(circle, var(--sage) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
            style={{
              background: 'rgba(238, 240, 229, 0.85)',
              color: 'var(--botanical)',
              border: '1px solid var(--border)',
            }}
          >
            <ShieldCheck className="w-3.5 h-3.5" style={{ color: 'var(--champagne)' }} />
            <span>Credentials & Learning</span>
          </motion.div>

          <motion.h2
            id={headingId}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            style={{ color: 'var(--botanical)' }}
          >
            Certifications & Learning
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Continuous learning, verified skills, and professional engineering coursework.
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12"
        >
          {certificationCategories.map((category) => {
            const isSelected = selectedCategory === category;
            const count = category === 'All' 
              ? certifications.length 
              : certifications.filter(c => c.category === category).length;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 relative select-none flex items-center gap-1.5"
                style={{
                  background: isSelected ? 'var(--botanical)' : 'rgba(255, 254, 250, 0.9)',
                  color: isSelected ? 'var(--porcelain)' : 'var(--text-primary)',
                  border: isSelected ? '1px solid var(--botanical)' : '1px solid var(--border)',
                  boxShadow: isSelected ? '0 4px 14px rgba(53, 72, 59, 0.18)' : '0 2px 6px rgba(53, 72, 59, 0.04)',
                }}
              >
                <span>{category}</span>
                {count > 0 && (
                  <span 
                    className="text-[10px] font-bold px-1.5 py-0.2 rounded-full"
                    style={{
                      background: isSelected ? 'rgba(255, 254, 250, 0.25)' : 'rgba(130, 148, 122, 0.18)',
                      color: isSelected ? '#FFFFFF' : 'var(--botanical)',
                    }}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Grid or Minimal Empty State */}
        <AnimatePresence mode="wait">
          {filteredCertifications.length > 0 ? (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredCertifications.map((cert, index) => (
                <motion.div
                  key={cert.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group rounded-3xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-glass)',
                  }}
                  onClick={() => setActiveModalCert(cert)}
                >
                  <div>
                    {/* Header: Category Badge & Credential Shield */}
                    <div className="flex items-center justify-between mb-4 gap-2">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                        style={{
                          background: 'rgba(238, 240, 229, 0.9)',
                          color: 'var(--botanical)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        {cert.category}
                      </span>
                      
                      <div className="flex items-center gap-1.5">
                        {cert.isSample && (
                          <span 
                            className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                            style={{
                              background: 'rgba(130, 148, 122, 0.15)',
                              color: 'var(--text-secondary)',
                            }}
                          >
                            Sample
                          </span>
                        )}
                        <div 
                          className="w-8 h-8 rounded-xl flex items-center justify-center"
                          style={{ background: 'rgba(130, 148, 122, 0.18)', color: 'var(--botanical)' }}
                        >
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Certificate Thumbnail / Preview Frame */}
                    {cert.image ? (
                      <div className="w-full h-44 rounded-2xl overflow-hidden mb-4 border border-[var(--border)] relative bg-[var(--pistachio)]/30">
                        <img 
                          src={cert.image} 
                          alt={cert.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    ) : (
                      <div 
                        className="w-full h-28 rounded-2xl mb-4 border border-[var(--border)] flex items-center justify-center relative overflow-hidden"
                        style={{
                          background: 'linear-gradient(135deg, rgba(238, 240, 229, 0.6) 0%, rgba(221, 228, 211, 0.3) 100%)',
                        }}
                      >
                        <div 
                          className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                          style={{
                            background: 'rgba(130, 148, 122, 0.2)',
                            color: 'var(--botanical)',
                          }}
                        >
                          <Award className="w-6 h-6" />
                        </div>
                      </div>
                    )}

                    {/* Title */}
                    <h3 
                      className="text-lg sm:text-xl font-bold mb-2 leading-snug group-hover:text-[var(--champagne)] transition-colors"
                      style={{ color: 'var(--botanical)' }}
                    >
                      {cert.title}
                    </h3>

                    {/* Issuer & Date */}
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs mb-3 font-medium" style={{ color: 'var(--text-secondary)' }}>
                      <span className="inline-flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5" style={{ color: 'var(--sage)' }} />
                        {cert.issuer}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" style={{ color: 'var(--sage)' }} />
                        {cert.issueDate}
                      </span>
                    </div>

                    {/* Credential ID if present */}
                    {cert.credentialId && (
                      <div className="text-[11px] font-mono mb-3 px-2.5 py-1 rounded-lg inline-block" style={{ background: 'rgba(238, 240, 229, 0.7)', color: 'var(--botanical)' }}>
                        ID: {cert.credentialId}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-sm line-clamp-3 leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {cert.description}
                    </p>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-semibold group-hover:underline"
                      style={{ color: 'var(--botanical)' }}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View Certificate
                    </span>

                    {cert.verificationUrl && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-xs font-medium hover:underline"
                        style={{ color: 'var(--champagne)' }}
                      >
                        Verify <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Minimal elegant empty state */
            <motion.div
              key="minimal-cert-empty"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="max-w-md mx-auto rounded-3xl p-8 text-center"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-glass)',
              }}
            >
              <div 
                className="w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center"
                style={{ background: 'rgba(238, 240, 229, 0.8)', color: 'var(--botanical)' }}
              >
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold mb-1.5" style={{ color: 'var(--botanical)' }}>
                No certifications in this category
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                New credentials and course completions in &ldquo;{selectedCategory}&rdquo; can be added anytime in <code className="font-mono font-bold">src/data/certifications.js</code>.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {activeModalCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalCert(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 z-10 overflow-hidden"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-elevated)',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalCert(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Tag & Category */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(238, 240, 229, 0.9)',
                    color: 'var(--botanical)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <ShieldCheck className="w-3.5 h-3.5" style={{ color: 'var(--champagne)' }} />
                  <span>{activeModalCert.category}</span>
                </span>
                {activeModalCert.isSample && (
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[var(--pistachio)] text-[var(--text-secondary)]">
                    Editable Sample
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 
                className="text-xl sm:text-2xl font-bold mb-2 leading-snug"
                style={{ color: 'var(--botanical)' }}
              >
                {activeModalCert.title}
              </h3>

              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-medium mb-4" style={{ color: 'var(--text-secondary)' }}>
                <span className="inline-flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" style={{ color: 'var(--sage)' }} />
                  {activeModalCert.issuer}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" style={{ color: 'var(--sage)' }} />
                  Issued {activeModalCert.issueDate}
                  {activeModalCert.expiryDate && ` • Expires ${activeModalCert.expiryDate}`}
                </span>
                {activeModalCert.credentialId && (
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[var(--pistachio)]">
                    ID: {activeModalCert.credentialId}
                  </span>
                )}
              </div>

              {/* Preview Image / PDF */}
              {activeModalCert.image ? (
                <div className="w-full max-h-72 rounded-2xl overflow-hidden mb-5 border border-[var(--border)] bg-[var(--pistachio)]/30 flex items-center justify-center">
                  <img 
                    src={activeModalCert.image} 
                    alt={activeModalCert.title} 
                    className="w-full h-full object-contain max-h-72" 
                  />
                </div>
              ) : activeModalCert.certificateUrl?.endsWith('.pdf') ? (
                <div className="w-full h-44 rounded-2xl mb-5 border border-[var(--border)] bg-[var(--pistachio)]/40 flex flex-col items-center justify-center p-6 text-center">
                  <FileText className="w-10 h-10 mb-2" style={{ color: 'var(--botanical)' }} />
                  <span className="text-sm font-semibold mb-1" style={{ color: 'var(--botanical)' }}>
                    PDF Certificate Document
                  </span>
                  <a 
                    href={activeModalCert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs underline font-medium"
                    style={{ color: 'var(--champagne)' }}
                  >
                    Open Certificate PDF
                  </a>
                </div>
              ) : (
                <div className="w-full h-32 rounded-2xl mb-5 border border-dashed border-[var(--border)] bg-[var(--pistachio)]/20 flex flex-col items-center justify-center p-6 text-center">
                  <Award className="w-8 h-8 mb-2" style={{ color: 'var(--champagne)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--botanical)' }}>
                    Verified Digital Credential
                  </span>
                </div>
              )}

              {/* Description */}
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                {activeModalCert.description}
              </p>

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[var(--border)]">
                <div className="flex items-center gap-2">
                  {/* View Certificate */}
                  {(activeModalCert.certificateUrl || activeModalCert.image) && (
                    <a
                      href={activeModalCert.certificateUrl || activeModalCert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full"
                      style={{
                        background: 'rgba(238, 240, 229, 0.9)',
                        color: 'var(--botanical)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Certificate</span>
                    </a>
                  )}

                  {/* External verification link */}
                  {activeModalCert.verificationUrl && (
                    <a
                      href={activeModalCert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full"
                      style={{
                        background: 'var(--botanical)',
                        color: 'var(--porcelain)',
                      }}
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveModalCert(null)}
                  className="px-4 py-2 rounded-full text-xs font-medium hover:bg-black/5 transition-colors"
                  style={{ color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
