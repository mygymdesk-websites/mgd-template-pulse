import { motion } from "framer-motion";
import GradientText from "../shared/GradientText";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ tag, title, subtitle, centered = true, light = false }: SectionHeadingProps) => {
  return (
    <motion.div
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {tag && (
        <motion.span
          className="inline-block mb-4 text-sm font-display font-bold tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GradientText>{tag}</GradientText>
        </motion.span>
      )}
      
      <motion.h2
        className={`text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-4 ${
          light ? "text-white" : "text-pulse-slate"
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h2>
      
      {/* Gradient underline */}
      <motion.div
        className={`h-1 w-24 bg-gradient-pulse rounded-full ${centered ? "mx-auto" : ""} mb-6`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
      
      {subtitle && (
        <motion.p
          className={`text-lg md:text-xl max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-white/80" : "text-muted-foreground"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
