import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sandesh-yewale-13fb01/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/hookhunters_/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:work@sandeshy.com', label: 'Email' },
  ];

  return (
    <footer id="footer" className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Ready to elevate your digital presence? Get in touch and let's create 
              something amazing together.
            </p>
            <motion.a
              href="mailto:work@sandeshy.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
            >
              work@sandeshy.com
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h4 className="text-xl font-semibold mb-6">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, backgroundColor: '#facc15' }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>© 2026 Sandeshy. All rights reserved. Crafted with passion for digital excellence.</p>
        </motion.div>
      </div>
    </footer>
  );
}