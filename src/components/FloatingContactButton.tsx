import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export function FloatingContactButton() {
  return (
    <motion.button
      data-tally-open="ZjozO0"
      data-tally-emoji-text="👋"
      data-tally-emoji-animation="wave"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-full shadow-2xl flex items-center justify-center cursor-pointer group hover:shadow-[#45818e]/50 transition-all"
      aria-label="Contact Me"
    >
      <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      
      {/* Pulse Animation */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[#45818e] rounded-full -z-10"
      />
      
      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-3 px-3 py-2 bg-[#2d4a50] text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
      >
        Send a Query
      </motion.span>
    </motion.button>
  );
}