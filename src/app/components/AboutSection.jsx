"use client"; 
import React, { useTransition, useState} from 'react'
import Image from "next/image"
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className='w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-600 dark:text-white'>
        <li className='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600'>NodeJs</li>
        <li className='w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600' >JavaScript</li>
        <li className='w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600'>Php</li>
        <li className='w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600'>Laravel</li>
        <li className='w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600'>Livewire</li>
        <li className='w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600'>React && NextJs</li>
        <li className='w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600'>Tailwindcss</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>System Engineer</li>
        <li>Tecnologico Universitario Playacar 2020 - 2023</li>
      </ul>
    )
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul>
        <li>PHP & Laravel with Tailwindcss</li>
        <li>Google Certificacion in databases</li>
      </ul>
    )
  }, 
  
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
      startTransition(() => {
          setTab(id);
      })
    }
    
  return (
    <section className='text-white'>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-7 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/backphp.jpg" width={800} height={800} alt='imagen'/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
            <h2 className='font-bold mb-5 text-4xl text-white'>About Me</h2>
            <p className='text-base lg:text-lg'>
              I'm a passionate 21-year-old web developer. I started my programming journey at 18 and have since eagerly embraced learning new technologies and methodologies.
              <br />
              My true calling lies in web development, seamlessly blending visual appeal with operational efficiency.
              <br />
              I'm also a devoted artist and writer, using creativity and imagination to enhance my professional projects.
            </p>



            <div className="flex flex-row justify-start mt-8">
              <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                {" "}
                Education{" "}
              </TabButton>
              <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>
                {" "}
                Certification{" "}
              </TabButton>
            </div>
            <div className="mt-8 ">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
