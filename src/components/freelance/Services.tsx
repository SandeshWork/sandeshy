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
  Monitor,
} from "lucide-react";

export function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [servicesPerPage, setServicesPerPage] = useState(4);

  useEffect(() => {
    const updateServicesPerPage = () => {
      if (window.innerWidth < 640) {
        setServicesPerPage(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setServicesPerPage(2); // Tablet
      } else {
        setServicesPerPage(4); // Desktop
      }
    };

    updateServicesPerPage();
    window.addEventListener('resize', updateServicesPerPage);
    return () => window.removeEventListener('resize', updateServicesPerPage);
  }, []);

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
    {
      icon: <Monitor size={32} />,
      title: "Website Design",
      description:
        "Modern, conversion-optimized website design and development that drives results and enhances user experience.",
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
    }, 5000); // Slower auto-advance for better viewing
    return () => clearInterval(interval);
  }, [currentIndex, maxIndex]);

  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Services I Offer
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            Comprehensive digital marketing solutions tailored to your business goals
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Carousel Items */}
          <div className="overflow-hidden pt-4 -mt-4 pb-4">
            <motion.div
              className="flex gap-4 sm:gap-6 md:gap-8"
              animate={{
                x: `-${currentIndex * (100 / servicesPerPage)}%`,
              }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 25,
                mass: 0.8,
                duration: 0.6
              }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  style={{ 
                    width: servicesPerPage === 1 
                      ? 'calc(100% - 0rem)'
                      : servicesPerPage === 2 
                      ? 'calc((100% - 1.5rem) / 2)'
                      : `calc((100% - ${(servicesPerPage - 1) * 2}rem) / ${servicesPerPage})`
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div 
                    className="relative border-2 border-[#45818e] p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl hover:border-[#69a3ae] transition-all duration-500 flex flex-col space-y-3 sm:space-y-4 text-left overflow-hidden group h-full"
                    style={{ 
                      backgroundColor: '#000000',
                      minHeight: '260px',
                      maxHeight: servicesPerPage === 1 ? 'none' : '290px'
                    }}
                  >
                    {/* Decorative gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#45818e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon */}
                    <motion.div 
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center text-white flex-shrink-0 z-10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    <h3 className="relative text-lg sm:text-xl font-bold text-white flex-shrink-0 leading-snug z-10">
                      {service.title}
                    </h3>
                    <p className="relative text-gray-300 text-sm sm:text-base leading-relaxed flex-grow z-10">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons - Hidden on mobile, visible on larger screens */}
          <div className="hidden sm:flex justify-center gap-3 mt-16 sm:mt-20 md:mt-28 mb-4">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 border border-[#45818e]/30 rounded-md text-[#45818e] flex items-center justify-center hover:border-[#45818e] hover:bg-[#45818e]/5 transition-all duration-300"
              aria-label="Previous services"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 border border-[#45818e]/30 rounded-md text-[#45818e] flex items-center justify-center hover:border-[#45818e] hover:bg-[#45818e]/5 transition-all duration-300"
              aria-label="Next services"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-4">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-[#45818e] w-8"
                    : "bg-gray-600 w-2 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}