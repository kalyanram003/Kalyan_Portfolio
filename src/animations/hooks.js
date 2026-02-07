import { useInView } from 'react-intersection-observer'

export function useReveal(options = { threshold: 0.25, triggerOnce: true }) {
  const [ref, inView] = useInView(options)
  return { ref, inView }
}

import { useEffect, useState } from 'react'

export function useTypewriter(text = '', speed = 60) {
  const [value, setValue] = useState('')
  useEffect(() => {
    let i = 0
    setValue('')
    const id = setInterval(() => {
      setValue((v) => v + text[i])
      i++
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])
  return value
}

export function useReducedMotionOnMobile() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)')
    const handler = () => setReduced(mq.matches)
    handler()
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

export function useCounter(target = 0, duration = 1200) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let raf = null
    const start = performance.now()
    function tick(now) {
      const elapsed = now - start
      const progress = Math.min(1, elapsed / duration)
      setValue(Math.floor(progress * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])
  return value
}

export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false)
  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch (e) {
      setCopied(false)
    }
  }
  return { copied, copy }
}

export function useParallax(intensity = 0.06) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  useEffect(() => {
    function onMove(e) {
      const x = (e.clientX / window.innerWidth - 0.5) * intensity
      const y = (e.clientY / window.innerHeight - 0.5) * intensity
      setPos({ x, y })
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [intensity])
  return pos
}

export function useMagnetic(ref, strength = 18) {
  useEffect(() => {
    if (!ref.current) return
    function onMove(e) {
      const rect = ref.current.getBoundingClientRect()
      const dx = (e.clientX - (rect.left + rect.width / 2)) / strength
      const dy = (e.clientY - (rect.top + rect.height / 2)) / strength
      ref.current.style.transform = `translate(${dx}px, ${dy}px)`
    }
    function reset() { if (ref.current) ref.current.style.transform = '' }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', reset)
    return () => { window.removeEventListener('pointermove', onMove); window.removeEventListener('pointerleave', reset) }
  }, [ref, strength])
}
