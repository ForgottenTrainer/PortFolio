"use client";
import Link from 'next/link';
import React from 'react'

const EmailSection = () => {
    const handleSubmit = async () => {
        e.preventDefault()
        const data = {
            email: e.targe.email.value,
            subject: e.targe.subject.value,
            message: e.targe.message.value
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = "/api/send"
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if(resData.status === 'success'){
            console.log('Message sent')
        }
    }
  return (

    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/2 -left-4 transfrm -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
            <h5 className='text-xl font-bold text-white my-2'>Let's Connect and upload your idea</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
            Let's connect and learn more about our products and services.
            </p>
            <div className="socials flex flex-rows gap-2">
                <Link href="" >
                    GitHub
                </Link>
                <Link href="">
                    Linkedin
                </Link>
            </div>
        </div>
        <div className="">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <label htmlFor="email" type='email' className='text-white block text-sm font-medium'>Email</label>
                <input type="email" id='email' required placeholder='hi@email.com' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5'/>

                <label htmlFor="subject" type='text' className='text-white block text-sm font-medium'>Subject</label>
                <input type="text" id='subject' required placeholder='Hi, i need a landing page...' className='bg-[#18191E] z-10 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5'/>

                <div className="mb-6 z-10">
                    <label htmlFor="message"  className='text-white block text-sm mb-3 font-medium'>Email</label>
                    <textarea name='message' id='message' className='bg-[#18191E] border z-10 border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5'></textarea>
                </div>
                <button type='submit' className='z-10 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white w-full'>Send Message</button>
            </form>
        </div>
    </section>

  )
}

export default EmailSection
