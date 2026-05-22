import { createContext, useContext, useState } from 'react'
import { translations } from '../i18n'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('light')
  const [lang, setLang] = useState('es')

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')
  const toggleLang = () => setLang(prev => prev === 'es' ? 'en' : 'es')

  const t = translations[lang]

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, toggleLang, t }}>
      <div className={theme}>
        {children}
      </div>
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}