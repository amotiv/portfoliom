import React from 'react'
import {motion} from "framer-motion"
import Skill from './Skill'
type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1.5
    }}
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>
        <div className='flex flex-wrap'>
            <Skill />
        </div>
    </motion.div>
  )
}