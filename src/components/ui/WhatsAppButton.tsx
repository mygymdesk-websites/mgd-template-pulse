import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappMessage = encodeURIComponent("Hey! I'm interested in joining Pulse Fitness. Can you share more details?");
  const whatsappLink = `https://wa.me/919876543210?text=${whatsappMessage}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-pulse rounded-full flex items-center justify-center shadow-glow-gradient hover:shadow-[0_0_40px_rgba(0,102,255,0.4),0_0_40px_rgba(255,0,128,0.4)] transition-shadow"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-7 h-7 text-white" />
      
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-pulse"
        animate={{
          scale: [1, 1.5, 1.5],
          opacity: [0.6, 0, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </motion.a>
  );
};

export default WhatsAppButton;
