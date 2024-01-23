'use client'
import React from 'react'
import SectionsHead from '../Section_head'
import { motion } from "framer-motion"
import { sendEmail } from "../../../../actions/sendEmail"
function Contact() {
  return (
    <motion.section
     id="contact"
     className='mb-20 flex flex-col items-center w-[100%] sm:mb-28  '
     initial={{
        opacity: 0,
     }}
     whileInView={{
        opacity:1,
     }}
     transition={{
        duration:1
     }}>
       
        <SectionsHead> contactame </SectionsHead>
        <p>Escribeme con un correo <a className='ubderline' href='mailto:example@gmail.com'>
            example@gmail.com</a> </p>
        <form className='mt-10 w-[50%] flex flex-col'
         action={async (formData)=> {
            await sendEmail(formData);
         }}>
            <input type='email' 
                className='h-14 p-4 text-black border bg-gray-200  borderBlack rounded-lg dark:bg-white ' 
                name='sendEmail'
                required
                maxLength={500}
                placeholder='   Your email'/>
            <textarea className='h-52 my-3 text-black  border  bg-gray-200 rounded-lg borderBlack p-4 dark:bg-white'
                name='message'
                placeholder='Your message'
                required
                maxLength={500}></textarea>
            <button 
                type='submit'
                className='flex items-center justify-center  gap-2 h-[3rem] 
                    w-[8rem] border bg-white border-black text-black 
                    outline-none transition-all focus:scale-110 hover:scale-110  
                    hover:bg-teal-700 hover:text-white active:scale-105 '>
                Enviar
            </button>
        </form>
    </motion.section>
  )
}

export default Contact

/* w-[min(100%,38rem)] */