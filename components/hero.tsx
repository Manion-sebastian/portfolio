import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

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
    <div>
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='gold' />
        </h1>
    </div>
  )
}