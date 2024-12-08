import React from 'react'
import ThemeHeaidng from '../ThemeHeading/ThemeHeaidng'
import ThemeText from '../ThemeText/ThemeText'
interface TimerProps {
    gap?:string, textSize?:string,textNumberSize?:string,maginBottom?:string 
}

const Timer = (props:TimerProps) => {
  return (
     <div className={`flex justify-center items-center ${props.maginBottom || 'mb-3'} ${props.gap || 'gap-2'}`}>
                <div className="flex flex-col items-center w-5">
                    <ThemeText fontWeight='font-medium' className={`${props.textSize || 'text-[9px]'}`}>Days</ThemeText>
              <ThemeHeaidng fontWeight='font-bold' letterSpacing='tracking-wider'
                  className={`${props.textNumberSize ||'text-[20px]'} leading-7`}>
                          03
                      </ThemeHeaidng>
                </div>
                <span className='text-[#E07575] text-[20px] font-bold mt-3'> : </span>
                <div className="flex flex-col items-center w-5">
                      <ThemeText fontWeight='font-medium' className={`${props.textSize || 'text-[9px]'}`}>Hours </ThemeText>
                      <ThemeHeaidng fontWeight='font-bold' letterSpacing='tracking-wider' className={`${props.textNumberSize ||'text-[20px]'} leading-7`}>
                          23
                      </ThemeHeaidng>
                  </div>
                <span className='text-[#E07575] text-[20px] font-bold mt-3'> : </span>
                <div className="flex flex-col items-center w-5">
                    <ThemeText fontWeight='font-medium' className={`${props.textSize || 'text-[9px]'}`}>Minutes</ThemeText>
                      <ThemeHeaidng fontWeight='font-bold' letterSpacing='tracking-wider' className={`${props.textNumberSize ||'text-[20px]'} leading-7`}>
                         19
                      </ThemeHeaidng>
                  </div>
                  <span className='text-[#E07575] text-[20px] font-bold mt-3'> : </span>
                <div className="flex flex-col items-center w-5">
                    <ThemeText fontWeight='font-medium' className={`${props.textSize || 'text-[9px]'}`}>Seconds</ThemeText>
                    <ThemeHeaidng fontWeight='font-bold' letterSpacing='tracking-wider' className={`${props.textNumberSize ||'text-[20px]'} leading-7`}>03 </ThemeHeaidng>
                </div>
            </div>
  )
}

export default Timer
