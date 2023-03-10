import React from 'react'
import { EnvelopeIcon, PhoneIcon} from "@heroicons/react/24/solid"
type Props = {}

export default function Contact({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact Me
        </h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>Contact Me. {" "}</h4>
        
        <div className='space-y-10'> 
            <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-blue-300 h-7 w-7 animate-pulse'/>
                <p>+1-256-763-6154</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-blue-300 h-7 w-7 animate-pulse' />
                <p>dearadamthomas@gmail.com</p>
            </div>
        </div>
        </div>
    </div>
  )
}