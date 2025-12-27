import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isFreelancePage = location.pathname === "/freelance";

  const navLinks: { name: string; href: string }[] = [];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-lg border-b border-[#45818e]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="text-white">
            <span className="text-2xl">Freelance</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: "#69a3ae" }}
                className="text-white hover:text-[#69a3ae] transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Freelance/Portfolio Button (Desktop) */}
          {!isFreelancePage ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block"
            >
              <Link
                to="/freelance"
                className="px-6 py-2 bg-gradient-to-r from-[#45818e] to-[#69a3ae] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow inline-block"
              >
                Freelance
              </Link>
            </motion.div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block"
            >
              <Link
                to="/"
                className="px-6 py-2 bg-gradient-to-r from-[#45818e] to-[#69a3ae] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow inline-block"
              >
                Portfolio
              </Link>
            </motion.div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {!isFreelancePage ? (
              <Link
                to="/freelance"
                className="px-4 py-2 bg-gradient-to-r from-[#45818e] to-[#69a3ae] text-white rounded-full shadow-lg text-sm"
              >
                Freelance
              </Link>
            ) : (
              <Link
                to="/"
                className="px-4 py-2 bg-gradient-to-r from-[#45818e] to-[#69a3ae] text-white rounded-full shadow-lg text-sm"
              >
                Portfolio
              </Link>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#69a3ae] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-white hover:text-[#69a3ae] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
