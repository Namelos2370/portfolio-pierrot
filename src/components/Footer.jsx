import { Link } from 'react-router-dom'
import { useLang } from '../context.jsx'
import { NOM, CONTACT } from '../data.js'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div>
          <strong className="foot-name">{NOM}</strong>
          <p>{t.foot}</p>
        </div>
        <nav aria-label="Pied de page">
          <Link to="/realisations">{t.nav_work}</Link>
          <Link to="/services">{t.nav_services}</Link>
          <Link to="/a-propos">{t.nav_about}</Link>
          <Link to="/contact">{t.nav_contact}</Link>
        </nav>
        <div>
          <a href={CONTACT.whatsapp} rel="noopener">WhatsApp</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </div>
      </div>
      <div className="wrap copy">© {new Date().getFullYear()} {NOM}</div>
    </footer>
  )
}
