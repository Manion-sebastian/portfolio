import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

export default function Projects({}: Props) {

  const projects = [1,2,3,4,5]

  return (
    <div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-yellow-400 text-2xl'>
            Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-30 scrollColor'>
        {projects.map((project, i) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-46' key={`projectkey${i}`}>
              <motion.div 
                initial={{y:-200, opacity:0}}
                transition={{duration:1.2}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                
            
            >
              <Image src='https://i.imgur.com/DkIiGlB.png' width={100} height={100} alt='project' />
            </motion.div>

              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'><span className='underline decoration-yellow-400'>pLan</span> part { i + 1 } of { projects.length }</h4>

                <p className='text-lg  text-center md:text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos itaque officia, debitis cupiditate omnis voluptatem pariatur quia voluptates rerum? Consectetur eum soluta itaque, voluptatibus quasi exercitationem veniam quaerat officiis obcaecati.</p>
              </div>

            </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-yellow-500/30 left-0 h-[500px] -skew-y-12 z-0'>

      </div>

    </div>
  )
}