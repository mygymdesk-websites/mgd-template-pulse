import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-pulse" />
      
      {/* Animated background elements - hide on mobile for performance */}
      <motion.div
        className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-white/10 rounded-full blur-3xl hidden md:block"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-white/10 rounded-full blur-3xl hidden md:block"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm font-medium">Limited Time Offer</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            READY TO START?
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join today and get{" "}
            <span className="font-bold text-white bg-white/20 px-2 md:px-3 py-1 rounded-lg">
              50% OFF
            </span>{" "}
            your first month!
          </motion.p>

          {/* CTA Button - full width on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#contact");
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
                }
              }}
              className="inline-flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-pulse-slate font-display font-bold text-base md:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all min-h-[48px]"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Claim Your Offer
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.a>
          </motion.div>

          {/* Trust badge */}
          <motion.p
            className="text-white/60 text-xs md:text-sm mt-4 md:mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            No credit card required • Cancel anytime • Join 500+ happy members
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
