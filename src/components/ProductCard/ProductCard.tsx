'use client'
import React,{useState} from 'react'
import ThemeText from '../ThemeText/ThemeText'
import StarButton from '../StarButton/StarButton';
import Image from 'next/image';
import flashsale1 from '../../../public/assets/images/flashsale1.png'
import ThemeButton from '../ThemeButton/ThemeButton';
import { HiOutlineHeart } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import CardButton from '../CardButton/CardButton';


const ProductCard = () => {
  const [rating,setRating] = useState<number>(0)
  const starRating = (rating:number) => {
     setRating(rating)
    //  console.log(rating);
     
   }
  return (
    <div className='h-[350px] w-[270px]'>
      <div className='relative h-[250px] w-[270px] bg-[#F5F5F5] flex justify-center items-center'>
          <div className='absolute top-0 flex justify-between w-[100%] p-2'>
          <ThemeButton className='w-14 h-7'>
            <ThemeText fontWeight='font-normal' className='text-[12px] leading-3 text-white'>-40%</ThemeText>
          </ThemeButton>
            <div className='flex flex-col gap-3'>
            <CardButton borderRadius='rounded-full'>
              <HiOutlineHeart size={20} />
              
            </CardButton>
            <CardButton borderRadius='rounded-full'>
              <IoEyeOutline size={20}/>
              
            </CardButton>
              
            </div>  
        </div>
          <Image src={flashsale1} alt='Flash Sale - 1' width={190} height={180}/>
        </div>
        <div className='pt-3 flex flex-col gap-2'>
            <ThemeText fontWeight='font-medium' className='text-[#000000] leading-6'>HAVIT HV-G92 Gamepad</ThemeText>
            <div className='flex gap-3'>
                <ThemeText fontWeight='font-medium' className='text-[#DB4444] text-[16px] leading-6'>$120</ThemeText>
                <ThemeText fontWeight='font-medium' className='text-[#727070] text-[16px] leading-6 line-through'>$160</ThemeText>
            </div>
            <div className='flex gap-3'>
              <div className='flex gap-1'>
              {[...Array(5)].map((star, index) => {
                const startIndex = index + 1
                if (startIndex <= rating) {
                  return <StarButton onclick={()=>{starRating(startIndex)}} key={startIndex} color='#ff0'/> 
                }
                else {
                  
                  return <StarButton onclick={()=>{starRating(startIndex)}} key={startIndex}/>
                }
                })}
              </div>
              <ThemeText fontWeight='font-bold' className='leading-[21px] text-[#727070] text-[14px]' >(88)</ThemeText>
            </div>
        </div>
    </div>
  )
}
export default ProductCard