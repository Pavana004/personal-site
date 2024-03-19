import React from 'react'
import '../service/service.css'
import { easeInOut, motion } from 'framer-motion'
import s1 from '../assests/S1.png'
import s2 from '../assests/S2.png'
import s3 from '../assests/S3.png'


const Service = () => {

    const BoxVariants = {
        initial: {
            y: -5,
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
        <div className='service' id='service'>
            <motion.p
                variants={BoxVariants}
                initial='initial'
                whileInView='animate'
                className='serviceSmall'>Service <motion.span><motion.div className='emptyLine' ></motion.div></motion.span></motion.p>
            <motion.h1
                
                className='serviceContainer'>I provide wide range of web based services like below.</motion.h1>
            <motion.div className='boxContainer'>
                <motion.div
                    whileHover={{ backgroundColor: 'rgba(184, 4, 37, 0.151)', }}
                    className='box1'
                    variants={BoxVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <img className='img'  src={s3} alt='logo' />
                    <motion.div >
                        <strong className='strongHeading'>Web Development</strong>
                        <p className='serviceShortPrap'>Responsible for planning and developing software solutions and web applications, supporting and maintaining a company's websites and digital products.</p>
                    </motion.div>
                </motion.div>
                <motion.div
                    whileHover={{ backgroundColor: 'rgba(184, 4, 37, 0.151)', }}
                    className='box2'
                    variants={BoxVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <img className='img'  src={s2} alt='logo' />
                    <motion.div>
                        <strong className='strongHeading'>Web Design</strong>
                        <p className='serviceShortPrap'>The creation of websites or web application and pages to reflect a company's brand and information and ensure a user-friendly experience.</p>
                    </motion.div>
                </motion.div>
                <motion.div
                    whileHover={{ backgroundColor: 'rgba(184, 4, 37, 0.151)', }}
                    className='box3'
                    variants={BoxVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <img  className='img'  src={s1} alt='logo' />
                    <motion.div>
                        <strong className='strongHeading'>Mobile Apps</strong>
                        <p className='serviceShortPrap'>Develop mobile applications for
                            iOS and Android platforms. Design
                            and implement user interfaces for
                            mobile applications.</p>
                    </motion.div>
                </motion.div>
            </motion.div>

        </div>
    )
}

export default Service