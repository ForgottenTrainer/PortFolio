import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const timelineItems = [
    {
      time: "April 2024 - December 2024",
      title: "Digital Family",
      description: [
        "Responsible for the administration and optimization of Zoho's CRM system, ensuring full functionality and customization to business needs.",
        "Implemented automations within the CRM to improve workflows, reducing data processing time by 40% and increasing sales team efficiency.",
        "Developed and delivered CRM system updates, including new features and modules that improved data capture and reporting by 50%."
      ]
    },
    {
      time: "August 2021 - November 2023",
      title: "JPS Servicios Industriales",
      description: [
        "Responsible for preventive and corrective maintenance of computer systems.",
        "Developed and optimized an inventory management system.",
        "Increased process efficiency by 30% through system improvements."
      ]
    },
    {
      time: "January 2023 - August 2023",
      title: "GRIP",
      description: [
        "Engineered a solution that caters to a diverse clientele, improving programming efficiency by 25%.",
        "Implemented MySQL for database management, prioritizing data security and user information integrity.",
        "Developed a custom appointment management system for GRIP as a Social Service Developer."
      ]
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.5 },
    }),
  };

  return (
    <div className="mx-auto pl-5 pr-5 lg:pl-10 lg:pr-10 lg:pt-5" id="experience">
      <h3 className="text-3xl pb-10 font-semibold">Experience</h3>
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Imagen */}
        <div className="flex justify-center">
          <img
            className="grayscale rounded-lg max-w-full h-auto"
            src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        {/* Lista de experiencia */}
        <div className="flex flex-col items-center justify-center">
          <ol className="relative border-s border-gray-200">
            {timelineItems.map((item, index) => (
              <motion.li
                key={index}
                className="mb-10 ms-4"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                  {item.time}
                </time>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mb-4 text-base font-normal text-gray-500">
                  {item.description.map((desc, i) => (
                    <span key={i}>
                      {desc}
                      <br />
                    </span>
                  ))}
                </p>
              </motion.li>
            ))}
          </ol>
          <a href="./rogerEng-cv.pdf" className="bg-slate-800 text-white rounded-md p-2 transition-all hover:bg-slate-700" target="_blank" rel="noopener noreferrer">Download my CV</a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
