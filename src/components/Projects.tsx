import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShinyText from "./ui/ShinyText";

const Projects = () => {
  const projects = [
    {
      title: "BHB -startup website",
      description:
      "BHB is a startup by myself, delivering modern web solutions designed to help businesses grow digitally",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/assets/bhb.png",
      liveUrl: "https://business-ncvh.vercel.app/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Multiverse",
      description:
      "OTT Platform here you can access different type of field like Movie,Music,Videos,Books.This project made by MERN stack.",
      tech: ["React", "Node.js", "Express", "MongoDB", "bootstrap"],
      image: "/assets/dp.jpg",
      liveUrl: "https://multiverse-rho.vercel.app/",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "CURD AND REACT LEAFLET MAP",
      description:
"Here I develop a line graph and then react leaflet map.",
      tech: ["React", "Leaflet", "netlify", "TailwindCSS"],
      image: "/assets/map.jpg",
      liveUrl: "https://taiyo.netlify.app/",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Dashboard Application",
      description:
        "A real-time dashboard application that visualizes data using charts and graphs. ",
      tech: ["React", "Chart.js", "CSS","TailwindCSS"],
      image: "/assets/dashboard.png",
      liveUrl: "https://flourishing-gumption-8b4bc2.netlify.app/",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Fleet Traking Dashboard Application",
      description:
        "Here i develop Fleet Traking Dashboard Live vehicle Simulation web application ",
      tech: ["React.js", "Leaflet", "CSS","TailwindCSS"],
      image: "/assets/Live.png",
      liveUrl: "https://fleet-tracking-task-for-mapup.vercel.app/",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Ecommerce Application",
      description:
        "A full-featured ecommerce application with product listings, shopping cart, and checkout functionality.",
      tech: ["React.js", "Redux", "Node.js", "Express", "MongoDB"],
      image: "/assets/eco.png",
      liveUrl: "https://logoipsumcal.netlify.app",
      githubUrl: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
             <ShinyText 
               color="#b00020"
               shineColor="#f58a8a"
               text=" Portfolio"
               className="text-primary font-medium text-sm tracking-wider uppercase"
              />
         
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real-world applications built with modern technologies and best practices.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-2xl overflow-hidden glass-card hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                
                {/* Quick links overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    className="p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                    aria-label="View source code"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                {project.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-gradient-primary text-primary-foreground">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View project button */}
                <Button variant="ghost" className="group/btn p-0 h-auto font-medium hover:bg-transparent">
                  View Project
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
{/* 
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View All Projects
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Projects;
