import { Dumbbell, Clock, UserCheck, Music } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "../ui/FeatureCard";

const features = [
  {
    icon: Dumbbell,
    title: "State-of-Art Equipment",
    description: "Latest fitness equipment from world-renowned brands for the best workout experience.",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Early morning to late night sessions, we fit your schedule, not the other way around.",
  },
  {
    icon: UserCheck,
    title: "Personal Attention",
    description: "Small class sizes ensure every member gets the guidance they deserve.",
  },
  {
    icon: Music,
    title: "Fun Atmosphere",
    description: "Great music, positive vibes, and a community that makes fitness enjoyable.",
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-pulse-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pulse-blue rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pulse-magenta rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="FEATURES"
          title="Why Choose Pulse"
          subtitle="Experience fitness like never before with our unique offerings"
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
