/* Icônes en trait, couleur héritée du texte. Faciles à remplacer. */
const P = {
  magazine: <><rect x="4" y="3" width="13" height="18" rx="2" /><path d="M8 7h5M8 11h5M8 15h3" /><path d="M17 7h3v11a2 2 0 0 1-2 2h-1" /></>,
  brand: <><path d="M12 3l3 7-3 11-3-11z" /><circle cx="12" cy="10" r="1.3" /><path d="M5 21h14" /></>,
  gadgets: <><path d="M5 8h11v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z" /><path d="M16 10h2a2 2 0 0 1 0 5h-2" /><path d="M8 3v2M12 3v2" /></>,
  camera: <><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></>,
  video: <><rect x="3" y="6" width="13" height="12" rx="2" /><path d="M16 10l5-3v10l-5-3" /></>,
  social: <><rect x="7" y="2" width="10" height="20" rx="2.5" /><path d="M11 18h2" /><path d="M10 7h4v4h-4z" /></>,
  interior: <><path d="M3 20V5h18v15z" /><path d="M3 12h8M11 5v7M16 20v-5h5" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  whatsapp: <><path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 8 19.6z" /><path d="M9 9c0 3 3 6 6 6l1.2-1.4-2-1-1 .7c-.8-.4-1.6-1.2-2-2l.7-1-1-2z" /></>,
  facebook: <><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5A.5.5 0 0 1 14 8z" /></>,
  folder: <><path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="M6 6l12 12M18 6L6 18" /></>,
  pin: <><path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  check: <><path d="M5 12l5 5 9-10" /></>
}

export default function Icon({ name, size = 24, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {P[name]}
    </svg>
  )
}
