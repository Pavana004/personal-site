import React from "react";
import "../about/about.css";
import { motion, easeInOut, spring } from "framer-motion";

const About = () => {
  const textVariants = {
    initial: {
      x: -3,
      y: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: spring,
        stiffness: 120,
        duration: 0.5,
        ease: easeInOut,
        staggerChildren: 0.1,
        delay: 0.25,
      },
    },
  };

  return (
    <div  className="about">
      <motion.p variants={textVariants} className="smallAboutMe" id="about">
        About Me{" "}
        <motion.span>
          <motion.div variants={textVariants} className="empty"></motion.div>
        </motion.span>
      </motion.p>
      <motion.div
        variants={textVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
        className="splitContainer "
      >
        <motion.div variants={textVariants} className="col1">
          <motion.h1 variants={textVariants} className="aboutNameCap">
            About Me
          </motion.h1>
          <motion.p variants={textVariants} className="aboutMePrap">
            I design and develop services for customers specializing creating
            stylish, modern websites, web application, web service and desinging
            new features from ideation to production,implementation of
            wireframes and design flows in my web application.I take into
            consideration the user experience while writing reusable and
            efficient code,I passionately combine good design, technology,and
            innovation in all my project.
          </motion.p>
          <motion.div></motion.div>
          <motion.h6 variants={textVariants} className="personalInfo">
            Personal Info
          </motion.h6>
          <motion.div variants={textVariants} className="info ">
            <motion.p>
              Name :{" "}
              <motion.span style={{ fontWeight: "lighter" }}>
                Pavan Kumar
              </motion.span>
            </motion.p>
            <motion.p>
              Nationality :{" "}
              <motion.span style={{ fontWeight: "lighter" }}>
                Indian
              </motion.span>
            </motion.p>
            <motion.p>
              Freelance :{" "}
              <motion.span style={{ fontWeight: "lighter" }}>
                Available
              </motion.span>
            </motion.p>
            <motion.p>
              Address :{" "}
              <motion.span style={{ fontWeight: "lighter" }}>
                Tamil Nadu,India
              </motion.span>
            </motion.p>
            <motion.p>
              Email :{" "}
              <motion.span style={{ fontWeight: "lighter" }}>
                pavana004@gmail.com
              </motion.span>
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div variants={textVariants} className="col2 ">
          <motion.div variants={textVariants} className="cvDept ">
            <motion.h1 variants={textVariants} className="heroName">
              I'm Pavan Kumar
            </motion.h1>
            <motion.h1 variants={textVariants} className="heroProfession">
              Full Stack Developer
            </motion.h1>
            <br />

            <motion.a
              className="btn"
              variants={textVariants}
              href="https://drive.google.com/file/d/1mPi0ZzbxrdS-u3q5G2XVozWGd0AW9ALD/view?usp=sharing"
              target="_blank"
              rel="norefferer"
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
