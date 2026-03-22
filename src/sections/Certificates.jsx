import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FiX } from 'react-icons/fi'
import certificates from '../data/certificates'

function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState(null)

  return (
    <section id="certificates" className="relative snap-start scroll-mt-28 space-y-8 overflow-hidden py-2">
      <div className="pointer-events-none absolute -left-16 top-16 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-6 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" />

      <motion.header
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
          Certificates
        </h2>
        <p className="section-subtitle mt-3">Verified milestones from hands-on learning and technical coursework.</p>
      </motion.header>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {certificates.map((certificate, index) => (
          <motion.article
            key={certificate.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            whileHover={{ scale: 1.05 }}
            className="group cursor-pointer"
            onClick={() => setActiveCertificate(certificate)}
          >
            <div className="relative rounded-2xl p-[1px]">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-65 blur-sm transition duration-300 group-hover:opacity-95" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-[0_16px_36px_rgba(15,23,42,0.5)]">
                <div className="relative overflow-hidden">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />
                </div>

                <div className="space-y-1.5 p-4">
                  <h3 className="text-lg font-semibold text-slate-100">{certificate.title}</h3>
                  <p className="text-sm text-cyan-200/95">{certificate.issuer}</p>
                  {certificate.date ? <p className="text-xs text-slate-400">{certificate.date}</p> : null}
                  <button
                    type="button"
                    className="mt-2 inline-flex rounded-full border border-cyan-400/60 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-200 transition group-hover:border-cyan-300 group-hover:bg-cyan-400/20"
                  >
                    View Full
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {activeCertificate ? (
          <motion.div
            key={activeCertificate.title}
            className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-slate-950/65 backdrop-blur-md"
              aria-label="Close certificate preview"
              onClick={() => setActiveCertificate(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 18 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-cyan-300/30 bg-slate-900/90 shadow-[0_0_55px_rgba(59,130,246,0.35)]"
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-modal-title"
            >
              <div className="flex items-center justify-between border-b border-slate-700/80 px-4 py-3 sm:px-5">
                <div>
                  <h3 id="certificate-modal-title" className="text-base font-semibold text-slate-100 sm:text-lg">
                    {activeCertificate.title}
                  </h3>
                  <p className="text-sm text-slate-300">
                    {activeCertificate.issuer}
                    {activeCertificate.date ? ` • ${activeCertificate.date}` : ''}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveCertificate(null)}
                  className="rounded-lg border border-slate-600/90 bg-slate-800/70 p-2 text-slate-200 transition hover:border-cyan-400/80 hover:text-cyan-200"
                  aria-label="Close modal"
                >
                  <FiX size={18} />
                </button>
              </div>

              <div className="p-3 sm:p-5">
                <img
                  src={activeCertificate.image}
                  alt={`${activeCertificate.title} full certificate`}
                  className="max-h-[78vh] w-full rounded-xl object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}

export default Certificates
