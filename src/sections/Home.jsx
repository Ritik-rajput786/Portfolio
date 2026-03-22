import { motion } from 'framer-motion'
import ScrollDown from '../components/ScrollDown'
import { FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import About from './About'
import Certificates from './Certificates'
import Contact from './Contact'
import Education from './Education'
import Projects from './Projects'
import Skills from './Skills'

const resumeUrl = `${import.meta.env.BASE_URL}MockDrive_new_CV.pdf`
const heroProfilePhoto = '/profilephoto.jpeg'

const floatingIcons = [
  { icon: FaReact, className: 'left-4 top-10 text-cyan-300', delay: 0 },
  { icon: FaJsSquare, className: 'right-8 top-4 text-yellow-300', delay: 0.3 },
  { icon: FaNodeJs, className: 'bottom-10 left-10 text-green-300', delay: 0.6 },
  { icon: SiMongodb, className: 'bottom-6 right-6 text-emerald-300', delay: 0.9 },
]

const particles = [
  'left-[8%] top-[16%]',
  'left-[28%] top-[8%]',
  'right-[14%] top-[24%]',
  'right-[22%] top-[58%]',
  'left-[18%] bottom-[18%]',
  'left-[42%] bottom-[12%]',
]

function Home() {
  const stackBadges = [
    { label: 'React', icon: FaReact, color: 'text-cyan-300' },
    { label: 'Node', icon: FaNodeJs, color: 'text-green-300' },
    { label: 'MongoDB', icon: SiMongodb, color: 'text-emerald-300' },
    { label: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-300' },
  ]

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId)
    if (!target) {
      return
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="space-y-12">
      <section
        id="home"
        className="hero-mesh relative snap-start scroll-mt-28 overflow-hidden rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-900/75 via-slate-900/55 to-indigo-950/60 p-6 sm:p-8 md:p-12"
      >
        <div className="pointer-events-none absolute -left-20 top-12 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-8 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" />

        {particles.map((particle, index) => (
          <motion.span
            key={particle}
            className={`pointer-events-none absolute hidden h-1.5 w-1.5 rounded-full bg-cyan-300/70 md:block ${particle}`}
            animate={{ y: [0, -12, 0], opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 3, delay: index * 0.22, repeat: Number.POSITIVE_INFINITY }}
          />
        ))}

        {floatingIcons.map(({ icon: Icon, className, delay }) => (
          <motion.span
            key={className}
            className={`pointer-events-none absolute hidden text-2xl drop-shadow-[0_0_18px_rgba(56,189,248,0.35)] md:block ${className}`}
            animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay }}
          >
            <Icon />
          </motion.span>
        ))}

        <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.24em] text-cyan-300">Welcome to my portfolio</p>
          <h1 className="font-display text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Ritik Rajput
          </h1>
          <p className="mt-5 inline-block rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-semibold text-cyan-200 sm:text-base">
            Full Stack Developer | MERN Stack
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {stackBadges.map(({ label, icon: Icon, color }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200"
              >
                <Icon className={color} />
                {label}
              </span>
            ))}
          </div>
          <p className="mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
            I build responsive and scalable web applications with modern tools and focus on clean user
            experience.
          </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={resumeUrl}
                download
                className="rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-7 py-3.5 font-semibold text-white shadow-[0_12px_30px_rgba(79,70,229,0.35)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_16px_40px_rgba(59,130,246,0.4)]"
              >
                Download Resume
              </a>
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="rounded-xl border border-slate-400/70 bg-slate-900/35 px-7 py-3.5 font-semibold text-slate-100 transition duration-300 hover:scale-[1.03] hover:border-cyan-300 hover:text-cyan-200"
              >
                View Projects
              </button>
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="relative"
          >
            <div className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-r from-cyan-400/70 via-indigo-500/75 to-purple-500/75 blur-md" />
            <div className="relative grid place-items-center overflow-hidden rounded-[1.7rem] border border-white/15 bg-slate-900/45 p-4 backdrop-blur-xl shadow-[0_14px_40px_rgba(30,41,59,0.45)]">
              <img
                src={heroProfilePhoto}
                alt="Ritik Rajput"
                className="w-72 h-72 object-cover rounded-2xl border border-cyan-400/30 shadow-[0_0_40px_rgba(59,130,246,0.4)]"
              />
            </div>
          </motion.div>
        </motion.div>
        </div>

        <ScrollDown targetId="about" />
      </section>

      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
    </div>
  )
}

export default Home