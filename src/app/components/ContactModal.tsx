import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Phone, Linkedin, Github, Send, FileText, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lthuy21.work@gmail.com",
      href: "mailto:lthuy21.work@gmail.com",
      color: "from-orange-500 to-amber-500",
      description: "Best way to reach me"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+84 765 073 731",
      href: "tel:+84765073731",
      color: "from-green-500 to-emerald-500",
      description: "Available 9AM - 6PM"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "thieu-huy",
      href: "https://linkedin.com/in/thieu-huy",
      color: "from-blue-500 to-cyan-500",
      description: "Professional network"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "HuyLemm",
      href: "https://github.com/HuyLemm",
      color: "from-purple-500 to-pink-500",
      description: "View my code"
    }
  ];

  const personalInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Ho Chi Minh City, Vietnam"
    },
    {
      icon: Calendar,
      label: "Availability",
      value: "Open to opportunities"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl"
              >
                {/* Glow effect */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 via-purple-500/30 to-blue-500/30 rounded-3xl blur-2xl"
                />

                {/* Content */}
                <div className="relative bg-[#0B0F19] border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
                  {/* Header */}
                  <div className="relative bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-blue-500/10 px-8 py-6 border-b border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-3xl font-bold mb-2" style={{ fontSize: '2rem', fontWeight: 700 }}>
                          Let's <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Connect</span>
                        </h2>
                        <p className="text-gray-400">I'm always open to discussing new opportunities and collaborations</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onClose}
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/50 transition-all duration-300"
                      >
                        <X className="w-6 h-6" />
                      </motion.button>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 p-8">
                    {/* Left side - Contact Info */}
                    <div className="space-y-6">
                      {/* Personal Info */}
                      <div className="space-y-4">
                        {personalInfo.map((info, i) => (
                          <motion.div
                            key={info.label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                          >
                            <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg">
                              <info.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-sm text-gray-400">{info.label}</div>
                              <div className="font-semibold text-gray-200">{info.value}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Contact Cards */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold mb-4" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                          Get in touch
                        </h3>
                        {contactInfo.map((contact, i) => (
                          <motion.a
                            key={contact.label}
                            href={contact.href}
                            target={contact.label === "Email" || contact.label === "Phone" ? undefined : "_blank"}
                            rel={contact.label === "Email" || contact.label === "Phone" ? undefined : "noopener noreferrer"}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="group relative flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-orange-500/30 transition-all duration-300"
                          >
                            {/* Hover glow */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${contact.color} rounded-xl blur opacity-0 group-hover:opacity-30 transition-all duration-500`} />

                            <div className="relative flex items-center gap-4 flex-1">
                              <div className={`p-3 bg-gradient-to-br ${contact.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                                <contact.icon className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="text-sm text-gray-400">{contact.label}</div>
                                <div className="font-semibold text-gray-200" style={{ fontSize: '0.9375rem', fontWeight: 600 }}>
                                  {contact.value}
                                </div>
                                <div className="text-xs text-gray-500">{contact.description}</div>
                              </div>
                              <Send className="w-4 h-4 text-gray-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
                            </div>
                          </motion.a>
                        ))}
                      </div>

                      {/* Download Resume */}
                      <motion.a
                        href="#"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/20 rounded-xl hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
                      >
                        <FileText className="w-5 h-5 text-orange-400" />
                        <span className="font-semibold text-gray-200">Download Resume</span>
                      </motion.a>
                    </div>

                    {/* Right side - Contact Form */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="relative"
                    >
                      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                        <h3 className="text-xl font-semibold mb-6" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                          Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <label className="block text-sm text-gray-300 mb-2 font-medium">Name</label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 focus:outline-none focus:bg-white/10 transition-all duration-300 text-gray-200 placeholder-gray-500"
                              placeholder="Your name"
                              required
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45 }}
                          >
                            <label className="block text-sm text-gray-300 mb-2 font-medium">Email</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 focus:outline-none focus:bg-white/10 transition-all duration-300 text-gray-200 placeholder-gray-500"
                              placeholder="your.email@example.com"
                              required
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <label className="block text-sm text-gray-300 mb-2 font-medium">Subject</label>
                            <input
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 focus:outline-none focus:bg-white/10 transition-all duration-300 text-gray-200 placeholder-gray-500"
                              placeholder="What's this about?"
                              required
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55 }}
                          >
                            <label className="block text-sm text-gray-300 mb-2 font-medium">Message</label>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              rows={6}
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 focus:outline-none focus:bg-white/10 transition-all duration-300 resize-none text-gray-200 placeholder-gray-500"
                              placeholder="Tell me about your project or opportunity..."
                              required
                            />
                          </motion.div>

                          <motion.button
                            type="submit"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="group relative w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 flex items-center justify-center gap-2 font-semibold overflow-hidden"
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
                            <Send className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
                            <span className="relative">Send Message</span>
                          </motion.button>
                        </form>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
