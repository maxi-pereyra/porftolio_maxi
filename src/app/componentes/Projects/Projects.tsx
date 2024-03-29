import React from 'react'
import SectionHead from '../Section_head';
import { projectsData } from '../../utils/data';
import Image from 'next/image';
import Link from 'next/link';
import { link } from 'fs';

export default function Projects() {
  return (
    <section id='projects'  className=' scroll-mt-28 '>
        <SectionHead>Mis Proyectos</SectionHead>
        <div >
        {
          projectsData.map( (project , index) =>(
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ) )
        }
      </div>
    </section>
  )
}

 type ProjectProps = (typeof projectsData)[number];

function Project({title,description,tags,imageUrl,link}: ProjectProps) {
    
    return <section className='bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg dark:bg-teal-700
                                overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8'>
      <div className='pt-4 pb-7  px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]
                      flex flex-col h-full'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p className='mt-2 leading-relaaxed text-gray-700 dark:text-white'>{description}</p>
        <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
          {tags.map((tag,index)=>(
            <li key={index} 
            className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'>{tag}</li>
          ))}
        </ul>
        <Link href={`${link}`}>
            <Image 
            src={imageUrl}
            alt={title}
            quality={95}
            className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl hover:scale-110'/>
        </Link>
      </div>
      
    </section>
  
  }
  