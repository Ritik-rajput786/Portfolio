import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt, FaRocket } from 'react-icons/fa'
import { FiCheck, FiCopy, FiMail } from 'react-icons/fi'

function Contact() {
  const email = 'ritikrajput1701@gmail.com'
  const phone = '+91 7206886180'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [copiedField, setCopiedField] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [showSuccessToast, setShowSuccessToast] = useState(false)

  const quickConnectOptions = [
    {
      label: 'Hire Me',
      message:
        'Hi Ritik, I reviewed your portfolio and would like to discuss a role with you. Can we schedule a quick call this week?',
    },
    {
      label: 'Collaborate',
      message:
        'Hey Ritik, I have a project idea and would love to collaborate with you. Let me know if you are open to discussing it.',
    },
    {
      label: 'Freelance',
      message:
        'Hi Ritik, I am looking for freelance help on a web application. Please share your availability and pricing details.',
    },
  ]

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/Ritik-rajput786',
      icon: FaGithub,
      tone: 'hover:text-slate-100',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ritik-rajput-2b19b9223/',
      icon: FaLinkedin,
      tone: 'hover:text-cyan-200',
    },
    {
      label: 'Email',
      href: `mailto:${email}`,
      icon: FaEnvelope,
      tone: 'hover:text-violet-200',
    },
  ]

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleQuickConnect = (message) => {
    setFormData((prev) => ({ ...prev, message }))
  }

  const handleCopy = async (fieldName, value) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedField(fieldName)
      setTimeout(() => setCopiedField(''), 1400)
    } catch {
      setCopiedField('')
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setIsSending(true)

    const subject = `Portfolio Contact - ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    await new Promise((resolve) => setTimeout(resolve, 600))

    setShowSuccessToast(true)
    setTimeout(() => setShowSuccessToast(false), 2200)

    window.location.href = mailtoUrl

    setFormData({ name: '', email: '', message: '' })
    setIsSending(false)
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="relative snap-start scroll-mt-28 overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-br from-[#0a0f1c] via-[#0f172a] to-[#020617] px-5 py-10 sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute -left-20 top-10 h-60 w-60 rounded-full bg-cyan-500/30 blur-3xl orb-float-slow" />
      <div className="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl orb-float-delayed" />

      <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-7"
        >
          <div>
            <h2 className="font-display bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl lg:text-6xl">
              Let&apos;s Build Something Amazing 🚀
            </h2>
            <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
              Turning bold ideas into polished digital products. If you are building, scaling, or launching,
              I&apos;m ready to help craft a standout experience.
            </p>
          </div>

          <div className="relative max-w-xl overflow-hidden rounded-2xl border border-cyan-300/20 bg-slate-900/45 p-5 backdrop-blur-xl">
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 left-6 h-32 w-32 rounded-full bg-violet-400/20 blur-2xl" />

            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
              className="relative grid grid-cols-3 gap-3"
            >
              <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4 text-center text-xs font-semibold text-cyan-200">
                UI Craft
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4 text-center text-xs font-semibold text-indigo-200">
                Fast Build
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4 text-center text-xs font-semibold text-violet-200">
                Clean Code
              </div>
            </motion.div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Social Connect</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.1 }}
                    whileHover={{ scale: 1.07, y: -2 }}
                    className={`inline-flex items-center gap-2 rounded-xl border border-slate-600/70 bg-slate-900/65 px-4 py-2 text-sm text-slate-100 shadow-[0_0_0_rgba(34,211,238,0)] transition duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_22px_rgba(56,189,248,0.22)] ${link.tone}`}
                  >
                    <Icon className="text-cyan-300" />
                    {link.label}
                  </motion.a>
                )
              })}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => handleCopy('email', email)}
              className="group relative flex items-center gap-3 rounded-xl border border-slate-600/70 bg-slate-900/55 px-4 py-3 text-left text-sm text-slate-100 transition duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_22px_rgba(56,189,248,0.2)]"
            >
              <FaEnvelope className="text-cyan-300" />
              <span className="truncate">{email}</span>
              <FiCopy className="ml-auto text-slate-400 transition group-hover:text-cyan-300" />
              {copiedField === 'email' ? (
                <span className="absolute -top-2 right-3 rounded-md border border-cyan-300/40 bg-cyan-500/20 px-2 py-0.5 text-[10px] font-semibold text-cyan-200">
                  Copied!
                </span>
              ) : null}
            </button>

            <button
              type="button"
              onClick={() => handleCopy('phone', phone)}
              className="group relative flex items-center gap-3 rounded-xl border border-slate-600/70 bg-slate-900/55 px-4 py-3 text-left text-sm text-slate-100 transition duration-300 hover:border-violet-400/70 hover:shadow-[0_0_22px_rgba(167,139,250,0.2)]"
            >
              <FaPhoneAlt className="text-violet-300" />
              <span>{phone}</span>
              <FiCopy className="ml-auto text-slate-400 transition group-hover:text-violet-300" />
              {copiedField === 'phone' ? (
                <span className="absolute -top-2 right-3 rounded-md border border-violet-300/40 bg-violet-500/20 px-2 py-0.5 text-[10px] font-semibold text-violet-200">
                  Copied!
                </span>
              ) : null}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400/45 via-blue-500/35 to-purple-500/45 blur-lg" />

          <form
            onSubmit={handleSubmit}
            className="relative space-y-5 rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_18px_45px_rgba(2,6,23,0.6)] backdrop-blur-xl sm:p-6"
          >
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-cyan-200">
              <FiMail />
              Contact Form
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Quick Connect</p>
              <div className="flex flex-wrap gap-2">
                {quickConnectOptions.map((item) => (
                  <motion.button
                    key={item.label}
                    type="button"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleQuickConnect(item.message)}
                    className="rounded-full border border-slate-600/80 bg-slate-800/70 px-3 py-1.5 text-xs font-semibold text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="group relative">
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 pb-3 pt-5 text-slate-100 outline-none transition duration-300 focus:border-cyan-400/80 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              />
              <label
                htmlFor="name"
                className="pointer-events-none absolute left-4 top-4 text-sm text-slate-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-300 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Full Name
              </label>
            </div>

            <div className="group relative">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 pb-3 pt-5 text-slate-100 outline-none transition duration-300 focus:border-cyan-400/80 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute left-4 top-4 text-sm text-slate-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-300 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Email Address
              </label>
            </div>

            <div className="group relative">
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full resize-none rounded-xl border border-white/10 bg-slate-950/50 px-4 pb-3 pt-5 text-slate-100 outline-none transition duration-300 focus:border-cyan-400/80 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              />
              <label
                htmlFor="message"
                className="pointer-events-none absolute left-4 top-4 text-sm text-slate-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-300 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Your Message
              </label>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-7 py-3.5 font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.35)] transition duration-300 hover:shadow-[0_0_32px_rgba(59,130,246,0.5)] disabled:cursor-not-allowed disabled:opacity-75"
            >
              {isSending ? <FiCheck className="animate-pulse" /> : <FaRocket />}
              {isSending ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {showSuccessToast ? (
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 22 }}
            transition={{ duration: 0.25 }}
            className="fixed right-4 top-24 z-[70] rounded-xl border border-emerald-300/30 bg-emerald-500/20 px-4 py-3 text-sm font-semibold text-emerald-100 backdrop-blur-xl"
          >
            Message sent successfully 🚀
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  )
}

export default Contact