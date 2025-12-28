import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import profileImage from "../assets/eae6064edda236c3bbd2ae63e26e5873ec844b11.png";

export function HeroSection() {
  const logos = [
    { name: "SEO", icon: "🔍" },
    { name: "Social", icon: "📱" },
    { name: "Analytics", icon: "📊" },
    { name: "Email", icon: "✉️" },
    { name: "Ads", icon: "🎯" },
    { name: "Content", icon: "✍️" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % logos.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <section
      id="home"
      className="min-h-screen pt-16 bg-black relative overflow-hidden"
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

      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 relative z-10 p-[0px] flex items-center min-h-[calc(100vh-4rem)]">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full px-4 sm:px-0">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-10 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white"
            >
              Digital Marketing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#45818e] to-[#69a3ae]">
                Specialist
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-white max-w-xl mx-auto lg:mx-0"
            >
              I am a Digital Marketing Specialist with 3.5+ years of experience working with EdTech and SaaS brands. I manage paid ads, analytics, tracking, CRM, and automation to grow users and revenue. I handle campaign planning, performance tracking, and creative direction, and I use data to improve results every day.
              <br /><br />
              I enjoy working with teams and building marketing systems that help brands grow in a steady and sustainable way.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#45818e] to-[#69a3ae] text-white rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow text-sm sm:text-base"
              >
                View My Work
                <ArrowRight size={20} />
              </motion.a>

              <motion.button
                data-tally-open="ZjozO0"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#45818e] text-white rounded-full flex items-center justify-center gap-2 hover:bg-[#45818e]/10 transition-colors text-sm sm:text-base cursor-pointer"
              >
                Contact Me
                <FileText size={20} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Digital Marketing Logos */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
              {/* Central Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#45818e] rounded-full blur-3xl"
              />

              {/* Profile Container */}
              <div className="relative w-full max-w-md mx-auto">
                {/* Profile Image with Border Animation */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="relative z-20 mx-auto w-72 h-72 rounded-full overflow-hidden shadow-2xl border-0 border-white bg-transparent p-2"
                >
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </motion.div>

                {/* Surrounding Pop-up Skill Icons with Orbital Animation */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {logos.map((logo, index) => {
                    const positions = [
                      { x: -160, y: -100, delay: 0 },
                      { x: 160, y: -100, delay: 0.1 },
                      { x: -180, y: 100, delay: 0.2 },
                      { x: 180, y: 100, delay: 0.3 },
                      { x: 0, y: -180, delay: 0.4 },
                      { x: 0, y: 180, delay: 0.5 },
                    ];
                    
                    const position = positions[index] || { x: 0, y: 0, delay: 0 };

                    return (
                      <motion.div
                        key={logo.name}
                        initial={{ scale: 0, x: 0, y: 0 }}
                        animate={{
                          scale: [0, 1, 1],
                          x: position.x,
                          y: position.y,
                          rotate: -360,
                        }}
                        transition={{
                          delay: position.delay,
                          duration: 0.5,
                          type: "spring",
                          stiffness: 200,
                          rotate: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          },
                        }}
                        whileHover={{ scale: 1.3, zIndex: 30 }}
                        className="absolute cursor-pointer"
                      >
                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                          }}
                          transition={{
                            duration: 2 + index * 0.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="w-24 h-24 bg-gradient-to-br from-[#2d4a50] to-[#45818e] rounded-xl flex flex-col items-center justify-center text-white shadow-xl border-2 border-[#69a3ae]/50"
                        >
                          <span className="text-3xl">{logo.icon}</span>
                          <span className="text-sm mt-1">{logo.name}</span>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}