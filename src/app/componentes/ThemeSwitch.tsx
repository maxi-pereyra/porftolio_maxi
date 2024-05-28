'use client'
import React, { useEffect } from 'react'

import { useState } from 'react'

type Theme = "light" | "dark" ; 

export default function ThemeSwitch() {

    const [theme , setTheme] = useState<Theme>("light");
  
    const toggleTheme = () => {
        if(theme == 'light'){
            setTheme('dark')
            window.localStorage.setItem("theme" , "dark");
            document.documentElement.classList.add("dark")
        }else{
            setTheme('light')
            window.localStorage.setItem("theme" , "light")
            document.documentElement.classList.remove("dark")
        }
    }

    useEffect(()=>{
        const localTheme = window.localStorage.getItem("theme") as Theme | null;

        if(localTheme){
            setTheme(localTheme);
        }else if(window.matchMedia("(prefers-colors-scheme: dark)").matches){
            setTheme("dark");
            document.documentElement.classList.add("dark")
        }
    },[]);

  return (
    <button className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80
    border border-black  rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
        onClick={()=>toggleTheme()}>
        {theme}
    </button>
  )
}
