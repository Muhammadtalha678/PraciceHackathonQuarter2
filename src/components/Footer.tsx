import React from 'react'
import ThemeHeaidng from './ThemeHeading/ThemeHeaidng'
import ThemeText from './ThemeText/ThemeText'
import CardButton from './CardButton/CardButton'
import { VscSend } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className='w-full h-[376px] bg-[#000] px-4 md:px-8 lg:px-12 xl:px-32'>
      <div className="grid grid-cols-5 w-full h-full">
        <div className="col-span-1  flex items-center justify-center">
          <div className='flex flex-col gap-4 '>
            <ThemeHeaidng fontWeight='font-bold' letterSpacing='tracking-wider'
              className='text-[#FAFAFA] text-[24px] leading-6'>Exclusive</ThemeHeaidng>
            <ThemeText fontWeight='font-medium'
              className='text-[#FAFAFA] text-[20px] leading-7'>Subscribe</ThemeText>
            <div className="flex flex-col gap-2">
              <ThemeText fontWeight='font-normal' className='leading-6 text-[16px] text-[#FAFAFA]'>
                Get 10% off your first order
              </ThemeText>
              <div className="flex  justify-between border-2 rounded-sm w-[86%]">
                <input type='text' placeholder='Enter your email'
                  className='text-[#FAFAFA] w-[100%] bg-transparent placeholder:text-[#FAFAFA] placeholder:font-normal placeholder:text-[16px] outline-none' />
                <CardButton><VscSend size={20} color='#FAFAFA'/></CardButton>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1  bg-slate-400 "></div>
        <div className="col-span-1  bg-slate-500 "></div>
        <div className="col-span-1  bg-slate-600 "></div>
        <div className="col-span-1  bg-slate-700 "></div>
      </div>
    </div>
  )
}

export default Footer
