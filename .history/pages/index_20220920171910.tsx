import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/hero'
import Project from '../components/Project'
import Skills from '../components/Skills'
import styles from '../styles/Home.module.css'
// https://drive.google.com/file/d/1MqQaYooJ3WT0zFxD7-wjARLbpmyuS1uV/view?usp=sharing
const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar  scrollbar-track-gray-400/40 scrollbar-thumb-[#F7AB0A] scrollbar-thin'>
      <Head>
        <title>Mayank's Portfolio</title>
      </Head>

      <Header/>
      

     
      <section id='hero' className=' snap-start'>
        <Hero />
      </section>

      
      <section id='about' className=' snap-center'>
        <About />
      </section>

      <section id='experience' className=' snap-center'>
        <Experience/>
      </section>

      
      <section id='skills' className=' snap-start'>
        <Skills/>

      </section>

      <section id='project' className='snap-start'>
        <Project />
      </section>

      <section id='contact' className='snap-start'>
        <Contact/>
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img 
              className='h-10 w-10 filter grayscale hover:grayscale-0 cursor-pointer rounded-full object-contain' 
              src="https://drive.google.com/uc?export=view&id=1MqQaYooJ3WT0zFxD7-wjARLbpmyuS1uV" alt="" />
          </div>
        </footer>

      </Link>
    </div>
  )
}

export default Home