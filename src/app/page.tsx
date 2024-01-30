'use client'

import Intro from './componentes/Intro/Intro';
import CardsProject from './componentes/cardsProject';
import Contact from './componentes/contact/Contact';
import About from './componentes/About/about';

export default function Home() {
  return (
   
      <main className='flex flex-col px-4 ml-44 mr-20 max-sm:mr-0 max-sm:ml-0 '>
        <Intro/>
        <About></About>
        <CardsProject/>
        <Contact></Contact>
      </main>
    
    
  )
}

