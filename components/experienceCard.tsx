import React from 'react'
import  { motion }  from 'framer-motion'
import Image from 'next/image'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    
    <article 
      className='flex flex-col  rounded-l items-center w-[350px]  space-y-7 flex-shrink-0 md:w-[500px] lg:w-[550px] p-3 md:p-12 snap-center hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'
    >
        <motion.img initial={{ opacity:0, y:-100 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{once:true}}
            src={'https://i.imgur.com/DkIiGlB.png'}
            alt='ga icon'
            className='w-32 h-32 rounded-full object-cover object-center'
        />

        <div className='px-0'>
            <h4 className='text-xl md:text-2xl font-light uppercase'>Software Engineering Student</h4>
            <p className='uppercase md:text-2xl font-bold text-xl mt-1'>General Asembly</p>
           
            <p className='py-3 md:py-5 uppercase text-white'>Started... - Ended...</p>
            <ul className='list-disc scrollColor space-y-4 py-3 px-10 rounded-lg bg-slate-700 text-lg overflow-y-scroll h-32'>
                <li>summary points</li>
                <li>summary points</li>
                <li>summary points</li>
                <li>summary points</li>
                <li>summary points</li>
                
                
            </ul>
        </div>

    </article>
  )
}