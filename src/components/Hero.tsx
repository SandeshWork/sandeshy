import { motion } from 'motion/react';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl font-bold text-gray-900 mb-6"
        >
          Digital Marketing
          <span className="block mt-2 text-yellow-400">Specialist</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I am a Digital Marketing Specialist with 3.5+ years of experience working with EdTech and SaaS brands. I manage paid ads, analytics, tracking, CRM, and automation to grow users and revenue. I handle campaign planning, performance tracking, and creative direction, and I use data to improve results every day.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('portfolio')}
            className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-full border-2 border-yellow-400 transition-all hover:shadow-lg"
          >
            View Portfolio
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('footer')}
            className="px-8 py-4 bg-white text-gray-900 rounded-full border-2 border-gray-900 transition-all hover:bg-gray-900 hover:text-white"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}