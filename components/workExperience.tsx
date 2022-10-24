import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './experienceCard'

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <div className='h-screen flex relative  flex-col text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-yellow-400 text-2xl'>
            experience
        </h3>

        <div className='flex scrollColor space-x-5 sm:overflow-x-scroll w-fit md:w-[500px] lg:w-[600px] xl:w-screen p-10 snap-x snap-mandatory'>
            <ExperienceCard />
            {/* <ExperienceCard /> */}
            <ExperienceCard />
            <ExperienceCard />

        </div>

    </div>
  )
}