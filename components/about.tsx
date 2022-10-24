import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'
import { profile } from 'console'

type Props = {
  pageInfo: PageInfo
}


export default function About({ pageInfo }: Props) {
  return (
    <motion.div 
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.5
      }}
    
      
    
    className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-yellow-400 text-2xl'>About</h3>

        <motion.img 
          initial={{ x:-200, opacity: 0 }}
          whileInView={{ x:0,opacity: 1 }}
          transition={{ duration:1.3}}
          viewport={{once:true}}
            src={urlFor(pageInfo?.profilePic).url()}
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] z-20'
        />
        <motion.div
          initial={{ x:200, opacity: 0 }}
          whileInView={{ x:[200, 0, 20, 0],opacity: 1 }}
          transition={{ delay:1, duration:2}}
          viewport={{once:true}}
        >
          <div className='space-y-10 px-0 md:px-10 z-20'>
            <h4 className='text-4xl font-semibold'>A{" "}<span className='underline decoration-yellow-400'>Little</span>{" "}Bit About Me</h4>
            <p className='text-md'>
              {pageInfo.backgroundInformation}
            </p>

          </div>

        </motion.div>
          {/* <div className='w-full absolute top-[30%] bg-yellow-500/30 left-0 h-[500px] skew-y-12 z-10'></div> */}
    </motion.div>
  )
}