'use client'

import Intro from './componentes/Intro/Intro';
import Projects from '../app/componentes/Projects/Projects'
import Contact from './componentes/contact/Contact';
import About from './componentes/About/about';

export default function Home() {
  return (
   
      <main className='flex flex-col px-4 ml-44 mr-20 '>
        <Intro/>
        <About></About>
        <Projects/>
        <Contact></Contact>
      </main>
    
    
  )
}

