'use client'
import React from 'react'
import { motion } from "framer-motion"

import { BsLinkedin } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Separador from './Separador';

function Redes() {
  return (
    <div className='flex flex-col '>
          <motion.div className='fixed bottom-0 left-4 
                gap-2 px-4 sm:flex-row'
                initial={{opacity: 0 , y: 100}}
                animate={{ opacity: 11 , y: 0}}
                transition={{
                  delay: 0.1,
                }}>

                <a className='text-teal-700 text-[3rem] flex mb-2
                 focus:scale-110 hover:scale-110 active:scale-105 transition
                cursor-pointer '
                href='https://www.linkedin.com/in/maximiliano-pereyra-533877231/' target='_blank'><FaLinkedinIn /></a>
                
                <a className='  text-teal-700 text-5xl flex mb-2
                focus:scale-110 hover:scale-110  active:scale-105 transition
                cursor-pointer ' 
                href='https://github.com/maxi-pereyra' target='_blank'>< FaGithub/> </a>

                <a className=' text-teal-700 text-5xl flex mb-2 mt-2
                focus:scale-110 hover:scale-110  active:scale-105 transition
                cursor-pointer' 
                href="https://twitter.com/maxiabel30" target='_blank'><FaXTwitter/></a>
                  
                <div className='px-6'>

                   <Separador></Separador>
                </div>

            </motion.div>
    </div>
  )
}

export default Redes