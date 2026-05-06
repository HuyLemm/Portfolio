import { motion } from "motion/react";
import { Code2, Database, Brain, Workflow, Shield, Cpu, Mail, MapPin, Github, Layout } from "lucide-react";
import profilePhoto from "../../imports/photo.jpg";

export default function About() {
  const focusAreas = [
    { icon: Database, title: "Backend Engineering", desc: "RESTful APIs, Express.js, Spring Boot & .NET", color: "from-orange-500 to-amber-500" },
    { icon: Layout, title: "Frontend Development", desc: "React, Next.js, TypeScript & Tailwind CSS", color: "from-blue-500 to-cyan-500" },
    { icon: Brain, title: "AI/ML Engineering", desc: "NLP, RAG systems & semantic retrieval", color: "from-purple-500 to-pink-500" },
    { icon: Shield, title: "Database Management", desc: "PostgreSQL, MongoDB, Firebase & Supabase", color: "from-green-500 to-emerald-500" },
    { icon: Code2, title: "Cloud & IoT", desc: "Azure Power Platform, ESP32, MQTT & Node-RED", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Performance Optimization", desc: "Query optimization, indexing & FAISS search", color: "from-red-500 to-orange-500" }
  ];

  const timeline = [
    {
      year: "2021 - 2026",
      title: "Bachelor's Degree",
      organization: "VNUHCM - University of Science",
      description: "Information Technology",
      type: "education"
    },
    {
      year: "2021 - 2023",
      title: "IELTS 6.5",
      organization: "IDP Education",
      description: "English proficiency certification",
      type: "certification"
    },
    {
      year: "Nov 2024 - Feb 2025",
      title: "ERP Technical Consultant OJT",
      organization: "FPT Software",
      description: "Power Platform, C#, .NET, JavaScript",
      type: "experience"
    },
    {
      year: "Jun 2024 - Aug 2024",
      title: "IT Intern",
      organization: "C.P Vietnam Corporation",
      description: "Web development & IT support",
      type: "experience"
    }
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0f1421] to-[#0B0F19]">
        {/* Animated orbs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4" style={{ fontSize: '3rem', fontWeight: 700 }}>
            About <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-300 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontSize: '1.25rem', fontWeight: 400 }}>
            Backend engineer building <span className="text-orange-400 font-semibold">scalable systems</span> and <span className="text-purple-400 font-semibold">AI-powered solutions</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Profile Photo & Info */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex-shrink-0"
              >
                <div className="relative group">
                  {/* Static outer ring */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 via-amber-300 to-orange-500 rounded-full" />

                  {/* Photo container */}
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#0B0F19] shadow-2xl">
                    <img
                      src={profilePhoto}
                      alt="Lâm Thiều Huy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                    />
                  </div>

                  {/* Floating badge */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-2 -right-2 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full p-3 shadow-lg border-4 border-[#0B0F19]"
                  >
                    <Database className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Profile Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
                className="flex-1 space-y-4 text-center md:text-left"
              >
                <div>
                  <h3 className="text-3xl font-bold mb-2" style={{ fontSize: '2rem', fontWeight: 700 }}>
                    Lâm Thiều Huy
                  </h3>
                  <p className="text-lg text-orange-400 font-semibold mb-4">Backend Developer</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300 justify-center md:justify-start">
                    <Mail className="w-4 h-4 text-orange-400" />
                    <span className="text-sm">lthuy21.work@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 justify-center md:justify-start">
                    <MapPin className="w-4 h-4 text-orange-400" />
                    <span className="text-sm">Ho Chi Minh City, Vietnam</span>
                  </div>
                  <a
                    href="https://github.com/HuyLemm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors justify-center md:justify-start"
                  >
                    <Github className="w-4 h-4 text-orange-400" />
                    <span className="text-sm">github.com/HuyLemm</span>
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 justify-center md:justify-start">
                  <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs text-orange-300">
                    IELTS 6.5
                  </span>
                  <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300">
                    Fresh Graduate
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-xs text-green-300">
                    Open to Work
                  </span>
                </div>
              </motion.div>
            </div>

            <div className="relative group">
              <div className="relative bg-white/5 rounded-2xl border border-white/10 p-8 shadow-2xl hover:border-orange-500/30 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-orange-400 to-amber-300 rounded-full" />
                  <h3 className="text-2xl font-bold" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    Introduction
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6" style={{ fontSize: '1rem', fontWeight: 400 }}>
                  As a recent graduate, I have a strong passion for building <span className="text-orange-400 font-semibold">scalable, high-performance systems</span>. I focus on backend development, specializing in RESTful APIs, backend frameworks (Express.js, Spring Boot, .NET), and database optimization that power modern applications.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6" style={{ fontSize: '1rem', fontWeight: 400 }}>
                  While my strength is in backend, I'm also eager to grow into a <span className="text-blue-400 font-semibold">fullstack developer</span> by expanding my frontend skills. I have experience with React, Next.js, TypeScript, and Tailwind CSS from various projects, allowing me to build complete web applications from API to UI.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6" style={{ fontSize: '1rem', fontWeight: 400 }}>
                  I'm deeply interested in <span className="text-purple-400 font-semibold">AI/ML engineering</span>, particularly in semantic retrieval systems, NLP, and RAG architectures. I combine backend expertise with machine learning to create intelligent, data-driven solutions.
                </p>
                <p className="text-gray-300 leading-relaxed" style={{ fontSize: '1rem', fontWeight: 400 }}>
                  Currently seeking opportunities where I can contribute to challenging projects, learn from experienced teams, and continue growing my skills in both backend and frontend development.
                </p>
              </div>
            </div>

            {/* Focus areas grid */}
            <div className="grid grid-cols-2 gap-4">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
                  className="group relative"
                >
                  <div className="relative bg-white/5 rounded-xl border border-white/10 p-6 hover:border-white/30 transition-colors duration-150">
                    <div className={`p-2 bg-gradient-to-br ${area.color} rounded-lg w-fit mb-3`}>
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                      {area.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{area.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/0 via-orange-500/50 to-orange-500/0" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
                  className="relative pl-20"
                >
                  {/* Timeline node */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full border-4 border-orange-500 bg-[#0B0F19]">
                    <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-50" />
                  </div>

                  <div className="bg-white/5 rounded-xl border border-white/10 p-6 hover:border-orange-500/30 hover:bg-orange-500/5 transition-colors duration-150">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-sm font-mono text-orange-400">{item.year}</span>
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        item.type === 'education'
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          : item.type === 'certification'
                          ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                          : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                    <h4 className="font-bold mb-2" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                      {item.title}
                    </h4>
                    <p className="text-orange-400 mb-2" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                      {item.organization}
                    </p>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
