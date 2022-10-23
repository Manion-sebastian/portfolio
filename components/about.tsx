import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}


export default function About({}: Props) {
  console.log(process.env.NEXT_PUBLIC_SANITY_DATASET)
  console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
  console.log(process.env.NEXT_PUBLIC_BASE_URL)
  return (
    <motion.div 
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.5
      }}
    
      
    
    className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
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
          viewport={{once:true}}
            src='https://i.imgur.com/z5ffaRx.jpg'
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] z-20'
        />

        <div className='space-y-10 px-0 md:px-10 z-20'>
          <h4 className='text-4xl font-semibold'>Here is a{" "}<span className='underline decoration-yellow-400'>Little</span>{" "} background</h4>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam laboriosam velit sit, nisi officiis itaque, inventore, odit reiciendis impedit perspiciatis cum ratione possimus. Dolore id cumque delectus obcaecati qui dignissimos?
          </p>

        </div>
          <div className='w-full absolute top-[30%] bg-yellow-500/30 left-0 h-[500px] skew-y-12 z-10'></div>
    </motion.div>
  )
}