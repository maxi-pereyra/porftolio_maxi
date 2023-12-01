'use client'

import Intro from './componentes/Intro/Intro';
import Projects from '../app/componentes/Projects/Projects'
import Separador from './componentes/Separador';
import Skills from './componentes/Skills.tsx/Skills';
export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro/>
      <Separador/>
      <Projects/>
      <Separador/>
      <Skills/>
    </main>
  )
}

