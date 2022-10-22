import React from 'react'
import { Cursor, useTypewriter } from 
'react-simple-typewriter'
import BackgroundCircles from './backgroundCircles'
import Image from 'next/image'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            'Hi, My name is Sebastian', 
            'Junior Web Developer',
            'Cat Dad'
        ],
        loop: true,
        delaySpeed: 2000,
    })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image href= />
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='gold' />
        </h1>
    </div>
  )
}