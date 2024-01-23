import React from 'react'

import SectionsHead from '../Section_head';
import { skillsData } from '@/app/utils/data';
import ImageProfile from '../ImageProfile';
import { IoChevronForwardOutline } from "react-icons/io5";

function About() {
  return (
    <div id='about'>
        <SectionsHead>Sobre mi</SectionsHead>   
        <div className='flex'>
            <div className='w-1/2 text-base font-medium'>
                <p>Hola!! me llamo Maxi Abel Pereyra , me gusta construir para la web , investigar y encontrarme con genialidades de la web.
                    Mi gusto por el desarrollo web surge de emprender con el comercio electronico en 2023 ,
                    probrando hacer mi propia tienda online quede inmerso con lo que se podia hacer 
                    con HTML y CSS.  
                </p><br />
                <p>
                    Complete el bootcamp de soy Henry, ha la fecha trabajo en proyectos propio y 
                    tambien en un MVP con un equipo mediante la propuesta de NO Country, 
                    para seguir mejorando mis habilidades.
                </p><br />

                <span>Tecnologias que trato</span><br />
                <br />
                <ul className='flex flex-col flex-wrap gap-2 h-32 '>
                    {
                        skillsData.map((skill,index) => (
                            <li key={index}
                            className='text-xs flex'> <span><IoChevronForwardOutline /></span>{skill}</li>
                        ))
                    }
                </ul>

            </div>

            <ImageProfile></ImageProfile>

        </div>
    </div>
  )
}

export default About