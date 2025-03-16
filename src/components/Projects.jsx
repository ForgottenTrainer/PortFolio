import React from 'react';
import { motion } from 'framer-motion';
import capilla from './../assets/project/10.webp';
import gripp from './../assets/project/3.webp';
import gram from './../assets/project/5.webp';
import dev from './../assets/project/6.webp';
import jps from './../assets/project/7.webp';
import foro from './../assets/project/9.webp';

const Projects = () => {
  const projects = [
    {
      title: 'Capilla Divino Niño',
      description: 'Freelance project where I contributed to the design and development of a chapel. Focused on web desing and creating the backend, ensuring a space that is both functional and aesthetically inspiring',
      git: 'https://github.com/ForgottenTrainer/capilla',
      web: 'https://www.divinoninopdc.com/',
      img: capilla
    },
    {
      title: 'Appointment Management System',
      description: 'In this project, a web application was made to manage the appointments of the GRIP psychological center',
      git: 'https://github.com/ForgottenTrainer/gripwebsite',
      web: '',
      img: gripp
    },
    {
      title: 'Inventory System JPS',
      description: 'Developed a professional inventory management system in Laravel with a rental module, allowing efficient tracking of stock, rental operations, and real-time updates to optimize resource management.',
      git: 'https://github.com/ForgottenTrainer/Sistema-inventario-Laravel',
      web: '',
      img: jps
    },
    {
      title: 'Rhampherios Foro',
      description: 'Developed a community forum for YouTube users, designed to foster engagement and discussions. The platform includes features such as user registration, topic creation, comment threads, and moderation tools to ensure a positive and interactive environment.',
      git: 'https://github.com/ForgottenTrainer/foro-creepy',
      web: 'https://rhampherios.xyz',
      img: foro
    },
    {
      title: 'Instagram Clone',
      description: 'I create an Instagram clone to showcase my skills in PHP & Laravel.',
      git: 'https://github.com/ForgottenTrainer/RobloxGram',
      web: '',
      img: gram
    },
    {
      title: 'DevJobs, Jobs Search and Post',
      description: 'I Create a professional platform for job seekers to post job openings and apply seamlessly',
      git: 'https://github.com/ForgottenTrainer/devjobs-curso',
      web: '',
      img: dev
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.5 },
    }),
  };

  return (
    <div className="pl-5 pr-5 lg:pl-10 lg:pr-10 pt-5 pb-5" id="projects">
      <h3 className="text-3xl font-semibold mb-8">Selected Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-sm border border-slate-200 rounded-lg p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={cardVariants}
          >
            <div className="h-40 bg-gray-200 rounded-md mb-4 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <h6 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h6>
            <p className="text-slate-600 mb-4">{project.description}</p>
            <div className="flex justify-between">
              {project.web && (
                <a
                  href={project.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Live Demo
                </a>
              )}
              <a
                href={project.git}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
