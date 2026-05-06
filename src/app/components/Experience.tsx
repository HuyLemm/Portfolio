import { motion } from "motion/react";
import { Building2, Briefcase, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "FPT Software",
      role: "ERP Technical Consultant OJT",
      period: "November 2024 - February 2025",
      type: "On-the-Job Training",
      achievements: [
        "Proficient in Power Platform through building a complete enterprise website",
        "Modified and extended functionalities using JavaScript for the interface and IPlugin C# with .NET for backend operations",
        "Contributed to two major projects at FPT: IDEC and SEPTINI",
        "Learned and applied professional Git workflows"
      ],
      technologies: ["Microsoft Power Platform", "C#", ".NET", "JavaScript", "Git"]
    },
    {
      company: "C.P Vietnam Corporation",
      role: "IT Intern",
      period: "June 2024 - August 2024",
      type: "Internship",
      achievements: [
        "Contributed to the development of the company's promotional website using Javascript, HTML, CSS and React.js",
        "Assisted in troubleshooting and resolving hardware and software issues for over 150 employees using TeamViewer, Microsoft Teams",
        "Helped set up and manage network devices including routers and switches, ensuring secure and efficient network operations"
      ],
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "TeamViewer", "Network Administration"]
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0B0F19]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
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
            Professional <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontSize: '1.25rem', fontWeight: 400 }}>
            Building enterprise systems and applications with cutting-edge technologies
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/0 via-orange-500/50 to-orange-500/0 hidden lg:block" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className={`relative grid lg:grid-cols-2 gap-8 ${
                  i % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 top-8 w-6 h-6 -ml-3 rounded-full border-4 border-orange-500 bg-[#0B0F19] z-10 hidden lg:block">
                  <div className="absolute inset-0 rounded-full bg-orange-500/40 animate-ping" />
                </div>

                {/* Content */}
                <div className={`${i % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                  <div className="group relative">
                    <div className="relative bg-white/5 rounded-2xl border border-white/10 p-8 shadow-2xl hover:border-orange-500/30 transition-colors duration-150"
                  >
                      {/* Header */}
                      <div className={`flex items-start gap-4 mb-6 ${i % 2 === 0 ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                        <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl shadow-lg">
                          <Building2 className="w-6 h-6 text-white" />
                        </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                          {exp.company}
                        </h3>
                        <p className="text-orange-400 mb-1" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                          {exp.role}
                        </p>
                        <div className="flex items-center gap-3 text-sm text-gray-400" style={{ justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                          <span className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span className={`px-3 py-1 rounded-full ${
                            exp.type === "On-the-Job Training"
                              ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30"
                              : "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30"
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ delay: 0.05 * j, duration: 0.3, ease: "easeOut" }}
                          className={`flex items-start gap-3 ${i % 2 === 0 ? 'lg:flex-row-reverse lg:text-right' : ''}`}
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-300" style={{ fontSize: '0.9375rem', fontWeight: 400 }}>
                            {achievement}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      {exp.technologies.map((tech, j) => (
                        <motion.span
                          key={j}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ delay: 0.05 * j, duration: 0.3, ease: "easeOut" }}
                          className="px-3 py-1 bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-full text-sm hover:bg-orange-500/20 hover:border-orange-500/40 transition-colors duration-150 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
