"use client";

import { personalData } from "./data";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Instagram, ArrowRight, FileText, Folder, ExternalLink, Brain, Code2, Server } from "lucide-react";
import SkillsLogos from "@/components/SkillsLogos";
import Image from "next/image";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full-Stack Developer & Aspiring AI Engineer based in Pakistan.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)] selection:text-white">
      {/* Fixed Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--accent)]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[var(--secondary)]/10 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-black/5 bg-[var(--bg)]/80">
        <div className="container py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter">
            AAL<span className="text-[var(--accent)]">.</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <a href="#about" className="hover:text-[var(--accent)] transition-colors">About</a>
            <a href="#experience" className="hover:text-[var(--accent)] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[var(--accent)] transition-colors">Projects</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative pt-32 pb-20 overflow-hidden">
        
        <div className="container grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-sm text-[var(--accent)] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
              </span>
              Available for work
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-[var(--text)]">
              ADIL ALI <br />
              <span className="text-[var(--accent)]">LAKHAIR</span>
            </h1>
            <p className="text-gray-500 text-lg mb-8 max-w-lg leading-relaxed">
              Full-Stack Developer & Aspiring AI Engineer crafting intelligent systems. 
              <span className="block mt-2 text-[var(--text)]/60 italic">"Failure is the condiment that gives success."</span>
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3.5 bg-[var(--accent)] text-white font-bold rounded-full hover:bg-[var(--accent-hover)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3.5 bg-white border border-gray-200 text-gray-700 rounded-full hover:bg-gray-50 transition-all hover:-translate-y-1 shadow-sm"
              >
                View Work
              </a>
            </div>
          </motion.div>

          {/* Right Content - Tech Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px]">
              {/* Abstract Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/20 to-[var(--secondary)]/20 blur-[80px] opacity-60" />
              
              {/* Main Glass Card - Terminal */}
              <div className="relative bg-[#1e1e1e] text-white border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="ml-4 text-xs text-gray-400 font-mono">adil.ai — bash</div>
                </div>
                
                {/* Content */}
                <div className="p-6 font-mono text-sm md:text-base space-y-4">
                  <div>
                    <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-gray-400">whoami</span>
                  </div>
                  <div className="text-gray-300 min-h-[24px]">
                    {typedText}
                    <span className="animate-pulse inline-block w-2 h-4 bg-[var(--accent)] align-middle ml-1" />
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                  >
                    <div>
                      <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-gray-400">cat skills.json</span>
                    </div>
                    <div className="text-gray-300 mt-2">
                      <span className="text-yellow-400">{"{"}</span><br/>
                      &nbsp;&nbsp;<span className="text-purple-400">"languages"</span>: [<span className="text-green-400">"Python"</span>, <span className="text-green-400">"Java"</span>, <span className="text-green-400">"C++"</span>],<br/>
                      &nbsp;&nbsp;<span className="text-purple-400">"focus"</span>: [<span className="text-green-400">"LLMs"</span>, <span className="text-green-400">"Fine-tuning"</span>, <span className="text-green-400">"RAG"</span>]<br/>
                      <span className="text-yellow-400">{"}"}</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5 }}
                  >
                    <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="inline-block w-2 h-4 bg-gray-500 align-middle ml-1" />
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 p-4 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-xl hidden md:block"
              >
                <Brain className="text-[var(--accent)]" size={32} />
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 p-4 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-xl hidden md:block"
              >
                <Code2 className="text-blue-400" size={32} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Cards */}
        <div className="container">
            <div className="grid md:grid-cols-3 gap-6">
                <HeroCard 
                    title="Design Principles" 
                    desc="Minimalist and modern UI designs focused on user experience."
                    icon={<Brain className="text-[var(--accent)]" size={24} />}
                />
                <HeroCard 
                    title="Development" 
                    desc="Scalable web applications using Next.js, React, and Node.js."
                    icon={<Code2 className="text-blue-400" size={24} />}
                />
                <HeroCard 
                    title="AI Solutions" 
                    desc="Integrating intelligent agents and LLMs into workflows."
                    icon={<Server className="text-purple-400" size={24} />}
                />
            </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsLogos />

      {/* About Section */}
      <section id="about" className="section">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[var(--text)]">About Me</h2>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
              {personalData.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[var(--text)]">Experience</h2>
          
          <div className="relative border-l border-gray-200 ml-4 md:ml-6 space-y-12">
            {personalData.experience.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[var(--text)]">Education</h2>
          
          <div className="relative border-l border-gray-200 ml-4 md:ml-6 space-y-12">
            {personalData.education.map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[var(--accent)] ring-4 ring-white" />
                
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text)]">{edu.degree}</h3>
                      <p className="text-[var(--accent)] font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-sm font-mono text-gray-500 bg-gray-100 px-3 py-1 rounded-full w-fit">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-[var(--text)]">
              Selected <span className="text-[var(--accent)]">Works</span>
            </h2>
            <p className="text-gray-500 max-w-2xl text-lg">
              A collection of projects exploring AI, web development, and system architecture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                      <Folder size={48} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[var(--text)] transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 text-xs font-medium bg-gray-50 text-gray-600 rounded-md border border-gray-100"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2.5 py-1 text-xs font-medium bg-gray-50 text-gray-400 rounded-md border border-gray-100">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--text)]">Contact Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--text)]">Get In Touch</h3>
              <p className="text-gray-500 mb-8">
                Feel free to contact me for any work or suggestions below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="text-[var(--accent)]" size={20} />
                  <a href={`mailto:${personalData.socials.email}`} className="hover:text-[var(--accent)] transition-colors">
                    {personalData.socials.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Linkedin className="text-[var(--accent)]" size={20} />
                  <a href={personalData.socials.linkedin} target="_blank" className="hover:text-[var(--accent)] transition-colors">
                    linkedin.com/in/aadilijaz
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Github className="text-[var(--accent)]" size={20} />
                  <a href={personalData.socials.github} target="_blank" className="hover:text-[var(--accent)] transition-colors">
                    github.com/Adil-Ijaz7
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[var(--text)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Your email"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[var(--text)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    placeholder="Your message"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-[var(--text)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-bold py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 mt-20 bg-gray-50">
        <div className="container text-center">
          <div className="flex justify-center gap-6 mb-8">
            <SocialLink href={personalData.socials.github} icon={<Github size={20} />} />
            <SocialLink href={personalData.socials.linkedin} icon={<Linkedin size={20} />} />
            <SocialLink href={`mailto:${personalData.socials.email}`} icon={<Mail size={20} />} />
            <SocialLink href={personalData.socials.instagram} icon={<Instagram size={20} />} />
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {personalData.name}. Built with Next.js & Tailwind.
          </p>
        </div>
      </footer>
    </main>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      className="p-3 rounded-full bg-white text-gray-400 hover:text-white hover:bg-[var(--accent)] border border-gray-200 hover:border-[var(--accent)] transition-all duration-300 shadow-sm"
    >
      {icon}
    </a>
  );
}

function HeroCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.02 }}
      className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 group cursor-default"
    >
      <div className="mb-4 p-3 bg-gray-50 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}

function ExperienceCard({ exp, index }: { exp: any, index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[var(--accent)] ring-4 ring-white" />
      
      <motion.div 
        whileHover={{ x: 10 }}
        className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-default"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
          <div>
            <h3 className="text-xl font-bold text-[var(--text)]">{exp.role}</h3>
            <p className="text-[var(--accent)] font-medium">{exp.company}</p>
          </div>
          <span className="text-sm font-mono text-gray-500 bg-gray-100 px-3 py-1 rounded-full w-fit">
            {exp.period}
          </span>
        </div>
        
        <ul className="list-disc list-inside text-gray-600 leading-relaxed text-sm md:text-base space-y-2">
            {(isExpanded ? exp.description : exp.description.slice(0, 2)).map((item: string, i: number) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        
        {exp.description.length > 2 && (
            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 text-sm font-medium text-[var(--accent)] hover:underline focus:outline-none"
            >
                {isExpanded ? "Show Less" : "Show More"}
            </button>
        )}
      </motion.div>
    </motion.div>
  );
}

