import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Social } from '../typings'

type Props = {
    socials: Social[]
}

export default function Header({ socials }: Props) {
    // console.log('header socials', socials)
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-40 xl:items-center'>
        <motion.div
            initial={{ x: -500, opacity: 0, scale: 0.5, }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration:1.5 }}
         className='flex flex-row items-center'
         >
            {/* social links */}
            {socials.map((social) => (
                <SocialIcon 
                    key={social._id}
                    url={social.url}
                    fgColor='white'
                    bgColor='transparent'
                
                />
            ))}
        </motion.div>
        
        <Link href='#contact'>
        
            <motion.div 
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration:1.5,
                }}

            className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='white'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-white'>Contact Me</p>
            </motion.div>
        </Link>
    </header>
  )
}