import { useEffect, useState } from 'react'
import { NOM, PROJETS, T } from './data.js'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Detail from './Detail.jsx'

function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'fr' || saved === 'en') return saved
  } catch (e) {}
  return (navigator.language || '').slice(0, 2) === 'en' ? 'en' : 'fr'
}

/* Routage par hash : #projet-3 ouvre la page du projet 3, tout autre hash revient à l'accueil. */
function readRoute() {
  const m = window.location.hash.match(/^#projet-(\d+)$/)
  return m && PROJETS[+m[1] - 1] ? +m[1] : 0
}

export default function App() {
  const [lang, setLangState] = useState(initialLang)
  const [project, setProject] = useState(readRoute)
  const t = T[lang]

  const setLang = (l) => {
    setLangState(l)
    try { localStorage.setItem('lang', l) } catch (e) {}
  }

  useEffect(() => {
    const onHash = () => setProject(readRoute())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    const md = document.querySelector('meta[name="description"]')
    if (md) md.setAttribute('content', t.desc)
  }, [lang, t])

  useEffect(() => {
    document.title = project ? `${PROJETS[project - 1].t[lang]} · ${NOM}` : `${t.title} · ${NOM}`
  }, [project, lang, t])

  /* Défilement : en haut pour une page projet, vers la section pour un lien d'ancre. */
  useEffect(() => {
    if (project) { window.scrollTo(0, 0); return }
    const id = window.location.hash.slice(1)
    const el = id && id !== 'haut' ? document.getElementById(id) : null
    if (el) el.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [project])

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} nom={NOM} />
      {project ? <Detail n={project} lang={lang} t={t} /> : <Home lang={lang} t={t} />}
      <footer>
        <div className="wrap">© {new Date().getFullYear()} {NOM} · {t.foot}</div>
      </footer>
    </>
  )
}
