import React from 'react'
import '../skills/skill.css'
import { easeInOut, motion } from 'framer-motion'
import react from '../assests/react.png'
import node from '../assests/node.png'
import mongo from '../assests/mongo.png'
import html from '../assests/html.png'
import css from '../assests/css.png'
import git from '../assests/git.png'
import express from '../assests/express.png'
import aws from '../assests/aws.png'
import bootstrap from '../assests/bootstrap.png'
import sql from '../assests/sql.png'
import tailwind from '../assests/tailwind.png'
import vercel from '../assests/vercel.png'
import heroku from '../assests/heroku.png'
import js from '../assests/js.png'
import figma from '../assests/figma.png'

const data = [
    { "id": 1, "name": "React", "image": react },
    { "id": 2, "name": "MongoDB", "image": mongo },
    { "id": 3, "name": "Node js", "image": node },
    { "id": 4, "name": "Express JS", "image": express },
    { "id": 5, "name": "Js", "image": js },
    { "id": 6, "name": "HTML", "image": html },
    { "id": 7, "name": "Css", "image": css },
    { "id": 8, "name": "Bootstrap", "image": bootstrap },
    { "id": 9, "name": "Mysql", "image": sql },
    { "id": 10, "name": "AWS", "image": aws },
    { "id": 11, "name": "Git", "image": git },
    { "id": 12, "name": "Tailwind", "image": tailwind },
    { "id": 13, "name": "Vercel", "image": vercel },
    { "id": 14, "name": "Heroku", "image": heroku },
    { "id": 15, "name": "Figma", "image": figma },
]







const Skills = () => {



    const BoxVariants = {
        initial: {
            y: -1,
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





    const slideVariant = {
        initial: {
            x: 0,
        },
        animate: {
            x: '-220%',
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 20,

            }
        },

    }


    return (

        <div className='skillsContainer' id='skills'>

            <motion.div
                initial={{ x: -200, opacity: 0, }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: 'easeIn', delay: 0.5 }}
                viewport={{ once: false, amount: 0.2 }}
                className='extraDesgin' >
                <motion.p
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className='skillSmall'>Skills <motion.span><motion.div className='emptyLine' ></motion.div></motion.span></motion.p>
            </motion.div>
            <motion.h1


                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                viewport={{ once: false, amount: 0.2 }}
                className='skillHeading'>My Skills</motion.h1>

            <motion.div className='skillShowContainer'
                variants={BoxVariants}
                initial='initial'
                whileInView='animate'
            >


                {
                    data.map((item) => {
                        return (
                            <motion.div
                                className='eachSkillBox1'
                                variants={BoxVariants}
                                initial='initial'
                                whileInView='animate'
                                whileHover={{ scale: 1.10 }}
                                whileTap={{ scale: 0.95, rotate: "2deg" }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                viewport={{ once: false, amount: 0.2 }}
                                key={item.id}
                            >
                                <motion.img src={item.image} alt='react' style={{ width: '50px', height: '50px' }} />
                                <motion.p>{item.name}</motion.p>
                            </motion.div>
                        )
                    })
                }

            </motion.div>
            <motion.div className='slideTextAnimation' >
                <motion.h1
                    variants={slideVariant}
                    initial='initial'
                    animate='animate'
                    className='slideText'>MERN Stack Developer Ui & Ux</motion.h1>
            </motion.div>

        </div>
    )
}

export default Skills