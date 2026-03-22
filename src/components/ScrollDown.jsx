import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiArrowDown } from 'react-icons/fi'

function ScrollDown({ targetId = 'about', className = '' }) {
  const [isVisible, setIsVisible] = useState(true)
  const [ripples, setRipples] = useState([])

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 90)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    const target = document.getElementById(targetId)
    if (!target) {
      return
    }

    const rippleId = `${Date.now()}-${Math.random()}`
    setRipples((prev) => [...prev, rippleId])
    setTimeout(() => {
      setRipples((prev) => prev.filter((id) => id !== rippleId))
    }, 500)

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          className={`absolute bottom-5 left-1/2 z-20 -translate-x-1/2 ${className}`}
        >
          <motion.button
            type="button"
            aria-label="Scroll down"
            onClick={handleClick}
            animate={{ y: [0, 10, 0], boxShadow: ['0 0 20px rgba(56,189,248,0.28)', '0 0 34px rgba(139,92,246,0.38)', '0 0 20px rgba(56,189,248,0.28)'] }}
            transition={{ y: { duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }, boxShadow: { duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' } }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative grid h-12 w-12 place-items-center overflow-hidden rounded-full border border-cyan-300/40 bg-slate-900/50 text-cyan-200 backdrop-blur-xl transition duration-300 hover:border-cyan-300/80 hover:text-white"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-violet-500/20 opacity-80 group-hover:opacity-100" />
            <FiArrowDown className="relative z-10 text-xl" />

            <AnimatePresence>
              {ripples.map((rippleId) => (
                <motion.span
                  key={rippleId}
                  initial={{ scale: 0.2, opacity: 0.5 }}
                  animate={{ scale: 2.4, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="pointer-events-none absolute inset-0 rounded-full border border-cyan-300/55"
                />
              ))}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default ScrollDown
