import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const BUTTON_SELECTOR = 'button, [role="button"], .cursor-button'
const LINK_SELECTOR = 'a, .cursor-link'
const CARD_SELECTOR = '.section-card, .cursor-card, .project-card, article'

function CustomCursor() {
  const innerRef = useRef(null)
  const outerRef = useRef(null)

  const rafRef = useRef(0)
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const outlineX = useRef(0)
  const outlineY = useRef(0)
  const hasInitialized = useRef(false)
  const hoverTypeRef = useRef('default')

  const [isReady, setIsReady] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [pulses, setPulses] = useState([])

  useEffect(() => {
    const supportsFinePointer = window.matchMedia('(pointer: fine)').matches
    const supportsHover = window.matchMedia('(hover: hover)').matches

    if (!supportsFinePointer || !supportsHover) {
      return undefined
    }

    setIsEnabled(true)

    document.body.classList.add('custom-cursor-enabled')

    const initX = window.innerWidth / 2
    const initY = window.innerHeight / 2

    mouseX.current = initX
    mouseY.current = initY
    outlineX.current = initX
    outlineY.current = initY

    const onMove = (event) => {
      mouseX.current = event.clientX
      mouseY.current = event.clientY

      // Inner dot should feel instant and match native cursor speed.
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${mouseX.current}px, ${mouseY.current}px, 0) translate(-50%, -50%)`
      }

      if (!hasInitialized.current) {
        setIsReady(true)
        hasInitialized.current = true
      }
    }

    const detectHoverType = (target) => {
      if (!(target instanceof Element)) {
        return 'default'
      }

      if (target.closest(BUTTON_SELECTOR) || target.closest(LINK_SELECTOR)) {
        return 'action'
      }

      if (target.closest(CARD_SELECTOR)) {
        return 'card'
      }

      return 'default'
    }

    const onDown = (event) => {
      setIsClicking(true)

      const pulseId = `${Date.now()}-${Math.random()}`
      const pulse = { id: pulseId, x: event.clientX, y: event.clientY }
      setPulses((prev) => [...prev, pulse])

      setTimeout(() => {
        setPulses((prev) => prev.filter((item) => item.id !== pulseId))
      }, 450)
    }

    const onUp = () => {
      setIsClicking(false)
    }

    const loop = () => {
      outlineX.current += (mouseX.current - outlineX.current) * 0.2
      outlineY.current += (mouseY.current - outlineY.current) * 0.2

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${outlineX.current}px, ${outlineY.current}px, 0) translate(-50%, -50%)`

        if (hoverTypeRef.current === 'card') {
          outerRef.current.style.width = '42px'
          outerRef.current.style.height = '42px'
          outerRef.current.style.borderWidth = '3px'
          outerRef.current.style.boxShadow = '0 0 26px rgba(34,211,238,0.75)'
          outerRef.current.style.borderColor = 'rgba(34,211,238,0.95)'
        } else if (hoverTypeRef.current === 'action') {
          outerRef.current.style.width = '34px'
          outerRef.current.style.height = '34px'
          outerRef.current.style.borderWidth = '2px'
          outerRef.current.style.boxShadow = '0 0 30px rgba(34,211,238,0.88)'
          outerRef.current.style.borderColor = 'rgba(167,139,250,0.95)'
        } else {
          outerRef.current.style.width = '32px'
          outerRef.current.style.height = '32px'
          outerRef.current.style.borderWidth = '2px'
          outerRef.current.style.boxShadow = '0 0 20px rgba(34,211,238,0.7)'
          outerRef.current.style.borderColor = 'rgba(34,211,238,0.9)'
        }
      }

      rafRef.current = window.requestAnimationFrame(loop)
    }

    rafRef.current = window.requestAnimationFrame(loop)

    const onPointerMove = (event) => {
      onMove(event)
      hoverTypeRef.current = detectHoverType(event.target)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    return () => {
      setIsEnabled(false)
      document.body.classList.remove('custom-cursor-enabled')
      window.cancelAnimationFrame(rafRef.current)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  if (!isEnabled) {
    return null
  }

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[90]">
        <div
          ref={outerRef}
          className={`custom-cursor-layer fixed left-0 top-0 h-8 w-8 rounded-full border-2 border-cyan-300 bg-transparent transition-[transform,border-color,box-shadow,opacity,width,height,border-width] duration-150 ${
            isReady ? 'opacity-100' : 'opacity-0'
          } ${isClicking ? 'scale-95' : ''}`}
          style={{
            mixBlendMode: 'difference',
            willChange: 'transform',
          }}
        />

        <div
          ref={innerRef}
          className={`custom-cursor-layer fixed left-0 top-0 h-2 w-2 rounded-full bg-white transition-[box-shadow,opacity,transform] duration-150 ${
            isReady ? 'opacity-100' : 'opacity-0'
          } shadow-[0_0_12px_#ffffff]`}
          style={{
            mixBlendMode: 'difference',
            willChange: 'transform',
          }}
        />
      </div>

      <AnimatePresence>
        {pulses.map((pulse) => (
          <motion.span
            key={pulse.id}
            initial={{ scale: 0.3, opacity: 0.7 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="pointer-events-none fixed z-[91] h-8 w-8 rounded-full border-2 border-cyan-300 shadow-[0_0_16px_#00ffff]"
            style={{
              left: pulse.x,
              top: pulse.y,
              transform: 'translate(-50%, -50%)',
              mixBlendMode: 'difference',
            }}
          />
        ))}
      </AnimatePresence>
    </>
  )
}

export default CustomCursor
