import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="#" className="font-display font-bold text-xl hover:text-primary transition-colors">
              <span className="text-gradient">pk</span>Portfolio
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>

          {/* Built with love */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> and modern tech
          </motion.p>

          {/* Social Links */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
