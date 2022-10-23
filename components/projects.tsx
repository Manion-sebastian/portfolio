import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

export default function Projects({}: Props) {

  const projects = [
    {
      name: 'p4',
      snapshot: 'https://i.imgur.com/V5y0uMZ.jpg',
      desc: 'capstone project',
      tech: [{name:'lots', logo: 'https://i.imgur.com/V5y0uMZ.jpg'}],
      live: 'https://github.com/',
      github: 'https://github.com/'
    },
    {
      name: 'dora',
      snapshot: 'https://i.imgur.com/xcDFebC.png',
      desc:
        'Social media application centered around music, post favorite artists, or songs and and share with others. \n MERN application with the use of the last.fm music discovery api.'
      ,
      tech: [{ name: 'JavaScript', logo: 'https://i.imgur.com/VYJRKGo.png'},{ name: 'React', logo: 'https://i.imgur.com/cROMruh.png'},{ name: 'Tailwind', logo: 'https://i.imgur.com/zoaOiRV.png'},{ name: 'MongoDB', logo: 'https://i.imgur.com/EhiLod8.png'}],
      live: 'https://doramusica.netlify.app/',
      github: 'https://github.com/Manion-sebastian/dora-client'
    },
    {
      name: 'pLan',
      snapshot: 'https://i.imgur.com/xcDFebC.png',
      desc:
        'Plan making application where you can create daily notes plans, reminders and more. Allows upload of photos for the plan as well as the user. \n PEN application with the integration of Cloudinary for photo processing and storage.'
      ,
      tech: [{ name: 'JavaScript', logo: 'https://i.imgur.com/VYJRKGo.png'},{ name: 'Postgresql', logo: 'https://i.imgur.com/FecTR8V.png'},{ name: 'Sequelize', logo: 'https://i.imgur.com/10AL77i.png'},{ name: 'Tailwind', logo: 'https://i.imgur.com/zoaOiRV.png'}],
      live: 'https://github.com/Manion-sebastian/pLan-project',
      github: 'https://p2-debloyment-manion-sebastian.koyeb.app/'
    },


  ]

  return (
    <div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-4xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-yellow-400 text-2xl'>
            Projects
      </h3>

      <div className='relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-30 scrollColor'>
        {projects.map((project, i) => (
          <div className=' flex-shrink-0 w-full snap-center flex flex-col space-y-5 items-center justify-center p-15 md:p-20 h-46' key={`projectkey${i}`}>
              <motion.div 
                initial={{x:-200, opacity:0}}
                transition={{duration:1.2}}
                whileInView={{opacity:1, x:0}}
                viewport={{once:true}}
                
            
            >
              <Image src={project.snapshot} width={250} height={125} alt='project' />
            </motion.div>

              <div className='space-y-10 px-0 md:px-10 max-w-full'>
                <div className='flex justify-center items-baseline'>
                <h4 className='text-4xl mr-5 font-semibold text-center'><span className='underline decoration-yellow-400'>{project.name}</span></h4>
                <p><a href={`${project.live}`} rel='noreferrer' target='_blank' >live</a>{ " " }|{ " " }<a href={`${project.github}`} rel='noreferrer' target='_blank'>github</a></p>

                </div>

                <p className='text-lg  text-center w-60 md:w-full md:text-left'>{project.desc}</p>
                <div className=' md:flex-row md:flex-shrink-0 justify-around hidden lg:flex'> 
                  {project.tech.map((item, i) => (
                    <div className='flex flex-col flex-shrink-0 ' key={`${item.name}-${i}`}>
                      <span className='mb-4 tracking-[2px]'>{item.name} </span>
                      <Image className='' src={item.logo} alt={item.name} width={80} height={80} />
                    </div>
                  ))}
                </div>
              </div>

            </div>
        ))}
      </div>

      {/* <div className='w-full absolute top-[30%] bg-yellow-500/30 left-0 h-[500px] -skew-y-12 z-0'>

      </div> */}

    </div>
  )
}