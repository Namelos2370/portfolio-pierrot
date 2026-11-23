import { useState } from 'react'
import { PROJETS, EXP, EDU, SKILLS, CONTACT } from './data.js'
import Visual from './Visual.jsx'

function Timeline({ items, lang }) {
  return (
    <ol className="steps">
      {items.map((e, i) => (
        <li key={i}>
          <h3>{e.t[lang]}</h3>
          <p>
            <b>{lang === 'fr' ? e.p : e.pe}</b>
            {e.d[lang] ? ' · ' + e.d[lang] : ''}
          </p>
        </li>
      ))}
    </ol>
  )
}

export default function Home({ lang, t }) {
  const [cat, setCat] = useState('all')
  const cats = ['all', ...new Set(PROJETS.map((p) => p.cat))]
  const bars = [30, 55, 42, 78, 64, 92, 58, 100, 70, 46]

  return (
    <main>
      <div className="wrap" id="haut">
        <div className="hero">
          <span className="tag">{t.tag}</span>
          <h1 dangerouslySetInnerHTML={{ __html: t.h1 }} />
          <p>{t.lead}</p>
          <div className="cta">
            <a className="btn" href="#realisations">{t.cta_work}</a>
            <a className="btn alt" href="#contact">{t.cta_quote}</a>
          </div>
          <div className="bars" aria-hidden="true">
            {bars.map((h, i) => <span key={i} style={{ height: h + '%' }} />)}
          </div>
        </div>

        <div className="stats">
          <div className="stat"><b>8+</b><span>{t.s1}</span></div>
          <div className="stat"><b>4</b><span>{t.s2}</span></div>
          <div className="stat"><b>3</b><span>{t.s3}</span></div>
        </div>

        <section id="realisations">
          <span className="eyebrow">{t.nav_work}</span>
          <h2>{t.h_work}</h2>
          <div className="filters" role="group" aria-label="Catégories">
            {cats.map((c) => (
              <button key={c} type="button" className="chip" aria-pressed={cat === c} onClick={() => setCat(c)}>
                {t[c]}
              </button>
            ))}
          </div>
          <div className="grid">
            {PROJETS.map((p, i) =>
              cat === 'all' || p.cat === cat ? (
                <article className="card" key={i}>
                  <a className="thumb" href={`#projet-${i + 1}`} aria-label={p.t[lang]}>
                    <Visual projet={p} lang={lang} />
                  </a>
                  <div className="meta">
                    <span className="cat">{t[p.cat]}</span>
                    <h3><a href={`#projet-${i + 1}`}>{p.t[lang]}</a></h3>
                    <p>{p.d[lang]}</p>
                    <a className="more" href={`#projet-${i + 1}`}>{t.more}</a>
                  </div>
                </article>
              ) : null
            )}
          </div>
        </section>

        <section id="services">
          <span className="eyebrow">{t.nav_services}</span>
          <h2>{t.h_services}</h2>
          <div className="services">
            {[1, 2, 3, 4].map((n) => (
              <div className="svc" key={n}>
                <div className="n">{n}</div>
                <div><h3>{t['sv' + n + 't']}</h3><p>{t['sv' + n + 'd']}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="apropos">
          <span className="eyebrow">{t.nav_about}</span>
          <h2>{t.h_about}</h2>
          <div className="about">
            <p>{t.about}</p>
            <ul className="skills" aria-label="Compétences">
              {SKILLS[lang].map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </section>

        <section id="parcours">
          <span className="eyebrow">{t.nav_path}</span>
          <h2>{t.h_path}</h2>
          <Timeline items={EXP} lang={lang} />
          <h3 style={{ margin: '10px 0 12px', fontSize: '1.3rem' }}>{t.h_edu}</h3>
          <Timeline items={EDU} lang={lang} />
        </section>

        <section id="methode">
          <span className="eyebrow">{t.eb_process}</span>
          <h2>{t.h_process}</h2>
          <ol className="steps">
            {[1, 2, 3, 4].map((n) => (
              <li key={n}><h3>{t['p' + n + 't']}</h3><p>{t['p' + n + 'd']}</p></li>
            ))}
          </ol>
        </section>

        <section id="contact" style={{ paddingTop: 20 }}>
          <div className="contact">
            <span className="eyebrow">{t.nav_contact}</span>
            <h2>{t.h_contact}</h2>
            <p>{t.contact_p}</p>
            <div className="links">
              <a href={CONTACT.whatsapp} rel="noopener">WhatsApp <span>{CONTACT.whatsappLabel}</span></a>
              <a href={`mailto:${CONTACT.email}`}>E-mail <span>{CONTACT.email}</span></a>
              <a href={CONTACT.facebook} rel="noopener">Facebook <span>{CONTACT.facebookLabel}</span></a>
              <a href={CONTACT.drive} rel="noopener">{t.ref_link} <span>Google Drive</span></a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
