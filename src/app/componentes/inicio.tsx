
import React from 'react'

import Link from 'next/link';
import { TfiAngleDoubleUp } from "react-icons/tfi";

function Inicio() {
    return (
        <Link href={"#home"} className="fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80
        border border-black rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 
        transition-all dark:bg-gray-950">
        <TfiAngleDoubleUp />
        </Link>
    
      )
}

export default Inicio