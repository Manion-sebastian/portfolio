import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-yellow-400 text-2xl'>About</h3>

        <motion.img 
          initial={{
            x:-200,
            opacity: 0
          }}
          whileInView={{
            x:0,
            opacity: 1
          }}
          transition={{
            duration:1.3
          }}
            src='https://i.imgur.com/z5ffaRx.jpg'
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        />
    </div>
  )
}