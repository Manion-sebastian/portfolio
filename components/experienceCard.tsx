import React from 'react'
import  { motion }  from 'framer-motion'
import Image from 'next/image'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    // className='flex flex-col rounded-l items-center  space-y-7 flex-shrink-0 md:w-[500px] xl:w-[600px] snap-center bg-slate-800  hover:opacity-100 opacity-40 w-screen cursor-pointer transition-opacity duration-200
    <article >
        <motion.img initial={{ opacity:0, y:-100 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{once:true}}
            src={'https://i.imgur.com/DkIiGlB.png'}
            alt='ga icon'
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-2xl font-light uppercase'>Software Engineering Student</h4>
            <p className='uppercase font-bold text-2xl mt-1'>General Asembly</p>
           
            <p className='py-5 uppercase text-white'>Started... - Ended...</p>
            <ul className='list-disc scrollColor space-y-4 ml-5 text-lg overflow-y-scroll h-32'>
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