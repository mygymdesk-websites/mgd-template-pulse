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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="text-center sm:text-left">
            <motion.a
              href="#home"
              className="inline-flex items-center gap-2 mb-4 md:mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-pulse rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg md:text-xl">P</span>
              </div>
              <span className="font-display font-bold text-lg md:text-xl">
                PULSE <GradientText>FITNESS</GradientText>
              </span>
            </motion.a>
            <p className="text-white/60 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Your journey to a stronger, healthier you starts here. Join our community and unleash your potential.
            </p>
            <div className="flex gap-3 md:gap-4 justify-center sm:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 md:w-10 md:h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/60 transition-colors min-w-[44px] min-h-[44px] ${social.color}`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-display font-bold text-base md:text-lg mb-4 md:mb-6">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm md:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="text-center sm:text-left">
            <h4 className="font-display font-bold text-base md:text-lg mb-4 md:mb-6">Programs</h4>
            <ul className="space-y-2 md:space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <a
                    href={program.href}
                    className="text-white/60 hover:text-white transition-colors text-sm md:text-base"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="text-center sm:text-left">
            <h4 className="font-display font-bold text-base md:text-lg mb-4 md:mb-6">Contact Info</h4>
            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <MapPin className="w-5 h-5 text-pulse-blue flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm md:text-base">123 Fitness Street, Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <Phone className="w-5 h-5 text-pulse-blue flex-shrink-0" />
                <span className="text-white/60 text-sm md:text-base">+91 99999 99999</span>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <Mail className="w-5 h-5 text-pulse-blue flex-shrink-0" />
                <span className="text-white/60 text-sm md:text-base">hello@pulsefitness.com</span>
              </li>
            </ul>

            {/* Newsletter */}
            <h4 className="font-display font-bold text-base md:text-lg mb-3 md:mb-4">Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 md:px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:border-pulse-blue transition-colors text-sm md:text-base min-h-[48px]"
              />
              <motion.button
                className="w-12 h-12 bg-gradient-pulse rounded-lg flex items-center justify-center min-w-[48px]"
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-4 text-center md:text-left">
            <p className="text-white/60 text-xs md:text-sm order-2 md:order-1">
              © 2024 Pulse Fitness. All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-6 order-1 md:order-2">
              <a href="#" className="text-white/60 hover:text-white text-xs md:text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white text-xs md:text-sm transition-colors">
                Terms of Service
              </a>
            </div>
            <p className="text-white/60 text-xs md:text-sm order-3">
              Powered by <GradientText>MyGymDesk</GradientText>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
