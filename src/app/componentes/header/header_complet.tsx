import React from 'react'

import { links } from '../../utils/data'
import Link from 'next/link'

function Header_complet() {
  return (
    <header className='bg-teal-700 h-12 flex justify-between'>
        <div className='font-sans italic text-6xl ml-10 sm:ml-4'>
            
        </div>

        <nav className='flex top-[0.15rem]'>
            <ul className='flex w-[22rem] flex-wrap items-center justify-center mr-6 gap-y-1 text-[0.9rem]
            font-medium text-white sm:w-[initial] sm:flex-nowrap sm:gap-5 sm:bg-red-600s'>
                {
                  links.map((link,index) => (
                    
                      <Link key={index} href={link.hash}
                      className='mr-2'>{link.name}</Link>
                    
                  ))
                }
            </ul>

        </nav>
    </header>
  )
}

export default Header_complet