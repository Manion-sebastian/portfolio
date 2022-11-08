import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './experienceCard'
import { Experience } from '../typings'

type Props = {
  experiences: Experience[]
}

export default function WorkExperience({ experiences }: Props) {
  return (
    <div className='h-screen flex relative  flex-col text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-yellow-400 text-2xl'>
            experience
        </h3>

        <div className='flex justify-center scrollColor space-x-5 sm:overflow-x-scroll w-[330px] md:w-[500px] lg:w-[600px] xl:w-screen'>
            {experiences?.map(experience => (
              <ExperienceCard 
                key={experience._id}
                experience={experience}
              />
            ))}

        </div>

    </div>
  )
}