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
    
    // 330px is width of section at phone size
    <article 
      className='flex flex-col m-0 rounded-l items-center w-[330px]  space-y-7 flex-shrink-0 md:w-[500px] lg:w-[550px] p-3 md:p-12 '
    >

        <div className='px-0 pt-10'>
          <div className='flex flex-row gap-3'>
            <div>
              <h4 className='text-md md:text-2xl flex justify-start font-light uppercase'>{experience?.jobTitle}</h4>
              <p className='uppercase md:text-xl flex justify- font-bold text-md mt-1'>{experience?.company}</p>
              <div>
                <p className='py-3 md:py-5 uppercase flex justify-center text-white'>{experience.dateStarted} - {experience.isCurrentlyWorkingHere? 'Present' : experience.dateEnded}</p>
              </div>

            </div>
            <div>
              {/* div containing worktime and photo */}
              <div>
                <motion.img initial={{ opacity:0, y:-100 }}
                    whileInView={{ opacity:1, y:0 }}
                    viewport={{once:true}}
                    src={urlFor(experience?.companyImage).url()}
                    alt={experience?.company}
                    className='w-10 h-10 md:w-[150px] md:h-[150px] rounded-full object-center'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-row h-[300px]'>
            {/* container for info */}
            <div className='flex flex-col justify-evenly bg-slate-400 rounded-l-xl p-5'>
            {/* div for tech */}
              {experience.technologies?.map((tech) => (
                <Image 
                  key={tech._id}
                  src={urlFor(tech.image).url()}
                  alt={tech.title}
                  width={80}
                  height={80}
                />
              ))}
            </div>
            <div>
              {/* div for points */}
              <ul className='list-disc flex flex-col justify-center scrollColor space-y-4 py-4 px-10 rounded-r-lg bg-slate-700 text-lg overflow-y-scroll h-[300px] md:h-[300px]'>
                  {experience.points?.map((point, i) => (
                    <li key={`${point}-${i}`}>
                      {point}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
    </article>
  )
}