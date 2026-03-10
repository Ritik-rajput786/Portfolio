import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = 'Portfolio Contact'
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`

    window.location.href = `mailto:ritikrajput1701@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="space-y-8 py-2"
    >
      <header>
        <h2 className="font-display bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
          Contact
        </h2>
        <p className="section-subtitle mt-3">
          Let&apos;s collaborate on web projects, internships, or freelance opportunities.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="section-card rounded-2xl p-6">
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm text-slate-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-sm text-slate-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="mb-2 block text-sm text-slate-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              required
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-7 py-3 font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] transition duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
          >
            Send Message
          </button>
        </form>

        <div className="section-card rounded-2xl p-6">
          <h3 className="mb-4 text-xl font-semibold text-indigo-300">Get in touch</h3>
          <ul className="space-y-3 text-slate-200">
            <li className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-900/40 p-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
              <FaEnvelope className="text-indigo-300" />
              <a href="mailto:ritikrajput1701@gmail.com" className="transition hover:text-cyan-300">
                ritikrajput1701@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-900/40 p-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
              <FaPhoneAlt className="text-indigo-300" /> +91 7206886180
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-900/40 p-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
              <FaLinkedin className="text-indigo-300" />
              <a
                href="https://www.linkedin.com/in/ritik-rajput"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-300"
              >
                linkedin.com/in/ritik-rajput
              </a>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-900/40 p-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
              <FaGithub className="text-indigo-300" />
              <a
                href="https://github.com/Ritik-rajput"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-300"
              >
                github.com/Ritik-rajput
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact