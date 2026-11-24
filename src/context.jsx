import { createContext, useContext, useEffect, useState } from 'react'
import { T } from './data.js'

const LangContext = createContext(null)
export const useLang = () => useContext(LangContext)

function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'fr' || saved === 'en') return saved
  } catch (e) {}
  return (navigator.language || '').slice(0, 2) === 'en' ? 'en' : 'fr'
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(initialLang)
  const setLang = (l) => {
    setLangState(l)
    try { localStorage.setItem('lang', l) } catch (e) {}
  }
  useEffect(() => { document.documentElement.lang = lang }, [lang])
  return <LangContext.Provider value={{ lang, setLang, t: T[lang] }}>{children}</LangContext.Provider>
}
