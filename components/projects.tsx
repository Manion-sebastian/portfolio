import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  projects: Project[]
}

export default function Projects({projects}: Props) {


  return (
    <div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-4xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-yellow-400 text-2xl'>
            Projects
      </h3>

      <div className='relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-30 scrollColor'>
        {projects.map((project) => (
          <div className=' flex-shrink-0 w-full snap-center flex flex-col space-y-5 items-center justify-center p-15 md:p-20 h-46' 
          key={project._id}>
            <motion.div 
                className='hidden md:flex'
                initial={{y:200, opacity:0}}
                transition={{duration:1.2}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
            >
              <Image 
                className='drop-shadow-2xl' 
                src={urlFor(project.image).url()} 
                width={250} 
                height={125} 
                alt={project.title} />
            </motion.div>
            <motion.div
            className={'flex flex-row'}
              initial={{y:-200, opacity:0}}
                transition={{duration:2.2}}
                whileInView={{opacity:[0, 0,0, 0, 0.8, 0.9, 1], y:0}}
                viewport={{once:true}}>

              <div className='space-y-10 p-4 md:px-10 max-w-full bg-slate-500/90 md:rounded-l-xl'>
                <div className='flex justify-center items-baseline'>
                <h4 className='text-4xl mr-5 font-semibold text-center'><span className='underline decoration-yellow-400'>{project.title}</span></h4>
                <p className='uppercase text-sm'><a href={project.linkToBuild} rel='noreferrer' target='_blank' >live</a>{"  "}|{"  "}<a href={project.linkToReadMe} rel='noreferrer' target='_blank'>github</a></p>

                </div>

                <p className='text-lg  text-center w-60 md:w-full md:text-left scrollColor'>{project.summary}</p>
              </div>
                <div className=' md:flex-col md:flex-shrink-0 md:justify-center md:align-middle bg-slate-700/90 p-4 rounded-r-xl justify-evenly hidden lg:flex'> 
                  <h3>Technologies</h3>
                  {project.technologies?.map((tech) => (
                    <div 
                      className='flex text-center flex-col flex-shrink-0 justify-center items-center p-1 w-1/4 m-4 rounded-lg '
                      key={tech._id}>
                      {/* <Image 
                        src={urlFor(tech.image).url()} 
                        alt={tech.title} 
                        layout='fixed' 
                        width={40} 
                        height={40} /> */}
                      <p className='mb-4 tracking-[2px] drop-shadow-2xl text-white font-bold '>{tech.title} </p>
                    </div>
                  ))}
                </div>
            </motion.div>
            </div>
        ))}
      </div>

      {/* <div className='w-full absolute top-[30%] bg-yellow-500/30 left-0 h-[500px] -skew-y-12 z-0'>

      </div> */}

    </div>
  )
}