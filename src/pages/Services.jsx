import { useLang } from '../context.jsx'
import { Reveal } from '../hooks.jsx'
import Icon from '../Icons.jsx'
import PageHead from '../components/PageHead.jsx'
import CtaBand from '../components/CtaBand.jsx'

const ICONS = ['magazine', 'brand', 'gadgets', 'camera']

export default function Services() {
  const { t } = useLang()
  return (
    <div className="wrap block">
      <PageHead eyebrow={t.nav_services} title={t.h_services} lead={t.services_lead} />
      <div className="svc-grid big">
        {[1, 2, 3, 4].map((n, i) => (
          <Reveal key={n} className="svc-card static" delay={i * 90}>
            <span className="ico"><Icon name={ICONS[i]} size={30} /></span>
            <h3>{t['sv' + n + 't']}</h3>
            <p>{t['sv' + n + 'd']}</p>
          </Reveal>
        ))}
      </div>
      <Reveal as="span" className="eyebrow sp">{t.eb_process}</Reveal>
      <Reveal as="h2" delay={60}>{t.h_process}</Reveal>
      <ol className="steps">
        {[1, 2, 3, 4].map((n) => (
          <Reveal as="li" key={n} delay={n * 70}><h3>{t['p' + n + 't']}</h3><p>{t['p' + n + 'd']}</p></Reveal>
        ))}
      </ol>
      <CtaBand />
    </div>
  )
}
