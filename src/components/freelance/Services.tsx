import { motion } from "motion/react";
import { useState, useEffect } from "react";
import {
  Target,
  TrendingUp,
  Mail,
  BarChart3,
  PenTool,
  Video,
  Search,
  Share2,
  Megaphone,
  LineChart,
  ShoppingCart,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const servicesPerPage = 4;
  const services = [
    {
      icon: <Target size={32} />,
      title: "Performance Marketing",
      description:
        "Data-driven campaigns across Meta Ads, Google Ads, and LinkedIn to maximize ROI and generate quality leads.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Lead Generation",
      description:
        "Strategic funnel optimization and lead nurturing campaigns to convert prospects into customers.",
    },
    {
      icon: <Megaphone size={32} />,
      title: "Meta Ads Management",
      description:
        "Expert Facebook & Instagram advertising with advanced targeting, creative testing, and campaign optimization.",
    },
    {
      icon: <Search size={32} />,
      title: "Google Ads (PPC)",
      description:
        "Search, Display, and Shopping campaigns optimized for conversions and lower cost per acquisition.",
    },
    {
      icon: <Share2 size={32} />,
      title: "LinkedIn Ads",
      description:
        "B2B lead generation campaigns targeting decision-makers with precision and professionalism.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Analytics & Tracking Setup",
      description:
        "GA4, Google Tag Manager, and conversion tracking implementation for accurate campaign measurement.",
    },
    {
      icon: <LineChart size={32} />,
      title: "Funnel Optimization",
      description:
        "End-to-end funnel analysis and optimization to improve conversion rates at every stage.",
    },
    {
      icon: <PenTool size={32} />,
      title: "Landing Page Content",
      description:
        "Conversion-focused landing page copywriting and content strategy for better results.",
    },
    {
      icon: <Mail size={32} />,
      title: "Marketing Automation",
      description:
        "Email sequences, WhatsApp automation, and lead nurturing workflows using Zapier, Make, and Meritto.",
    },
    {
      icon: <Video size={32} />,
      title: "Creative Strategy",
      description:
        "Ad creative concepts, hooks, scripts, and direction for video and static ads that convert.",
    },
    {
      icon: <Zap size={32} />,
      title: "Retargeting Campaigns",
      description:
        "Advanced retargeting strategies to re-engage warm audiences and maximize lifetime value.",
    },
    {
      icon: <ShoppingCart size={32} />,
      title: "E-commerce Marketing",
      description:
        "Product catalog optimization, dynamic ads, and shopping campaigns for online stores.",
    },
  ];

  const maxIndex = Math.max(0, services.length - servicesPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section
      id="services"
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#070d0e] mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-[#2d4a50] max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business goals
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Carousel Items */}
          <div className="overflow-hidden pt-4 -mt-4">
            <motion.div
              className="flex gap-8"
              animate={{
                x: `-${currentIndex * (100 / servicesPerPage)}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `calc((100% - ${(servicesPerPage - 1) * 1.5}rem) / ${servicesPerPage})` }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div 
                    className="relative border-2 border-[#45818e] p-6 rounded-2xl hover:border-[#69a3ae] transition-all duration-300 flex flex-col space-y-4 text-left overflow-hidden group"
                    style={{ backgroundColor: '#000000', height: '320px', minHeight: '320px', maxHeight: '320px' }}
                  >
                    {/* Decorative gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#45818e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#45818e]/5 rounded-bl-full" />
                    
                    {/* Icon */}
                    <motion.div 
                      className="w-16 h-16 flex items-center justify-center text-white flex-shrink-0 z-10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    <h3 className="relative text-xl font-bold text-white flex-shrink-0 leading-snug z-10">
                      {service.title}
                    </h3>
                    <p className="relative text-white text-sm leading-relaxed flex-grow z-10">
                      {service.description}
                    </p>
                    
                    {/* Bottom decorative line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#45818e] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons - Minimal Style */}
          <div className="flex justify-center gap-3 mt-20 mb-4">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 border border-[#45818e]/30 rounded-md text-[#45818e] flex items-center justify-center hover:border-[#45818e] hover:bg-[#45818e]/5 transition-all duration-200"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 border border-[#45818e]/30 rounded-md text-[#45818e] flex items-center justify-center hover:border-[#45818e] hover:bg-[#45818e]/5 transition-all duration-200"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-[#070d0e] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}