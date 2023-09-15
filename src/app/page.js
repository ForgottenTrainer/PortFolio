import Image from 'next/image'
import Link from 'next/link'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import EmailSection from './components/EmailSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Navbar/>
      <div className='container mt-24 mx-auto px-12 py-4'>
        <HeroSection/>
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <footer className="">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">RogerDev™</a>. All Rights Reserved.
        </span>
        </div>
      </footer>
    </main>
  )
}
