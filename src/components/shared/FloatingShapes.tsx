import { motion } from "framer-motion";

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blue circle */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-pulse-blue/10 blur-3xl"
        style={{ top: "10%", left: "5%" }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Magenta circle */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-pulse-magenta/10 blur-3xl"
        style={{ top: "50%", right: "0%" }}
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Gradient geometric shapes */}
      <motion.div
        className="absolute w-20 h-20 bg-gradient-pulse rounded-lg opacity-20"
        style={{ top: "20%", right: "15%" }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-16 h-16 bg-gradient-pulse-reverse rounded-full opacity-15"
        style={{ bottom: "30%", left: "10%" }}
        animate={{
          y: [0, 25, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      <motion.div
        className="absolute w-12 h-12 border-2 border-pulse-blue/30 rounded-lg"
        style={{ top: "60%", left: "20%" }}
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute w-8 h-8 border-2 border-pulse-magenta/30 rounded-full"
        style={{ top: "30%", right: "25%" }}
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default FloatingShapes;
