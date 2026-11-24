import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { LangProvider, useLang } from './context.jsx'
import { NOM, PROJETS } from './data.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import Project from './pages/Project.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function Layout() {
  const { pathname } = useLocation()
  const { lang, t } = useLang()

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  useEffect(() => {
    const pm = pathname.match(/^\/realisations\/(\d+)$/)
    const proj = pm ? PROJETS[+pm[1] - 1] : null
    const names = { '/realisations': t.nav_work, '/services': t.nav_services, '/a-propos': t.nav_about, '/contact': t.nav_contact }
    const page = proj ? proj.t[lang] : names[pathname.replace(/\/$/, '')]
    document.title = page ? `${page} · ${NOM}` : `${t.title} · ${NOM}`
    const md = document.querySelector('meta[name="description"]')
    if (md) md.setAttribute('content', proj ? proj.d[lang] : t.desc)
  }, [pathname, lang, t])

  return (
    <>
      <a className="skip" href="#main">Contenu</a>
      <Header />
      <main id="main" key={pathname} className="page"><Outlet /></main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/realisations" element={<Work />} />
            <Route path="/realisations/:id" element={<Project />} />
            <Route path="/services" element={<Services />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LangProvider>
  )
}
