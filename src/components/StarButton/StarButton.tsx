//"use client"
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

interface StarButtonProps{
    onclick: () => void,
    color?:string
}
const StarButton = ({onclick,color}:StarButtonProps) => {
  return (
     <button type='button' onClick={onclick}>
        <AiFillStar color={color || `#605e5e1b`} size={'24px'}/>
     </button>
  )
}

export default StarButton
