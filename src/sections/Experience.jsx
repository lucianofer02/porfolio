import { useApp } from '../context/ThemeContext'

function Experience() {
  const { t, theme } = useApp()

  return (
    <section id="experience" className={`py-24 px-6 border-t ${theme === 'dark' ? 'border-stone-700' : 'border-stone-200'}`}>
      <div className="max-w-2xl mx-auto">
        <h2 className={`text-3xl font-semibold mb-10 ${theme === 'dark' ? 'text-stone-100' : 'text-stone-800'}`}>
          {t.experience.title}
        </h2>
        <div className="flex flex-col gap-8">
          {t.experience.jobs.map((job, index) => (
            <div key={index} className={`p-6 rounded-xl border ${theme === 'dark' ? 'border-stone-700 bg-stone-800' : 'border-stone-200 bg-white'}`}>
              <div className="flex justify-between items-start mb-2">
                <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-stone-100' : 'text-stone-800'}`}>
                  {job.role}
                </h3>
                <span className={`text-xs ${theme === 'dark' ? 'text-stone-400' : 'text-stone-500'}`}>
                  {job.period}
                </span>
              </div>
              <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-stone-400' : 'text-stone-500'}`}>
                {job.company}
              </p>
              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-stone-400' : 'text-stone-600'}`}>
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience