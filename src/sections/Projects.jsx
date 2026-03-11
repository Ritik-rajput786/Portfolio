import { motion } from 'framer-motion'
import { FaCss3Alt, FaExternalLinkAlt, FaGithub, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiMysql, SiPhp, SiTailwindcss } from 'react-icons/si'

const projects = [
  {
    title: 'Online Job-Internship Finder (MERN Stack)',
    description:
      'A MERN stack platform that helps students search for jobs and internships with secure authentication and dynamic listings.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/Ritik-rajput786/internfinder',
    demo: 'https://github.com/Ritik-rajput',
    image: '/jobfinder.png',
  },
  {
    title: 'Spotify Clone',
    description:
      'A responsive Spotify-inspired music player with play, pause, skip, and volume controls built using HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Ritik-rajput786/spotifyclone',
    demo: 'https://github.com/Ritik-rajput',
    image: '/spotify.webp',
  },
  {
    title: 'Hotel Reservation System',
    description:
      'A hotel management system that handles room bookings, customer records, and staff management with MySQL database integration.',
    technologies: ['JavaScript', 'Tailwind CSS', 'PHP', 'MySQL (XAMPP)'],
    github: 'https://github.com/Ritik-rajput786/Hotel_management_system',
    demo: 'https://github.com/Ritik-rajput',
    image: '/Hotel_res.png',
  },
]

const techIconMap = {
  'React.js': { icon: FaReact, tone: 'text-cyan-300' },
  JavaScript: { icon: FaJsSquare, tone: 'text-yellow-300' },
  'Node.js': { icon: FaNodeJs, tone: 'text-green-300' },
  MongoDB: { icon: SiMongodb, tone: 'text-emerald-300' },
  'Express.js': { icon: SiExpress, tone: 'text-slate-100' },
  'Tailwind CSS': { icon: SiTailwindcss, tone: 'text-cyan-300' },
  HTML: { icon: FaHtml5, tone: 'text-orange-300' },
  CSS: { icon: FaCss3Alt, tone: 'text-blue-300' },
  PHP: { icon: SiPhp, tone: 'text-indigo-300' },
  'MySQL (XAMPP)': { icon: SiMysql, tone: 'text-sky-300' },
}

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="space-y-8 py-2"
    >
      <header>
        <h2 className="font-display bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
          Projects
        </h2>
        <p className="section-subtitle">Selected projects with clean UI, practical features, and modern stacks.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -10 }}
            className="section-card group relative flex h-[460px] flex-col overflow-hidden rounded-2xl border border-slate-600/70 transition duration-300 hover:border-cyan-300/90 hover:shadow-[0_20px_48px_rgba(59,130,246,0.24)]"
          >
            <div className="h-[50%] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover rounded-t-xl group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-xl font-semibold text-indigo-300">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => {
                  const techData = techIconMap[tech]
                  if (!techData) return null
                  const Icon = techData.icon
                  return (
                    <span
                      key={`${project.title}-${tech}-icon`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-600/70 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-200"
                    >
                      <Icon className={techData.tone} />
                      {tech}
                    </span>
                  )
                })}
              </div>
              <div className="mt-auto flex gap-3 pt-5 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 font-semibold text-slate-100 transition hover:scale-[1.02] hover:bg-slate-700"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-indigo-400/70 px-4 py-2 font-semibold text-indigo-200 transition hover:scale-[1.02] hover:bg-indigo-500/20"
                >
                  {/* <FaExternalLinkAlt /> Live Demo */}
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects