import React from 'react'
import ThemeText from '../ThemeText/ThemeText'
import { AiFillStar } from "react-icons/ai";
 const ProductCard = () => {
  const starData = [{
    rating:4
  }]
  return (
    <div className='h-[350px] w-[270px]'>
        <div className='h-[250px] w-[270px] bg-[#F5F5F5]'>

        </div>
        <div className='pt-3 flex flex-col gap-2'>
            <ThemeText fontWeight='font-medium' className='text-[#000000] leading-6'>HAVIT HV-G92 Gamepad</ThemeText>
            <div className='flex gap-3'>
                <ThemeText fontWeight='font-medium' className='text-[#DB4444] text-[16px] leading-6'>$120</ThemeText>
                <ThemeText fontWeight='font-medium' className='text-[#727070] text-[16px] leading-6 line-through'>$160</ThemeText>
            </div>
            <div className='flex gap-3'>
            <div className='flex gap-1'>
              {starData.map((e,i) => {
                return <AiFillStar color='#bebed1' size={'20px'} key={i}/>
              })}
            </div>
            </div>
        </div>
    </div>
  )
}
export default ProductCard