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

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/95 backdrop-blur-md shadow-lg" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-pulse rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg md:text-xl">P</span>
              </div>
              <span className="font-display font-bold text-base md:text-xl">
                PULSE <GradientText>FITNESS</GradientText>
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
                    }
                  }}
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
              <GradientButton 
                size="sm" 
                onClick={() => {
                  const element = document.querySelector("#pricing");
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
                  }
                }}
              >
                Get Started
              </GradientButton>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg hover:bg-pulse-light transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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

      {/* Mobile Menu - Full screen slide-in */}
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

            {/* Menu Panel - Slide in from right */}
            <motion.div
              className="absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Close button */}
              <div className="flex justify-end p-4">
                <motion.button
                  className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-pulse-light transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-pulse-slate" />
                </motion.button>
              </div>

              <div className="px-6 pb-8 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="block py-3 font-display font-semibold text-lg text-pulse-slate hover:text-pulse-blue transition-colors border-b border-border/50"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      setTimeout(() => {
                        const element = document.querySelector(link.href);
                        if (element) {
                          const offset = 80;
                          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                          window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
                        }
                      }, 300);
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="pt-6">
                  <GradientButton 
                    className="w-full min-h-[48px]" 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setTimeout(() => {
                        const element = document.querySelector("#pricing");
                        if (element) {
                          const offset = 80;
                          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                          window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
                        }
                      }, 300);
                    }}
                  >
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
