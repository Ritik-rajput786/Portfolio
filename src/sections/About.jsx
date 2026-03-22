import { motion } from 'framer-motion'
import {
  FaAward,
  FaCertificate,
  FaCode,
  FaGitAlt,
  FaLaptopCode,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import { SiExpress, SiJavascript, SiMongodb, SiTailwindcss } from 'react-icons/si'

const stats = [
  { label: 'Projects Built', value: '6+', icon: FaLaptopCode },
  { label: 'Technologies Learned', value: '10+', icon: FaCode },
  { label: 'Certifications', value: '4', icon: FaCertificate },
  { label: 'DSA Problems Solved', value: '200+', icon: FaAward },
]

const technicalStrengths = [
  { name: 'React', icon: FaReact, tone: 'text-cyan-300' },
  { name: 'Node.js', icon: FaNodeJs, tone: 'text-green-300' },
  { name: 'MongoDB', icon: SiMongodb, tone: 'text-emerald-300' },
  { name: 'Express', icon: SiExpress, tone: 'text-slate-100' },
  { name: 'JavaScript', icon: SiJavascript, tone: 'text-yellow-300' },
  { name: 'Tailwind', icon: SiTailwindcss, tone: 'text-cyan-300' },
  { name: 'Git', icon: FaGitAlt, tone: 'text-orange-300' },
]

const certifications = [
  { title: 'React JS – Infosys', icon: FaCertificate },
  { title: 'Prompt Engineering – Infosys', icon: FaCertificate },
  { title: 'Java – HackerRank', icon: FaCertificate },
  { title: 'Cloud Computing – NPTEL', icon: FaCertificate },
]

function About() {
  return (
    <section id="about" className="relative snap-start scroll-mt-28 space-y-10 overflow-hidden py-2">
      <div className="pointer-events-none absolute -left-16 top-12 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-40 h-52 w-52 rounded-full bg-purple-500/20 blur-3xl" />

      <motion.header
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="section-card rounded-3xl p-7 sm:p-9"
      >
        <h2 className="font-display bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
          About Me
        </h2>
        <p className="mt-4 max-w-4xl text-base text-slate-300 sm:text-lg">
          I am a Full Stack MERN Developer focused on building scalable web applications with clean UI,
          efficient architecture, and strong problem-solving foundations.
        </p>
      </motion.header>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="space-y-5"
      >
        <h3 className="text-2xl font-bold text-white sm:text-3xl">Developer Highlights</h3>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="section-card rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_14px_34px_rgba(34,211,238,0.16)]"
              >
                <Icon className="mb-3 text-2xl text-cyan-300" />
                <p className="text-sm text-slate-300">{item.label}</p>
                <p className="mt-1 text-3xl font-bold text-white">{item.value}</p>
              </div>
            )
          })}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="space-y-5"
      >
        <h3 className="text-2xl font-bold text-white sm:text-3xl">Technical Strengths</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technicalStrengths.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className="section-card rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_14px_34px_rgba(34,211,238,0.16)]"
              >
                <div className="inline-flex items-center gap-2 rounded-xl border border-slate-600/80 bg-slate-900/60 px-3 py-2 text-sm font-semibold text-slate-100">
                  <Icon className={skill.tone} />
                  {skill.name}
                </div>
              </div>
            )
          })}
        </div>
      </motion.section>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="section-card rounded-2xl p-6"
        >
          <h3 className="text-2xl font-bold text-white">Experience / Training Timeline</h3>

          <div className="relative mt-6 border-l border-slate-600/70 pl-6">
            <span className="absolute -left-3 top-1 h-5 w-5 rounded-full border-2 border-cyan-300 bg-slate-950" />
            <p className="text-sm font-semibold text-cyan-300">2025</p>
            <p className="mt-2 font-semibold text-slate-100">Summer Training – Lovely Professional University</p>
            <p className="mt-2 text-slate-300">Topic: Object Oriented Programming using C++</p>
            <p className="mt-2 text-slate-300">Built Student Report Card Management System</p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="section-card rounded-2xl p-6"
        >
          <h3 className="text-2xl font-bold text-white">Certifications</h3>

          <div className="mt-5 grid gap-3">
            {certifications.map((certificate) => {
              const Icon = certificate.icon
              return (
                <div
                  key={certificate.title}
                  className="rounded-xl border border-slate-600/70 bg-slate-900/60 px-4 py-3 transition duration-300 hover:scale-[1.01] hover:border-cyan-400/60 hover:shadow-[0_12px_30px_rgba(34,211,238,0.14)]"
                >
                  <p className="inline-flex items-center gap-2 text-sm font-medium text-slate-200">
                    <Icon className="text-indigo-300" />
                    {certificate.title}
                  </p>
                </div>
              )
            })}
          </div>
        </motion.section>
      </div>
    </section>
  )
}

export default About
