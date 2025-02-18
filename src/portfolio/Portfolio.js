import React from "react";
import "../portfolio/portfolio.css";
import { motion, easeInOut } from "framer-motion";
import dp from "../assests/dp.jpg";
import add from "../assests/add.jpg";
import wallet from "../assests/wallet.png";
import admin from "../assests/admin.png";
import codeparva from "../assests/codeparva.png";
import map from "../assests/map.jpg";
import dash from "../assests/dash.png";
import chatbot from "../assests/chatbot.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import eco from "../assests/eco.png";
import dashboard from "../assests/dashboard.png";

const data = [
  {
    id: 1,
    title: "Multiverse",
    type: "Web Application",
    description:
      "OTT Platform here you can access different type of field like Movie,Music,Videos,Books.This project made by MERN stack.",
    link: "https://multiverse-rho.vercel.app/",
    image: dp,
  },
  {
    id: 2,
    title: "Multiverse Admin",
    type: "Web Application",
    description:
      "Here you can Upload Movie,Music,Videos,Books data for this project.This project made by MERN stack.",
    link: "https://multiverseadmin.netlify.app/",
    image: admin,
  },
  {
    id: 3,
    title: "CURD AND REACT LEAFLET MAP",
    type: "Web Application",
    description: "Here I develop a line graph and then react leaflet map.",
    link: "https://taiyo.netlify.app/",
    image: map,
  },
  {
    id: 4,
    title: "Company Project",
    type: "Web Application",
    description:
      "Here I develop project for codeparva company,here i use validation casecading input from and then mobile responsive.",
    link: "https://admirable-mochi-e69846.netlify.app/",
    image: codeparva,
  },
  {
    id: 5,
    title: "Add To Cart",
    type: "Web Application",
    description:
      "Here I develop a add to cart functionality and then i implement third party Api.",
    link: "https://splendid-marzipan-c7b64f.netlify.app/",
    image: add,
  },
  {
    id: 6,
    title: "Crypto Dashboard",
    type: "Web Application",
    description:
      "Here I develop Full stack Crypto dashboard, i add serval logic and functionality in this project",
    link: "https://calsoftfront.netlify.app/",
    image: wallet,
  },
  {
    id: 8,
    title: "ChatBot",
    type: "Web Application",
    description:
      "This Chatbot used automated way to communicate with student and then submit there data,while using this application ",
    link: "https://chatbot-task.netlify.app",
    image: chatbot,
  },
  {
    id: 9,
    title: "Ecommerce Application",
    type: "Web Application",
    description:
      "Here i develop ecommerce web application,and I use to MERN stack and Redux for develop this app",
    link: "https://logoipsumcal.netlify.app",
    image: eco,
  },
  {
    id: 10,
    title: "Dashboard Application",
    type: "Web Application",
    description:
      "Here i develop Dashboard web application",
    link: "https://flourishing-gumption-8b4bc2.netlify.app/",
    image: dashboard,
  },
];

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
      },
    },
  };

  return (
    <div className="portfolioContainer" id="portfolio">
      <motion.p className="smallPortfolio">Portfolio </motion.p>
      <motion.div className="line"></motion.div>
      <motion.div className="titleContainer">My Portfolio</motion.div>

      <motion.div
        className="Container"
        variants={BoxVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
      >
        {data.map((item) => {
          return (
            <motion.div
              key={item.id}
              className="renderContainer"
              variants={BoxVariants}
              initial="initial"
              whileInView="animate"
              whileHover={{ scale: 1.0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.img src={item.image} alt="....." className="renderImg" />
              <motion.div
                variants={BoxVariants}
                className="insideRenderContainer"
              >
                <motion.h4>{item.title}</motion.h4>
                <motion.p>{item.description}</motion.p>

                <motion.a href={item.link} target="_blank" rel="norefferer">
                  <FaExternalLinkAlt />
                </motion.a>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Portfolio;
