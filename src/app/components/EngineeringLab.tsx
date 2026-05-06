import { motion } from "motion/react";
import { Puzzle, Terminal, Brain, FileText, Radio, Lock, BookOpen } from "lucide-react";

export default function EngineeringLab() {
  const experiments = [
    {
      title: "CoreSift",
      subtitle: "Smart Text Tools Chrome Extension",
      category: "AI Productivity Tool",
      icon: Puzzle,
      technologies: ["Manifest V3", "Python", "Machine Learning"],
      description: "Browser-based AI text processing with smart productivity tooling"
    },
    {
      title: "CrossingRoad",
      subtitle: "Terminal Crossing Road Game",
      category: "OOP / Systems Programming",
      icon: Terminal,
      technologies: ["C++", "OOP"],
      description: "Terminal-based game engine with collision systems and OOP architecture"
    },
    {
      title: "TextMining",
      subtitle: "Deep Text Explorer",
      category: "NLP / Deep Learning",
      icon: Brain,
      technologies: ["Python", "PyTorch", "T5", "BARTpho", "DistilBert", "XLNet"],
      description: "Transformer experimentation with multilingual NLP workflows"
    },
    {
      title: "TextClassification",
      subtitle: "AI Classification Systems",
      category: "AI Classification",
      icon: FileText,
      technologies: ["Python", "T5", "BARTpho", "DistilBert", "XLNet"],
      description: "Text classification pipelines with transformer benchmarking"
    },
    {
      title: "CryptographicEncryption",
      subtitle: "Learn Cryptography",
      category: "Security / Cryptography",
      icon: Lock,
      technologies: ["C++", "Python", "OpenSSL", "RSA", "DSA", "ElGamal"],
      description: "Encryption algorithm implementation with public/private key systems"
    },
    {
      title: "StoryPrep",
      subtitle: "Story Based Learning",
      category: "AI Education Tool",
      icon: BookOpen,
      technologies: ["Clarifai", "Python", "CSS"],
      description: "AI-assisted educational system with story generation workflow"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0B0F19]">
        <div className="absolute inset-0">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" style={{ top: '25%' }} />
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" style={{ top: '50%' }} />
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" style={{ top: '75%' }} />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
            <Radio className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Experimental Projects</span>
          </div>
          <h2 className="text-5xl font-bold mb-4" style={{ fontSize: '3rem', fontWeight: 700 }}>
            Engineering <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Lab</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontSize: '1.25rem', fontWeight: 400 }}>
            Research & experimentation across AI, security, NLP, and systems programming
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
              className="group relative"
            >
              <div className="relative bg-white/5 rounded-xl border border-white/10 p-6 hover:border-purple-500/30 transition-colors duration-150 h-full flex flex-col"
              >
                {/* Icon & Category */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
                    <project.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-xs px-2 py-1 bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-full">
                    R&D
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold mb-1" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                  {project.title}
                </h3>
                <p className="text-sm text-purple-400 mb-3">{project.subtitle}</p>

                {/* Category badge */}
                <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-full text-xs mb-4 w-fit">
                  {project.category}
                </span>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {project.technologies.slice(0, 3).map((tech, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-500 hover:text-purple-300 hover:border-purple-500/30 transition-colors duration-150"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-500">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">Explore more experimental projects on GitHub</p>
          <a
            href="https://github.com/HuyLemm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-colors duration-150"
          >
            View GitHub Profile
            <span className="text-purple-400">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
