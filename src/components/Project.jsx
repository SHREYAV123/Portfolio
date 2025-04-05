import React from 'react'
import { ProjectCard } from './ProjectCard';


const Project = () => {

  const projectsData = [
    {
      image: '/images/wanderlust.jpg',
      title: 'Wanderlust',
      details: {
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker'],
        description: 'An interactive hotel booking platform designed for travelers to discover and book accommodations with ease. Features secure user authentication, intuitive search, and seamless booking experience.',
        demoLink: 'https://wanderlust-kb2w.onrender.com/listings',
        codeLink: 'https://github.com/SHREYAV123/wanderlust'
      }
    },
    {
      image: '/images/paynest.jpeg',
      title: 'PayNest',
      details: {
        technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Docker'],
        description: 'A digital wallet solution for seamless transactions. Offers features like money transfers, bill payments, and expense tracking, backed by robust security measures.',
        demoLink: 'https://pay-nest-user-app.vercel.app/api/auth/signin',
        codeLink: 'https://github.com/SHREYAV123/paynest'
      }
    },
    {
      image: '/images/bloghive.jpeg',
      title: 'Blog-Hive',
      details: {
        technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
        description: 'A dynamic blogging platform for content creators. Enables users to publish articles, engage through comments and likes, and follow their favorite writers.',
        demoLink: 'https://blog-hive.vercel.app/signin',
        codeLink: 'https://github.com/SHREYAV123/blog-hive'
      }
    },
    {
      image: '/images/skycast.jpeg',
      title: 'SkyCast',
      details: {
        technologies: ['React', 'Node.js', 'Express', 'OpenWeather API'],
        description: 'A weather forecasting app providing real-time weather updates, location-specific forecasts, and an intuitive UI for easy navigation.',
        demoLink: 'https://sky-cast-rose.vercel.app/',
        codeLink: 'https://github.com/SHREYAV123/skycast'
      }
    }
  ];
  
  return (
    <div id="projects" className='pt-0 pb-20 mt-1 border-b border-neutral-800 lg:px-16'> 
      <h2 className='my-20 text-5xl font-bold text-center text-gray-500 reveal-up'>Pro<span className='text-emerald-400'>jects</span></h2>
    <div className='flex flex-wrap justify-start px-10 gap-18 '>
    {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project}
        classes="reveal-up" />
        
      ))}
      
    </div>
    
    </div>
  )
}

export default Project
