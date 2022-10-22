import React from 'react'
import  { motion }  from 'framer-motion'
import Image from 'next/image'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article>
        <motion.div initial={{ opacity:0, y:-100 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{once:true}}
            >
                <Image
                src={'https://i.imgur.com/DkIiGlB.png'}
                width={125}
                height={125}
                alt='ga icon'
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                />
        </motion.div>

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light uppercase'>Software Engineer Student</h4>
            <p className='uppercase font-bold text-2xl mt-1'>General Asembly</p>
            <div className='flex space-x-2 my-2'>
                <img className='h-10 w-10 rounded-full' src="" alt="" />
                <img className='h-10 w-10 rounded-full' src="" alt="" />
                <img className='h-10 w-10 rounded-full' src="" alt="" />
                <img className='h-10 w-10 rounded-full' src="" alt="" />
            </div>
            <p className='py-5 uppercase text-white'>Started... - Ended...</p>
            <ul className='list-disc space-y-4 ml'>
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