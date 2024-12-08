import React from 'react'
import ThemeHeaidng from '../ThemeHeading/ThemeHeaidng'
import Link from 'next/link'
import ThemeText from '../ThemeText/ThemeText'
import { navLinks } from '@/utils/link'
import NavLink from '../NavLink/NavLink'
import SearchInput from '../SearchInput/SearchInput'
import CardButton from '../CardButton/CardButton'
import { GrFavorite } from "react-icons/gr";
import { GrCart } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import Menu from '../Menu/Menu'

const Header = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-12 xl:px-16 relative  border-b-[0.5px]">
      {/* for small screen */}
       <div className='flex items-center h-full w-full justify-between lg:hidden gap-3'> 
        <div className="flex">
          <Link href={'/'}>
          <ThemeHeaidng letterSpacing='tracking-wider' fontWeight='font-bold'
            className='sm:text-[24px] text-[20px] leading-6 '>
            Exclusive
          </ThemeHeaidng>
        </Link>
        </div>
        <div className="">
          <SearchInput/>
        </div>
        <div className='flex space-x-2 items-center gap-1'>
              <CardButton children={<GrFavorite size={20}/>} />
              <CardButton children={<GrCart size={20}/>} />
              <Menu size={24}/>
        </div>
        </div>
      {/* for large plus screens */}
      <div className="w-full h-full hidden lg:flex justify-between gap-12 ">
        <div className="flex items-center gap-2 justify-between w-[60%] ">
          <Link href={'/'}>
            <ThemeHeaidng letterSpacing='tracking-wider' fontWeight='font-bold'
              className='md:text-[24px] leading-6 '>
              Exclusive
            </ThemeHeaidng>
          </Link>
          <div className='hidden md:flex lg:gap-12'>
            {navLinks.map((e, i) => {
            return <NavLink name={e.name} path={e.path} key={i+1} />
          })}
          </div>
        </div>
        <div className=" flex justify-between items-center gap-5">
          <SearchInput />
          <div className="flex justify-between gap-5">
            <CardButton>
              <GrFavorite size={20}/>
            </CardButton>
            <CardButton>
              <GrCart size={20}/>
            </CardButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
