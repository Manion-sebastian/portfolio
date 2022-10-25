import React from 'react'
import { motion } from 'framer-motion'
import Skill from './skill'
import type { Skill as SkillType } from '../typings'


type Props = {
  skills: SkillType[]
}

export default function Skills({ skills }: Props) {
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
          <div className='grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-10 max-h-72 md:max-h-screen md:h-[500px] overflow-y-scroll scrollColor'>
            {skills.map((skill) => (
              <Skill 
                key={skill._id}
                skill={skill}
              />
            ))}
          </div>
      </motion.div>

    </div>
  )
}