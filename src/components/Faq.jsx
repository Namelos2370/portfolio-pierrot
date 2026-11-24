import { useState } from 'react'
import { useLang } from '../context.jsx'
import { FAQ } from '../data.js'
import { Reveal } from '../hooks.jsx'

export default function Faq() {
  const { lang, t } = useLang()
  const [open, setOpen] = useState(0)
  return (
    <section className="faq" aria-labelledby="faq-h">
      <Reveal as="span" className="eyebrow sp">{t.faq_eb}</Reveal>
      <Reveal as="h2" id="faq-h" delay={60}>{t.faq_h}</Reveal>
      <div className="faq-list">
        {FAQ[lang].map(([q, a], i) => (
          <div key={i} className={'faq-item' + (open === i ? ' open' : '')}>
            <h3>
              <button type="button" aria-expanded={open === i} aria-controls={'fa' + i} onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{q}</span><i aria-hidden="true" />
              </button>
            </h3>
            <div className="faq-a" id={'fa' + i} role="region"><div><p>{a}</p></div></div>
          </div>
        ))}
      </div>
    </section>
  )
}
