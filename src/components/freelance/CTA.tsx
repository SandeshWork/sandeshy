import { motion } from "motion/react";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function CTA() {
  return (
    <section
      id="cta"
      className="py-20 bg-black relative overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#45818e] rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * 400,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * 400],
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-[#45818e] to-[#69a3ae] rounded-full flex items-center justify-center mx-auto">
              <ArrowRight size={40} className="text-white" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Ready to Elevate Your Business?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-[#a8cdd4] mb-12"
          >
            Let's discuss how we can grow your brand together
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="#hero"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white border-2 border-white text-[#070d0e] rounded-lg font-semibold hover:bg-transparent hover:text-white transition-all flex items-center gap-2 shadow-lg"
            >
              Get Started NOW!
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-12 border-t border-[#45818e]/30"
          >
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-[#a8cdd4]">
              <a
                href="mailto:work@sandeshy.com"
                className="flex items-center gap-3 hover:text-[#69a3ae] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#45818e]/20 rounded-full flex items-center justify-center group-hover:bg-[#45818e]/30 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-medium">work@sandeshy.com</span>
              </a>
              <a
                href="tel:+919702769181"
                className="flex items-center gap-3 hover:text-[#69a3ae] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#45818e]/20 rounded-full flex items-center justify-center group-hover:bg-[#45818e]/30 transition-colors">
                  <Phone size={20} />
                </div>
                <span className="font-medium">+91 97027 69181</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
