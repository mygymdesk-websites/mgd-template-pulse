import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, Send } from "lucide-react";
import GradientText from "../shared/GradientText";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Trainers", href: "#trainers" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const programs = [
    { name: "HIIT Blast", href: "#programs" },
    { name: "Zumba Party", href: "#programs" },
    { name: "Strength & Tone", href: "#programs" },
    { name: "Cardio Dance", href: "#programs" },
    { name: "Bootcamp", href: "#programs" },
    { name: "Personal Training", href: "#programs" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { icon: Twitter, href: "#", color: "hover:text-sky-500" },
    { icon: Youtube, href: "#", color: "hover:text-red-500" },
  ];

  return (
    <footer className="bg-pulse-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <motion.a
              href="#home"
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-pulse rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">P</span>
              </div>
              <span className="font-display font-bold text-xl">
                PULSE <GradientText>FITNESS</GradientText>
              </span>
            </motion.a>
            <p className="text-white/60 mb-6 leading-relaxed">
              Your journey to a stronger, healthier you starts here. Join our community and unleash your potential.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/60 transition-colors ${social.color}`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <a
                    href={program.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pulse-blue flex-shrink-0 mt-0.5" />
                <span className="text-white/60">123 Fitness Street, Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-pulse-blue" />
                <span className="text-white/60">+91 99999 99999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-pulse-blue" />
                <span className="text-white/60">hello@pulsefitness.com</span>
              </li>
            </ul>

            {/* Newsletter */}
            <h4 className="font-display font-bold text-lg mb-4">Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:border-pulse-blue transition-colors"
              />
              <motion.button
                className="w-12 h-12 bg-gradient-pulse rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2024 Pulse Fitness. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
            <p className="text-white/40 text-sm">
              Powered by <GradientText>MyGymDesk</GradientText>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
