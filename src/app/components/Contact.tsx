import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Github, FileText, Send } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lthuy21.work@gmail.com",
      href: "mailto:lthuy21.work@gmail.com",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+84 765 073 731",
      href: "tel:+84765073731",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "thieu-huy",
      href: "https://linkedin.com/in/thieu-huy",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "HuyLemm",
      href: "https://github.com/HuyLemm",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0f1421] to-[#0B0F19]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[150px]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4" style={{ fontSize: '3rem', fontWeight: 700 }}>
            Let's <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-2xl mx-auto mb-2" style={{ fontSize: '1.5rem', fontWeight: 400 }}>
            Let's build something impactful together.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto" style={{ fontSize: '1.125rem', fontWeight: 400 }}>
            Open to backend developer opportunities and collaborative projects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact cards grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {contactInfo.map((contact, i) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.label === "Email" || contact.label === "Phone" ? undefined : "_blank"}
                rel={contact.label === "Email" || contact.label === "Phone" ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                {/* Hover glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${contact.color} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500`} />

                <div className="relative bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6 hover:border-orange-500/30 transition-all duration-500">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 bg-gradient-to-br ${contact.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 mb-1">{contact.label}</div>
                      <div className="font-semibold text-gray-200" style={{ fontSize: '1rem', fontWeight: 600 }}>
                        {contact.value}
                      </div>
                    </div>
                    <Send className="w-5 h-5 text-gray-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-indigo-500/20 rounded-2xl blur-xl" />

            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-orange-500/30 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                Send a Message
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-orange-500/50 focus:outline-none transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-orange-500/50 focus:outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-orange-500/50 focus:outline-none transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-orange-500/50 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ fontSize: '1rem', fontWeight: 500 }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Download Resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300"
              style={{ fontSize: '1rem', fontWeight: 500 }}
            >
              <FileText className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
