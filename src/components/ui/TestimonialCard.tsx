import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  image: string;
  duration: string;
  rating: number;
}

const TestimonialCard = ({ quote, name, image, duration, rating }: TestimonialCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-card relative"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Quote icon */}
      <div className="absolute top-6 right-6 w-10 h-10 bg-gradient-pulse rounded-full flex items-center justify-center opacity-20">
        <Quote className="w-5 h-5 text-white" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-amber-400 fill-amber-400" : "text-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-muted-foreground mb-6 leading-relaxed">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-pulse-blue/20"
        />
        <div>
          <h4 className="font-display font-bold text-pulse-slate">{name}</h4>
          <p className="text-sm text-muted-foreground">Member for {duration}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
