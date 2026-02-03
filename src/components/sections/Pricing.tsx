import { Shield } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import PricingCard from "../ui/PricingCard";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    id: 1,
    name: "Basic",
    price: 1499,
    period: "month",
    popular: false,
    description: "Perfect for getting started",
    features: [
      "Gym floor access",
      "2 group classes/week",
      "Locker access",
      "Fitness assessment",
      "Mobile app access",
    ],
  },
  {
    id: 2,
    name: "Pro",
    price: 2999,
    period: "month",
    popular: true,
    description: "Most popular choice",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "1 PT session/month",
      "Nutrition guidance",
      "InBody analysis",
      "Towel service",
      "Guest pass (1/month)",
    ],
  },
  {
    id: 3,
    name: "Ultimate",
    price: 4999,
    period: "month",
    popular: false,
    description: "For serious transformations",
    features: [
      "Everything in Pro",
      "4 PT sessions/month",
      "Custom meal plan",
      "Priority booking",
      "Unlimited guests",
      "Exclusive events",
      "Supplement discounts",
      "24/7 access",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="PRICING"
          title="Simple Pricing"
          subtitle="No hidden fees, just results. Choose the plan that fits your goals"
        />

        {/* Pricing Cards - stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-8 md:mb-12">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              {...plan}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Money-back guarantee */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="w-8 h-8 md:w-10 md:h-10 bg-pulse-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Shield className="w-4 h-4 md:w-5 md:h-5 text-pulse-blue" />
          </div>
          <p className="text-sm md:text-base text-muted-foreground">
            <span className="font-semibold text-pulse-slate">7-day money-back guarantee.</span>{" "}
            Not satisfied? Get a full refund, no questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
