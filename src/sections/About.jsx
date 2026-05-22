import { useApp } from '../context/ThemeContext'

function About() {
  const { t, theme } = useApp()

  return (
    <section id="about" className={`py-24 px-6 border-t ${theme === 'dark' ? 'border-stone-700' : 'border-stone-200'}`}>
      <div className="max-w-2xl mx-auto">
        <h2 className={`text-3xl font-semibold mb-6 ${theme === 'dark' ? 'text-stone-100' : 'text-stone-800'}`}>
          {t.about.title}
        </h2>
        <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-stone-400' : 'text-stone-600'}`}>
          {t.about.description}
        </p>
      </div>
    </section>
  )
}

export default About
