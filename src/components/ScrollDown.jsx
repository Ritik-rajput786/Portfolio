import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiArrowDown } from 'react-icons/fi'

function ScrollDown({ targetId = 'about', className = '' }) {
  const [isVisible, setIsVisible] = useState(true)

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
          className={`absolute bottom-8 left-1/2 z-20 -translate-x-1/2 ${className}`}
        >
          <motion.button
            type="button"
            aria-label="Scroll down"
            onClick={handleClick}
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="grid h-8 w-8 cursor-pointer place-items-center text-slate-200 transition duration-200 hover:text-white"
          >
            <FiArrowDown className="text-[28px]" />
          </motion.button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default ScrollDown
