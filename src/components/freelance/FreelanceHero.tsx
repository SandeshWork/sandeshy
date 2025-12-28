import { motion } from "framer-motion";
import skillsGif from "../../assets/4dbd84589b2ad043aff7865c358f5fa1e04b3158.png";

export function FreelanceHero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-16 bg-black relative overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden p-[0px]">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-1 bg-[#45818e] rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight * 0.8 : 160),
              scale: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight * 0.8 : 160)],
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
            }}
            transition={{
              duration: Math.random() * 10 + 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white font-bold mb-4 text-lg underline"
            >
              3.5+ Years of Work Experience
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-black mb-6 text-white leading-tight text-4xl md:text-[60px]"
            >
              Everything for your<br />
              Digital Presence!
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-xl text-[#a8cdd4] mb-2 leading-relaxed">
                Right Approach | Right Message | Right Audience:
              </p>
              <p className="text-lg text-white font-semibold">
                The only mantra for a successful campaign!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8"
            >
              <img 
                src={skillsGif} 
                alt="Animation" 
                className="w-full max-w-[400px] rounded-lg"
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Tally Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-2xl p-6"
          >
            <iframe
              src="https://tally.so/embed/rjB9ov?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Contact Form"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
