import { useApp } from '../context/ThemeContext'

function Navbar() {
  const { theme, toggleTheme, lang, toggleLang } = useApp()

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <button onClick={toggleLang} className={`text-sm px-2 py-1 rounded border hover:opacity-60 transition-opacity ${
        theme === 'dark' ? 'border-stone-600 text-stone-300' : 'border-stone-400 text-stone-600'
      }`}>
        {lang === 'es' ? 'EN' : 'ES'}
      </button>
      <button onClick={toggleTheme} className={`text-sm px-2 py-1 rounded border hover:opacity-60 transition-opacity ${
        theme === 'dark' ? 'border-stone-600 text-stone-300' : 'border-stone-400 text-stone-600'
      }`}>
        {theme === 'dark' ? '☀' : '☾'}
      </button>
    </div>
  )
}

export default Navbar