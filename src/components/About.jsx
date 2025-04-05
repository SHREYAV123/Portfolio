import React from 'react'

const About = () => {
  return (
    <div id='about' className='py-4 pt-20 border-b pb-30 border-neutral-800 lg:px-16'>  
    <h1 className="my-5 text-5xl font-extrabold text-center text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text">
  About
  <span className="text-neutral-400"> Me</span>
</h1>

    <div className='flex flex-wrap items-center'>
        <div className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex items-center justify-center'>
            <img src='/images/l.png'
            alt='About Me'
            className='object-cover object-center rounded-full h-100 w-100'>
            </img>
        </div>
       
        </div>
        <div className='w-full lg:w-1/2'>
            <div className='flex justify-center lg:justify-start reveal-up'>
            <p className='max-w-xl px-2 py-6 my-20 font-semibold text-blue-200 duration-300 border rounded-[30px]  shadow-lg transition-cdolors bg-gradient-to-r from-gray-900 via-blue-950 to-gray-800 border-blue-700/40 hover:from-gray-800 hover:via-blue-900 hover:to-gray-700 hover:text-white'>
                Hi, I'm Shreya Sahu — a passionate software developer dedicated to crafting seamless digital experiences. With expertise in full-stack development, I specialize in building intuitive, user-centric applications using modern technologies. Whether it's developing dynamic web platforms or optimizing backend systems, I thrive on turning ideas into impactful solutions.
Driven by a love for problem-solving and continuous learning, I stay updated with the latest trends in tech. Let's connect and collaborate to create something amazing!


                    
                </p>
                
            </div>
        </div>
 
   
   </div>
    </div>
  )
}

export default About
