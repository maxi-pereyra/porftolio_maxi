import React from 'react'

import SectionHead from '../componentes/Section_head';
import { projectsData } from '../utils/data';
import Image from 'next/image';
import Link from 'next/link';

function CardsProject() {
  return (
    <section id='projects'  className=' scroll-mt-28 '>
        <SectionHead>Mis Proyectos</SectionHead>
        <div className='sm:grid grid-cols-2 gap-4'>
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


function Project({title,description,tags,imageUrl,link}: ProjectProps){
    return <section className=' flex-grow max-w-[28rem] h-auto relative flex border border-black max-sm:my-4 '>
          <div className='flex flex-col'>
            {
              link !=="en proceso"? (
                <Link href={`${link}`}>
                    <Image 
                    src={imageUrl}
                    alt={title}
                    quality={95}
                    className='h-60 hover:opacity-60'/>
                </Link>
              ):(
                <div className='relative text-center'>
                  <Link href={`${link}`}>
                    <Image 
                    src={imageUrl}
                    alt={title}
                    quality={95}
                    className='h-60 z-20 hover:opacity-30 relative '/>
                  </Link>
                    <div className='absolute w-full top-[50%] z-10'>
                        <h3 className='text-2xl font-bold '> En proceso ...</h3>
                    </div>
                </div>
              )
            }
            <h3 className='text-2xl font-bold  mt-5 ml-2'>{title}</h3>
            <p className='mt-2 mr-2 ml-2 leading-relaaxed text-base dark:text-white'>{description}</p>
            <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
          {tags.map((tag,index)=>(
            <li key={index} 
            className='bg-black/[0.7] px-3 py-1 m-2 text-[0.7rem] uppercase tracking-wider text-white '>{tag}</li>
          ))}
        </ul>
          </div>
        </section>
}

export default CardsProject