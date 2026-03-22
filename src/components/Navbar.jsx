import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sectionElements = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    if (!sectionElements.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: '-35% 0px -50% 0px',
        threshold: 0.2,
      },
    )

    sectionElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId)
    if (!target) {
      return
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveSection(sectionId)
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-700/60 bg-slate-950/65 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="font-display bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-xl font-extrabold text-transparent"
        >
          Ritik Rajput
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className={`group relative rounded-lg px-3 py-2 text-sm font-medium transition ${
                activeSection === link.id
                  ? 'bg-gradient-to-r from-indigo-500/25 to-cyan-400/20 text-indigo-200'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              <span>{link.label}</span>
              <span
                className={`absolute inset-x-3 bottom-1 h-px origin-left bg-gradient-to-r from-cyan-300 to-indigo-300 transition-transform duration-300 ${
                  activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-200 transition hover:bg-slate-800/90 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-700/70 bg-slate-900/95 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className={`rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-indigo-500/25 to-cyan-400/20 text-indigo-200'
                    : 'text-slate-200 hover:bg-slate-700/60 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar