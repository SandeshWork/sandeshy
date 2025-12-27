import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

export function Plans() {
  const plans = [
    {
      name: "Basic Plan",
      description:
        "Perfect for small businesses or startups looking to start their digital marketing efforts",
      price: "₹2,500",
      period: "week",
      features: [
        "Audit of 2 Social Media Accounts",
        "2 PPC Campaigns Set-up",
        "3 Creatives",
        "Campaign Optimization",
      ],
      popular: false,
    },
    {
      name: "Pro",
      description:
        "Ideal for growing businesses that want to expand their online presence and reach a larger audience",
      price: "₹7,500",
      period: "week",
      features: [
        "Everything in Starter plan",
        "Audit of all Social Media Accounts",
        "6 PPC Campaigns Set-up",
        "10 Creatives + 1 Video",
        "Campaign Optimization + Reports Automation",
      ],
      popular: true,
    },
    {
      name: "Long-Term Plan",
      description:
        "Perfect for businesses seeking digital solution to boost brand visibility, leads, sales, and engagement",
      price: "TBD",
      period: "",
      features: [
        "Everything in Pro plan",
        "Customized social media strategies",
        "Personalized email marketing campaigns",
        "Funnel optimization and Retargeting",
        "Bi-weekly performance reports and strategy consultations",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="plans"
      className="py-20 bg-black relative overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-1 bg-[#45818e] rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * 800,
              scale: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [null, Math.random() * 800],
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-[#a8cdd4] max-w-3xl mx-auto">
            Flexible pricing plans designed to match your business goals and budget
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`bg-black p-10 rounded-2xl ${
                plan.popular
                  ? "border-2 border-[#45818e] shadow-2xl"
                  : "border border-[#45818e]/30"
              } relative overflow-hidden`}
              style={{ 
                display: 'flex', 
                flexDirection: 'column',
                height: '100%',
                paddingTop: '3rem'
              }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#45818e] to-[#69a3ae] text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  {plan.name}
                </h3>
                <p className="text-white text-sm mb-8 min-h-[60px] text-center whitespace-pre-line">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-2 justify-center mb-2">
                  <span className="text-2xl font-bold text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-white text-lg">/{plan.period}</span>
                  )}
                </div>
              </div>

              <div className="mb-8" style={{ flexGrow: 1 }}>
                <p className="text-white font-semibold text-sm uppercase tracking-wide mb-4 ml-4">
                  {plan.name} includes
                </p>
                <div className="space-y-4 ml-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#45818e]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={16} className="text-[#45818e]" />
                      </div>
                      <span className="text-white text-sm leading-relaxed text-left">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.button
                data-tally-open="ZjozO0"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
                whileHover={{ 
                  scale: 1.03,
                  backgroundColor: '#45818e',
                  color: '#ffffff'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 bg-white text-black border-2 border-white"
                style={{ marginTop: 'auto' }}
              >
                Get started
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
