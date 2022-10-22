import React from 'react'
import { Cursor, useTypewriter } from 
'react-simple-typewriter'
import BackgroundCircles from './backgroundCircles'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            'Hi, My name is Sebastian', 
            'Rain and Puzzle Lover',
            'Cat Dad'
        ],
        loop: true,
        delaySpeed: 2500,
    })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image src='https://media-exp1.licdn.com/dms/image/C5603AQFKVY3ljseKuQ/profile-displayphoto-shrink_800_800/0/1660083494530?e=1671667200&v=beta&t=v-Znxg-d_QXgopWPvjNme3ivOvzE_3ezREUD5R0F0j0' alt='sebastian manion' width={150} height={150} className='rounded-full relative mx-auto' />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-200 pb-2 tracking-[14px] text-yellow-400'>Software Engineer</h2>
            <h1 className='text-5xl lg:text-6xl font-bold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='gold' />
            </h1>

            <div className='pt-5'>
                <Link href={"#about"}>
                    <button className='heroButton'>About</button>
                </Link>
                <Link href={"#skills"}>
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href={"#projects"}>
                    <button className='heroButton'>Projects</button>
                </Link>
                <Link href={"#experience"}>
                    <button className='heroButton'>Experience</button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}