import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useLang } from '../context.jsx'
import { useScrolled } from '../hooks.jsx'
import { NOM } from '../data.js'
import Icon from '../Icons.jsx'

export default function Header() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const links = [
    ['/', t.nav_home, true],
    ['/realisations', t.nav_work],
    ['/services', t.nav_services],
    ['/a-propos', t.nav_about],
    ['/contact', t.nav_contact]
  ]
  return (
    <header className={`top ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap bar">
        <Link className="logo" to="/" aria-label={NOM}>
          <i aria-hidden="true"><b></b><b></b><b></b></i>
          <span>{NOM}</span>
        </Link>
        <nav className="nav-desktop" aria-label="Navigation">
          {links.map(([to, label, end]) => (
            <NavLink key={to} to={to} end={end}>{label}</NavLink>
          ))}
        </nav>
        <div className="right">
          <div className="lang" role="group" aria-label="Langue / Language">
            {['fr', 'en'].map((l) => (
              <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>{l.toUpperCase()}</button>
            ))}
          </div>
          <Link className="btn small hide-s" to="/contact">{t.cta_quote}</Link>
          <button type="button" className="burger" aria-label={open ? t.close : t.menu} aria-expanded={open} onClick={() => setOpen(!open)}>
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      <div className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Menu mobile">
          {links.map(([to, label, end], i) => (
            <NavLink key={to} to={to} end={end} style={{ '--i': i }} tabIndex={open ? 0 : -1}>{label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
