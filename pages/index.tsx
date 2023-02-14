import Header from '../components/Header'
import Head from 'next/head'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'



export default function Home() {
  return (
    <div className='bg-gray-700 h-screen text-white snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/200 scrollbar-thumb-blue-300'>
      <Head>
        <title>Adam's Portfolio</title>
      </Head>
        <Header />

        <section id="hero" className='snap-center'>
          <Hero />
        </section>
        <section id="about" className='snap-center'>
          <About />
        </section>
        <section id="experience" className='snap-center'>
          <WorkExperience />
        </section>
        <section id="skills" className='snap-start'>
          <Skills />
        </section>
        <section id="projects" className='snap-center'>
          <Projects />
        </section>
        <section id="contact" className='snap-center'>
          <Contact />
        </section>
    </div>
  )
}
