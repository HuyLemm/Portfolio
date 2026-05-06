import { motion } from "motion/react";
import { Heart, Mail } from "lucide-react";

interface FooterProps {
  onContactClick?: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold mb-2" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                Lâm Thiều Huy
              </span>
            </h3>
            <p className="text-sm text-gray-400">Backend Developer • AI Engineer • System Architect</p>
          </motion.div>

          {/* Center - Tech stack mention */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-sm text-gray-400"
          >
            <span>Built with</span>
            <Heart className="w-4 h-4 text-orange-400 fill-orange-400 animate-pulse" />
            <span>using React • TypeScript • Tailwind • Motion</span>
          </motion.div>

          {/* Right - Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-400"
          >
            © {currentYear} All rights reserved
          </motion.div>
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-6 mt-8 pt-8 border-t border-white/10"
        >
          {/* Contact Button */}
          {onContactClick && (
            <motion.button
              onClick={onContactClick}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="group relative px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 flex items-center gap-2 overflow-hidden"
              style={{ fontSize: '1rem', fontWeight: 500 }}
            >
              {/* Animated shine effect */}
              <motion.div
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
              <Mail className="w-5 h-5 relative" />
              <span className="relative">Get in Touch</span>
            </motion.button>
          )}

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            {[
              { name: "GitHub", href: "https://github.com/HuyLemm" },
              { name: "LinkedIn", href: "https://linkedin.com/in/thieu-huy" },
              { name: "Email", href: "mailto:lthuy21.work@gmail.com" }
            ].map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name === "Email" ? undefined : "_blank"}
                rel={link.name === "Email" ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white/5 hover:bg-orange-500/10 rounded-lg border border-white/10 hover:border-orange-500/30 text-sm text-gray-300 hover:text-orange-300 transition-all duration-300"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
