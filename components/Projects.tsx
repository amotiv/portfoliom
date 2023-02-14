import React from 'react'
import { motion } from 'framer-motion'
import PortfolioProject from "../components/PortfolioProject"
import EclientProject from './EclientProject'
type Props = {}

export default function Projects({}: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0
    }}
    whileInView={{ opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 space-y-20 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-2 snap-x snap-mandatory text-center'>
            <EclientProject />
            <PortfolioProject />
        </div>
    </motion.div>
  )
}