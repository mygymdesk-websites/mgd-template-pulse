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
      className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-500 ${
        popular 
          ? "shadow-glow-gradient scale-105 z-10" 
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
        <div className="absolute top-0 left-0 right-0 bg-gradient-pulse text-white text-center py-2 text-sm font-display font-bold">
          BEST VALUE
        </div>
      )}

      <div className={`p-8 ${popular ? "pt-14" : ""}`}>
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-display font-bold text-pulse-slate mb-2">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm">
            {description}
          </p>
        </div>

        {/* Price */}
        <div className="text-center mb-8">
          <div className="flex items-baseline justify-center">
            <span className="text-2xl font-bold text-muted-foreground">₹</span>
            <span className={`text-5xl font-display font-extrabold ${popular ? "bg-gradient-pulse bg-clip-text text-transparent" : "text-pulse-slate"}`}>
              {price.toLocaleString()}
            </span>
          </div>
          <span className="text-muted-foreground">/{period}</span>
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: delay + 0.1 * index }}
            >
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                popular ? "bg-gradient-pulse" : "bg-pulse-blue"
              }`}>
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <GradientButton
          variant={popular ? "filled" : "outline"}
          className="w-full"
          href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi! I'm interested in the ${name} plan (₹${price.toLocaleString()}/${period}). Can you help me get started?`)}`}
        >
          Get Started
        </GradientButton>
      </div>

      {/* Gradient border for popular */}
      {popular && (
        <div className="absolute inset-0 rounded-2xl pointer-events-none">
          <div className="absolute inset-0 rounded-2xl p-[3px] bg-gradient-pulse" style={{ 
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
