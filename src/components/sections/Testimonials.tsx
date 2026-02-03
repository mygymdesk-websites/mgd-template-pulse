import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../ui/TestimonialCard";

const testimonials = [
  {
    quote: "The energy at Pulse is unmatched! Every class feels like a celebration. I've lost 10kg and gained so much confidence. The trainers remember your name and push you just the right amount.",
    name: "Rahul Menon",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop",
    duration: "1 year",
    rating: 5,
  },
  {
    quote: "As someone who was intimidated by gyms, Pulse changed everything. The Zumba classes are so fun that I forget I'm exercising! Best decision I made for my fitness journey.",
    name: "Sneha Gupta",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop",
    duration: "8 months",
    rating: 5,
  },
  {
    quote: "The personal training here is exceptional. My trainer understood my goals and created a program that actually works. Down 20kg and feeling stronger than ever!",
    name: "Amit Patel",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop",
    duration: "2 years",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-gradient-to-br from-pulse-blue/5 via-white to-pulse-magenta/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-pulse opacity-5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="TESTIMONIALS"
          title="What Our Members Say"
          subtitle="Real stories from real members who transformed their lives"
        />

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialCard {...testimonials[current]} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              className="w-12 h-12 bg-white rounded-full shadow-card flex items-center justify-center"
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 text-pulse-slate" />
            </motion.button>
            <motion.button
              className="w-12 h-12 bg-gradient-pulse rounded-full shadow-card flex items-center justify-center"
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current ? "bg-gradient-pulse w-6" : "bg-pulse-slate/20"
                }`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
