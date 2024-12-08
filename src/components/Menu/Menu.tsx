'use client'
import { navLinks } from '@/utils/link';
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import NavLink from '../NavLink/NavLink';

const Menu = ({size}:{size:number}) => {
    let [open, setOpen] = useState(false)
    const handleHamburger = () =>  {
        setOpen(!open)
    }
  return (
      <div className=''>
          <RxHamburgerMenu size={size} className='cursor-pointer ' onClick={handleHamburger} />
    {
              open && 
            <div className='absolute w-full bg-black text-white left-0  top-20 h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10'>
               {navLinks.map((link,index) => {
                      return <NavLink name={link.name} path={link.path} key={index+1}/>
        })}
            </div>      
    } 
      </div> 
  )
}

export default Menu
