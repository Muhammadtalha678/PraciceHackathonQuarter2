import React from 'react'
import ThemeHeaidng from '../ThemeHeading/ThemeHeaidng'
import ThemeText from '../ThemeText/ThemeText'
import { MdArrowForward,MdArrowBack } from "react-icons/md";
import CardButton from '../CardButton/CardButton'
import Timer from '../Timer/Timer';
interface SectionSubNameProps{
    includeTimerContent: boolean,
    lastContent?: React.ReactNode,
    heading:string
}
const SectionSubName = (props:SectionSubNameProps) => {
  return (
      <div className='flex justify-between '>
          {/* for lg screen  */}
          
      <div className=" hidden sm:flex items-center sm:gap-12 xl:gap-[148px] justify-between ">
              <ThemeHeaidng fontWeight='font-semibold' letterSpacing='tracking-widest'
                  className='leading-10 
                  sm:text-[30px] md:text-[36px] '>
                {props.heading}
            </ThemeHeaidng>
              <div className='flex items-center justify-center '>
                        
                  {props.includeTimerContent && <Timer maginBottom='2' gap={'gap-4'} textNumberSize='text-[24px]' textSize='text-[12px]'/>}              
 
              </div>  
      </div>
          {/* show left right buttons on sm screen  */}
      <div className={`gap-4 sm:flex hidden`}>
              {props.lastContent ||
                  <div className='gap-4 sm:flex hidden'>
                      <CardButton backgroundColor='bg-[#F5F5F5]' width='w-[48]' height='h-[48px]' borderRadius='rounded-full' 
              children={<MdArrowForward size={30}/>} />
              <CardButton backgroundColor='bg-[#F5F5F5]' width='w-[48]' height='h-[48px]' borderRadius='rounded-full' 
              children={<MdArrowBack size={30}/>} />
              </div>
              }
              
      </div>
          {/* for small screens */}

         <div className="sm:hidden flex justify-between items-center w-full">
              <div className="flex">
                  <ThemeHeaidng fontWeight='font-semibold' letterSpacing='tracking-wider'
                  className='text-[20px] leading-[24px]'>
                  {props.heading}
              </ThemeHeaidng> 
              </div>
            {props.lastContent || <Timer/>}
        </div>
    </div>
  )
}

export default SectionSubName
