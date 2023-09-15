import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 1,
    title: "PymMarket",
    description: "In this project, a business was created where articles and/or services can be published.",
    image: "/images/1.jpeg",
    tag: ["all", "web"],
    link: "https://unbaked-battery.000webhostapp.com/login.php"
  },
  {
    id: 2,
    title: "Website GRIP",
    description: "In this project, the website was created together with its respective Blog, for the GRIP psychological center",
    image: "/images/2.png",
    tag: ["all", "web"],
    link: "https://bloggrip.000webhostapp.com"
  },
  {
    id: 3,
    title: "Appointment Management System",
    description: "In this project, a web application was made to manage the appointments of the GRIP psychological center",
    image: "/images/3.png",
    tag: ["all", "web"],
    private: true
  },
  {
    id: 4,
    title: "Mieles kaab",
    description: "Mieles kaab is a freelancer project where the template was created for a business that was just starting.",
    image: "/images/4.png",
    tag: ["all", "web"],
    link: "https://kaabmiel.netlify.app/"
  },
  {
    id: 5,
    title: "Instagram Clone",
    description: "I create an Instagram clone to showcase my skills in PHP & Laravel",
    image: "/images/5.png",
    tag: ["all", "web"],
    link: "https://github.com/ForgottenTrainer/RobloxGram"
  },
  {
    id: 6,
    title: "Jobs Search and Post",
    description: "Create a professional platform for job seekers to post job openings and apply seamlessly",
    image: "/images/6.png",
    tag: ["all", "web"],
    link: "https://github.com/ForgottenTrainer/devjobs-curso"
  },
  {
    id: 7,
    title: "Inventory System",
    description: "Create a professional platform of Inventory System",
    image: "/images/7.jpeg",
    tag: ["all", "web"],
    link: "https://github.com/ForgottenTrainer/Sistema-inventario-Laravel"
  },
  {
    id: 8,
    title: "School System",
    description: "I developed a school management system with an elegant user interface using React and Laravel.",
    image: "/images/8.jpeg",
    tag: ["all", "web"],
    link: "https://github.com/ForgottenTrainer/Sistema-inventario-Laravel"
  },
  
]


const ProjectSection = () => {
  return (
    <section>
      <h2 className='font-bold mb-5 text-center text-4xl text-white md:mb-12'>My Projects</h2>
        <div className="grid md:grid-cols-3 md:gap-12">
          {projectsData.map((project) => <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image} 
            gitUrl={project.link}         
          />
          )}
        </div>
    </section>
  )
}

export default ProjectSection
