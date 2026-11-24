import { Link } from 'react-router-dom'
import { useLang } from '../context.jsx'

export default function NotFound() {
  const { t } = useLang()
  return (
    <div className="wrap block center-page">
      <h1>{t.nf_title}</h1>
      <p className="lead">{t.nf_p}</p>
      <Link className="btn" to="/">{t.nf_back}</Link>
    </div>
  )
}
