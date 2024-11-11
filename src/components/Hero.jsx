import image from "../assets/sam_prof.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full 
    items-center justify-center py-28 md:px-32">
    
        <div className="flex flex-col items-center 
        gap-10 text-white pb-20">
            <motion.div
                initial={{y: -50, opacity:0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.8, delay: 0.2}}
            >
                 <img src={image} alt="" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 
                 transition-all duration-300 hover:-translate-y-5 hoever:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px] " />
            </motion.div>

            <motion.div 
                initial={{y: 50, opacity:0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.8, delay: 0.2}}
            
            className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
                <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text 
    text-transparent opacify-80 text-3xl transition-all duration-300 text-5xl font-light md:text-7xl p-2">Sam Feinberg</h1>
                <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text 
    text-transparent opacify-80 text-3xl transition-all duration-300 text-2xl md:text-3xl" >Premium Customer Service Specialist</h3>
                
        <p className="md:text-base text-pretty text-sm text-gray-400 p-5">
        I am a hospitality professional with a degree in Hospitality Management from the University of Central Florida. 
        I excel in delivering exceptional customer service in the Food & Recreation department, ensuring seamless guest experiences
        and organizing personalized activities. Let's make every moment <span className="font-bold"> luxurious!</span> </p>


            </motion.div>
        </div>
    </div>
  )
}

export default Hero;