export default function Header({ lang, setLang, t, nom }) {
  return (
    <header className="top">
      <div className="wrap">
        <a className="logo" href="#haut">
          <i aria-hidden="true"><b></b><b></b><b></b></i>
          <span>{nom}</span>
        </a>
        <nav aria-label="Navigation">
          <a href="#realisations">{t.nav_work}</a>
          <a href="#services">{t.nav_services}</a>
          <a href="#apropos">{t.nav_about}</a>
          <a href="#parcours">{t.nav_path}</a>
          <a href="#contact">{t.nav_contact}</a>
        </nav>
        <div className="right">
          <div className="lang" role="group" aria-label="Langue / Language">
            {['fr', 'en'].map((l) => (
              <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="btn small hide-s" href="#contact">{t.cta_quote}</a>
        </div>
      </div>
    </header>
  )
}
