import { motion } from "framer-motion";
import { ArrowRight, Play, Users, Award, Dumbbell } from "lucide-react";
import GradientButton from "../ui/GradientButton";
import FloatingShapes from "../shared/FloatingShapes";
import AnimatedCounter from "../shared/AnimatedCounter";

const Hero = () => {
  const stats = [
    { icon: Users, value: 500, suffix: "+", label: "Members" },
    { icon: Dumbbell, value: 20, suffix: "+", label: "Programs" },
    { icon: Award, value: 10, suffix: "", label: "Expert Trainers" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-pulse-light">
      <FloatingShapes />
      
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-pulse-light to-white" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-gradient-pulse text-white text-sm font-display font-semibold rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Welcome to Pulse Fitness 🔥
            </motion.span>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-pulse-slate leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              UNLEASH YOUR{" "}
              <span className="bg-gradient-pulse bg-clip-text text-transparent">
                POTENTIAL
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Your journey to a stronger, healthier you starts here. Join our vibrant community and transform your life through fitness.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <GradientButton size="lg" href="#contact">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </GradientButton>
              <GradientButton variant="outline" size="lg" href="#programs">
                <Play className="w-5 h-5" />
                View Programs
              </GradientButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-pulse rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-pulse-slate">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main image container */}
            <div className="relative">
              {/* Gradient border effect */}
              <div className="absolute -inset-4 bg-gradient-pulse rounded-3xl opacity-20 blur-2xl" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop"
                  alt="Fitness training"
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-pulse-dark/60 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-pulse rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Established</div>
                    <div className="font-display font-bold text-pulse-slate">Since 2015</div>
                  </div>
                </div>
              </motion.div>

              {/* Second floating element */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-pulse text-white rounded-2xl p-4 shadow-xl"
                animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-display font-bold">50%</div>
                  <div className="text-sm opacity-80">OFF First Month</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-pulse-slate/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-gradient-pulse rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
