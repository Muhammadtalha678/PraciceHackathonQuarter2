import React from 'react'
import ThemeHeaidng from '../ThemeHeading/ThemeHeaidng'

const SectionName = ({name}:{name:string}) => {
  return (
      <div className="flex items-center gap-4">
          <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
          <ThemeHeaidng fontWeight='font-semibold' letterSpacing='tracking-wider'
              className='leading-5 text-[16px]  text-[#DB4444]'>
              {name}
          </ThemeHeaidng>
      </div>
  )
}

export default SectionName
