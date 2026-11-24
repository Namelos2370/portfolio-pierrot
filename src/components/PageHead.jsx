import { Reveal } from '../hooks.jsx'

export default function PageHead({ eyebrow, title, lead }) {
  return (
    <div className="page-head">
      <Reveal as="span" className="eyebrow">{eyebrow}</Reveal>
      <Reveal as="h1" delay={80}>{title}</Reveal>
      {lead ? <Reveal as="p" className="lead" delay={160}>{lead}</Reveal> : null}
    </div>
  )
}
