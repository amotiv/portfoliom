import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex p-5 z-20 items-start justify-between max-w-7xl mx-auto xl:items-center'>
      <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x:0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-row items-center"
      >
            <SocialIcon
            url='https://www.linkedin.com/in/adam-thomas-186518212/'
            fgColor='blue'
            bgColor='transparent'
            />
           <SocialIcon
            url='https://www.github.com/amotiv'
            fgColor='white'
            bgColor='transparent'
            /> 
    </motion.div>
        <motion.div className='flex flex-row items-center text-red-400 cursor-pointer'
          initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x:0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
        }} >
          <Link href="#contact">
            <SocialIcon 
            className='cursor-pointer'
            network='email'
            fgColor='red'
            bgColor='transparent'
            />
            
            <p className='uppercase hidden md:inline-flex text-sm align-text-bottom text-gray-200'>
                Contact
            </p>
            </Link>
            </motion.div>
    </header>
  )
}