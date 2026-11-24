import { Link, useParams, Navigate } from 'react-router-dom'
import { useLang } from '../context.jsx'
import { PROJETS } from '../data.js'
import { Visual } from '../Art.jsx'
import { Reveal } from '../hooks.jsx'
import Icon from '../Icons.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function Project() {
  const { id } = useParams()
  const { lang, t } = useLang()
  const n = parseInt(id, 10)
  const p = PROJETS[n - 1]
  if (!p) return <Navigate to="/realisations" replace />
  const prev = PROJETS[n - 2]
  const next = PROJETS[n]
  return (
    <div className="wrap detail">
      <Link className="back" to="/realisations">{t.back}</Link>
      <Reveal className="dhero"><Visual projet={p} lang={lang} /></Reveal>
      <Reveal as="span" className="cat">{t[p.cat]}</Reveal>
      <Reveal as="h1" delay={60}>{p.t[lang]}</Reveal>
      <Reveal as="p" className="lead" delay={120}>{p.long[lang]}</Reveal>
      <Reveal className="facts" delay={160}>
        <div className="fact"><b>{t.client}</b><span>{p.client[lang]}</span></div>
        <div className="fact"><b>{t.year}</b><span>{p.year}</span></div>
        <div className="fact"><b>{t.tools}</b><span>{p.tools[lang]}</span></div>
        <div className="fact"><b>{t.cat}</b><span>{t[p.cat]}</span></div>
      </Reveal>
      <Reveal as="h2">{t.deliv}</Reveal>
      <ul className="checks">
        {p.deliv[lang].map((x, i) => (
          <Reveal as="li" key={x} delay={i * 70}><Icon name="check" size={20} />{x}</Reveal>
        ))}
      </ul>
      <div className="pn">
        {prev ? <Link to={`/realisations/${n - 1}`}><small>{t.prev}</small><b>{prev.t[lang]}</b></Link> : <span />}
        {next ? <Link to={`/realisations/${n + 1}`}><small>{t.next}</small><b>{next.t[lang]}</b></Link> : null}
      </div>
      <CtaBand />
    </div>
  )
}
