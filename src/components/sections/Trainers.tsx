import SectionHeading from "../ui/SectionHeading";
import TrainerCard from "../ui/TrainerCard";

const trainers = [
  {
    id: 1,
    name: "Vikram Singh",
    role: "Head Trainer & HIIT Specialist",
    tagline: "No excuses, only results!",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&auto=format&fit=crop",
    instagram: "#",
  },
  {
    id: 2,
    name: "Meera Kapoor",
    role: "Zumba & Dance Fitness",
    tagline: "If you can move, you can dance!",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&auto=format&fit=crop",
    instagram: "#",
  },
  {
    id: 3,
    name: "Arun Krishnan",
    role: "Strength & Conditioning",
    tagline: "Strong body, strong mind.",
    image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=500&auto=format&fit=crop",
    instagram: "#",
  },
  {
    id: 4,
    name: "Sanya Malhotra",
    role: "Personal Training & Nutrition",
    tagline: "Your goals are my mission.",
    image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=500&auto=format&fit=crop",
    instagram: "#",
  },
];

const Trainers = () => {
  return (
    <section id="trainers" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="OUR TEAM"
          title="Meet Your Trainers"
          subtitle="Passionate experts dedicated to your success"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <TrainerCard
              key={trainer.id}
              {...trainer}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
