import Link from 'next/link';
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackGroundCircles from './BackGroundCircles';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["My name is Adam Thomas",
        "Senior at Mississippi State"],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden'>
        <BackGroundCircles />
        <img 
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='https://media.licdn.com/dms/image/D4E03AQFY7u8EJOd92A/profile-displayphoto-shrink_800_800/0/1675751528831?e=1681948800&v=beta&t=-ns4YYCCsKrexBWe6oUQL6Iow0zcaU4RPPi-4NpU8r0'
        alt=''
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-blue-200 pb-2 tracking-[10px]'>Software Engineer</h2>
            <h1 className='text-3x-l lg:text-4xl font-semibold px-10'>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
            </h1>
        
            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}