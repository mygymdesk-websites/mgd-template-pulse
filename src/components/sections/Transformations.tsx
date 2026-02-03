import { motion } from "framer-motion";
import { TrendingUp, Target, Scale } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import AnimatedCounter from "../shared/AnimatedCounter";
import ScrollReveal from "../shared/ScrollReveal";

const stats = [
  { icon: Scale, value: 10000, suffix: "+", label: "Kg Lost" },
  { icon: Target, value: 5000, suffix: "+", label: "Goals Achieved" },
  { icon: TrendingUp, value: 95, suffix: "%", label: "Success Rate" },
];

const Transformations = () => {
  return (
    <section className="section-padding bg-pulse-light overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="SUCCESS STORIES"
          title="Real Results"
          subtitle="Join thousands who have transformed their lives with Pulse Fitness"
        />

        {/* Stats - horizontal on mobile */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 bg-gradient-pulse rounded-xl md:rounded-2xl flex items-center justify-center">
                  <stat.icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-xl md:text-4xl font-display font-extrabold bg-gradient-pulse bg-clip-text text-transparent mb-1 md:mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-base text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Transformation Story */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&auto=format&fit=crop"
                    alt="Fitness journey"
                    className="w-full h-48 md:h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 text-xs md:text-sm font-display font-bold text-pulse-slate">
                    Before
                  </div>
                </div>
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1550345332-09e3ac987658?w=400&auto=format&fit=crop"
                    alt="Fitness transformation"
                    className="w-full h-48 md:h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-gradient-pulse rounded-lg px-2 py-1 md:px-3 text-xs md:text-sm font-display font-bold text-white">
                    After
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-card">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop"
                  alt="Priya"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover ring-4 ring-pulse-blue/20"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-display font-bold text-pulse-slate text-lg md:text-xl">
                    Priya Sharma
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">Lost 15kg in 6 months</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                "Joining Pulse Fitness was the best decision I ever made. The trainers 
                are incredibly supportive, the classes are so much fun, and I've never 
                felt more confident in my life. The community here is like family - 
                they celebrate every milestone with you!"
              </p>
              <div className="flex gap-4 md:gap-8">
                <div>
                  <div className="text-lg md:text-2xl font-display font-bold text-pulse-blue">-15 kg</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Weight Lost</div>
                </div>
                <div>
                  <div className="text-lg md:text-2xl font-display font-bold text-pulse-magenta">6 mo</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Journey Time</div>
                </div>
                <div>
                  <div className="text-lg md:text-2xl font-display font-bold bg-gradient-pulse bg-clip-text text-transparent">100%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Confidence</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Transformations;
