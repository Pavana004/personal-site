import React, { useRef } from 'react'
import '../contacts/contacts.css'
import emailjs from "emailjs-com"
import { easeInOut, motion } from 'framer-motion'
import { FaPhoneVolume } from 'react-icons/fa'
import { MdContactMail } from 'react-icons/md'
import { IoLocation } from 'react-icons/io5'


const Contacts = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c1yw5a9', 'template_n4g26o6', form.current, 'S-dE24UAo1HuR3aOH')
    e.target.reset();
  };


  const contactVariants = {
    initial: {
      y: -3,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: easeInOut,
        duration: 1,
        staggerChildren: 0.1,
      }
    },

  }




  return (
    <div className='contactsContainer' id='contact'>

      <motion.div
        initial={{ x: -200, opacity: 0, }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
        className='extraDesgin'   >
        <motion.p
          initial={{  opacity: 0, }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
          className='smallContacts'> Contact <motion.span><motion.div className='empty' ></motion.div></motion.span></motion.p>
      </motion.div>


      <motion.div className='contactsContainer2'
        variants={contactVariants}
        initial='initial'
        whileInView='animate'
        viewport={{ once: false, amount: 0.2 }}
      >

        <motion.div className='contactDetails ' variants={contactVariants}>

          <motion.h1>Let's discuss your project</motion.h1>

          <motion.div className='contactIcon' variants={contactVariants}>
            <motion.div className='icoBox' ><FaPhoneVolume size={30} color='rgb(184, 4, 37)' /><motion.span>+91 7598483416</motion.span></motion.div>
            <motion.div className='icoBox' ><MdContactMail size={30} color='rgb(184, 4, 37)' /><motion.span> pavana004@gmail.com </motion.span></motion.div>
            <motion.div className='icoBox' ><IoLocation size={30} color='rgb(184, 4, 37)' /><motion.span>Ooty,TamilNadu,India</motion.span></motion.div>
          </motion.div>

        </motion.div>

        <motion.div className='contactDetails2 ' variants={contactVariants}>
          <motion.div className='footerDeg' >
            <motion.p>I'm always open to discussing web</motion.p>
            <motion.h1>based work or partnerships.</motion.h1>
          </motion.div>


          <motion.form className='messageCon' ref={form} onSubmit={sendEmail} variants={contactVariants}>
            <motion.input type='text' name='name' placeholder='Name*' required autoComplete='off' />
            <motion.input type='email' name='email' placeholder='Email*' required autoComplete='off' />
            <motion.textarea name='email' rows='5' placeholder='Message*' />
            <motion.button type='submit' className='btn'>Submit</motion.button>
          </motion.form>

        </motion.div>

      </motion.div>

    </div>
  )
}

export default Contacts