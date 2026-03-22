import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const socialLinks = [
  { href: 'https://github.com/Ritik-rajput', label: 'GitHub', icon: FaGithub },
  { href: 'https://www.linkedin.com/in/ritik-rajput-2b19b9223/', label: 'LinkedIn', icon: FaLinkedin },
  { href: 'mailto:ritikrajput1701@gmail.com', label: 'Email', icon: FaEnvelope },
]

function Footer() {
  return (
    <footer className="mt-12 bg-slate-950/70">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent" />
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-300 sm:flex-row sm:px-6 lg:px-10">
        <p className="text-slate-400">© {new Date().getFullYear()} Ritik Rajput</p>
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-600/70 bg-slate-900/70 p-2 text-slate-200 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-300"
                aria-label={social.label}
              >
                <Icon size={16} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer