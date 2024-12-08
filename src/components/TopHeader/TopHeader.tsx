import React from 'react'
import ThemeText from '../ThemeText/ThemeText'
import { RiArrowDropDownLine } from "react-icons/ri";
import CardButton from '../CardButton/CardButton';

const TopHeader = () => {
  return (
    <div className='w-[100%] bg-[#000] h-[48px] flex justify-center items-center'>
        <div className="w-10/12 h-[24px] flex justify-center items-center relative">
        <div className=''>
            <ThemeText fontWeight='font-normal' className='text-[#FAFAFA] text-[14px] leading-[21px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</ThemeText>
        </div>
        <div className='flex items-center justify-center absolute right-0'>
            <ThemeText fontWeight='font-normal' className='text-[#FAFAFA] text-[14px] leading-[21px]'>
                English
            </ThemeText>
            <CardButton>
                <RiArrowDropDownLine color='#FAFAFA' size={24}/>          
            </CardButton>
            
        </div>
        </div>
    </div>
  )
}

export default TopHeader
