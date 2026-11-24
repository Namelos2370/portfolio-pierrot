import { Link } from 'react-router-dom'
import { useLang } from '../context.jsx'
import { Reveal } from '../hooks.jsx'
import Icon from '../Icons.jsx'

export default function CtaBand() {
  const { t } = useLang()
  return (
    <Reveal className="cta-band">
      <div>
        <h2>{t.cta_title}</h2>
        <p>{t.cta_p}</p>
      </div>
      <Link className="btn light" to="/contact">{t.cta_quote} <Icon name="arrow" size={20} /></Link>
    </Reveal>
  )
}
