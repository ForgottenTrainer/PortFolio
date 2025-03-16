import { motion } from 'framer-motion';
import React, { useState } from 'react'

const About = () => {


  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="lg:p-10 p-5" id="about">
      <div className="grid lg:grid-cols-2 gap-4">
        <motion.div
          className="lg:pr-7 flex flex-col items-start justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <h3 className="font-light text-gray-500 pb-4">About Me</h3>
          <h5 className="font-normal text-5xl text-black ">
            Design, Development and Network. <br /> All In One Place
          </h5>
          <p className="font-light text-gray-500 pt-4">
            Curious and self-taught professional, passionate about technology
            and the creation of solutions that make a difference. I am
            characterized by adaptability, commitment to continuous learning and
            the ability to face challenges with creativity and determination. I
            enjoy collaborating on projects where innovation and constant
            improvement are fundamental pillars.
          </p>
        </motion.div>
        <hr className="lg:hidden" />


        <div className="justify-content-centeritems-center justify-center ">
          <div id="accordion-flush" className="  text-gray-900 ">
          {/* Section 1 */}
          <h2 id="accordion-flush-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200  gap-3"
              
              
              aria-controls="accordion-flush-body-1"
            >
              <span className='text-black'>WEB APPLICATION</span>

            </button>
          </h2>
          
            <div id="accordion-flush-body-1" className="py-5 border-b ">
              <p className="mb-2 text-gray-500 ">
                I specialize in creating custom, high-performance web applications that are tailored to meet your business needs. From concept to deployment, I deliver innovative and scalable solutions using modern web technologies.              
              </p>
            </div>
          

          {/* Section 2 */}
          <h2 id="accordion-flush-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200  gap-3"
              
              aria-controls="accordion-flush-body-2"
            >
              <span className='text-black'>RESPONSIVE DESING</span>
            </button>
          </h2>
          
            <div id="accordion-flush-body-2" className="py-5 border-b border-gray-200 ">
              <p className="mb-2 text-gray-500 ">
              I ensure your web applications look and perform flawlessly on any device, offering a seamless user experience across desktops, tablets, and smartphones.              </p>

            </div>
          

          {/* Section 3 */}
          <h2 id="accordion-flush-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200  gap-3"
              
             
              aria-controls="accordion-flush-body-3"
            >
              <span className='text-black'>BACKEND DEVELOPMENT</span>

            </button>
          </h2>
          
            <div id="accordion-flush-body-3" className="py-5 border-b border-gray-200 ">
              <p className="mb-2 text-gray-500 ">
              I build secure and efficient backends to power your web applications, ensuring scalability, reliability, and optimal performance for your business.              
              </p>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default About