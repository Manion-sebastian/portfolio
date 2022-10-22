import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    leftDirection?: boolean
}

export default function Skill({leftDirection}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            initial={{ x: leftDirection? -200 : 200, opacity:0 }}
            whileInView={{ opacity: 1, x:0 }}
            transition={{duration: 1}}
            src=''
            alt='skill'
            className='rounded-full border border-yellow-400 object-cover w-24 h-24 md:w-28 md:h-28  xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'        
        />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-yellow-50 h-24 w-24
        md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='fkex items-center justify-center h-full'>
                <p className='text-3xl text-yellow-500 font-bold opacity-100'>100%</p>
            </div>
        </div>


        

    </div>
  )
}