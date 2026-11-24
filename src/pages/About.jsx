import { useLang } from '../context.jsx'
import { EXP, EDU, SKILLS } from '../data.js'
import { Reveal } from '../hooks.jsx'
import PageHead from '../components/PageHead.jsx'
import CtaBand from '../components/CtaBand.jsx'

function Timeline({ items, lang }) {
  return (
    <ol className="steps">
      {items.map((e, i) => (
        <Reveal as="li" key={i} delay={i * 70}>
          <h3>{e.t[lang]}</h3>
          <p><b>{lang === 'fr' ? e.p : e.pe}</b>{e.d[lang] ? ' · ' + e.d[lang] : ''}</p>
        </Reveal>
      ))}
    </ol>
  )
}

export default function About() {
  const { lang, t } = useLang()
  return (
    <div className="wrap block">
      <PageHead eyebrow={t.nav_about} title={t.h_about} lead={t.about_lead} />
      <div className="about">
        <Reveal as="p">{t.about}</Reveal>
        <Reveal delay={100}>
          <h3 className="sub">{t.skills_h}</h3>
          <ul className="skills">{SKILLS[lang].map((s) => <li key={s}>{s}</li>)}</ul>
        </Reveal>
      </div>
      <Reveal as="h2" className="sp">{t.h_path}</Reveal>
      <Timeline items={EXP} lang={lang} />
      <Reveal as="h2" className="sp">{t.h_edu}</Reveal>
      <Timeline items={EDU} lang={lang} />
      <CtaBand />
    </div>
  )
}
