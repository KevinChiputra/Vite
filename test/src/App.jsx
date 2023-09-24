import { useState } from 'react'
import Sidenav from './components/sidenav'
import Main from './components/main'
import Work from './components/Work'
import Projects from './components/projects'
import Contact from './components/contact'

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
