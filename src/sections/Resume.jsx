import { motion } from 'framer-motion'

const resumeUrl = `${import.meta.env.BASE_URL}MockDrive_new_CV.pdf`
const resumeHighlights = [
  'Full Stack Developer',
  'MERN Stack',
  'C++ / JavaScript / Python',
  '300+ DSA Problems',
  'Multiple Web Projects',
]

function Resume() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="space-y-10 py-3"
    >
      <header>
        <h2 className="font-display bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
          Resume
        </h2>
        <p className="section-subtitle mt-3">Download or preview my latest resume and professional profile.</p>
      </header>

      <div className="section-card rounded-2xl p-6 sm:p-7">
        <p className="text-slate-300">You can download or open the PDF in a new tab below.</p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={resumeUrl}
            download
            className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-900/30 transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:from-blue-500 hover:to-indigo-500"
          >
            Download Resume
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-cyan-400/70 px-7 py-3.5 font-semibold text-cyan-200 transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:bg-cyan-500/10"
          >
            View Resume
          </a>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold text-cyan-200">Resume Highlights</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {resumeHighlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-xl border border-slate-600/70 bg-slate-900/55 px-4 py-3 text-sm text-slate-200 backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_10px_24px_rgba(59,130,246,0.2)]"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-slate-900/55 p-2 shadow-[0_0_40px_rgba(59,130,246,0.2)]">
          <div className="overflow-hidden rounded-xl">
            <iframe title="Resume Preview" src={resumeUrl} className="h-[520px] w-full bg-white md:h-[640px]" />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Resume