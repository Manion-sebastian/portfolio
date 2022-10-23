import React from 'react'
import { motion } from 'framer-motion'
import Skill from './skill'
// import { Skill } from '../typings'


type Props = {
  // skills: Skill[]
}

export default function Skills({}: Props) {
  return (
    <motion.div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-yellow-400 text-2xl'>
            Skills
        </h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-yellow-500 text-sm'>My favorite tools</h3>

        <div className='grid grid-cols-2 gap-5'>
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
    </motion.div>
  )
}