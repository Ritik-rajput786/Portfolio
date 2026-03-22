import { useEffect, useRef } from 'react'

const BUTTON_SELECTOR = 'button, [role="button"], input[type="submit"], input[type="button"], .cursor-button'
const LINK_SELECTOR = 'a, .cursor-link'
const CARD_SELECTOR = 'img, .section-card, .cursor-card'

function AdvancedCursor() {
  const layerRef = useRef(null)
  const coreRef = useRef(null)
  const glowRef = useRef(null)
  const labelRef = useRef(null)
  const modeBadgeRef = useRef(null)

  const rafRef = useRef(0)
  const mouseXRef = useRef(0)
  const mouseYRef = useRef(0)
  const glowXRef = useRef(0)
  const glowYRef = useRef(0)
  const lastParticleAtRef = useRef(0)
  const clickBurstUntilRef = useRef(0)

  const hoverTypeRef = useRef('default')
  const activeMagnetButtonRef = useRef(null)
  const modeRef = useRef('default')
  const manualModeRef = useRef(false)
  const manualModeUntilRef = useRef(0)

  useEffect(() => {
    const supportsFinePointer = window.matchMedia('(pointer: fine)').matches
    const supportsHover = window.matchMedia('(hover: hover)').matches

    if (!supportsFinePointer || !supportsHover) {
      return undefined
    }

    const layer = layerRef.current
    const core = coreRef.current
    const glow = glowRef.current
    const label = labelRef.current
    const badge = modeBadgeRef.current

    if (!layer || !core || !glow || !label || !badge) {
      return undefined
    }

    document.body.classList.add('custom-cursor-enabled')

    const initialX = window.innerWidth / 2
    const initialY = window.innerHeight / 2
    mouseXRef.current = initialX
    mouseYRef.current = initialY
    glowXRef.current = initialX
    glowYRef.current = initialY

    const updateModeBadge = () => {
      badge.textContent = `Cursor: ${modeRef.current}`
    }

    const applyCursorType = (type) => {
      const clickBurstScale = performance.now() < clickBurstUntilRef.current ? 1.08 : 1

      if (type === 'button') {
        glow.style.width = '86px'
        glow.style.height = '36px'
        glow.style.borderRadius = '14px'
        glow.style.borderColor = 'rgba(244,114,182,0.95)'
        glow.style.boxShadow = '0 0 30px rgba(244,114,182,0.65), 0 0 18px rgba(34,211,238,0.6)'
        glow.style.background =
          'linear-gradient(120deg, rgba(34,211,238,0.28), rgba(168,85,247,0.26), rgba(244,114,182,0.24))'
        glow.style.transform += ` scale(${1.03 * clickBurstScale})`
        label.textContent = 'Click'
        label.style.opacity = '1'
      } else if (type === 'link') {
        glow.style.width = '54px'
        glow.style.height = '34px'
        glow.style.borderRadius = '999px'
        glow.style.borderColor = 'rgba(34,211,238,0.95)'
        glow.style.boxShadow = '0 0 30px rgba(34,211,238,0.75)'
        glow.style.background =
          'linear-gradient(120deg, rgba(34,211,238,0.24), rgba(168,85,247,0.22), rgba(244,114,182,0.18))'
        glow.style.transform += ` scale(${1.12 * clickBurstScale})`
        label.style.opacity = '0'
      } else if (type === 'card') {
        glow.style.width = '62px'
        glow.style.height = '62px'
        glow.style.borderRadius = '999px'
        glow.style.borderColor = 'rgba(168,85,247,0.95)'
        glow.style.boxShadow = '0 0 34px rgba(168,85,247,0.62), inset 0 0 0 1px rgba(34,211,238,0.5)'
        glow.style.background = 'transparent'
        glow.style.transform += ` scale(${1.14 * clickBurstScale})`
        label.style.opacity = '0'
      } else {
        glow.style.width = '40px'
        glow.style.height = '40px'
        glow.style.borderRadius = '999px'
        glow.style.borderColor = 'rgba(34,211,238,0.95)'
        glow.style.boxShadow = '0 0 25px rgba(34,211,238,0.7)'
        glow.style.background =
          'linear-gradient(120deg, rgba(34,211,238,0.24), rgba(168,85,247,0.2), rgba(244,114,182,0.18))'
        glow.style.transform += ` scale(${clickBurstScale})`
        label.style.opacity = '0'
      }
    }

    const detectHoverType = (target) => {
      if (!(target instanceof Element)) {
        return 'default'
      }
      if (target.closest(BUTTON_SELECTOR)) {
        return 'button'
      }
      if (target.closest(LINK_SELECTOR)) {
        return 'link'
      }
      if (target.closest(CARD_SELECTOR)) {
        return 'card'
      }
      return 'default'
    }

    const releaseMagneticButton = () => {
      if (activeMagnetButtonRef.current) {
        activeMagnetButtonRef.current.style.translate = ''
      }
      activeMagnetButtonRef.current = null
    }

    const applyMagneticEffect = (target) => {
      if (!(target instanceof Element)) {
        releaseMagneticButton()
        return
      }

      const button = target.closest(BUTTON_SELECTOR)
      if (!button) {
        releaseMagneticButton()
        return
      }

      activeMagnetButtonRef.current = button

      const bounds = button.getBoundingClientRect()
      const centerX = bounds.left + bounds.width / 2
      const centerY = bounds.top + bounds.height / 2
      const dx = (mouseXRef.current - centerX) * 0.14
      const dy = (mouseYRef.current - centerY) * 0.14
      const clampedX = Math.max(-8, Math.min(8, dx))
      const clampedY = Math.max(-8, Math.min(8, dy))

      button.style.translate = `${clampedX}px ${clampedY}px`
    }

    const spawnParticle = () => {
      const now = performance.now()
      if (now - lastParticleAtRef.current < 24) {
        return
      }
      lastParticleAtRef.current = now

      const particle = document.createElement('span')
      particle.className = 'custom-cursor-particle'
      particle.style.left = `${mouseXRef.current}px`
      particle.style.top = `${mouseYRef.current}px`
      layer.appendChild(particle)

      requestAnimationFrame(() => {
        particle.style.opacity = '0'
        particle.style.transform = 'translate(-50%, -50%) scale(2)'
      })

      window.setTimeout(() => {
        particle.remove()
      }, 310)
    }

    const onPointerMove = (event) => {
      mouseXRef.current = event.clientX
      mouseYRef.current = event.clientY

      core.style.transform = `translate3d(${mouseXRef.current}px, ${mouseYRef.current}px, 0) translate(-50%, -50%)`
      label.style.transform = `translate3d(${mouseXRef.current}px, ${mouseYRef.current}px, 0) translate(-50%, -50%)`

      const inferredType = detectHoverType(event.target)
      hoverTypeRef.current = inferredType

      if (manualModeRef.current && performance.now() > manualModeUntilRef.current) {
        manualModeRef.current = false
      }

      if (!manualModeRef.current) {
        if (inferredType === 'card') {
          modeRef.current = 'explore'
        } else if (inferredType === 'button' || inferredType === 'link') {
          modeRef.current = 'click'
        } else {
          modeRef.current = 'default'
        }
      }

      updateModeBadge()
      applyMagneticEffect(event.target)
      spawnParticle()
    }

    const onMouseLeave = () => {
      releaseMagneticButton()
      core.style.opacity = '0'
      glow.style.opacity = '0'
      label.style.opacity = '0'
    }

    const onMouseEnter = () => {
      core.style.opacity = '1'
      glow.style.opacity = '1'
    }

    const onPointerDown = (event) => {
      clickBurstUntilRef.current = performance.now() + 180

      const ripple = document.createElement('span')
      ripple.className = 'custom-cursor-ripple'
      ripple.style.left = `${event.clientX}px`
      ripple.style.top = `${event.clientY}px`
      layer.appendChild(ripple)

      requestAnimationFrame(() => {
        ripple.style.opacity = '0'
        ripple.style.transform = 'translate(-50%, -50%) scale(2.9)'
      })

      window.setTimeout(() => {
        ripple.remove()
      }, 380)
    }

    const onKeyDown = (event) => {
      if (event.key.toLowerCase() !== 'm') {
        return
      }

      manualModeRef.current = true
      manualModeUntilRef.current = performance.now() + 8000

      modeRef.current = modeRef.current === 'default' ? 'explore' : modeRef.current === 'explore' ? 'click' : 'default'
      updateModeBadge()
    }

    const tick = () => {
      glowXRef.current += (mouseXRef.current - glowXRef.current) * 0.2
      glowYRef.current += (mouseYRef.current - glowYRef.current) * 0.2

      glow.style.transform = `translate3d(${glowXRef.current}px, ${glowYRef.current}px, 0) translate(-50%, -50%)`
      label.style.transform = `translate3d(${glowXRef.current}px, ${glowYRef.current}px, 0) translate(-50%, -50%)`

      const activeType =
        modeRef.current === 'explore' ? 'card' : modeRef.current === 'click' ? 'button' : hoverTypeRef.current

      applyCursorType(activeType)

      rafRef.current = window.requestAnimationFrame(tick)
    }

    updateModeBadge()
    rafRef.current = window.requestAnimationFrame(tick)

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('mouseenter', onMouseEnter)
    window.addEventListener('keydown', onKeyDown)

    return () => {
      releaseMagneticButton()
      document.body.classList.remove('custom-cursor-enabled')
      window.cancelAnimationFrame(rafRef.current)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('mouseenter', onMouseEnter)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <div ref={layerRef} className="pointer-events-none fixed inset-0 z-[95]">
      <div
        ref={glowRef}
        className="custom-cursor-layer fixed left-0 top-0 h-10 w-10 rounded-full border-2 border-cyan-300 opacity-0 transition-[opacity] duration-200"
        style={{
          mixBlendMode: 'difference',
          willChange: 'transform',
          boxShadow: '0 0 25px rgba(34,211,238,0.7)',
          background: 'linear-gradient(120deg, rgba(34,211,238,0.24), rgba(168,85,247,0.2), rgba(244,114,182,0.18))',
        }}
      />

      <div
        ref={coreRef}
        className="custom-cursor-layer fixed left-0 top-0 h-2 w-2 rounded-full bg-white opacity-0"
        style={{
          mixBlendMode: 'difference',
          willChange: 'transform',
          boxShadow: '0 0 12px rgba(255,255,255,0.9), 0 0 20px rgba(34,211,238,0.55)',
        }}
      />

      <div
        ref={labelRef}
        className="fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-[11px] font-semibold uppercase tracking-[0.08em] text-white opacity-0"
        style={{ mixBlendMode: 'difference' }}
      >
        Click
      </div>

      <div
        ref={modeBadgeRef}
        className="fixed right-4 top-24 rounded-full border border-cyan-300/45 bg-slate-900/45 px-3 py-1 text-xs font-semibold text-cyan-100 backdrop-blur-md"
      >
        Cursor: default
      </div>
    </div>
  )
}

export default AdvancedCursor
