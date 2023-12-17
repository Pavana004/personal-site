import React from 'react'
import '../portfolio/portfolio.css'
import { motion, easeInOut } from 'framer-motion'
import dp from '../assests/dp.jpg'
import add from '../assests/add.jpg'
import wallet from '../assests/wallet.png'
import admin from '../assests/admin.png'
import codeparva from '../assests/codeparva.png'
import map from '../assests/map.jpg'
import dash from '../assests/dash.png'
import chatbot from '../assests/chatbot.png'




const data = [
    {
        "id": 1,
        "title": "Multiverse",
        "type": "Web Application",
        "description": "OTT Platform here you can access different type of field like Movie,Music,Videos,Books.This project made by MERN stack.",
        "link": "https://multiverse-rho.vercel.app/",
        "image": dp,
    },
    {
        "id": 2,
        "title": "Multiverse Admin",
        "type": "Web Application",
        "description": "Here you can Upload Movie,Music,Videos,Books data for this project.This project made by MERN stack.",
        "link": "https://multiverseadmin.netlify.app/",
        "image": admin,
    },
    {
        "id": 3,
        "title": "CURD AND REACT LEAFLET MAP",
        "type": "Web Application",
        "description": "Here I develop a line graph and then react leaflet map.",
        "link": "https://taiyo.netlify.app/",
        "image": map,
    },
    {
        "id": 4,
        "title": "Company Project",
        "type": "Web Application",
        "description": "Here I develop project for codeparva company,here i use validation casecading input from and then mobile responsive.",
        "link": "https://admirable-mochi-e69846.netlify.app/",
        "image": codeparva,
    },
    {
        "id": 5,
        "title": "Add To Cart",
        "type": "Web Application",
        "description": "Here I develop a add to cart functionality and then i implement third party Api.",
        "link": "https://splendid-marzipan-c7b64f.netlify.app/",
        "image": add,
    },
    {
        "id": 6,
        "title": "Crypto Dashboard",
        "type": "Web Application",
        "description": "Here I develop Full stack Crypto dashboard, i add serval logic and functionality in this project",
        "link": "https://calsoftfront.netlify.app/",
        "image": wallet,
    },
    {
        "id": 7,
        "title": "User Dashboard",
        "type": "Web Application",
        "description": "OTT Platform here you can access different type of field like Movie,Music,Videos,Books.This project made by MERN stack.",
        "link": "https://glowing-palmier-8f5cca.netlify.app",
        "image": dash,
    },
    {
        "id": 8,
        "title": "ChatBot",
        "type": "Web Application",
        "description": "OTT Platform here you can access different type of field like Movie,Music,Videos,Books.This project made by MERN stack.",
        "link": "https://chatbot-task.netlify.app",
        "image": chatbot,
    },
]




const Portfolio = () => {



    const BoxVariants = {
        initial: {
            y: -3,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                ease: easeInOut,
                duration: 0.5,
                staggerChildren: 0.1,
                delay: 0.25,
            }
        },

    }





    return (
        <div className='portfolioContainer' id='portfolio' >
            <motion.p className='smallPortfolio'> Portfolio <motion.span><motion.div className='empty'></motion.div></motion.span></motion.p>

            <motion.div className='titleContainer'>
                My Portfolio
            </motion.div>


            <motion.div className='Container'
                variants={BoxVariants}
                initial='initial'
                whileInView='animate'
                viewport={{ once: false, amount: 0.2 }}
            >

                {
                    data.map((item) => {
                        return (
                            <motion.div key={item.id}
                                className='renderContainer'
                                variants={BoxVariants}
                                initial='initial'
                                whileInView='animate'
                                whileHover={{ scale: 1.0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}


                            >
                                <motion.img src={item.image} alt='.....'
                                    className='renderImg'
                                    
                                />
                                <motion.div
                                    variants={BoxVariants} 
                                    className='insideRenderContainer'>
                                    <motion.p>{item.title}</motion.p>
                                    <motion.button>
                                        <motion.a href={item.link} target='_blank' rel='norefferer' >Open</motion.a>
                                    </motion.button>
                                </motion.div>


                            </motion.div>
                        )
                    })
                }




            </motion.div>


        </div>
    )
}

export default Portfolio