import { motion } from "framer-motion";
import { Code, Palette, TrendingUp, Zap } from "lucide-react";
import skillsGif from "../assets/4dbd84589b2ad043aff7865c358f5fa1e04b3158.png";

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

        <div className="grid lg:grid-cols-2 gap-12 items-center rounded-[0px] bg-[rgba(0,0,0,0)]">
          {/* Left Side - Scrolling Skills */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-3xl p-4 sm:p-6 lg:p-8">
            {/* GIF Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src={skillsGif}
                alt="Skills showcase"
                className="w-full h-full object-contain rounded-2xl"
              />
            </motion.div>
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
              Data-Driven Performance Marketing
            </h3>
            <p className="text-base sm:text-lg text-gray-700">
              I run <strong>Google Ads</strong> and <strong>Meta Ads</strong> with a strong command of <strong>GA4, GTM, and Meta Pixel</strong> to track user actions and optimize performance. I use <strong>AI tools, Make.com, and n8n</strong> to automate reports, speed up workflows, and get clearer insights. My core strengths are <strong>data analysis, event and conversion setup, audience research, and Excel</strong>, helping me improve campaigns with <em>real numbers, not guesses</em>. I also use <strong>story-led design</strong>, basic video editing, and clear content writing to create ads that <em>communicate the right message and drive action</em>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}