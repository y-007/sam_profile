import image_1 from "../assets/image_1.png";
import image_2 from "../assets/image_2.png";
import image_3 from "../assets/image_3.png";
import image_4 from "../assets/image_4.png";
import image_5 from "../assets/image_5.png";
import { motion } from "framer-motion";
 
import React from 'react'


const projectsData =[
    {
    image: image_1,
    title: "Travel Adventures", 
    description: "Traveling fuels my soul. I love immersing myself in different cultures and enjoying diverse cuisines. I've visited a few countries, but my wanderlust isn't satisfied. Japan holds a special place in my heart as I've visited numerous times to connect with family. Traveling is goal. I enjoy meeting like-minded people. New York City's vibrancy captivates me, and I hope to live in a bustling city one day, filled with adventures.",
    technologies: ["Thrilling", "Enriching", "Immersive", "Unforgettable"],
},
{
    image: image_2,
    title: "Excellence Enthusiast", 
    description: "A dedicated professional committed to excellence in every task. I thrive on delivering high-quality results and continuously improving processes. My work ethic is driven by attention to detail, reliability, and a passion for achieving goals. I take pride in my ability to collaborate effectively and drive projects to successful completion, always striving to exceed expectations and contribute positively to the team and organization.", 
    technologies: ["Committed", "Meticulous", "Passionate", "Goal-oriented"],
},
{
    image: image_5,
    title: "Creative Projects", 
    description: "Working on the creation of a poolside amenity project, curating a luxurious and gourmet menu with impeccable presentation. Crafted a selection of high-end food items that not only delight the palate but also enhance the guest experience. Focused on innovation and excellence, ensuring each dish aligns with the organization's standards of quality and elegance, making the poolside area a standout feature.",
    technologies: ["Innovative", "Imaginative", "Inspiring", "Dynamic"],
},
{
    image: image_3,
    title: "Hobbies and Interests", 
    description: "Growing up in a multicultural household, I developed a rich appreciation for diverse cuisines and unique flavors. My passion for food and travel leads me to explore new cultures and culinary experiences. I thrive on discovering authentic dishes and savoring the stories behind them. This adventurous spirit fuels my love for gastronomy and makes every journey a delightful culinary exploration.",
    technologies: ["Passionate", "Cultured", "Adventurous", "Gastronomic"],
},
{
    image: image_4,
    title: "Family and Friends", 
    description: "Family and friends form the backbone of my well-being, grounding me in my roots and shaping who I am. Growing up surrounded by their love and support instilled in me strong values and a sense of belonging. Even though some family members are far away, they remain close in my heart, providing the stability and motivation I need to pursue my goals and embrace life's adventures with confidence and joy.",
    technologies: ["Supportive", "Loving", "Trustworthy", "Loyal"],
},
]

const ScrollReveal = ({children}) => {
    return(
        <motion.div
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration:0.8}} 
        >
            {children}
        </motion.div>
    )
}


const ProjectCard = ({project}) => {
    return (
        <ScrollReveal> 
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
            <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 
            hover:scale-105 md:w-[300px]"/>

            <div className="flex flex-col gap-5">

            <div className="flex flex-col gap-3"> 
            <div className="text-xl font-semibold">{project.title}</div>
                <p className="text-gray-400">{project.description}</p>
            </div>
                
                <div className="flex flex-wrap gap-5">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="rounded-lg bg-black p-3">
                            {tech}
                        </span>
                    ))

                    }

                </div>
            </div>
        </div>
        </ScrollReveal>
    )

}


const Projects = () => {
  return (
    <ScrollReveal>
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 md:px-14 md:py-24">
    <h1 className="text-4xl font-light text-white md:text-6xl">Life's Vibrant Journey</h1>
    <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
            projectsData.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))
        }
    </div>
    
    </div>
    </ScrollReveal>
  )
}

export default Projects;