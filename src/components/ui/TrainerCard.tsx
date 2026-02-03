import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

interface TrainerCardProps {
  name: string;
  role: string;
  tagline: string;
  image: string;
  instagram?: string;
  delay?: number;
}

const TrainerCard = ({ name, role, tagline, image, instagram, delay = 0 }: TrainerCardProps) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Card with gradient border on hover */}
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-card transition-all duration-500 group-hover:shadow-glow-gradient">
        {/* Image container */}
        <div className="relative h-72 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-pulse opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
          
          {/* Social link on hover */}
          {instagram && (
            <motion.a
              href={instagram}
              aria-label={`Follow ${name} on Instagram`}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-5 h-5 text-pulse-magenta" />
            </motion.a>
          )}
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <h3 className="text-xl font-display font-bold text-pulse-slate mb-1">
            {name}
          </h3>
          <p className="text-pulse-blue font-semibold text-sm mb-3">
            {role}
          </p>
          <p className="text-muted-foreground italic text-sm">
            "{tagline}"
          </p>
        </div>

        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-pulse" style={{ 
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude'
          }} />
        </div>
      </div>
    </motion.div>
  );
};

export default TrainerCard;
