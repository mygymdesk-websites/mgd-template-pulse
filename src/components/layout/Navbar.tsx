import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import GradientButton from "../ui/GradientButton";
import GradientText from "../shared/GradientText";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Trainers", href: "#trainers" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-pulse rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">P</span>
              </div>
              <span className="font-display font-bold text-xl">
                PULSE <GradientText>FITNESS</GradientText>
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`font-display font-medium text-sm transition-colors ${
                    isScrolled ? "text-pulse-slate hover:text-pulse-blue" : "text-pulse-slate hover:text-pulse-blue"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <GradientButton size="sm" href="#contact">
                Get Started
              </GradientButton>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-pulse-slate" />
              ) : (
                <Menu className="w-6 h-6 text-pulse-slate" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-pulse-dark/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="block font-display font-semibold text-lg text-pulse-slate hover:text-pulse-blue transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="pt-4">
                  <GradientButton className="w-full" href="#contact">
                    Get Started
                  </GradientButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
