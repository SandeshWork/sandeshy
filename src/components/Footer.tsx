import { motion } from "motion/react";
import { Mail, Linkedin, Facebook, Instagram, MapPin, Phone } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/company/hook-hunters/", label: "LinkedIn" },
    { icon: <Facebook size={24} />, href: "https://www.facebook.com/profile.php?id=61583950663010", label: "Facebook" },
    { icon: <Instagram size={24} />, href: "https://www.instagram.com/hookhunters_/", label: "Instagram" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  return (
    <footer
      id="contact"
      className="bg-black text-white relative overflow-hidden"
      style={{ backgroundColor: '#000000' }}
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
            <h4 className="text-lg sm:text-xl mb-4">
              <a href="#services" className="hover:text-[#69a3ae] transition-colors">
                Services
              </a>
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-[#a8cdd4] text-sm sm:text-base">
              <li>Digital Strategy</li>
              <li>SEO Optimization</li>
              <li>Social Media Marketing</li>
              <li>Content Marketing</li>
              <li>PPC Campaigns</li>
              <li>Analytics & Reporting</li>
              <li>Website Design</li>
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