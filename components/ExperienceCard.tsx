import React from 'react'
import {motion} from "framer-motion"
type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-gray-700 p-10  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 '>
        <motion.img
        initial={{
            y:-100,
            opacity: 0,
        }}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://media.licdn.com/dms/image/C4E0BAQH2AacW4el3tQ/company-logo_200_200/0/1565285273006?e=1684368000&v=beta&t=L8r3B5VUD3JXzDNd0kimTMlMyEIFR3KpxWly4qh9aks'
        alt=''
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-lg md:text-4xl font-light'>Machine Learning Intern</h4>
            <p className='font-bold text-lg md:text-2xl mt-1'>Devcom Aviation & Missle</p>
            <div className='flex space-x-2 my-2 items-center justify-center'>
                <img className='h-10 w-10 rounded-full object-cover'
                src="data:image/jpeg;base64,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"
                alt='' />
                <img className='h-10 w-10 rounded-full object-cover'
                src="data:image/png;base64,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"
                alt='' />
                <img className='h-10 w-10 rounded-full object-cover'
                src="data:image/png;base64,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"
                alt='' />
                <img className='h-10 w-10 rounded-full object-cover'
                src="data:image/png;base64,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"
                alt='' />
            </div>
            <p className='uppercase py-5 text-gray-300'>June 2022 - Current</p>

            <ul className='list-disc space-y-4 ml-5 text-left md:text-lg text-center'>
                <li>Wrote and reviewed code for machine learning api for navigation of planes and missiles
                    Leveraged Knowledege in Tensorflow, Numpy, OpenCV, Pandas, C++, and Python</li>
            </ul>
        </div>
    </article>
  )
}