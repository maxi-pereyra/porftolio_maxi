'use client'
import React from 'react'
import Image from 'next/image'
import foto from '../../../../public/WhatsApp Image 2023-11-20 at 17.29.54.jpeg'
import { motion } from "framer-motion"
import {HiDownload} from "react-icons/hi"
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
export default function Intro() {
  return (
    <section id='home' className='scroll-mt-28 flex mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center h-56 w-56'>
            <div className='relative object-cover h-56 w-56'>
                <motion.div 
                    initial={{opacity: 0 , scale: 0 }}
                    animate={{opacity: 1 , scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.2
                    }}>
                    {/* para imagenes remotas images.remotepattens se tiene que configuarar para un mejor redimiento next.config.js */}
                    <Image 
                        src={foto}
                        alt='Maximiliano Pereyra'
                        width={200}
                        height={200}
                        quality={95}
                        priority={true}
                        className='h-56  w-56 rounded-full object-cover border-[0.35rem] 
                        border-black/20 shadow-xl'/>

                </motion.div>

            </div>
        </div>
        <div className='flex flex-col sm:ml-3'>
            <motion.p className='mb-10 mt-4  text-2xl font-medium !leading-[1.5] 
            sm:text-2xl sm:ml-5'
            initial={{opacity: 0 , y: 100}}
            animate={{opacity: 1 , y: 0 }}>
                Hola soy <span className='font-bold'>Maximiliano Pereyra</span>, desarrollador full stack. Enfocado en  
                    <span className=' font-bold italic underline '> React(next js) </span>
                
            </motion.p>

            <motion.div className='flex flex-col sm:flex-row items-center justify-center 
                gap-2 px-4 text-lg font-medium'
                initial={{opacity: 0 , y: 100}}
                animate={{ opacity: 11 , y: 0}}
                transition={{
                    delay: 0.1,
                }}>
                <a className='group bg-white px-7 py-3 
                flex items-center gap-2 rounded-full
                focus:scale-110 hover:scale-110  active:scale-105 transition
                cursor-pointer border border-black/10'
                href='/CV_MP.pdf' download >Download CV {""}
                <HiDownload/> </a>

                <a className=' bg-white p-4 text-gray-700 
                flex items-center gap-2 rounded-full
                focus:scale-110 hover:scale-110  active:scale-105 transition
                cursor-pointer border border-black/10'
                href='https://www.linkedin.com/in/maximiliano-pereyra-533877231/' target='_blank'>< BsLinkedin/> </a>
                
                <a className=' bg-white p-4 text-gray-700 
                flex items-center gap-2 rounded-full
                focus:scale-110 hover:scale-110  active:scale-105 transition
                cursor-pointer border border-black/10' 
                href='https://github.com/maxi-pereyra' target='_blank'>< FaGithubSquare/> </a>
            </motion.div>
        </div>
    </section>
  )
}
