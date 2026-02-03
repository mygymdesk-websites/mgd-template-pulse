import { motion } from "framer-motion";
import { Clock, Flame, ArrowRight } from "lucide-react";

interface ProgramCardProps {
  name: string;
  description: string;
  duration: string;
  intensity: string;
  image: string;
  delay?: number;
}

const ProgramCard = ({ name, description, duration, intensity, image, delay = 0 }: ProgramCardProps) => {
  const intensityColor = {
    High: "text-pulse-magenta",
    Medium: "text-pulse-blue",
    "Medium-High": "text-amber-500",
    Customized: "text-emerald-500",
  }[intensity] || "text-pulse-blue";

  return (
    <motion.div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
      initial={{ opacity: 0, y: 40, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, rotate: 1 }}
    >
      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-pulse opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
        
        {/* Arrow icon on hover */}
        <motion.div
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <ArrowRight className="w-5 h-5 text-pulse-slate" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-pulse-slate mb-2 group-hover:text-pulse-blue transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Meta info */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className={`flex items-center gap-1 font-semibold ${intensityColor}`}>
            <Flame className="w-4 h-4" />
            <span>{intensity}</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient border on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-pulse transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};

export default ProgramCard;
