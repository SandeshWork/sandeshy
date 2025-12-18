import { motion } from "motion/react";
import { Code, Palette, TrendingUp, Zap } from "lucide-react";

export function BriefSection() {
  const skills = [
    { name: "Google Analytics", category: "Analytics" },
    { name: "Facebook Ads", category: "Advertising" },
    { name: "SEO", category: "Optimization" },
    { name: "Content Strategy", category: "Content" },
    { name: "Email Marketing", category: "Email" },
    { name: "Social Media", category: "Social" },
    { name: "Google Ads", category: "Advertising" },
    { name: "Copywriting", category: "Content" },
    { name: "Conversion Rate", category: "Optimization" },
    { name: "Marketing Automation", category: "Tools" },
    { name: "Brand Strategy", category: "Strategy" },
    { name: "Video Marketing", category: "Content" },
  ];

  const highlights = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Focused",
      desc: "Data-driven strategies that deliver measurable results",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Solutions",
      desc: "Engaging campaigns that capture audience attention",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Expertise",
      desc: "Advanced tools and platforms mastery",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quick Adaptation",
      desc: "Stay ahead with latest marketing trends",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #45818e 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#070d0e] to-[#45818e] mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#45818e] to-[#69a3ae] mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Scrolling Skills */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#070d0e] via-[#1a2a2e] to-[#2d4a50] p-4 sm:p-6 lg:p-8">
            {/* Animated Skills Grid */}
            <div className="space-y-3 sm:space-y-4">
              {[0, 1].map((rowIndex) => (
                <motion.div
                  key={rowIndex}
                  initial={{ x: rowIndex % 2 === 0 ? 0 : -100 }}
                  animate={{
                    x: rowIndex % 2 === 0 ? [-100, 0] : [0, -100],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                  }}
                  className="flex gap-3 sm:gap-4"
                >
                  {[...skills, ...skills].map((skill, index) => (
                    <motion.div
                      key={`${rowIndex}-${index}`}
                      whileHover={{ scale: 1.05 }}
                      className="min-w-[160px] sm:min-w-[200px] p-3 sm:p-4 bg-gradient-to-br from-[#2d4a50] to-[#45818e] rounded-xl border border-[#69a3ae]/30 shadow-lg"
                    >
                      <div className="text-white text-sm sm:text-base">{skill.name}</div>
                      <div className="text-[#a8cdd4] text-xs sm:text-sm mt-1">
                        {skill.category}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 w-20 sm:w-32 h-full bg-gradient-to-r from-[#070d0e] to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-20 sm:w-32 h-full bg-gradient-to-l from-[#2d4a50] to-transparent pointer-events-none" />
          </div>

          {/* Right Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6 px-4 sm:px-0"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#070d0e]">
              Comprehensive Digital Marketing Expertise
            </h3>
            <p className="text-base sm:text-lg text-gray-700">
              With years of experience in digital marketing, I specialize in
              creating comprehensive strategies that drive growth, engage
              audiences, and deliver measurable ROI. From SEO and content
              marketing to paid advertising and analytics, I bring a holistic
              approach to every project.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-gradient-to-br from-[#e7f2f4] to-white rounded-xl border border-[#45818e]/20 shadow-sm"
                >
                  <div className="text-[#45818e] mb-2">{item.icon}</div>
                  <div className="text-[#070d0e] mb-1 text-base sm:text-lg">{item.title}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}