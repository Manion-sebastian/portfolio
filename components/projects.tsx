import React from 'react'

type Props = {}

export default function Projects({}: Props) {
  return (
    <div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-yellow-400 text-2xl'>
            Projects
      </h3>

      <div>
        {/* projects */}
      </div>

      <div className='w-full absolute top-[30%] bg-yellow-500/30 left-0 h-[500px] skew-y-12'>

      </div>

    </div>
  )
}