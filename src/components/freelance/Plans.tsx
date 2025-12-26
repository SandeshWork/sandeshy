import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

export function Plans() {
  const plans = [
    {
      name: "Basic Plan",
      description:
        "Perfect for small businesses or startups looking to kickstart their digital marketing efforts",
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
        "Tailored for established businesses seeking a holistic digital marketing solution to boost brand visibility and engagement",
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
      className="py-20 bg-gradient-to-br from-[#2d4a50] via-[#1a2a2e] to-[#070d0e] relative overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br from-[#1a2a2e] to-[#2d4a50] p-8 rounded-2xl ${
                plan.popular
                  ? "border-2 border-white shadow-2xl"
                  : "border border-[#45818e]/30"
              } relative overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#45818e] to-[#69a3ae] text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {plan.name}
                </h3>
                <p className="text-[#a8cdd4] text-sm mb-6 min-h-[60px]">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-[#a8cdd4]">/{plan.period}</span>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-[#69a3ae] font-semibold text-sm uppercase tracking-wide">
                  {plan.name} includes
                </p>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#45818e]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={16} className="text-[#69a3ae]" />
                    </div>
                    <span className="text-[#a8cdd4] text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? "bg-white text-[#070d0e] border-2 border-white hover:bg-transparent hover:text-white hover:border-white"
                    : "bg-transparent text-white border-2 border-[#45818e]/50 hover:border-white"
                }`}
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
