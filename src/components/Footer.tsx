import { motion } from "motion/react";
import { Mail, Linkedin, Twitter, Instagram, Youtube, MapPin, Phone, FileText } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: <Linkedin size={24} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={24} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={24} />, href: "#", label: "Instagram" },
    { icon: <Youtube size={24} />, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-[#070d0e] via-[#1a2a2e] to-[#2d4a50] text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#45818e] rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * 600,
            }}
            animate={{
              y: [null, Math.random() * 600],
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl mb-4">Portfolio</h3>
            <p className="text-[#a8cdd4] mb-6 text-sm sm:text-base">
              Digital marketing specialist helping brands grow through
              data-driven strategies and creative campaigns.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#2d4a50] to-[#45818e] rounded-full flex items-center justify-center hover:from-[#45818e] hover:to-[#69a3ae] transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg sm:text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="transition-transform"
                >
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-[#a8cdd4] hover:text-[#69a3ae] transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg sm:text-xl mb-4">Services</h4>
            <ul className="space-y-2 sm:space-y-3 text-[#a8cdd4] text-sm sm:text-base">
              <li>Digital Strategy</li>
              <li>SEO Optimization</li>
              <li>Social Media Marketing</li>
              <li>Content Marketing</li>
              <li>PPC Campaigns</li>
              <li>Analytics & Reporting</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg sm:text-xl mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#45818e] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#a8cdd4] text-sm sm:text-base">work@sandeshy.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#45818e] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#a8cdd4] text-sm sm:text-base">+91 97027 69181</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#45818e] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#a8cdd4] text-sm sm:text-base">
                    Navi Mumbai, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form Button - Above Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <motion.button
            data-tally-open="ZjozO0"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#45818e] to-[#69a3ae] text-white rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl hover:shadow-[#45818e]/50 transition-all cursor-pointer group"
          >
            <FileText size={24} className="group-hover:rotate-6 transition-transform" />
            <span className="text-lg">Send a Query</span>
          </motion.button>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-4 text-center"
        >
          <p className="text-[#a8cdd4] text-xs sm:text-base">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            Built with passion for digital marketing.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}