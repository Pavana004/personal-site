import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {


   const [text] = useTypewriter({
    words: ["Full Stack Web Developer", "Ui & Ux", "Designer","AI Integration"],
    loop: true,
    typeSpeed: 120,
    delaySpeed: 80,
  });

  const handleOnclick = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "#projects";
    }
  }


  return (
    <section className="relative min-h-screen flex items-center justify-center  overflow-hidden bg-hero bg-cover md:bg-center bg-no-repeat bg-[position:89%_0%]   ">
      {/* Gradient orbs */}
      {/* <div 
       style={{ animationDelay: "2s" }}
      className="absolute  bottom-9 left-[20%] w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      /> */}
      <div className="absolute top-[20%] left-[5%] w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container relative z-10 px-6 py-20  ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center md:mx-0 md:text-start backdrop-blur-sm md:backdrop-blur-0"
        >
          {/* Main headline */}
           <h1 className="text-lg md:text-xl leading-3 tracking-widest font-display font-bold  mb-6">
            Hi, I'm Pavan      
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6">
            {text} <span style={{ color: "rgba(176, 0, 32, 1)" }}>
            <Cursor />
          </span>{" "}
            <span className="block mt-2 text-gradient">
              Building the Future
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-10 backdrop-blur-sm md:backdrop-blur-0"
          >
            3+ years crafting high-performance web applications with{" "}
            <span className="text-foreground font-medium">MERN</span>,{" "}
            <span className="text-foreground font-medium">Javascript</span>, and{" "}
            <span className="text-foreground font-medium">Next.js</span>.
            Passionate about clean code, SEO optimization, and exceptional user
            experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
          >
            <Button
              size="lg"
              onClick={handleOnclick}
              className="group bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground px-8"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href="https://drive.google.com/file/d/1wATOYP22bX1rlysPYShkETIn1WUGiq_6/view?usp=sharing"
              target="_blank"

              className="flex items-center glass-card h-11 rounded-md px-8 border-border hover:bg-secondary hover:text-primary "
            >
              Download CV
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center justify-center md:justify-start gap-4 mt-12"
          >
            <a
              href="https://github.com/Pavana004"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-primary/10 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/pavan-kumar-3a87a4253/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="pavana004@gmail.com"
              className="p-3 rounded-full glass-card hover:bg-primary/10 transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-2 cursor-pointer left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
