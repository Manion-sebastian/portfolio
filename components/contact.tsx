import React from 'react'
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import { PageInfo } from '../typings'

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
}

type Props = {
  pageInfo : PageInfo
}

export default function Contact({ pageInfo }: Props) {

  const {
    register,
    handleSubmit
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (FormData) => {
    window.location.href = `mailto:sjmanion123@gmail.com?subject=${FormData.subject}&body=Hi, my name is ${FormData.name}. ${FormData.message} (${FormData.email})`
  }

  return (
    <div className='h-screen w-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[18px] text-yellow-400  text-xl'>
            Get in touch
        </h3>

        <div className='flex w-screen p-3 pt-12 flex-col space-y-10'>
          <h4 className='text-4xl font-semibold text-center'>
            <span className='decoration-yellow-400 hidden md:flex md:justify-center underline'>Contact Me</span>
          </h4>

          <div>
            <div className='flex items-center md:mb-4 space-x-5 justify-center'>
              <MapPinIcon className='text-yellow-400 h-7 w-7 animate-pulse' />
              <p className='md:text-2xl'>{pageInfo.address}</p>
            </div>
            <div className='flex items-center space-x-5 mb-6 justify-center'>
              <EnvelopeIcon className='text-yellow-400 h-7 w-7 animate-pulse' />
              <p className='md:text-2xl'>{pageInfo.email}</p>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit md:w-[500px] mx-auto'>
              <input {...register('name')} className='contactInput' placeholder='Name' type="text" />
              <input {...register('email')} className='contactInput' placeholder='Email' type="email" />
              <input {...register('subject')} className='contactInput' placeholder='Subject' type="text" />
              <textarea {...register('message')} className='contactInput' placeholder='Message' />
              <button type='submit' className='bg-yellow-400 py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>

            </form>

          </div>

        </div>
    </div>
  )
}