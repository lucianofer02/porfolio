import { useApp } from '../context/ThemeContext'

function Hero() {
  const { t, theme } = useApp()

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-16">
      <p className={`text-sm uppercase tracking-widest mb-4 ${theme === 'dark' ? 'text-stone-400' : 'text-stone-500'}`}>
        {t.hero.greeting}
      </p>
      <h1 className={`text-6xl font-bold mb-4 ${theme === 'dark' ? 'text-stone-100' : 'text-stone-800'}`}>
        {t.hero.name}
      </h1>
      <h2 className={`text-2xl font-medium mb-4 ${theme === 'dark' ? 'text-stone-300' : 'text-stone-600'}`}>
        {t.hero.role}
      </h2>
      <p className={`text-sm ${theme === 'dark' ? 'text-stone-400' : 'text-stone-500'}`}>
        {t.hero.subtitle}
      </p>
    </section>
  )
}

export default Hero