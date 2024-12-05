import { inter } from '@/utils/fonts'
import {MdShoppingCart} from 'react-icons/md';
import React from 'react'
import ThemeText from '../ThemeText/ThemeText';

 interface ButtonProps{
    children:React.ReactNode,
    className?:string

 }
 const ThemeButton = (props:ButtonProps) => {
  return (
    <button 
    className={`${inter.className} ${props.className} bg-[#DB4444] rounded`}
    >
        {props.children}
    </button>
  )
}
export default ThemeButton