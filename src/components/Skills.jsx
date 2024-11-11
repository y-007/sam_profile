import React from 'react'
import { BiLogoDocker, BiLogoJavascript, BiLogoNodejs, BiLogoPostgresql, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi'
import { motion } from "framer-motion";
import { ImAccessibility } from 'react-icons/im';
import { GiSatelliteCommunication } from 'react-icons/gi';
import { FaPuzzlePiece } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import { FcIdea } from 'react-icons/fc';
import { TfiTime } from 'react-icons/tfi';

const Skills = () => {

    const variants = {
        hidden: {opacity: 0, y:50},
        visible: {opacity: 1, y:0}
    }

  return (
    <div id="skills" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32 ">
    <motion.h1 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        className="text-4xl font-light text-white md:text-6xl ">Skills</motion.h1> 
    
    <div className="flex flex-wrap items-center justify-center gap-10 p-50">
        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        className="flex flex-col items-center"
        >

        <div className="cursor-pointer flex flex-col items-center transition-all duration-300 hover:-translate-y-5"> 
            <ImAccessibility title="Customer Service" className="text-[80px] text-sky-500 sm:text-[100px] md:text-[120px]" />
            <span className="mt-5 text-lg text-white items-center text-center">Customer<br/>Focus</span> 
        </div>    
       </motion.div>
       

        <motion.div 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        className="flex flex-col items-center"
        >
        
        <div className="cursor-pointer flex flex-col items-center transition-all duration-300 hover:-translate-y-5"> 
            <GiSatelliteCommunication  title="Exceptional Communication" 
            className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            />
            <span  className="mt-5 text-lg text-white items-center text-center">Exceptional<br/>Communication</span> 
        </div>    
        </motion.div>

        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}>

        <div className="cursor-pointer flex flex-col text-center items-center transition-all duration-300 hover:-translate-y-5">    
            <FaPuzzlePiece className="cursor-pointer text-[80px] text-red-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px]
        md:text-[120px]"/>
           <span  className="mt-5 text-lg text-white items-center text-center">Problem<br/>Solving</span>     
        </div>
        </motion.div>
        
        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}>
        
        <div className="cursor-pointer flex flex-col items-center transition-all duration-300 hover:-translate-y-5"> 
            <BsPeopleFill className="cursor-pointer text-[80px] text-green-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px]
        md:text-[120px]"/>
            <span  className="mt-5 text-lg text-white items-center text-center">People<br/>Skills</span>     
            </div>
        </motion.div>

        <motion.div
            variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}>

        <div className="cursor-pointer flex flex-col items-center transition-all duration-300 hover:-translate-y-5"> 
            <FcIdea className="cursor-pointer text-[80px] text-green-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px]
        md:text-[120px]"/>
            <span  className="mt-5 text-lg text-white items-center text-center">Creativity<br/></span>   
        </div>
        </motion.div>

        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}>
        
        <div className="cursor-pointer flex flex-col items-center transition-all duration-300 hover:-translate-y-5"> 
            <TfiTime className="cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px]
        md:text-[120px]"/>
         <span  className="mt-5 text-lg   items-center text-center text-gray-400">Time<br/>Management</span>   
        </div>
        </motion.div>

    </div>
    </div>
  )
}

export default Skills;

