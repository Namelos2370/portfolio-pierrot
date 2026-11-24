import { useState } from 'react'
import { useLang } from '../context.jsx'
import { CONTACT } from '../data.js'
import { Reveal } from '../hooks.jsx'
import Icon from '../Icons.jsx'
import PageHead from '../components/PageHead.jsx'

export default function Contact() {
  const { t } = useLang()
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')
  const text = encodeURIComponent((name ? name + ' : ' : '') + msg)
  const items = [
    ['whatsapp', 'WhatsApp', CONTACT.whatsappLabel, CONTACT.whatsapp],
    ['mail', 'E-mail', CONTACT.email, `mailto:${CONTACT.email}`],
    ['facebook', 'Facebook', CONTACT.facebookLabel, CONTACT.facebook],
    ['folder', t.ref_link, 'Google Drive', CONTACT.drive]
  ]
  return (
    <div className="wrap block">
      <PageHead eyebrow={t.nav_contact} title={t.h_contact} lead={t.contact_lead} />
      <div className="contact-grid">
        <div className="links">
          {items.map(([ico, label, sub, href], i) => (
            <Reveal as="a" key={label} href={href} rel="noopener" delay={i * 80}>
              <span className="ico"><Icon name={ico} /></span>
              <span className="lbl">{label}<small>{sub}</small></span>
              <Icon name="arrow" size={20} />
            </Reveal>
          ))}
        </div>
        <Reveal className="form" delay={120}>
          <label htmlFor="c-name">{t.form_name}</label>
          <input id="c-name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
          <label htmlFor="c-msg">{t.form_msg}</label>
          <textarea id="c-msg" rows="5" value={msg} onChange={(e) => setMsg(e.target.value)} />
          <a className="btn wa" href={`${CONTACT.whatsapp}?text=${text}`} rel="noopener"><Icon name="whatsapp" size={20} /> {t.form_send}</a>
          <small>{t.form_note}</small>
        </Reveal>
      </div>
    </div>
  )
}
