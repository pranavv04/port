import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SocialMedia from './components/SocialMedia'
import UpperSection from './components/UpperSection'
import TechStack from './components/TechStack'
import Project from './components/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black '>

<UpperSection />
<TechStack />
<Project />
<SocialMedia />
    </div>
  )
}

export default App
