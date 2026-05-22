import { useApp } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'

function App() {
  const { theme } = useApp()

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-stone-900 text-stone-100' : 'bg-stone-50 text-stone-700'}`}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  )
}

export default App