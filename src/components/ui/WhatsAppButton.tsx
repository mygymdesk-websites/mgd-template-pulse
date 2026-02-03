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
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-gradient-pulse rounded-full flex items-center justify-center shadow-glow-gradient hover:shadow-[0_0_40px_rgba(0,102,255,0.4),0_0_40px_rgba(255,0,128,0.4)] transition-shadow min-w-[48px] min-h-[48px]"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
      
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
