import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services do you offer as a freelancer?",
      answer:
        "I help brands with performance marketing and lead generation. This includes Meta Ads, Google Ads, LinkedIn Ads, funnel optimisation, tracking setup, landing page content and marketing automation. I handle everything related to ads and growth so you can focus on your business.",
    },
    {
      question: "Can you fix or improve our current campaigns?",
      answer:
        "Yes. I can audit your ads, fix tracking issues, improve audiences, rewrite ad copies and adjust your budget split. I have improved CPL by 40 to 47 percent for multiple brands by running structured tests and improving the overall funnel. I use the same process with every new client.",
    },
    {
      question: "Can you help with creatives and videos for ads?",
      answer:
        "Yes, I can manage the entire creative direction. I do not design or edit myself, but my designer and video editor friends support me whenever required. Their work is high quality and the pricing is transparent. Creative and video charges are taken separately depending on the work you need.",
    },
    {
      question:
        "Will you guide us on what type of creatives or videos we should make?",
      answer:
        "Yes. I can help you with the creative strategy, concepts, hooks, scripts and ad copy. I tell you exactly what creative formats work for your brand and how many we should test. You only pay extra if you want my designers or editors to execute those creatives",
    },
    {
      question: "What tools do you work with?",
      answer:
        "I work with Meta Ads, Google Ads, LinkedIn Ads, GA4, Google Tag Manager, Looker Studio, Zapier, Make, Meritto and WhatsApp automation tools. I also use AI tools like ChatGPT, Midjourney, Runway and HeyGen for creative planning and scripting.",
    },
    {
      question: "What results can we expect when working with you?",
      answer:
        "You can expect better quality leads, lower CPL, clearer analytics and more stable campaigns. I ensure your tracking is correct, your audiences are refined and your ad creatives follow a tested structure. My goal is to deliver steady growth and consistent improvement every month.",
    },
    {
      question: "How do you charge for your work?",
      answer:
        "My pricing is based on the plans listed on my website. You can choose the plan that fits your goals and monthly needs. If you have any special requirements, I can also create a customised plan for you. Creative and video work is not included in the base plans and is charged separately depending on the amount of work needed.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#45818e] rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * 800,
            }}
            animate={{
              y: [null, Math.random() * 800],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#070d0e] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#2d4a50]">
            Everything you need to know about working with me
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#45818e] transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-[#070d0e] pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  {openIndex === index ? (
                    <ChevronUp size={20} className="text-[#070d0e]" />
                  ) : (
                    <ChevronDown size={20} className="text-[#070d0e]" />
                  )}
                </div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-[#2d4a50] leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
