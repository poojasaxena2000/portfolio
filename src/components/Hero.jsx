import React from 'react';
import {HERO_CONTENT} from "../constants";
import profilePic from "../assets/he.jpeg";
import { delay, motion, transform } from "framer-motion"

const conatiner =(delay)=>({
  hidden:{x:-100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5, delay:delay},
  },
});

const Hero = () => {
  return (


    
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>

      

       <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
        <div className='flex flex-col items-center lg:items-center'>
            <motion.h1  variants={conatiner (0)}
            initial='hidden'
            animate='visible'
             className='mb-4 text-6xl  tracking-tight  
            lg:text-6xl bg-clip-text'>Pooja Saxena</motion.h1>

            < motion.span 
            
            variants={conatiner (0.5)}
            initial='hidden'
            animate='visible'
            className='bg-gradient-to-r  from-pink-300 via-slate-500 to-purple-500
            bg-clip-text text-4xl tracking-tight text-transparent mb-8'>Frontend Developer</ motion.span>

            {/* <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur corrupti, illum est id distinctio, neque eaque sequi voluptate alias 
                debitis iure maxime porro eum error laudantium cum natus suscipit.</p> */}
                  < motion.p
                    variants={conatiner (1)}
                    initial='hidden'
                    animate='visible'
                  className=' max-w-xl  font-light '>{HERO_CONTENT}</ motion.p>


        </div>

        </div>
         <div className='w-full lg:w-1/2 '>
         <div className='flex justify-center'>
            <motion.img 
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1,delay:1.5}}
            src={profilePic} alt=""  className='rounded-lg'/>
         </div>

         </div>
       </div>
    </div>
  )
}

export default Hero
