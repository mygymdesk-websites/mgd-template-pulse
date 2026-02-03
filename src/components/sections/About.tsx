import { motion } from "framer-motion";
import { Zap, Heart, Users, Trophy } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../shared/ScrollReveal";

const values = [
  { icon: Zap, title: "High Energy Workouts", description: "Dynamic classes that keep you motivated" },
  { icon: Users, title: "Expert Guidance", description: "Certified trainers dedicated to your success" },
  { icon: Heart, title: "Supportive Community", description: "A family that celebrates every milestone" },
  { icon: Trophy, title: "Real Results", description: "Proven methods that deliver transformation" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Side */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&auto=format&fit=crop"
                  alt="Group fitness class"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-pulse opacity-20" />
              </div>

              {/* Floating badge - repositioned on mobile */}
              <motion.div
                className="absolute -bottom-4 right-4 md:-bottom-8 md:-right-8 bg-gradient-pulse text-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-display font-bold mb-1">8+</div>
                  <div className="text-xs md:text-sm opacity-80">Years of Excellence</div>
                </div>
              </motion.div>

              {/* Decorative element - hide on mobile */}
              <div className="hidden md:block absolute -z-10 -top-8 -left-8 w-full h-full rounded-3xl border-2 border-pulse-blue/20" />
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <div>
            <SectionHeading
              tag="WHO WE ARE"
              title="More Than Just a Gym"
              centered={false}
            />
            
            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                At Pulse Fitness, we believe in the power of movement, music, and community. 
                We're not just a gym – we're a movement. Our high-energy classes combine the 
                latest fitness trends with a fun, welcoming atmosphere that makes working 
                out feel like a party.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 md:mb-10">
                Whether you're a fitness newbie or a seasoned athlete, our diverse range 
                of programs and expert trainers will help you achieve your goals while 
                having a blast. Join our community and discover why our members call 
                Pulse their fitness home.
              </p>
            </ScrollReveal>

            {/* Values Grid - stack on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {values.map((value, index) => (
                <ScrollReveal key={index} delay={0.4 + index * 0.1}>
                  <motion.div
                    className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-pulse-light transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-pulse rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-pulse-slate text-sm md:text-base mb-1">
                        {value.title}
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
