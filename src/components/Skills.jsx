import React from 'react'
import { SiC, SiCplusplus, SiPython, SiHtml5, SiCss3, SiJavascript, SiTypescript } from 'react-icons/si';
import { SiReact, SiNodedotjs, SiPrisma, SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb'; // Next.js
import { SiExpress, SiHono, SiBootstrap } from 'react-icons/si'; // Express.js, Hono, Bootstrap
import { SiGit, SiMongodb,  SiAwsamplify, SiVercel, SiDocker, SiPostgresql, SiMysql, SiOracle, SiPostman, SiHoppscotch, SiVite } from 'react-icons/si';



const Skills = () => {
  const tools = [
    { icon: <SiGit size={40} className="text-red-600" />, name: 'Git' },
    { icon: <SiMongodb size={40} className="text-green-500" />, name: 'MongoDB' },
    { icon: <SiPrisma size={40} className="text-gray-600" />, name: 'Prisma' },
    { icon: <SiDocker size={40} className="text-blue-400" />, name: 'Docker' },
    { icon: <SiPostgresql size={40} className="text-blue-600" />, name: 'PostgreSQL' },
    { icon: <SiMysql size={40} className="text-blue-500" />, name: 'MySQL' },
    { icon: <SiOracle size={40} className="text-red-700" />, name: 'Oracle' },
    { icon: <SiPostman size={40} className="text-orange-500" />, name: 'Postman' },
    { icon: <SiHoppscotch size={40} className="text-teal-400" />, name: 'Hoppscotch' },
    { icon: <SiVite size={40} className="text-purple-500" />, name: 'ViteJS' },
    { icon: < SiAwsamplify size={40} className="text-orange-500" />, name: 'AWS' },
    { icon: <SiVercel size={40} className="text-white" />, name: 'Vercel' },
    
  ];
  return (
    <section id='technology' className='px-6 py-10 pt-20 pb-24 border-b border-neutral-800 lg:px-16'>
<h2 className="my-3 mb-2 text-5xl font-bold text-center text-transparent bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text drop-shadow-lg reveal-up">
  Techno<span className="animate-pulse text-emerald-500 ">logies</span>
</h2>
    
    <h3 className="mt-5 mb-6 text-xl font-bold text-transparent reveal-up bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text">Programming Languages</h3>
    <div className='flex flex-wrap items-center justify-start gap-6 my-4'>
    
    {[  
          { icon: <SiC size={32} className="text-blue-500 bold-icon" />, name: 'C' },
          { icon: <SiCplusplus size={32} className="text-blue-500 bold-icon" />, name: 'C++' },
          { icon: <SiPython size={32} className="text-yellow-500 bold-icon" />, name: 'Python' },
          { icon: <SiHtml5 size={32} className="text-orange-500 bold-icon" />, name: 'HTML' },
          { icon: <SiCss3 size={32} className="text-blue-600 bold-icon" />, name: 'CSS' },
          { icon: <SiJavascript size={32} className="text-yellow-400 bold-icon" />, name: 'JavaScript' },
          { icon: <SiTypescript size={32} className="text-blue-500 bold-icon" />, name: 'TypeScript' },
        ].map((item, index) => (
          <div 
            key={index} 
            classes="reveal-up"
            className='flex flex-col items-center justify-center w-24 h-24 p-4 transition-transform duration-300 ease-in-out border-4 rounded-2xl border-neutral-800 hover:bg-neutral-800 hover:scale-110'
          >
            {item.icon}
            <p className="mt-2 text-sm text-gray-100">{item.name}</p>
          </div>
        ))}
      </div>
        

  
      <h3 className="my-4 mt-5 mb-6 text-xl font-bold text-transparent reveal-up bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text">
  Frameworks & Libraries
</h3>
    <div className='flex flex-wrap items-center justify-start gap-6'>
        {[
          { icon: <SiReact size={40} className="text-blue-400 bold-icon " />, name: 'ReactJS' },
          { icon: <SiNodedotjs size={40} className="text-green-500 bold-icon" />, name: 'Node.js' },
          { icon: <SiTailwindcss size={40} className="text-blue-500 bold-icon" />, name: 'Tailwind CSS' },
          { icon: <TbBrandNextjs size={40} className="text-white" />, name: 'Next.js' },
          { icon: <SiExpress size={40} className="text-gray-600" />, name: 'Express.js' },
          { icon: <SiHono size={40} className="text-green-400" />, name: 'Hono' },
          { icon: <SiBootstrap size={40} className="text-purple-600" />, name: 'Bootstrap' },
        ].map((item, index) => (
          <div 
            key={index} 
              classes="reveal-up"
            className='flex flex-col items-center justify-center w-24 h-24 p-4 transition-transform duration-300 ease-in-out border-4 rounded-2xl border-neutral-800 hover:bg-neutral-800 hover:scale-110'
          >
            {item.icon}
            <p className="mt-2 text-sm text-gray-100">{item.name}</p>
          </div>
        ))}
      </div>
   
    <h3 className="mt-5 mb-6 text-xl font-bold text-transparent reveal-up bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text">Tools</h3>
    <div className='flex flex-wrap items-center justify-start gap-6 my-4 '>
   
    {tools.map((item, index) => (
          <div 
            key={index} 
              classes="reveal-up"
            className="flex flex-col items-center justify-center w-24 h-24 p-4 transition-transform duration-300 ease-in-out border-4 rounded-2xl border-neutral-800 hover:bg-neutral-800 hover:scale-110"
          >
            {item.icon}
            <p className="mt-2 text-sm text-gray-100">{item.name}</p>
          </div>
        ))}

    </div>
  </section>


  )
}

export default Skills
