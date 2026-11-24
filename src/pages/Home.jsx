import { Link } from 'react-router-dom'
import { useLang } from '../context.jsx'
import { PROJETS, SKILLS } from '../data.js'
import { Reveal, CountUp } from '../hooks.jsx'
import { HeroArt } from '../Art.jsx'
import Icon from '../Icons.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CtaBand from '../components/CtaBand.jsx'

const SVC_ICONS = ['magazine', 'brand', 'gadgets', 'camera']

export default function Home() {
  const { lang, t } = useLang()
  const marquee = [...SKILLS[lang], ...SKILLS[lang]]
  return (
    <>
      <section className="hero wrap">
        <div className="hero-text">
          <span className="tag anim" style={{ '--d': '0ms' }}>{t.tag}</span>
          <h1 className="anim" style={{ '--d': '100ms' }} dangerouslySetInnerHTML={{ __html: t.h1 }} />
          <p className="anim" style={{ '--d': '220ms' }}>{t.lead}</p>
          <div className="cta anim" style={{ '--d': '340ms' }}>
            <Link className="btn" to="/realisations">{t.cta_work} <Icon name="arrow" size={20} /></Link>
            <Link className="btn alt" to="/contact">{t.cta_quote}</Link>
          </div>
        </div>
        <div className="hero-visual anim" style={{ '--d': '200ms' }}><HeroArt /></div>
      </section>

      <div className="wrap">
        <div className="stats">
          {[['8+', t.s1], ['4', t.s2], ['3', t.s3]].map(([v, l], i) => (
            <Reveal className="stat" key={l} delay={i * 90}><b><CountUp value={v} /></b><span>{l}</span></Reveal>
          ))}
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="track">{marquee.map((s, i) => <span key={i}>{s}</span>)}</div>
      </div>

      <section className="wrap block">
        <Reveal as="span" className="eyebrow">{t.nav_work}</Reveal>
        <Reveal as="h2" delay={60}>{t.h_featured}</Reveal>
        <div className="grid">
          {PROJETS.slice(0, 3).map((p, i) => <ProjectCard key={i} projet={p} index={i} delay={i * 100} />)}
        </div>
        <Reveal className="center"><Link className="btn alt" to="/realisations">{t.see_all} <Icon name="arrow" size={20} /></Link></Reveal>
      </section>

      <section className="wrap block">
        <Reveal as="span" className="eyebrow">{t.nav_services}</Reveal>
        <Reveal as="h2" delay={60}>{t.h_services}</Reveal>
        <div className="svc-grid">
          {[1, 2, 3, 4].map((n, i) => (
            <Reveal key={n} delay={i * 90}>
              <Link to="/services" className="svc-card">
                <span className="ico"><Icon name={SVC_ICONS[i]} size={28} /></span>
                <h3>{t['sv' + n + 't']}</h3>
                <p>{t['sv' + n + 'd']}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="wrap"><CtaBand /></div>
    </>
  )
}
