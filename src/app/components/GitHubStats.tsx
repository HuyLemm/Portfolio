import { motion } from "motion/react";
import { GitBranch, Star, GitFork, Activity } from "lucide-react";

export default function GitHubStats() {
  const stats = [
    { icon: GitBranch, label: "Total Repositories", value: "25+", color: "from-orange-500 to-amber-500" },
    { icon: Star, label: "Backend Projects", value: "12", color: "from-blue-500 to-cyan-500" },
    { icon: GitFork, label: "AI/ML Projects", value: "6", color: "from-purple-500 to-pink-500" },
    { icon: Activity, label: "Active Contributions", value: "500+", color: "from-green-500 to-emerald-500" }
  ];

  const languages = [
    { name: "JavaScript/TypeScript", percentage: 35, color: "bg-yellow-500" },
    { name: "Python", percentage: 25, color: "bg-blue-500" },
    { name: "C++/C#", percentage: 15, color: "bg-purple-500" },
    { name: "Java", percentage: 10, color: "bg-red-500" },
    { name: "Other", percentage: 15, color: "bg-gray-500" }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0B0F19]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[128px]" />
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
            GitHub <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Analytics</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontSize: '1.25rem', fontWeight: 400 }}>
            Developer activity and contribution insights
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
              className="group"
            >
              <div className="bg-white/5 rounded-xl border border-white/10 p-6 hover:border-orange-500/30 transition-colors duration-150">
                <div className={`inline-flex p-3 bg-gradient-to-br ${stat.color} rounded-lg mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2" style={{ fontSize: '2rem', fontWeight: 700 }}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Language distribution */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white/5 rounded-2xl border border-white/10 p-8 hover:border-orange-500/30 transition-colors duration-150"
          >
            <h3 className="text-2xl font-bold mb-6" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
              Most Used Languages
            </h3>
            <div className="space-y-4">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.05, duration: 0.3, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">{lang.name}</span>
                    <span className="text-sm text-gray-400">{lang.percentage}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                      className={`h-full ${lang.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contribution heatmap simulation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white/5 rounded-2xl border border-white/10 p-8 hover:border-orange-500/30 transition-colors duration-150"
          >
            <h3 className="text-2xl font-bold mb-6" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
              Contribution Activity
            </h3>
            <div className="space-y-3">
              {[...Array(7)].map((_, weekIndex) => (
                <div key={weekIndex} className="flex gap-1">
                  {[...Array(52)].map((_, dayIndex) => {
                    const intensity = Math.random();
                    return (
                      <div
                        key={dayIndex}
                        className={`w-2 h-2 rounded-sm transition-transform duration-150 hover:scale-125 ${
                          intensity > 0.7
                            ? 'bg-orange-500'
                            : intensity > 0.5
                            ? 'bg-orange-600'
                            : intensity > 0.3
                            ? 'bg-orange-700'
                            : intensity > 0.1
                            ? 'bg-orange-800'
                            : 'bg-white/5'
                        }`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-white/5 rounded-sm" />
                <div className="w-3 h-3 bg-orange-800 rounded-sm" />
                <div className="w-3 h-3 bg-orange-700 rounded-sm" />
                <div className="w-3 h-3 bg-orange-600 rounded-sm" />
                <div className="w-3 h-3 bg-orange-500 rounded-sm" />
              </div>
              <span>More</span>
            </div>
          </motion.div>
        </div>

        {/* GitHub profile link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/HuyLemm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-shadow duration-150"
            style={{ fontSize: '1rem', fontWeight: 500 }}
          >
            <GitBranch className="w-5 h-5" />
            View Full GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
