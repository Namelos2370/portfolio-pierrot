import { useEffect, useRef, useState } from 'react'

/* Apparition au défilement. Sans IntersectionObserver, le contenu s'affiche directement. */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') { setOn(true); return }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`reveal ${on ? 'in' : ''} ${className}`} style={{ '--d': delay + 'ms' }} {...rest}>
      {children}
    </Tag>
  )
}

/* Compteur animé : "8+" -> 0+ ... 8+ */
export function CountUp({ value }) {
  const m = String(value).match(/^(\d+)(.*)$/)
  const end = m ? +m[1] : 0
  const suffix = m ? m[2] : ''
  const [n, setN] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!el || reduce || typeof IntersectionObserver === 'undefined') { setN(end); return }
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (now) => {
        const p = Math.min((now - t0) / 1100, 1)
        setN(Math.round(end * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [end])
  return <span ref={ref}>{n}{suffix}</span>
}

export function useScrolled(px = 8) {
  const [s, setS] = useState(false)
  useEffect(() => {
    const on = () => setS(window.scrollY > px)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [px])
  return s
}
