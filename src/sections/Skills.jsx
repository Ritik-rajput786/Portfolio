import { motion } from 'framer-motion'
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import { SiC, SiCplusplus, SiExpress, SiMongodb, SiMysql, SiTailwindcss } from 'react-icons/si'

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'C', icon: SiC, tone: 'text-blue-200', level: 85 },
      { name: 'C++', icon: SiCplusplus, tone: 'text-indigo-200', level: 88 },
      { name: 'Java', icon: FaJava, tone: 'text-orange-300', level: 80 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact, tone: 'text-cyan-300', level: 85 },
      { name: 'JavaScript', icon: FaJsSquare, tone: 'text-yellow-300', level: 88 },
      { name: 'HTML', icon: FaHtml5, tone: 'text-orange-300', level: 90 },
      { name: 'CSS', icon: FaCss3Alt, tone: 'text-blue-300', level: 86 },
      { name: 'Tailwind', icon: SiTailwindcss, tone: 'text-cyan-300', level: 84 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, tone: 'text-green-300', level: 80 },
      { name: 'Express', icon: SiExpress, tone: 'text-slate-100', level: 76 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, tone: 'text-emerald-300', level: 78 },
      { name: 'MySQL', icon: SiMysql, tone: 'text-sky-300', level: 82 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt, tone: 'text-orange-300', level: 82 },
      { name: 'GitHub', icon: FaGithub, tone: 'text-slate-200', level: 86 },
    ],
  },
]

function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="relative snap-start scroll-mt-28 space-y-8 overflow-hidden py-2"
    >
      <div className="pointer-events-none absolute -left-16 top-12 h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-14 bottom-14 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />

      <header>
        <h2 className="font-display bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
          Technical Skills
        </h2>
        <p className="section-subtitle">
          My key technical strengths across programming languages, frontend, backend,
          databases, and tools.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        {skillCategories.map((category, categoryIndex) => (
          <motion.article
            key={category.category}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: categoryIndex * 0.06 }}
            className="section-card rounded-2xl p-5"
          >
            <h3 className="mb-4 text-xl font-bold text-indigo-200">{category.category}</h3>

            <div className="grid gap-3 sm:grid-cols-2">
              {category.skills.map((skill, skillIndex) => {
                const Icon = skill.icon

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: skillIndex * 0.05 }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="group rounded-xl border border-slate-600/70 bg-slate-900/70 p-4 transition duration-300 hover:border-cyan-400/70 hover:shadow-[0_12px_26px_rgba(34,211,238,0.16)]"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100">
                        <Icon className={`${skill.tone} transition-transform duration-300 group-hover:scale-110`} />
                        {skill.name}
                      </span>
                      <span className="text-xs font-semibold text-cyan-200">{skill.level}%</span>
                    </div>

                    <div className="h-2 rounded-full bg-slate-700/80">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.12 }}
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_14px_rgba(59,130,246,0.45)]"
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills
