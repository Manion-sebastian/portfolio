import React from 'react'
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}

export default function Contact({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-yellow-400 text-2xl'>
            Get in touch
        </h3>

        <div className='flex flex-col space-y-10'>
          <h4 className='text-4xl font-semibold text-center'>
            Always up to chat,{" "}<span className='decoration-yellow-400 underline'>Contact Me</span>
          </h4>

          <div>
            <div className='flex items-center space-x-5 justify-center'>
              <MapPinIcon className='text-yellow-400 h-7 w-7 animate-pulse' />
              <p>Seattle <span className='text-green-400'>Washington</span></p>
            </div>
            <div className=''>
              <EnvelopeIcon className='text-yellow-400 h-7 w-7 animate-spin' />
              <p>sjmanion123@gmail.com</p>
            </div>
            
            <form className='flex flex-col space-y-2 w-fit mx-auto'>
              <div className='fkex space-x-2'>
                <input type="text" />
                <input type="text" />
              </div>

              <input type="text" />
              <textarea />
              <button type='submit'>Submit</button>

            </form>

          </div>

        </div>
    </div>
  )
}