import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import ShinyText from "./ui/ShinyText";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Donatuz",
      period: "Nov-2024 - May-2025",
      description:
        "I will be responsible for building and maintaining user interfaces for Donatuz products, ensuring a seamless and engaging user experience. I will collaborate with designers and backend developers to implement features and optimize performance.",
      achievements: [
        "implemented responsive design improving mobile UX by 30%",
        "Implemented SSR/SSG strategy improving SEO rankings",
        "Built a web3 dapp integrating blockchain technology",
      ],
    },
    {
      title: "Full-Stack Developer Internship",
      company: "Guvi Geek Technologies",
      period: "Oct-2022 - Feb-2023",
      description:
        "Worked on developing full-stack web applications using MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions, focusing on performance optimization and user experience enhancements.",
      achievements: [
        "Developed and deployed 3 full-stack applications using MERN stack",
        "Optimized application performance, reducing load times by 25%",
        "Integrated third-party APIs including Stripe and SendGrid",
      ],
    },
    {
      title: "FrontEnd Developer",
      company: "I-Scripts Technologies",
      period: "Nov-2021 - Feb-2022",
      description:
        "Contributed to the development of front-end components for various web projects. Worked closely with designers to implement responsive designs and enhance user interfaces using modern JavaScript frameworks.",
      achievements: [
        "Mastered React and modern JavaScript ecosystem",
        "Contributed to open-source projects",
        "Earned AWS Cloud Practitioner certification",
      ],
    },
    {
      title: "Tech Support",
      company: "Allsec Technologies",
      period: "Mar-2019 - Aug-2020",
      description:
        "Provided technical support and troubleshooting assistance to clients. Resolved hardware and software issues, ensuring minimal downtime and optimal performance for end-users.",
      achievements: [
        "Resolved over 500 technical support tickets with a 95% satisfaction rate",
        "Maintained and updated technical documentation for support processes",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/50">
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
            text="Career Journey"
            className="text-primary font-medium text-sm tracking-wider uppercase"
          />

          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            3+ years of building impactful products in fast-paced startup
            environments.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ rotateX: 10, rotateY: -10 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
              }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0
                  ? "md:pr-8 md:text-right md:ml-0 md:mr-auto md:w-1/2"
                  : "md:pl-8 md:ml-auto md:w-1/2"
              }`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 md:left-auto md:-translate-x-1/2 top-0 w-4 h-4 rounded-full bg-gradient-primary glow-sm hidden md:block"
                style={{
                  [index % 2 === 0 ? "right" : "left"]: "-2rem",
                  transform: "translateX(50%)",
                }}
              />

              <div className="p-6 rounded-xl glass-card hover:shadow-lg transition-shadow ml-8 md:ml-0">
                {/* Header */}
                <div
                  className={`flex items-start gap-4 mb-4 ${
                    index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <div
                      className={`flex items-center gap-2 text-sm text-muted-foreground mt-1 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`text-muted-foreground text-sm leading-relaxed mb-4 ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul
                  className={`space-y-2 ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className={`text-sm flex items-start gap-2 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
