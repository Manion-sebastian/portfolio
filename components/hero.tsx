import React from 'react'
import { Cursor, useTypewriter } from 
'react-simple-typewriter'
import BackgroundCircles from './backgroundCircles'
import Image from 'next/image'
import Link from 'next/link'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, my name is ${pageInfo?.name || 'Sebastian Manion'}`, 
            'Rain and Puzzle Lover',
            'Cat Dad'
        ],
        loop: true,
        delaySpeed: 2500,
    })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        {/* <BackgroundCircles /> */}
        <Image src={urlFor(pageInfo?.heroImage).url()} alt={pageInfo?.name || 'Sebastian Manion'} width={300} height={300} className=' relative mx-auto' />
        <div className='z-20'>
            <h2 className='text-sm uppercase pb-2 tracking-[14px] text-yellow-400'>{pageInfo?.role || 'Software Engineer'}</h2>
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