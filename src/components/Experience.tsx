import image_e202a7571265f06d900a2686a9201e26a34ae848 from 'figma:asset/e202a7571265f06d900a2686a9201e26a34ae848.png';
import { motion } from "motion/react";
import { Briefcase, Award, TrendingUp } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Experience() {
  const data = [
    {
      title: "Oct 2023 – Oct 2025",
      content: (
        <div>
          <ImageWithFallback 
            src={image_e202a7571265f06d900a2686a9201e26a34ae848} 
            alt="Company Logo" 
            className="w-auto h-12 mb-6 object-contain brightness-0 invert"
          />
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-xl">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white mb-1 text-[24px]">
                  Head of Marketing
                </h4>
              </div>
            </div>
            <p className="mb-4 text-sm text-white text-[14px]">
              Owned end-to-end marketing strategy, performance, and execution across <strong>multiple B2C and B2B brands</strong>.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-white">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[16px]">Led digital marketing with a <strong><u>₹5L/month media budget</u></strong> across Google, Meta, and LinkedIn</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white ml-4">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-white/60 rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[16px]"><em>ITM B.Tech (B2C)</em>: <strong>250+ admissions</strong>, ~<strong><u>₹87L revenue</u></strong></span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white ml-4">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-white/60 rounded-[86px] mt-1.5 flex-shrink-0" />
                <span className="text-[16px]"><em>LISA AI (B2B SaaS)</em>: <strong>1,000+ qualified enterprise leads</strong></span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white ml-4">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-white/60 rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[16px]"><em>LetsUpgrade</em>: <strong><u>1,000,000+ users acquired</u></strong></span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white ml-4">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-white/60 rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[16px]"><em>12thClass.com</em>: <strong>15,000+ student onboardings</strong></span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[16px]">Built and managed a <strong>7-member in-house marketing team</strong> (design, video, performance)</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[15px]" className="text-[16px]">Set up <strong>GA4, GTM, Meta Pixel, and Meritto CRM</strong> for end-to-end tracking and attribution</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[16px]">Created <strong>automated daily performance reports</strong> to guide faster optimization decisions</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[16px]">Led overall <strong>creative direction</strong> for ads, landing pages, video campaigns, and brand assets</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[16px]">Scaled video production for ITM Universities to <strong>50+ approved videos per month</strong></span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[16px]">Designed <strong>conversion-focused funnels</strong> and automation journeys across WhatsApp and email</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[16px]">Managed <strong>offline marketing execution</strong> including brochures, print materials, vendors, and budgets</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2023 – Sep 2023",
      content: (
        <div>
          <ImageWithFallback 
            src={image_e202a7571265f06d900a2686a9201e26a34ae848} 
            alt="Company Logo" 
            className="w-auto h-12 mb-6 object-contain brightness-0 invert"
          />
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-xl">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white mb-1 text-[24px]">
                  Assistant Manager – Digital Marketing
                </h4>
              </div>
            </div>
            <p className="mb-4 text-sm text-white text-[16px]">
              Transitioned from operations into <strong>performance ownership</strong> and campaign optimization.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-white">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[16px]">Took ownership of <strong>paid campaigns and CRM automation</strong> for free and paid skilling programs</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[16px]">Reduced cost per lead by <strong><u>47%</u></strong> through audience testing, copy optimization, and funnel tweaks</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[15px]" className="text-[16px]">Strengthened <strong>lead quality</strong> by aligning ads, landing pages, and CRM journeys</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[15px]" className="text-[16px]">Grew Instagram by <strong>13,500+ followers</strong> using content and performance-led distribution</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[15px]" className="text-[16px]">Played a key role in launching <em>ITM B.Tech</em>, delivering the <strong><u>lowest CPL</u></strong> across verticals</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[16px]">Worked closely with design and video teams to improve <strong>creative effectiveness</strong></span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "May 2022 – Dec 2022",
      content: (
        <div>
          <ImageWithFallback 
            src={image_e202a7571265f06d900a2686a9201e26a34ae848} 
            alt="Company Logo" 
            className="w-auto h-12 mb-6 object-contain brightness-0 invert"
          />
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-xl">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white mb-1 text-[24px]">
                  Special Initiatives Executive (Marketing Operations)
                </h4>
              </div>
            </div>
            <p className="mb-4 text-sm text-white text-[16px]">
              Built the foundation for <strong>scalable growth</strong> through user operations and early marketing systems.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-white">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[15px]" className="text-[16px]">Managed <strong>large-scale free coding bootcamps</strong> and learner operations</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[15px]" className="text-[16px]">Improved onboarding from <strong><u>6% → 10%</u></strong> and retention from <strong><u>20% → 50%</u></strong></span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[15px]" className="text-[16px]">Supported early paid marketing efforts by handling <strong>CRM workflows and campaign operations</strong></span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[16px]">Built <strong>internal reports</strong> to track acquisition, engagement, and drop-offs</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white">
                <div className="min-w-[12px] min-h-[12px] w-[12px] h-[12px] max-w-[12px] max-h-[12px] bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[16px]">Managed <strong>community communication</strong> and mass outreach channels</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-[#070d0e] via-[#1a2a2e] to-[#2d4a50] relative overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-1 bg-[#45818e] rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-[rgba(0,0,0,0)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4 text-center">
            Career Journey
          </h2>
          <p className="text-white text-lg text-center">
            One Company • Three Promotions • Continuous Growth
          </p>
        </motion.div>
      </div>

      {/* Timeline Component */}
      <div className="relative w-full overflow-clip">
        <Timeline data={data} className="bg-[rgb(69,129,142)] text-[rgb(255,255,255)] font-bold pt-[163px] pt-[192px] pr-[0px] pb-[0px] pl-[0px] p-[0px] text-[32px]" />
      </div>
    </section>
  );
}