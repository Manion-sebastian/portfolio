import React from 'react'
import { motion } from 'framer-motion'
import Skill from './skill'
// import { Skill } from '../typings'


type Props = {
  // skills: Skill[]
}

export default function Skills({}: Props) {
  return (
    <div
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-yellow-400 text-2xl'> Skills </h3>
    <h3 className='absolute top-36 uppercase tracking-[3px] text-yellow-500 text-sm'>My favorite tools</h3>

      <motion.div 
        initial={{ y:200, opacity: 0 }}
        whileInView={{ y:[200, 0, 10, 0], opacity:[0,0.2,0.8,1]}}
        transition={{delay:0.3, duration:2}}
        viewport={{once: true}}
        >
      
     
          <div className='grid grid-cols-2 gap-5'>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
          </div>
      </motion.div>

    </div>
  )
}