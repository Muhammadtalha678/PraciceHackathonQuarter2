
import Link from 'next/link'
import React from 'react'
import ThemeText from '../ThemeText/ThemeText'

const NavLink = ({name,path}:{name:string,path:string}) => {
  return (
      <Link href={path}>
          <ThemeText fontWeight='font-normal' className='md:text-[16px] lg:text-[16px] leading-6'>
              {name}
          </ThemeText>
      </Link>
  )
}

export default NavLink
