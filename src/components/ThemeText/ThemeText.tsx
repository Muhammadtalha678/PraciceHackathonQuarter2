import { poppins } from '@/utils/fonts'
import React from 'react'
import {type postcss} from 'tailwindcss'

interface TextProps{
    children:React.ReactNode,
    className?:string,
    fontWeight:'font-bold' | 'font-semibold' | 'font-medium' | 'font-normal',
    
 }
 const ThemeText = (props:TextProps) => {
    
  return (
    <p className={`${poppins.className} 
    ${props.className} ${props.fontWeight}`}>
    {props.children}
  </p>
  )
}
export default ThemeText