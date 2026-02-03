import { useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GradientButton from "../ui/GradientButton";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const schedule = {
  Monday: [
    { time: "6:00 AM", class: "HIIT Blast", trainer: "Vikram" },
    { time: "8:00 AM", class: "Yoga Flow", trainer: "Sanya" },
    { time: "5:00 PM", class: "Zumba Party", trainer: "Meera" },
    { time: "7:00 PM", class: "Strength Training", trainer: "Arun" },
  ],
  Tuesday: [
    { time: "6:00 AM", class: "Cardio Dance", trainer: "Meera" },
    { time: "9:00 AM", class: "Personal Training", trainer: "Sanya" },
    { time: "5:00 PM", class: "HIIT Blast", trainer: "Vikram" },
    { time: "7:00 PM", class: "Bootcamp", trainer: "Arun" },
  ],
  Wednesday: [
    { time: "6:00 AM", class: "Strength Training", trainer: "Arun" },
    { time: "8:00 AM", class: "Zumba Party", trainer: "Meera" },
    { time: "5:00 PM", class: "Cardio Dance", trainer: "Meera" },
    { time: "7:00 PM", class: "HIIT Blast", trainer: "Vikram" },
  ],
  Thursday: [
    { time: "6:00 AM", class: "Bootcamp", trainer: "Vikram" },
    { time: "9:00 AM", class: "Yoga Flow", trainer: "Sanya" },
    { time: "5:00 PM", class: "Zumba Party", trainer: "Meera" },
    { time: "7:00 PM", class: "Strength Training", trainer: "Arun" },
  ],
  Friday: [
    { time: "6:00 AM", class: "HIIT Blast", trainer: "Vikram" },
    { time: "8:00 AM", class: "Cardio Dance", trainer: "Meera" },
    { time: "5:00 PM", class: "Bootcamp", trainer: "Arun" },
    { time: "7:00 PM", class: "Zumba Party", trainer: "Meera" },
  ],
  Saturday: [
    { time: "7:00 AM", class: "Weekend Warrior", trainer: "Vikram" },
    { time: "9:00 AM", class: "Zumba Party", trainer: "Meera" },
    { time: "11:00 AM", class: "Strength Training", trainer: "Arun" },
    { time: "4:00 PM", class: "Dance Fitness", trainer: "Meera" },
  ],
  Sunday: [
    { time: "8:00 AM", class: "Yoga Flow", trainer: "Sanya" },
    { time: "10:00 AM", class: "Light Cardio", trainer: "Meera" },
    { time: "5:00 PM", class: "Stretch & Recover", trainer: "Sanya" },
  ],
};

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");

  return (
    <section className="section-padding bg-pulse-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="SCHEDULE"
          title="Class Schedule"
          subtitle="Plan your week with our diverse class offerings"
        />

        {/* Day Selector - horizontal scroll on mobile */}
        <div className="flex overflow-x-auto pb-2 md:pb-0 md:flex-wrap md:justify-center gap-2 mb-6 md:mb-8 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {days.map((day) => (
            <motion.button
              key={day}
              className={`px-3 md:px-4 py-2 rounded-lg font-display font-medium text-xs md:text-sm transition-all whitespace-nowrap flex-shrink-0 min-h-[44px] ${
                selectedDay === day
                  ? "bg-gradient-pulse text-white shadow-glow-gradient"
                  : "bg-white text-pulse-slate hover:bg-pulse-blue/10"
              }`}
              onClick={() => setSelectedDay(day)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {day}
            </motion.button>
          ))}
        </div>

        {/* Schedule Table */}
        <motion.div
          className="bg-white rounded-xl md:rounded-2xl shadow-card overflow-hidden max-w-3xl mx-auto"
          key={selectedDay}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-gradient-pulse text-white p-3 md:p-4">
            <h3 className="font-display font-bold text-lg md:text-xl text-center">{selectedDay}</h3>
          </div>
          <div className="divide-y divide-border">
            {schedule[selectedDay as keyof typeof schedule].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between p-3 md:p-4 hover:bg-pulse-light transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
                  <span className="text-xs md:text-sm font-mono text-muted-foreground w-16 md:w-20 flex-shrink-0">
                    {item.time}
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-display font-bold text-pulse-slate text-sm md:text-base truncate">{item.class}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">with {item.trainer}</p>
                  </div>
                </div>
                <motion.a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi! I'd like to book ${item.class} on ${selectedDay} at ${item.time}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-pulse-blue hover:bg-pulse-blue/10 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                >
                  Book
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Button - full width on mobile */}
        <div className="text-center mt-6 md:mt-8">
          <GradientButton variant="outline" className="w-full sm:w-auto">
            <Download className="w-5 h-5" />
            Download Full Schedule
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
