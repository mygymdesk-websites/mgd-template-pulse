import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import GradientButton from "../ui/GradientButton";

const CTABanner = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-pulse" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Limited Time Offer</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            READY TO START?
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join today and get{" "}
            <span className="font-bold text-white bg-white/20 px-3 py-1 rounded-lg">
              50% OFF
            </span>{" "}
            your first month!
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-pulse-slate font-display font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Claim Your Offer
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Trust badge */}
          <motion.p
            className="text-white/60 text-sm mt-6"
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
