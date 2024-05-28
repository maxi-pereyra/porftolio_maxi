import React from 'react'


import Image from 'next/image'
import foto from '../../../public/WhatsApp Image 2023-11-20 at 17.29.54.jpeg'
import { motion } from "framer-motion"
import { useState } from 'react'

function ImageProfile() {

  const [move , setMove] = useState(false);

  const MoveImage = () => {
    setMove(true)
  }


  return (
    <div className='flex  justify-center  ml-9 relative'>
          <div className='w-auto h-auto max-sm:flex max-sm:items-center'>

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
                  width={600}
                  height={600}
                  quality={95}
                  priority={true}
                  className='h-80 w-72  object-cover border-2 border-teal-700 relative 
                   rounded-md'
                  onMouseMove={() => {setMove(true)}}/>
          </motion.div>

        </div>
      </div>
  )
}

export default ImageProfile

/*     <div className='h-80 w-72 border-2 border-teal-700 absolute left-2 top-2 
                  transition ease-in-out delay-150 hover:translate-y-2 hover:translate-x-2 z-0'>
                  </div> */