import React from 'react'
import '../main/main.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaRegHandPointDown } from "react-icons/fa6";
import { motion } from 'framer-motion'

const Main = () => {

    const [text] = useTypewriter({
        words: ['Full Stack Web Developer', 'Ui & Ux', 'Designer'],
        loop: {},
        typeSpeed: 120,
        delaySpeed: 80,
    })

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            }
        },

    }
    return (
        <div className='main' id='home'>
            <motion.div className='introName'
                variants={textVariants}
                initial='initial'
                animate='animate'
            >
                <motion.h3 variants={textVariants} className='name'>Hi I'm Pavan</motion.h3>
                <motion.h3 variants={textVariants} className='professional'> {text}<span style={{ color: "rgba(176, 0, 32, 1)" }}><Cursor /></span> </motion.h3>
                <motion.h3 variants={textVariants} className='country'>Based In India.</motion.h3>
                <br />
                <motion.p variants={textVariants} className='shortDes'>I'm developer focused on crafting user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</motion.p>
                <br />

                <a href='#portfolio' style={{textDecoration:'none',border:'none', color: "rgba(176, 0, 32, 1)"}} >
                    <motion.button variants={textVariants} className='btn' >
                        Scroll Down <FaRegHandPointDown className='bounce' size={30}  />
                    </motion.button>
                </a>


            </motion.div>
        </div>
    )
}

export default Main