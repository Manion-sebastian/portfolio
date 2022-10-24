import React from 'react'
import  { motion }  from 'framer-motion'
import Image from 'next/image'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
  return (
    
    <article 
      className='flex flex-col  rounded-l items-center w-[350px]  space-y-7 flex-shrink-0 md:w-[500px] lg:w-[550px] p-3 md:p-12 snap-center hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'
    >
        <motion.img initial={{ opacity:0, y:-100 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{once:true}}
            src={urlFor(experience?.companyImage).url()}
            alt={experience?.company}
            className='w-32 h-32 rounded-full object-cover object-center'
        />

        <div className='px-0'>
            <h4 className='text-xl md:text-2xl flex justify-center font-light uppercase'>{experience?.jobTitle}</h4>
            <p className='uppercase md:text-xl flex justify-center font-bold text-xl mt-1'>{experience?.company}</p>
            <div className='flex space-x-2 my-2 justify-evenly bg-slate-700 p-3 rounded-lg'>
              {experience.technologies?.map((tech) => (
                <Image 
                  key={tech._id}
                  src={urlFor(tech.image).url()}
                  alt={tech.title}
                  width={40}
                  height={40}
                />
              ))}
            </div>
            <p className='py-3 md:py-5 uppercase flex justify-center text-white'>{experience.dateStarted} - {experience.isCurrentlyWorkingHere? 'Present' : experience.dateEnded}</p>
            <ul className='list-disc scrollColor space-y-4 py-3 px-10 rounded-l-lg bg-slate-700 text-lg overflow-y-scroll h-32'>
                {experience.points?.map((point, i) => (
                  <li key={`${point}-${i}`}>
                    {point}
                  </li>
                ))}
  
            </ul>
        </div>
    </article>
  )
}