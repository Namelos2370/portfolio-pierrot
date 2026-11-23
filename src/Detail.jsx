import { PROJETS } from './data.js'
import Visual from './Visual.jsx'

export default function Detail({ n, lang, t }) {
  const p = PROJETS[n - 1]
  const prev = PROJETS[n - 2]
  const next = PROJETS[n]
  return (
    <main>
      <div className="wrap detail">
        <a className="back" href="#realisations">{t.back}</a>
        <div className="dhero"><Visual projet={p} lang={lang} /></div>
        <span className="cat">{t[p.cat]}</span>
        <h1>{p.t[lang]}</h1>
        <p className="lead">{p.long[lang]}</p>
        <div className="facts">
          <div className="fact"><b>{t.client}</b><span>{p.client}</span></div>
          <div className="fact"><b>{t.year}</b><span>{p.year}</span></div>
          <div className="fact"><b>{t.tools}</b><span>{p.tools}</span></div>
          <div className="fact"><b>{t.cat}</b><span>{t[p.cat]}</span></div>
        </div>
        <h2>{t.deliv}</h2>
        <ul>{p.deliv[lang].map((x) => <li key={x}>{x}</li>)}</ul>
        <div className="pn">
          {prev ? <a href={`#projet-${n - 1}`}><small>{t.prev}</small><b>{prev.t[lang]}</b></a> : <span />}
          {next ? <a href={`#projet-${n + 1}`}><small>{t.next}</small><b>{next.t[lang]}</b></a> : null}
        </div>
        <div className="contact" style={{ marginTop: 30 }}>
          <h2>{t.similar}</h2>
          <p>{t.similar_p}</p>
          <div className="links"><a href="#contact">{t.cta_quote}</a></div>
        </div>
      </div>
    </main>
  )
}
