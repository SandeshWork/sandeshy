import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-semibold text-gray-900"
          >
            Sandeshy
          </motion.div>
        </Link>
        
        <Link to="/freelance">
          <motion.div
            whileHover={{ scale: 1.05, borderColor: '#facc15' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border-2 border-gray-900 rounded-full transition-colors hover:bg-yellow-400 hover:border-yellow-400"
          >
            Freelance
          </motion.div>
        </Link>
      </div>
    </motion.nav>
  );
}