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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&auto=format&fit=crop"
                  alt="Group fitness class"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-pulse opacity-20" />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-8 -right-8 bg-gradient-pulse text-white rounded-2xl p-6 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <div className="text-4xl font-display font-bold mb-1">8+</div>
                  <div className="text-sm opacity-80">Years of Excellence</div>
                </div>
              </motion.div>

              {/* Decorative element */}
              <div className="absolute -z-10 -top-8 -left-8 w-full h-full rounded-3xl border-2 border-pulse-blue/20" />
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
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                At Pulse Fitness, we believe in the power of movement, music, and community. 
                We're not just a gym – we're a movement. Our high-energy classes combine the 
                latest fitness trends with a fun, welcoming atmosphere that makes working 
                out feel like a party.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Whether you're a fitness newbie or a seasoned athlete, our diverse range 
                of programs and expert trainers will help you achieve your goals while 
                having a blast. Join our community and discover why our members call 
                Pulse their fitness home.
              </p>
            </ScrollReveal>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <ScrollReveal key={index} delay={0.4 + index * 0.1}>
                  <motion.div
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-pulse-light transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-pulse rounded-xl flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-pulse-slate mb-1">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
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
