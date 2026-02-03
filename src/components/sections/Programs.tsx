import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ProgramCard from "../ui/ProgramCard";
import GradientButton from "../ui/GradientButton";

const programs = [
  {
    id: 1,
    name: "HIIT Blast",
    description: "High-intensity intervals that torch calories and build endurance fast",
    duration: "45 min",
    intensity: "High",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Zumba Party",
    description: "Dance your way to fitness with Latin-inspired moves and great music",
    duration: "60 min",
    intensity: "Medium",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Strength & Tone",
    description: "Build lean muscle and get toned with weights and bodyweight exercises",
    duration: "50 min",
    intensity: "Medium-High",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Cardio Dance",
    description: "Fun, high-energy dance workout that doesn't feel like exercise",
    duration: "45 min",
    intensity: "Medium",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Bootcamp",
    description: "Military-inspired training that pushes your limits and delivers results",
    duration: "60 min",
    intensity: "High",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Personal Training",
    description: "One-on-one customized training tailored to your specific goals",
    duration: "60 min",
    intensity: "Customized",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="section-padding bg-pulse-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="OUR PROGRAMS"
          title="Find Your Perfect Workout"
          subtitle="From high-intensity training to dance fitness, we've got something for everyone"
        />

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.id}
              {...program}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <GradientButton size="lg" href="#contact">
            Explore All Programs
            <ArrowRight className="w-5 h-5" />
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default Programs;
