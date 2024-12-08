import React from 'react'
import ThemeText from '../ThemeText/ThemeText'
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link';

interface SiderBarProps {
    icon?: React.ReactNode,
    name:string
}
const SidebarLink = ({icon,name}:SiderBarProps) => {
  return (
          <Link href={''} className='flex h-[24px] justify-between items-center'>
            <ThemeText fontWeight='font-normal' className='text-[16px]'>{name}</ThemeText>
            { icon}
          </Link>

  )
}

export default SidebarLink
