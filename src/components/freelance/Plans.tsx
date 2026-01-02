import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Plans() {
  const plans = [
    {
      name: "Basic Plan",
      price: "₹2,500",
      period: "/week",
      description: "Perfect for small businesses or startups looking to kickstart their digital marketing efforts",
      features: [
        "Audit of 2 Social Media Accounts",
        "2 PPC Campaigns Set-up",
        "3 Creatives",
        "Campaign Optimization"
      ]
    },
    {
      name: "Pro",
      price: "₹7,500",
      period: "/week",
      description: "Ideal for growing businesses that want to expand their online presence and reach a larger audience",
      features: [
        "Everything in Basic Plan",
        "Audit of all Social Media Accounts",
        "6 PPC Campaigns Set-up",
        "10 Creatives + 1 Video",
        "Campaign Optimization + Reports Automation"
      ],
      popular: true
    },
    {
      name: "Long-Term Plan",
      price: "TBD",
      period: "",
      description: "Tailored for established businesses seeking a holistic digital marketing solution to boost brand visibility and engagement",
      features: [
        "Everything in Pro plan",
        "Customized social media strategies",
        "Personalized email marketing campaigns",
        "Funnel optimization and Retargeting",
        "Bi-weekly performance reports and strategy consultations"
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#070d0e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-400">Choose the plan that fits your growth goals.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-2xl border flex flex-col h-full ${plan.popular ? 'border-[#45818e] bg-[#1a2a2e]' : 'border-gray-800 bg-[#0d1416]'}`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4 text-white flex items-baseline">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-lg text-gray-400 ml-1">{plan.period}</span>}
              </div>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-[#45818e] mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3 rounded-lg font-semibold transition-colors mt-auto ${plan.popular ? 'bg-[#45818e] hover:bg-[#3a6f7a] text-white' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
