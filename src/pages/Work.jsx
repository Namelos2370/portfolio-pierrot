import { useState } from 'react'
import { useLang } from '../context.jsx'
import { PROJETS } from '../data.js'
import PageHead from '../components/PageHead.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function Work() {
  const { t } = useLang()
  const [cat, setCat] = useState('all')
  const cats = ['all', ...new Set(PROJETS.map((p) => p.cat))]
  return (
    <div className="wrap block">
      <PageHead eyebrow={t.nav_work} title={t.h_work} lead={t.work_lead} />
      <div className="filters" role="group" aria-label="Catégories">
        {cats.map((c) => (
          <button key={c} type="button" className="chip" aria-pressed={cat === c} onClick={() => setCat(c)}>{t[c]}</button>
        ))}
      </div>
      <div className="grid" key={cat}>
        {PROJETS.map((p, i) => (cat === 'all' || p.cat === cat) ? <ProjectCard key={i} projet={p} index={i} delay={(i % 3) * 80} /> : null)}
      </div>
      <CtaBand />
    </div>
  )
}
