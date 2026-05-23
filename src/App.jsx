import { useApp } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'

function App() {
  const { theme } = useApp()

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-stone-900 text-stone-100' : 'bg-stone-50 text-stone-700'}`}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience/>
    </div>
  )
}

export default App