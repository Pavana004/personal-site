import { motion } from "framer-motion";
import { Code, Zap, Globe, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed with SSR, SSG, and modern best practices.",
    },
    {
      icon: Globe,
      title: "SEO Expert",
      description: "Building search-friendly apps that rank and convert",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant, user-friendly solutions.",
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-black">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left column - Bio */}
            <div>
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-6">
                Passionate Developer,
                <span className="text-gradient block">Endless Curiosity</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a Full-Stack Developer with solid
                  experience building modern web applications. My journey started with a curiosity for 
                  how things work on the internet, and it evolved into a passion for creating seamless 
                  digital experiences.
                </p>
                <p>
                  I specialize in <strong className="text-foreground">MERN</strong>, 
                   with a strong focus on performance, 
                  accessibility, and SEO. I've worked with startups and established companies, helping them 
                  build products that users love.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Right column - Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-6 rounded-xl glass-card hover:bg-card/80 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:glow-sm transition-shadow">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
