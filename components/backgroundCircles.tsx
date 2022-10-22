import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
        initial={{
            opacity:0
        }}
        animate={{
            scale: [1,2,2,3,1],
            opacity: [0.1,0.2,0.4,0.8,0.1,1],
        }}
        transition={{
            duration:2.5
        }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-yellow-100 rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
        <div className='absolute border border-white animate-pulse rounded-full h-[300px] w-[300px] opacity-20 mt-52' />
        <div className='absolute border border-yellow-100 rounded-full h-[500px] w-[500px] opacity-30 mt-52' />
        <div className='border rounded-full border-white h-[650px] w-[650px] absolute opacity-40 mt-52 animate-pulse '/>
        <div className='absolute border border-yellow-100 rounded-full h-[800px] w-[800px] opacity-50 mt-52' />
        
    </motion.div>
  )
}

export default BackgroundCircles