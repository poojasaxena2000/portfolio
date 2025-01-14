
import logo from "../assets/poo6.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import React from 'react'

export default function Navbar() {
  return (
   <nav className='mb-20 flex items-center justify-between py-6'>
   <div className="flex flex-shrink-0 items-center">
   <img className="mx-2 w-28"  src={logo} alt="logo" />
   </div> 

   <div  className="m-b flex items-center justify-center gap-4 text-2xl">


   <a 
        href="https://www.linkedin.com/in/pooja-saxena-498b9a175/" 
        target="_blank" 
        rel="noopener noreferrer"
        // style={{ color: '', fontSize: '2rem' }}
      >
        <FaLinkedin />
      </a>



      <a 
        href="https://github.com/poojasaxena2000?tab=repositories" 
        target="_blank" 
        rel="noopener noreferrer"
        // style={{ color: '', fontSize: '2rem' }}
      >
         <FaGithub/>
      </a>

    {/* <FaLinkedin /> */}
   
    <FaInstagram/>
   </div>
   </nav>
  )
}
