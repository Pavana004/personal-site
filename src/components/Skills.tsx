import { motion } from "framer-motion";
import ShinyText from "./ui/ShinyText";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "Next.js", level: 60 },
        { name: "React", level: 70 },
        { name: "TypeScript", level: 50 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 85 },
      
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 60 },
        { name: "REST APIs", level: 60 },
        { name: "Mongoose", level: 50 },
        { name: "LangChain", level: 30 },
       
      
      ],
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "DynamoDB", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "AWS", level: 80 },
        { name: "Vercel", level: 95 },
      ],
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "Git", level: 70 },
        { name: "Docker", level: 20 },
        { name: "CI/CD", level: 50 },,
        { name: "Figma", level: 50 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 ">
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
               text="Technical Skills"
               className="text-primary font-medium text-sm tracking-wider uppercase"
              />
         
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
            My Tech Stack
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications from front to back.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="p-6 rounded-xl glass-card "
            >
              <h3 className="font-display font-semibold text-lg mb-6 text-gradient">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2, duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-primary"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
