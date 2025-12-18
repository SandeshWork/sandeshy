import { motion } from "motion/react";
import { ExternalLink, TrendingUp, Users, DollarSign } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Growth Campaign",
      category: "Digital Marketing",
      description:
        "Led a comprehensive digital marketing strategy that increased online sales by 250% in 6 months. Implemented SEO, PPC, and email marketing tactics.",
      metrics: [
        { label: "ROI Increase", value: "250%", icon: <TrendingUp /> },
        { label: "New Customers", value: "15K+", icon: <Users /> },
        { label: "Revenue", value: "$2.5M", icon: <DollarSign /> },
      ],
      tags: ["SEO", "PPC", "Email Marketing", "Analytics"],
      gradient: "from-[#070d0e] to-[#2d4a50]",
    },
    {
      title: "Social Media Brand Building",
      category: "Social Media Marketing",
      description:
        "Created and executed a social media strategy that grew brand awareness and engagement across all platforms, building a community of loyal followers.",
      metrics: [
        { label: "Follower Growth", value: "500%", icon: <TrendingUp /> },
        { label: "Engagement Rate", value: "12%", icon: <Users /> },
        { label: "Reach", value: "5M+", icon: <DollarSign /> },
      ],
      tags: ["Instagram", "Facebook", "TikTok", "Content Creation"],
      gradient: "from-[#1a2a2e] to-[#45818e]",
    },
    {
      title: "SaaS Product Launch",
      category: "Product Marketing",
      description:
        "Orchestrated a multi-channel product launch campaign that achieved record-breaking sign-ups and exceeded revenue targets by 180% in the first quarter.",
      metrics: [
        { label: "Sign-ups", value: "25K+", icon: <Users /> },
        { label: "Conversion Rate", value: "8.5%", icon: <TrendingUp /> },
        { label: "MRR", value: "$500K", icon: <DollarSign /> },
      ],
      tags: ["Product Launch", "Content Marketing", "PR", "Influencer"],
      gradient: "from-[#2d4a50] to-[#69a3ae]",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-[#e7f2f4] to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, #45818e 25%, transparent 25%, transparent 75%, #45818e 75%, #45818e),
            linear-gradient(45deg, #45818e 25%, transparent 25%, transparent 75%, #45818e 75%, #45818e)`,
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 30px 30px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#070d0e] to-[#45818e] mb-4">
            Campaigns & Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#45818e] to-[#69a3ae] mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full bg-white rounded-3xl shadow-xl overflow-hidden border border-[#45818e]/20">
                {/* Header with Gradient */}
                <div
                  className={`p-6 bg-gradient-to-br ${project.gradient} text-white relative overflow-hidden`}
                >
                  {/* Animated Background Circles */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
                  />
                  <motion.div
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="absolute -bottom-5 -left-5 w-32 h-32 bg-white/10 rounded-full"
                  />

                  <div className="relative z-10">
                    <div className="text-xs sm:text-sm opacity-80 mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl sm:text-2xl mb-3">{project.title}</h3>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm">View Details</span>
                      <ExternalLink size={16} />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <p className="text-sm sm:text-base text-gray-700 mb-6">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-3 sm:space-y-4 mb-6">
                    {project.metrics.map((metric, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-center justify-between p-3 bg-gradient-to-r from-[#e7f2f4] to-transparent rounded-xl"
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="text-[#45818e]">{metric.icon}</div>
                          <span className="text-sm sm:text-base text-gray-700">
                            {metric.label}
                          </span>
                        </div>
                        <span className="text-sm sm:text-base text-[#45818e]">
                          {metric.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i }}
                        whileHover={{ scale: 1.1 }}
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-[#45818e] to-[#69a3ae] text-white text-xs sm:text-sm rounded-full"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute -inset-1 bg-gradient-to-r from-[#45818e] to-[#69a3ae] rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-30 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}