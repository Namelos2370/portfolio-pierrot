/* Illustrations vectorielles liées aux métiers du client. À remplacer par ses vraies images (champ `img` dans data.js). */
const INK = '#0E1A2B'

function Scene({ motif, c }) {
  switch (motif) {
    case 'magazine':
      return (
        <g>
          <g className="a-float" style={{ '--r': '-6deg' }}>
            <rect x="70" y="52" width="150" height="196" rx="8" fill="#fff" stroke={INK} strokeWidth="2" opacity=".7" transform="rotate(-8 145 150)" />
          </g>
          <g className="a-float d1">
            <rect x="140" y="38" width="170" height="220" rx="8" fill={c[2]} stroke={INK} strokeWidth="2" />
            <rect x="156" y="54" width="100" height="16" rx="3" fill={c[0]} />
            <circle cx="225" cy="130" r="42" fill={c[1]} />
            <path d="M190 160 L225 105 L260 160 Z" fill={c[0]} opacity=".9" />
            <rect x="156" y="190" width="120" height="8" rx="3" fill="#fff" />
            <rect x="156" y="208" width="90" height="6" rx="3" fill="#fff" opacity=".7" />
            <rect x="156" y="222" width="104" height="6" rx="3" fill="#fff" opacity=".7" />
          </g>
        </g>
      )
    case 'brand':
      return (
        <g>
          <g stroke="#C6D0E0" strokeWidth="1">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <line key={'v' + i} x1={50 + i * 45} y1="30" x2={50 + i * 45} y2="240" />)}
            {[0, 1, 2, 3, 4].map((i) => <line key={'h' + i} x1="40" y1={50 + i * 45} x2="360" y2={50 + i * 45} />)}
          </g>
          <path className="a-draw" d="M70 200 C 110 60, 200 60, 230 150 S 320 220, 335 90" fill="none" stroke={c[0]} strokeWidth="5" strokeLinecap="round" />
          {[[70, 200], [230, 150], [335, 90]].map(([x, y], i) => (
            <rect key={i} x={x - 6} y={y - 6} width="12" height="12" fill="#fff" stroke={INK} strokeWidth="2" />
          ))}
          <g className="a-float d1">
            <circle cx="150" cy="170" r="34" fill={c[2]} />
            <path d="M128 190 L150 140 L172 190 Z" fill={INK} />
          </g>
          {[c[0], c[1], c[2]].map((col, i) => <circle key={i} cx={70 + i * 26} cy="268" r="10" fill={col} stroke={INK} strokeWidth="1.5" />)}
        </g>
      )
    case 'gadgets':
      return (
        <g>
          <g className="a-float">
            <path d="M70 90 h80 v90 a30 30 0 0 1 -30 30 h-20 a30 30 0 0 1 -30 -30z" fill={c[0]} stroke={INK} strokeWidth="2" />
            <path d="M150 105 h14 a20 20 0 0 1 0 50 h-14" fill="none" stroke={INK} strokeWidth="6" />
            <circle cx="110" cy="140" r="16" fill={c[1]} />
          </g>
          <g className="a-float d1">
            <path d="M215 70 l30 -14 q15 14 30 0 l30 14 l-18 36 l-14 -6 v100 h-56 v-100 l-14 6z" fill={c[2]} stroke={INK} strokeWidth="2" />
            <rect x="245" y="120" width="30" height="30" rx="6" fill={c[0]} />
          </g>
          <g className="a-float d2">
            <rect x="60" y="215" width="80" height="50" rx="6" fill="#fff" stroke={INK} strokeWidth="2" />
            <path d="M80 215 v-14 a20 20 0 0 1 40 0 v14" fill="none" stroke={INK} strokeWidth="2" />
            <circle cx="100" cy="240" r="9" fill={c[1]} />
          </g>
        </g>
      )
    case 'social':
      return (
        <g>
          <g className="a-float">
            <rect x="130" y="24" width="140" height="252" rx="20" fill="#fff" stroke={INK} strokeWidth="3" />
            <rect x="160" y="34" width="80" height="6" rx="3" fill={INK} opacity=".25" />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <rect key={i} x={146 + (i % 2) * 56} y={56 + Math.floor(i / 2) * 62} width="50" height="54" rx="6" fill={c[i % 3 === 1 ? 2 : i % 3 === 2 ? 0 : 1]} opacity={i % 3 === 1 ? 1 : 0.92} stroke={INK} strokeWidth="1.5" />
            ))}
          </g>
          <g className="a-float d1">
            <path d="M300 60 a26 26 0 1 1 0 .01z" fill={c[2]} stroke="none" />
            <path d="M300 78 l-12 -12 a8 8 0 0 1 12 -10 a8 8 0 0 1 12 10z" fill="#fff" />
          </g>
          <g className="a-float d2">
            <rect x="52" y="170" width="64" height="40" rx="10" fill={c[0]} />
            <path d="M70 210 l-6 14 l20 -14z" fill={c[0]} />
            <rect x="64" y="184" width="40" height="6" rx="3" fill="#fff" />
            <rect x="64" y="196" width="26" height="6" rx="3" fill="#fff" opacity=".7" />
          </g>
        </g>
      )
    case 'photovideo':
      return (
        <g>
          <g className="a-float">
            <rect x="60" y="100" width="190" height="120" rx="14" fill={c[0]} stroke={INK} strokeWidth="2" />
            <path d="M100 100 l14 -22 h60 l14 22" fill={c[0]} stroke={INK} strokeWidth="2" />
            <circle cx="155" cy="160" r="42" fill="#fff" stroke={INK} strokeWidth="3" />
            <circle cx="155" cy="160" r="28" fill={INK} />
            <circle cx="155" cy="160" r="12" fill={c[1]} />
            <circle cx="228" cy="122" r="7" fill={c[2]} />
          </g>
          <g className="a-float d1">
            <rect x="228" y="190" width="130" height="72" rx="6" fill={INK} />
            {[0, 1, 2, 3, 4, 5].map((i) => <rect key={i} x={236 + i * 20} y="196" width="10" height="8" rx="2" fill="#fff" opacity=".6" />)}
            {[0, 1, 2, 3, 4, 5].map((i) => <rect key={'b' + i} x={236 + i * 20} y="248" width="10" height="8" rx="2" fill="#fff" opacity=".6" />)}
            <rect x="238" y="210" width="50" height="34" rx="3" fill={c[1]} />
            <rect x="296" y="210" width="50" height="34" rx="3" fill={c[2]} />
            <path d="M257 220 l16 7 -16 7z" fill="#fff" />
          </g>
        </g>
      )
    default: /* interior */
      return (
        <g>
          <rect x="40" y="40" width="320" height="220" fill="#fff" stroke={INK} strokeWidth="5" />
          <path d="M40 150 H170 M170 40 V150 M250 260 V170 H360 M250 170 V105 H360" fill="none" stroke={INK} strokeWidth="4" />
          <path d="M170 150 a28 28 0 0 1 28 -28" fill="none" stroke={c[0]} strokeWidth="2" strokeDasharray="4 3" />
          <g className="a-float">
            <rect x="60" y="60" width="90" height="46" rx="8" fill={c[2]} stroke={INK} strokeWidth="2" />
            <rect x="60" y="106" width="90" height="12" rx="4" fill={c[1]} />
          </g>
          <rect x="190" y="60" width="140" height="34" rx="6" fill={c[0]} opacity=".85" />
          <circle cx="300" cy="215" r="22" fill={c[1]} stroke={INK} strokeWidth="2" />
          <rect x="70" y="180" width="70" height="50" rx="6" fill={c[0]} opacity=".85" />
          <rect x="200" y="190" width="30" height="50" rx="6" fill={c[2]} stroke={INK} strokeWidth="2" />
        </g>
      )
  }
}

export default function Art({ motif, c, label }) {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label={label} xmlns="http://www.w3.org/2000/svg" className="art">
      <rect width="400" height="300" fill="#E8EDF5" />
      <Scene motif={motif} c={c} />
    </svg>
  )
}

export function Visual({ projet, lang }) {
  const label = projet.t[lang]
  if (projet.img) return <img className="art" src={projet.img} alt={label} loading="lazy" />
  return <Art motif={projet.motif} c={projet.c} label={label} />
}

/* Illustration du haut de page d'accueil : outils du métier qui flottent. */
export function HeroArt() {
  return (
    <svg viewBox="0 0 420 420" className="hero-art" role="img" aria-label="Illustration : outils de graphiste, appareil photo et pellicule" xmlns="http://www.w3.org/2000/svg">
      <circle cx="210" cy="210" r="170" fill="#E8EDF5" />
      <circle cx="210" cy="210" r="118" fill="none" stroke="#C6D0E0" strokeDasharray="5 7" />
      <g className="a-float">
        <rect x="120" y="110" width="150" height="190" rx="10" fill="#FFC736" stroke={INK} strokeWidth="3" />
        <rect x="136" y="128" width="90" height="16" rx="3" fill="#2848F0" />
        <circle cx="200" cy="205" r="38" fill="#FF5B4A" />
        <path d="M168 232 L200 178 L232 232 Z" fill={INK} opacity=".9" />
        <rect x="136" y="262" width="108" height="8" rx="3" fill="#fff" />
        <rect x="136" y="278" width="76" height="6" rx="3" fill="#fff" opacity=".7" />
      </g>
      <g className="a-float d1">
        <path d="M290 70 l22 54 -22 22 -22 -22z" fill="#2848F0" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <circle cx="290" cy="116" r="5" fill="#fff" />
        <path d="M290 146 v36" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      </g>
      <g className="a-float d2">
        <rect x="262" y="236" width="108" height="76" rx="12" fill={INK} />
        <path d="M284 236 l10 -16 h42 l10 16" fill={INK} />
        <circle cx="316" cy="274" r="24" fill="#fff" />
        <circle cx="316" cy="274" r="14" fill="#2848F0" />
        <circle cx="316" cy="274" r="5" fill="#FFC736" />
      </g>
      <g className="a-float d3">
        <rect x="46" y="250" width="110" height="58" rx="6" fill={INK} />
        {[0, 1, 2, 3, 4].map((i) => <rect key={i} x={54 + i * 21} y="255" width="10" height="7" rx="2" fill="#fff" opacity=".6" />)}
        {[0, 1, 2, 3, 4].map((i) => <rect key={'b' + i} x={54 + i * 21} y="297" width="10" height="7" rx="2" fill="#fff" opacity=".6" />)}
        <rect x="58" y="268" width="40" height="24" rx="3" fill="#FF5B4A" />
        <rect x="104" y="268" width="40" height="24" rx="3" fill="#FFC736" />
      </g>
      <g className="a-float d1">
        {['#2848F0', '#FF5B4A', '#FFC736'].map((col, i) => <circle key={col} cx={64 + i * 30} cy="120" r="13" fill={col} stroke={INK} strokeWidth="2" />)}
      </g>
    </svg>
  )
}
