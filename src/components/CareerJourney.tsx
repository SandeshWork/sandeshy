import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Star } from 'lucide-react';
import { useState } from 'react';

const journeySteps = [
  {
    period: 'Oct 2023 – Oct 2025',
    title: 'Head of Marketing | LetsUpgrade',
    achievements: [
      'Led digital marketing with a ₹5L/month media budget across Google, Meta, and LinkedIn',
      'ITM B.Tech (B2C): 250+ admissions, ~₹87L revenue',
      'LISA AI (B2B SaaS): 1,000+ qualified enterprise leads',
      'LetsUpgrade: 1,000,000+ users acquired',
      '12thClass.com: 15,000+ student onboardings',
      'Built and managed a 7-member in-house marketing team (design, video, performance)',
      'Set up GA4, GTM, Meta Pixel, and Meritto CRM for end-to-end tracking and attribution',
      'Created automated daily performance reports to guide faster optimization decisions',
      'Led overall creative direction for ads, landing pages, video campaigns, and brand assets',
      'Scaled video production for ITM Universities to 50+ approved videos per month',
      'Designed conversion-focused funnels and automation journeys across WhatsApp and email',
      'Managed offline marketing execution including brochures, print materials, vendors, and budgets',
    ],
  },
  {
    period: 'Jan 2023 – Sep 2023',
    title: 'Assistant Manager – Digital Marketing | LetsUpgrade',
    achievements: [
      'Took ownership of paid campaigns and CRM automation for free and paid skilling programs',
      'Reduced cost per lead by 47% through audience testing, copy optimization, and funnel tweaks',
      'Strengthened lead quality by aligning ads, landing pages, and CRM journeys',
      'Grew Instagram by 13,500+ followers using content and performance-led distribution',
      'Played a key role in launching ITM B.Tech, delivering the lowest CPL across verticals',
      'Worked closely with design and video teams to improve creative effectiveness',
    ],
  },
  {
    period: 'May 2022 – Dec 2022',
    title: 'Special Initiatives Executive (Marketing Operations) | LetsUpgrade',
    achievements: [
      'Managed large-scale free coding bootcamps and learner operations',
      'Improved onboarding from 6% → 10% and retention from 20% → 50%',
      'Supported early paid marketing efforts by handling CRM workflows and campaign operations',
      'Built internal reports to track acquisition, engagement, and drop-offs',
      'Managed community communication and mass outreach channels',
    ],
  },
];

export function CareerJourney() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-gray-50/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Career Journey
          </h2>
          <p className="text-xl text-gray-600">
            One Company • Three Promotions • Continuous Growth
          </p>
        </motion.div>
        
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-gray-900 rounded-3xl overflow-hidden transition-all hover:border-yellow-400"
          >
            {journeySteps.map((step, index) => (
              <div key={index}>
                {/* Role Header - Clickable */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full p-8 flex items-center gap-6 text-left transition-all hover:bg-gray-50 border-b-2 border-gray-200 last:border-b-0"
                >
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 360 : 0 }}
                      transition={{ duration: 0.4 }}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        index === 0 
                          ? 'bg-yellow-400' 
                          : index === 1 
                          ? 'bg-yellow-200' 
                          : 'bg-white border-2 border-gray-900'
                      }`}
                    >
                      <Star 
                        className={`w-7 h-7 ${
                          index === 0 
                            ? 'fill-gray-900 text-gray-900' 
                            : index === 1 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'fill-none text-gray-900'
                        }`} 
                      />
                    </motion.div>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-yellow-600 mb-1">
                      {step.period}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-gray-900" />
                  </motion.div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 bg-gray-50/30">
                        <ul className="space-y-3 pt-6">
                          {step.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.03 }}
                              className="flex items-start text-gray-600 leading-relaxed"
                            >
                              <span className="inline-block w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}