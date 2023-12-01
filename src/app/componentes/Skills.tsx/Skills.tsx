import React from 'react'
import SectionsHead from '../Section_head'
import { skillsData } from '@/app/utils/data'

export default function Skills() {
  return (
    <section id='skills' className='scroll-mt-28 mb-28 max-w-[53rem]'>
        <SectionsHead>Skills</SectionsHead>

        <ul className='flex flex-wrap gap-2 text-l text-gray-800'>
            {
                skillsData.map((skill,index) => (
                    <li key={index}
                    className='bg-white border border-black/5 rounded-xl px-5 py-3'>{skill}</li>
                ))
            }
        </ul>
    </section>
  )
}
