import { inter } from '@/utils/fonts'
import React from 'react'

interface HeadingProps{
    children:React.ReactNode,
    fontWeight:'font-bold' | 'font-semibold',
    letterSpacing:'tracking-wider' | 'tracking-widest',
    className:string 
 }
const ThemeHeaidng = (props:HeadingProps) => {
  return (
    <h1 className={`${props.className} ${inter.className} ${props.fontWeight} ${props.letterSpacing}`}>
        {props.children}
    </h1>
  )
}

export default ThemeHeaidng