import { Link } from 'react-router-dom'
import { useLang } from '../context.jsx'
import { Visual } from '../Art.jsx'
import { Reveal } from '../hooks.jsx'

export default function ProjectCard({ projet, index, delay = 0 }) {
  const { lang, t } = useLang()
  const to = `/realisations/${index + 1}`
  return (
    <Reveal as="article" className="card" delay={delay}>
      <Link className="thumb" to={to} aria-label={projet.t[lang]}>
        <Visual projet={projet} lang={lang} />
      </Link>
      <div className="meta">
        <span className="cat">{t[projet.cat]}</span>
        <h3><Link to={to}>{projet.t[lang]}</Link></h3>
        <p>{projet.d[lang]}</p>
        <Link className="more" to={to}>{t.more}</Link>
      </div>
    </Reveal>
  )
}
