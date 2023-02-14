import React from 'react'
import { motion } from "framer-motion"
type Props = {}

export default function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.img
        initial={{
            x:-200,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            x: 0
        }}
        viewport={{ once: true }}
        src='https://media.licdn.com/dms/image/D4E03AQFY7u8EJOd92A/profile-displayphoto-shrink_800_800/0/1675751528831?e=1681948800&v=beta&t=-ns4YYCCsKrexBWe6oUQL6Iow0zcaU4RPPi-4NpU8r0'
        className='-mb-5 md:mb0 flex-shrink-0 w-56 h-56 rounded-full object-cover'
         />
         <div className='space-y-10 px-0 md:px-10'>
            <h4 className=' text-2xl lg:text-4xl font:semibold'>
                My name is Adam Thomas a Senior at Mississippi State studying Software Engineer.
            </h4>
         </div>
    </div>
  )
}