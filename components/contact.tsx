import React from 'react'
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
}

type Props = {}

export default function Contact({}: Props) {

  const {
    register,
    handleSubmit
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (FormData) => console.log(FormData)

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
              <p className='text-2xl'>Seattle <span className='text-green-400'>Washington</span></p>
            </div>
            <div className='flex items-center space-x-5 mb-4 justify-center'>
              <EnvelopeIcon className='text-yellow-400 h-7 w-7 animate-pulse' />
              <p className='text-2xl'>Sjmanion123@gmail.com</p>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
              <div className='flex space-x-2'>
                <input {...register('name')} className='contactInput' placeholder='Name' type="text" />
                <input {...register('email')} className='contactInput' placeholder='Email' type="email" />
              </div>

              <input {...register('subject')} className='contactInput' placeholder='Subject' type="text" />
              <textarea {...register('message')} className='contactInput' placeholder='Message' />
              <button type='submit' className='bg-yellow-400 py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>

            </form>

          </div>

        </div>
    </div>
  )
}