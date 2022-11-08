import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Skill as SkillType } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    skill : SkillType
}

export default function Skill({ skill }: Props) {
  return (
    <div className='flex justify-center flex-col max-h-80  rounded-lg'>
        <Image 
            src={urlFor(skill.image).url()}
            alt={skill.title}
            width={96}
            height={96}    
            layout='intrinsic'
        />
        <p className='font-semibold flex justify-center py-3 text-white text-sm'>{skill.title}</p>        
    </div>
  )
}