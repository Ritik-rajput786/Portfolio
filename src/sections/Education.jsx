import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

const educationItems = [
  {
    timelineLabel: 'B.Tech – Current',
    degree: 'Bachelor of Technology – Computer Science and Engineering',
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    performance: 'CGPA: 8.26',
  },
  {
    timelineLabel: 'Intermediate – 2021',
    degree: 'Intermediate (PCM)',
    institution: 'SRLVM Vidya Mandir School',
    location: 'Tosham, Haryana',
    performance: 'Score: 84%',
  },
  {
    timelineLabel: 'Matriculation – 2019',
    degree: 'Matriculation',
    institution: 'Mega Mind Sr. Sec. School',
    location: 'Tosham, Haryana',
    performance: 'Score: 75%',
  },
]

function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="space-y-8 py-2"
    >
      <header>
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic timeline and performance highlights.</p>
      </header>

      <div className="relative border-l border-slate-600/80 pl-7 md:pl-10">
        {educationItems.map((item) => (
          <div key={item.degree} className="relative mb-10 last:mb-2">
            <span className="mb-3 inline-flex rounded-full border border-cyan-300/40 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
              {item.timelineLabel}
            </span>

            <article className="section-card relative rounded-2xl border border-slate-600/70 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
              <span className="absolute -left-[2.05rem] top-9 grid h-8 w-8 place-items-center rounded-full border border-cyan-300/80 bg-slate-950 text-cyan-300 md:-left-[3rem]">
                <FaGraduationCap size={14} />
              </span>

              <h3 className="text-2xl font-bold text-indigo-200">{item.degree}</h3>
              <p className="mt-2 text-base font-medium text-slate-100">{item.institution}</p>
              <p className="text-gray-400 text-sm">{item.location}</p>

              <span className="mt-4 inline-flex bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold">
                {item.performance}
              </span>
            </article>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default Education