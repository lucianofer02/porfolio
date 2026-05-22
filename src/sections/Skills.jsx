import { useApp } from '../context/ThemeContext'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt } from 'react-icons/fa'
import { SiDotnet, SiMysql } from 'react-icons/si'
import { TbSql, TbBrandCSharp  } from 'react-icons/tb'

const skills = {
  frontend: [
    { name: 'HTML', icon: FaHtml5, color: '#e34f26' },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572b6' },
    { name: 'JavaScript', icon: FaJs, color: '#f7df1e' },
    { name: 'React', icon: FaReact, color: '#61dafb' },
  ],
  backend: [
    { name: 'Python', icon: FaPython, color: '#3776ab' },
    { name: 'C#', icon: TbBrandCSharp, color: '#239120' },
    { name: '.NET', icon: SiDotnet, color: '#512bd4' },
  ],
  database: [
    { name: 'SQL', icon: TbSql, color: '#f29111' },
    { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
  ],
  tools: [
    { name: 'Git', icon: FaGitAlt, color: '#f05032' },
  ],
}

function SkillCard({ name, icon: Icon, color, theme }) {
  return (
    <div className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-opacity hover:opacity-70 ${
      theme === 'dark' ? 'border-stone-700 bg-stone-800' : 'border-stone-200 bg-white'
    }`}>
      <Icon size={32} style={{ color }} />
      <span className={`text-sm ${theme === 'dark' ? 'text-stone-300' : 'text-stone-600'}`}>
        {name}
      </span>
    </div>
  )
}

function Skills() {
  const { t, theme } = useApp()

  return (
    <section id="skills" className={`py-24 px-6 border-t ${theme === 'dark' ? 'border-stone-700' : 'border-stone-200'}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className={`text-3xl font-semibold mb-10 ${theme === 'dark' ? 'text-stone-100' : 'text-stone-800'}`}>
          {t.skills.title}
        </h2>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-8">
            <h3 className={`text-sm uppercase tracking-widest mb-4 ${theme === 'dark' ? 'text-stone-400' : 'text-stone-500'}`}>
              {t.skills.categories[category]}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {items.map(skill => (
                <SkillCard key={skill.name} {...skill} theme={theme} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills