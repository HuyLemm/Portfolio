import { motion } from "motion/react";
import { Github, ExternalLink, Database, Brain, ShoppingCart, Tv } from "lucide-react";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Cross-Lingual Semantic Search",
      category: "AI / NLP / Retrieval Systems",
      description: "EN/VI semantic retrieval system with FAISS vector search, embedding similarity, and incremental indexing pipeline for efficient document retrieval.",
      icon: Brain,
      features: [
        "FAISS vector search with top-k retrieval",
        "Sentence-transformers & PyTorch",
        "Incremental PDF corpus updates",
        "Retrieval evaluation dashboard"
      ],
      technologies: ["React", "TypeScript", "Express.js", "Python", "Flask", "FAISS", "PyTorch"],
      github: "https://github.com/HuyLemm/Cross-Lingual-Semantic-Search",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Fanta — Watching Movie Online",
      category: "Fullstack / Backend / AI",
      description: "Full-stack movie streaming platform with AI chatbot integration, recommendation system, and comprehensive user management features.",
      icon: Tv,
      features: [
        "Movie streaming with discovery features",
        "RAG-based AI chatbot for recommendations",
        "Watch history & personalized suggestions",
        "Admin CMS with RBAC"
      ],
      technologies: ["React", "Express.js", "MongoDB", "JWT", "Next.js", "TypeScript", "AI Chatbot"],
      github: "https://github.com/HuyLemm/Fanta",
      demo: "https://fanta-cutie.vercel.app",
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "LuxeAuction — Online Bidding Platform",
      category: "Enterprise Fullstack System",
      description: "Enterprise auction platform with auto-bid engine, real-time bidding logic, and secure authentication for seamless auction workflows.",
      icon: ShoppingCart,
      features: [
        "Auto-bid engine with ceiling limits",
        "Bid conflict handling & priority rules",
        "Secure auth + OTP verification",
        "Admin dashboard with moderation tools"
      ],
      technologies: ["React", "Express.js", "TypeScript", "PostgreSQL", "Supabase", "Knex", "JWT"],
      github: "https://github.com/HuyLemm/OnlineAuction",
      demo: "https://online-auction-tw92.vercel.app",
      gradient: "from-amber-500 to-yellow-500"
    },
    {
      title: "Pet Tracking Collar",
      category: "IoT / Embedded Systems",
      description: "IoT pet-tracking collar prototype with real-time GPS monitoring, temperature sensing, and remote control via MQTT dashboard.",
      icon: Database,
      features: [
        "Real-time GPS & temperature data",
        "MQTT communication with HiveMQ",
        "Remote buzzer/LED control",
        "Node-RED dashboard integration"
      ],
      technologies: ["ESP32", "Arduino C/C++", "MQTT", "Node-RED", "DHT22", "Wokwi"],
      github: "https://github.com/HuyLemm/PetTrackingCollar",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0f1421] to-[#0B0F19]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-orange-500/20 rounded-full blur-[128px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
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
            Featured <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontSize: '1.25rem', fontWeight: 400 }}>
            Scalable systems, AI-powered applications, and real-world engineering solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="group relative"
            >
              <div className="relative bg-white/5 rounded-2xl border border-white/10 p-8 hover:border-orange-500/30 transition-colors duration-150 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 bg-gradient-to-br ${project.gradient} rounded-xl shadow-lg`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-orange-500/50 transition-colors duration-150"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-orange-500/50 transition-colors duration-150"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Category */}
                <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-full text-sm mb-4 w-fit">
                  {project.category}
                </span>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-3" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6" style={{ fontSize: '0.9375rem', fontWeight: 400 }}>
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6 flex-grow">
                  {project.features.map((feature, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: 0.03 * j, duration: 0.3, ease: "easeOut" }}
                      className="flex items-start gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-400">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                  {project.technologies.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 hover:border-orange-500/30 hover:text-orange-300 transition-colors duration-150"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
