import { motion } from "motion/react";
import { Github, Mail, FileText, ArrowDown } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const techStack = [
    { name: "Node.js", color: "from-green-500 to-emerald-500" },
    { name: "Python", color: "from-blue-500 to-cyan-500" },
    { name: "PostgreSQL", color: "from-indigo-500 to-purple-500" },
    { name: "MongoDB", color: "from-green-600 to-green-400" },
    { name: "Express.js", color: "from-gray-600 to-gray-400" },
    { name: "TypeScript", color: "from-blue-600 to-blue-400" },
    { name: "PyTorch", color: "from-orange-600 to-red-500" },
    { name: "FAISS", color: "from-purple-600 to-pink-500" },
    { name: "Spring Boot", color: "from-green-500 to-green-600" },
    { name: "React", color: "from-cyan-500 to-blue-400" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#1a1f2e] to-[#0B0F19]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Floating particles - minimal for max performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-green-300">Open to opportunities</span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                className="text-6xl lg:text-7xl font-bold leading-tight"
                style={{ fontSize: '4.5rem', fontWeight: 700, lineHeight: 1.1 }}
              >
                <span className="inline-block">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
                  >
                    Backend Engineer
                  </motion.span>
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-300 bg-clip-text text-transparent">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
                  >
                    specializing in
                  </motion.span>
                </span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  AI/ML Systems
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
                style={{ fontSize: '1.25rem', fontWeight: 400 }}
              >
                Crafting <span className="text-orange-400 font-semibold">high-performance backend systems</span> and <span className="text-purple-400 font-semibold">intelligent AI applications</span>. Specialized in scalable APIs, database optimization, semantic search, and RAG-powered solutions.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-shadow duration-150 flex items-center gap-2 overflow-hidden cursor-pointer"
                style={{ fontSize: '1rem', fontWeight: 500 }}
              >
                <span className="relative">View Projects</span>
                <ArrowDown className="w-4 h-4 relative group-hover:translate-y-0.5 transition-transform duration-150" />
              </a>

              <a
                href="https://github.com/HuyLemm"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/5 rounded-lg border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-colors duration-150 flex items-center gap-2 cursor-pointer"
                style={{ fontSize: '1rem', fontWeight: 500 }}
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>

              <button
                onClick={onContactClick}
                className="px-8 py-4 bg-white/5 rounded-lg border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 transition-colors duration-150 flex items-center gap-2 cursor-pointer"
                style={{ fontSize: '1rem', fontWeight: 500 }}
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </button>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.4, ease: "easeOut" }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.85 + i * 0.03, duration: 0.3, ease: "easeOut" }}
                  className="relative group"
                >
                  <span className="relative block px-4 py-2 bg-white/5 rounded-full border border-white/20 text-sm text-gray-300 group-hover:border-white/40 group-hover:text-white transition-colors duration-150">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-indigo-500/10 rounded-3xl blur-xl" />

              {/* Main card */}
              <div className="relative bg-white/5 rounded-2xl border border-white/10 p-8 shadow-2xl">
                <div className="space-y-6">
                  {/* Code snippet simulation */}
                  <div className="font-mono text-sm space-y-2">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.3, ease: "easeOut" }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-gray-500">01</span>
                      <span className="text-purple-400">class</span>
                      <span className="text-yellow-300"> BackendEngineer</span>
                      <span className="text-gray-400"> {`{`}</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.85, duration: 0.3, ease: "easeOut" }}
                      className="flex items-start gap-3 pl-8"
                    >
                      <span className="text-gray-500">02</span>
                      <span className="text-green-300">name</span>
                      <span className="text-gray-400">:</span>
                      <span className="text-orange-300">"Lâm Thiều Huy"</span>
                      <span className="text-gray-400">;</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9, duration: 0.3, ease: "easeOut" }}
                      className="flex items-start gap-3 pl-8"
                    >
                      <span className="text-gray-500">03</span>
                      <span className="text-green-300">specialization</span>
                      <span className="text-gray-400">:</span>
                      <span className="text-orange-300">"Backend & AI/ML"</span>
                      <span className="text-gray-400">;</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.95, duration: 0.3, ease: "easeOut" }}
                      className="flex items-start gap-3 pl-8"
                    >
                      <span className="text-gray-500">04</span>
                      <span className="text-green-300">expertise</span>
                      <span className="text-gray-400">: [</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0, duration: 0.3, ease: "easeOut" }}
                      className="flex items-start gap-3 pl-12"
                    >
                      <span className="text-gray-500">05</span>
                      <span className="text-orange-300">"RESTful API Design"</span>
                      <span className="text-gray-400">,</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.05, duration: 0.3, ease: "easeOut" }}
                      className="flex items-start gap-3 pl-12"
                    >
                      <span className="text-gray-500">06</span>
                      <span className="text-orange-300">"Database Optimization"</span>
                      <span className="text-gray-400">,</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1, duration: 0.3, ease: "easeOut" }}
                      className="flex items-start gap-3 pl-12"
                    >
                      <span className="text-gray-500">07</span>
                      <span className="text-purple-300">"NLP & RAG Systems"</span>
                      <span className="text-gray-400">,</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.15, duration: 0.3, ease: "easeOut" }}
                      className="flex items-start gap-3 pl-12"
                    >
                      <span className="text-gray-500">08</span>
                      <span className="text-purple-300">"Semantic Search"</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2, duration: 0.3, ease: "easeOut" }}
                      className="flex items-start gap-3 pl-8"
                    >
                      <span className="text-gray-500">09</span>
                      <span className="text-gray-400"> ];</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.25, duration: 0.3, ease: "easeOut" }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-gray-500">10</span>
                      <span className="text-gray-400">{`}`}</span>
                    </motion.div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-400" style={{ fontSize: '1.5rem', fontWeight: 700 }}>15+</div>
                      <div className="text-xs text-gray-400">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-400" style={{ fontSize: '1.5rem', fontWeight: 700 }}>4</div>
                      <div className="text-xs text-gray-400">AI Systems</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-400" style={{ fontSize: '1.5rem', fontWeight: 700 }}>2</div>
                      <div className="text-xs text-gray-400">Experiences</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 -top-4 bg-gradient-to-br from-orange-500 to-amber-500 p-4 rounded-xl shadow-lg shadow-orange-500/30"
              >
                <FileText className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-4 -bottom-4 bg-gradient-to-br from-indigo-500 to-purple-500 p-4 rounded-xl shadow-lg shadow-indigo-500/30"
              >
                <Github className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-orange-500/30 rounded-full flex items-start justify-center p-2 will-change-transform"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-orange-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
