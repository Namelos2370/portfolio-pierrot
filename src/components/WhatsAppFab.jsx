import { useLang } from '../context.jsx'
import { CONTACT } from '../data.js'
import Icon from '../Icons.jsx'

export default function WhatsAppFab() {
  const { t } = useLang()
  return (
    <a className="fab" href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={t.wa_float}>
      <Icon name="whatsapp" size={28} />
      <span className="fab-label">{t.wa_float}</span>
    </a>
  )
}
