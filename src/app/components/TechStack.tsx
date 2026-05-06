import { motion } from "motion/react";

export default function TechStack() {
  const techCategories = [
    {
      name: "Backend",
      color: "from-orange-500 to-amber-500",
      techs: ["Node.js", "Express.js", "Spring Boot", ".NET", "Python", "Flask"]
    },
    {
      name: "Frontend",
      color: "from-blue-500 to-cyan-500",
      techs: ["React", "TypeScript", "Next.js", "Bootstrap", "Tailwind CSS", "HTML/CSS"]
    },
    {
      name: "AI/ML",
      color: "from-purple-500 to-pink-500",
      techs: ["PyTorch", "FAISS", "sentence-transformers", "Hugging Face", "NLP", "RAG"]
    },
    {
      name: "Databases",
      color: "from-green-500 to-emerald-500",
      techs: ["PostgreSQL", "Supabase", "MongoDB", "MySQL", "Firebase", "Knex"]
    },
    {
      name: "Dev Tools",
      color: "from-gray-500 to-slate-500",
      techs: ["Git", "Postman", "Jira", "Slack", "VS Code", "TeamViewer"]
    },
    {
      name: "Cloud & IoT",
      color: "from-indigo-500 to-violet-500",
      techs: ["Azure Power Platform", "Firebase", "ESP32", "MQTT", "Node-RED", "Wokwi"]
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0f1421] to-[#0B0F19]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4" style={{ fontSize: '3rem', fontWeight: 700 }}>
            Tech <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontSize: '1.25rem', fontWeight: 400 }}>
            Backend-focused technologies for building <span className="text-orange-400 font-semibold">high-performance systems</span> and <span className="text-purple-400 font-semibold">AI-powered applications</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
              className="group relative"
            >
              <div className="relative bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-colors duration-150">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} shadow-lg`} />
                  <h3 className="font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                    {category.name}
                  </h3>
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, j) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: i * 0.05 + j * 0.02, duration: 0.3, ease: "easeOut" }}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm hover:border-white/30 hover:bg-white/10 transition-colors duration-150 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating tech visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-20 relative h-40"
        >
          <div className="absolute inset-0 flex items-center justify-center gap-4 flex-wrap">
            {["TypeScript", "React", "Python", "Node.js", "PostgreSQL", "MongoDB", "PyTorch", "Express.js"].map((tech, i) => (
              <motion.div
                key={tech}
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
                className="px-4 py-2 bg-white/5 rounded-full border border-orange-500/20 text-sm font-mono text-gray-300 hover:border-orange-500/50 hover:text-orange-300 transition-colors duration-150"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
