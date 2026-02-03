import { motion } from "framer-motion";
import { Check } from "lucide-react";
import GradientButton from "./GradientButton";

interface PricingCardProps {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  delay?: number;
}

const PricingCard = ({ name, price, period, description, features, popular = false, delay = 0 }: PricingCardProps) => {
  return (
    <motion.div
      className={`relative bg-white rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 ${
        popular 
          ? "shadow-glow-gradient md:scale-105 z-10" 
          : "shadow-card hover:shadow-card-hover"
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
    >
      {/* Popular badge */}
      {popular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-pulse text-white text-center py-1.5 md:py-2 text-xs md:text-sm font-display font-bold">
          BEST VALUE
        </div>
      )}

      <div className={`p-5 md:p-8 ${popular ? "pt-10 md:pt-14" : ""}`}>
        {/* Header */}
        <div className="text-center mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-display font-bold text-pulse-slate mb-1 md:mb-2">
            {name}
          </h3>
          <p className="text-muted-foreground text-xs md:text-sm">
            {description}
          </p>
        </div>

        {/* Price */}
        <div className="text-center mb-6 md:mb-8">
          <div className="flex items-baseline justify-center">
            <span className="text-xl md:text-2xl font-bold text-muted-foreground">₹</span>
            <span className={`text-3xl md:text-5xl font-display font-extrabold ${popular ? "bg-gradient-pulse bg-clip-text text-transparent" : "text-pulse-slate"}`}>
              {price.toLocaleString()}
            </span>
          </div>
          <span className="text-muted-foreground text-sm">/{period}</span>
        </div>

        {/* Features */}
        <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-2 md:gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: delay + 0.1 * index }}
            >
              <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                popular ? "bg-gradient-pulse" : "bg-pulse-blue"
              }`}>
                <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
              </div>
              <span className="text-xs md:text-sm text-muted-foreground">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <GradientButton
          variant={popular ? "filled" : "outline"}
          className="w-full min-h-[48px]"
          href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi! I'm interested in the ${name} plan (₹${price.toLocaleString()}/${period}). Can you help me get started?`)}`}
        >
          Get Started
        </GradientButton>
      </div>

      {/* Gradient border for popular */}
      {popular && (
        <div className="absolute inset-0 rounded-xl md:rounded-2xl pointer-events-none">
          <div className="absolute inset-0 rounded-xl md:rounded-2xl p-[3px] bg-gradient-pulse" style={{ 
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude'
          }} />
        </div>
      )}
    </motion.div>
  );
};

export default PricingCard;
