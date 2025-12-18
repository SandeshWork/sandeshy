import { motion } from "motion/react";
import { Briefcase, Award, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Experience() {
  const experiences = [
    {
      year: "2023 - Present",
      title: "Senior Digital Marketing Strategist",
      company: "Digital Growth Agency",
      companyLogo: "DGA",
      description:
        "Leading multi-channel marketing campaigns, managing a team of 5 specialists, and driving 200% ROI increase for major clients.",
      achievements: [
        "Increased client revenue by 150% YoY",
        "Managed $2M+ in ad spend",
        "Led successful rebranding campaigns",
      ],
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: "2021 - 2023",
      title: "Digital Marketing Manager",
      company: "Tech Startup Inc.",
      companyLogo: "TSI",
      description:
        "Developed and executed comprehensive digital strategies, focusing on SEO, content marketing, and social media growth.",
      achievements: [
        "Grew organic traffic by 300%",
        "Built social media presence from 0 to 50K",
        "Launched successful email campaigns",
      ],
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      year: "2019 - 2021",
      title: "Marketing Specialist",
      company: "Creative Solutions Ltd.",
      companyLogo: "CSL",
      description:
        "Managed PPC campaigns, created engaging content, and analyzed marketing metrics to optimize performance.",
      achievements: [
        "Reduced CPA by 40%",
        "Created 100+ high-performing content pieces",
        "Implemented marketing automation",
      ],
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      year: "2017 - 2019",
      title: "Junior Marketing Associate",
      company: "Media Group Co.",
      companyLogo: "MGC",
      description:
        "Assisted in campaign development, conducted market research, and supported social media management.",
      achievements: [
        "Contributed to 50+ campaigns",
        "Learned industry best practices",
        "Developed analytical skills",
      ],
      icon: <Briefcase className="w-6 h-6" />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Reset to equivalent position for infinite loop effect
  const resetPosition = () => {
    if (currentIndex <= -1) {
      setCurrentIndex(experiences.length - 1);
    } else if (currentIndex >= experiences.length) {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    resetPosition();
  }, [currentIndex]);

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-[#070d0e] via-[#1a2a2e] to-[#2d4a50] relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#45818e] rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * 1000,
            }}
            animate={{
              y: [null, (Math.random() * 1000)],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Career Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#45818e] to-[#69a3ae] mx-auto mb-3" />
          <p className="text-[#a8cdd4] text-lg">
            One Company • Three Promotions • Continuous Growth
          </p>
        </motion.div>

        {/* Horizontal Carousel with 3 visible cards */}
        <div className="relative py-8">
          {/* Carousel Container */}
          <div className="overflow-visible mb-8">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `calc(-${currentIndex * (typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 33.33)}% - ${currentIndex * 1.5}rem)`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(33.33%-1rem)]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#45818e]/20 h-full"
                  >
                    {/* Gradient Corner Decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#45818e]/10 to-transparent rounded-bl-full" />

                    <div className="p-6 sm:p-8">
                      {/* Icon & Year */}
                      <div className="flex items-center justify-between mb-6">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="p-3 bg-gradient-to-br from-[#e7f2f4] to-[#a8cdd4] rounded-2xl text-[#45818e]"
                        >
                          {exp.icon}
                        </motion.div>
                        <div className="bg-gradient-to-r from-[#45818e] to-[#69a3ae] text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm shadow-md">
                          {exp.year}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl text-[#070d0e] mb-4 min-h-[3.5rem]">
                        {exp.title}
                      </h3>
                      
                      {/* Company Logo & Name */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#45818e] to-[#69a3ae] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                          <span className="text-xs">{exp.companyLogo}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#45818e]">
                          <Briefcase size={16} className="sm:w-[18px] sm:h-[18px]" />
                          <span className="text-xs sm:text-sm">{exp.company}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[#2d4a50] text-sm mb-6 leading-relaxed line-clamp-3">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="bg-gradient-to-br from-[#e7f2f4] to-[#f5f9fa] rounded-2xl p-4 space-y-3">
                        <div className="flex items-center gap-2 text-[#45818e] mb-3">
                          <Award size={16} />
                          <span className="text-sm">Key Achievements</span>
                        </div>
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.1 * i }}
                            className="flex items-start gap-3 group"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-full mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
                            <span className="text-[#2d4a50] text-sm leading-relaxed">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls Below Boxes */}
          <div className="flex flex-col items-center gap-6 mt-8">
            {/* Progress Indicators */}
            <div className="flex justify-center gap-2">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === (currentIndex % experiences.length)
                      ? 'w-8 bg-gradient-to-r from-[#45818e] to-[#69a3ae]'
                      : 'w-2 bg-[#45818e]/30'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#45818e] to-[#69a3ae] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow"
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#45818e] to-[#69a3ae] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}