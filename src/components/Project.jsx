import React from 'react'
import { PROJECTS } from '../constants';
import { FiExternalLink } from "react-icons/fi";

import {motion} from "framer-motion"

const Project = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1
        whileInView={{opacity:1 , y:0}}

        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        
        className='my-20 text-center text-4xl'>Projects</motion.h1>
        <div>
            {PROJECTS.map((project, index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>

                    <motion.div 
                     whileInView={{opacity:1, x:0}}
                     initial={{opacity:0,x:-100}}
                     transition={{duration:1}}
                    
                    className='w-full  lg:w-4/12'>
                    <img src={project.image} width={350} height={350}  alt={project.title} className='mb-6 rounded' />

                    </motion.div>


                    <motion.div 
                    
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}

                    transition={{duration:1}}
                    
                    
                    className='w-full max-w-xl lg:w-3/4 '>
                  <div className='flex  gap-3'>
                  <h6 className='mb-2 font-semibold'>{project.title}</h6> <span>
                    
                    <a 
                            href={project.projectLink}
                            target="_blank" 
                            rel="noopener noreferrer"
                            // style={{ color: '', fontSize: '2rem' }}
                          >
                             <FiExternalLink className='w-16' />
                          </a>
                    
                    
                    
                   </span>
                  </div>
                    <p className='mb-4 text-neutral-400 '>{project.description}</p>
                  
                    

                    {project.technologies.map((tech,index)=>(
                        <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                            {tech}
                        </span>
                    ))}

                    </motion.div>
                   
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Project
