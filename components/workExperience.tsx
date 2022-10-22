import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './experienceCard'

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-yellow-400 text-2xl'>
            experience
        </h3>

        <div>
            <ExperienceCard />

        </div>

    </div>
  )
}