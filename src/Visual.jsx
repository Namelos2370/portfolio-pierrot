/* Visuel d'un projet : vraie image si `img` est renseignée dans data.js, sinon un visuel illustré. */
function Art({ motif, c, label }) {
  const parts = []
  if (motif === 'bars') {
    ;[80, 140, 100, 190, 150, 220, 120].forEach((v, i) =>
      parts.push(<rect key={i} x={36 + i * 48} y={250 - v} width="34" height={v} rx="4" fill={c[i % 3]} />))
    parts.push(<rect key="a" x="36" y="30" width="140" height="14" rx="3" fill="#0E1A2B" />)
    parts.push(<rect key="b" x="36" y="52" width="90" height="8" rx="3" fill="#9AA7BD" />)
  } else if (motif === 'logo') {
    parts.push(<rect key="a" x="110" y="50" width="180" height="180" rx="90" fill={c[0]} />)
    parts.push(<path key="b" d="M150 190 L200 90 L250 190 Z" fill={c[2]} />)
    parts.push(<rect key="c" x="130" y="250" width="140" height="14" rx="3" fill={c[1]} />)
  } else if (motif === 'poster') {
    parts.push(<rect key="a" x="115" y="20" width="170" height="260" rx="6" fill={c[2]} />)
    parts.push(<circle key="b" cx="200" cy="105" r="52" fill={c[0]} />)
    parts.push(<rect key="c" x="140" y="180" width="120" height="16" rx="3" fill={c[1]} />)
    parts.push(<rect key="d" x="140" y="206" width="80" height="9" rx="3" fill="#FFFFFF" />)
    parts.push(<rect key="e" x="140" y="236" width="120" height="22" rx="4" fill={c[0]} />)
  } else if (motif === 'slides') {
    ;[0, 1, 2].forEach((i) => {
      parts.push(<rect key={'r' + i} x={28 + i * 124} y={70 + i * 8} width="108" height="150" rx="10" fill={c[i]} stroke="#0E1A2B" strokeWidth="2" />)
      parts.push(<rect key={'s' + i} x={42 + i * 124} y={90 + i * 8} width="60" height="10" rx="3" fill="#0E1A2B" opacity=".8" />)
      parts.push(<rect key={'t' + i} x={42 + i * 124} y={112 + i * 8} width="80" height="6" rx="3" fill="#0E1A2B" opacity=".4" />)
    })
  } else if (motif === 'steps') {
    parts.push(<line key="l" x1="70" y1="150" x2="330" y2="150" stroke="#9AA7BD" strokeWidth="4" />)
    for (let i = 0; i < 5; i++) {
      parts.push(<circle key={'c' + i} cx={70 + i * 65} cy="150" r="22" fill={c[i % 3]} />)
      parts.push(<rect key={'t' + i} x={52 + i * 65} y={i % 2 ? 185 : 100} width="36" height="8" rx="3" fill="#0E1A2B" opacity=".55" />)
    }
  } else {
    parts.push(<rect key="a" x="30" y="40" width="150" height="150" rx="12" fill={c[0]} />)
    parts.push(<rect key="b" x="200" y="40" width="170" height="70" rx="12" fill={c[1]} />)
    parts.push(<rect key="c" x="200" y="124" width="170" height="66" rx="12" fill={c[2]} />)
    parts.push(<rect key="d" x="30" y="206" width="340" height="52" rx="12" fill="#0E1A2B" />)
  }
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label={label} xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#E8EDF5" />
      {parts}
    </svg>
  )
}

export default function Visual({ projet, lang }) {
  const label = projet.t[lang]
  if (projet.img) return <img src={projet.img} alt={label} loading="lazy" />
  return <Art motif={projet.motif} c={projet.c} label={label} />
}
