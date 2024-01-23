'use client'
import React from 'react'

import { motion } from "framer-motion"

export default function Intro() {
  return (
    <section id='home' className='scroll-mt-28 flex mt-6 mb-6 sm:mb-0'>
        <div className='flex flex-col  sm:ml-3'>
            <motion.p className='mb-5 mt-4 text-2xl font-medium !leading-[1.5] 
            sm:text-2xl sm:ml-5'
            initial={{opacity: 0 , y: 100}}
            animate={{opacity: 1 , y: 0 }}>
                    <span className='text-bold flex items-start justify-start text-teal-600 '>Hola! mi nombre es.</span><br />
                    <span className='font-bold text-7xl flex items-start justify-start '>Maximiliano Pereyra.</span><br />
                    <span className='font-bold italic underline flex items-start justify-start  '>construyo para la web.</span><br />
                    <span className='text-base flex  w-1/2'>Soy programador front-end, estudiante de desarrollo de software , autodidacta del e-commerce, entusiasta de las actividades al aire libre y me centro en resolver necesidades en base a codigo funcional.</span><br />

            </motion.p>

            <motion.div className='flex flex-col sm:flex-row items-center justify-start 
                gap-2 px-4 text-lg font-medium'
                initial={{opacity: 0 , y: 100}}
                animate={{ opacity: 11 , y: 0}}
                transition={{
                    delay: 0.1,
                }}>
                    <a className='group bg-white text-black px-7 py-3  
                    flex items-center gap-2 hover:bg-teal-700 hover:text-white
                    focus:scale-110 hover:scale-110  active:scale-105 transition
                    cursor-pointer border border-black'
                    href='/CV_MP.pdf' download >Download CV {""}
                    </a>

            </motion.div>
        </div>
    </section>
  )
}
