import React from 'react'

interface CardButtonProps {
    width?:string,
    height?: string,
    borderRadius?: 'rounded-sm'| 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-full',
    backgroundColor?: string,
    children?:React.ReactNode
}
const CardButton = (props:CardButtonProps) => {
  return (
    <button className={`flex flex-col justify-center items-center  ${props.width || 'w-[34px]'} ${props.height || 'h-[34px]'} bg-[#fff] ${props.borderRadius}`}>
      {props.children} 
    </button>
  )
}

export default CardButton
