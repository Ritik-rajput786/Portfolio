import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/education', label: 'Education' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-700/60 bg-slate-950/65 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="font-display bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-xl font-extrabold text-transparent">
          Ritik Rajput
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `group relative rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-500/25 to-cyan-400/20 text-indigo-200'
                    : 'text-slate-200 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.label}</span>
                  <span
                    className={`absolute inset-x-3 bottom-1 h-px origin-left bg-gradient-to-r from-cyan-300 to-indigo-300 transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </>
              )}
            </NavLink>
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
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-500/25 to-cyan-400/20 text-indigo-200'
                      : 'text-slate-200 hover:bg-slate-700/60 hover:text-white'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar