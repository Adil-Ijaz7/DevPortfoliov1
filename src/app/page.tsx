"use client";

import { personalData } from "./data";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, ArrowRight, FileText, Folder, ExternalLink, Brain, Code2, Server } from "lucide-react";
import SkillsLogos from "@/components/SkillsLogos";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-white selection:bg-[var(--accent)] selection:text-white">
      {/* Fixed Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(191,90,242,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_100%_100%,rgba(191,90,242,0.05),transparent_50%)]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5 bg-[var(--bg)]/80">
        <div className="container py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter">
            AAL<span className="text-[var(--accent)]">.</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-[var(--accent)] transition-colors">About</a>
            <a href="#experience" className="hover:text-[var(--accent)] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[var(--accent)] transition-colors">Projects</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative pt-32 pb-20 overflow-hidden">
        {/* Background Shape */}
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[70%] bg-[var(--accent)] rounded-full blur-[120px] opacity-20 -z-10" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-blue-600 rounded-full blur-[120px] opacity-10 -z-10" />
        
        <div className="container grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-[var(--accent)] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
              </span>
              Available for work
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
              ADIL ALI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-blue-500">LAKHAIR</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
              Full-Stack Developer & AI Specialist crafting intelligent systems. 
              <span className="block mt-2 text-white/60 italic">"Failure is the condiment that gives success."</span>
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3.5 bg-[var(--accent)] text-white font-bold rounded-full hover:bg-[var(--accent-hover)] transition-all shadow-[0_0_20px_rgba(191,90,242,0.3)] hover:shadow-[0_0_30px_rgba(191,90,242,0.5)] hover:-translate-y-1"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
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
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)] to-blue-500 blur-[100px] opacity-20" />
              
              {/* Main Glass Card - Terminal */}
              <div className="relative bg-[#0a0a0a]/90 border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl">
                {/* Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="ml-4 text-xs text-gray-500 font-mono">adil.ai — bash</div>
                </div>
                
                {/* Content */}
                <div className="p-6 font-mono text-sm md:text-base space-y-4">
                  <div>
                    <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-gray-400">whoami</span>
                  </div>
                  <div className="text-gray-300">
                    Full-Stack Developer & Aspiring AI Engineer based in Pakistan.
                  </div>
                  
                  <div>
                    <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-gray-400">cat skills.json</span>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-yellow-400">{"{"}</span><br/>
                    &nbsp;&nbsp;<span className="text-purple-400">"languages"</span>: [<span className="text-green-400">"Python"</span>, <span className="text-green-400">"Java"</span>, <span className="text-green-400">"C++"</span>],<br/>
                    &nbsp;&nbsp;<span className="text-purple-400">"focus"</span>: [<span className="text-green-400">"LLMs"</span>, <span className="text-green-400">"Fine-tuning"</span>, <span className="text-green-400">"RAG"</span>]<br/>
                    <span className="text-yellow-400">{"}"}</span>
                  </div>

                  <div className="animate-pulse">
                    <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="inline-block w-2 h-4 bg-gray-500 align-middle ml-1" />
                  </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="glass-card p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
              {personalData.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>
          
          <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
            {personalData.experience.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
                
                <div className="glass-card p-8 rounded-2xl hover:border-[var(--accent)]/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-[var(--accent)] font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <a 
              href={personalData.socials.github}
              target="_blank"
              className="text-sm text-[var(--accent)] hover:underline flex items-center gap-1"
            >
              View all on GitHub <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalData.projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-[var(--accent)] transition-all duration-300 flex flex-col h-full"
              >
                {/* Code Window Header */}
                <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                  </div>
                  <span className="ml-3 text-xs text-gray-500 font-mono truncate">
                    ~/projects/{project.title.toLowerCase().replace(/\s+/g, '-')}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <Folder className="text-[var(--accent)]" size={24} />
                    <div className="flex gap-2">
                      <a href={project.link} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={18} />
                      </a>
                      {project.link && (
                        <a href={project.link} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Contact Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-gray-400 mb-8">
                Feel free to contact me for any work or suggestions below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="text-[var(--accent)]" size={20} />
                  <a href={`mailto:${personalData.socials.email}`} className="hover:text-white transition-colors">
                    {personalData.socials.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Linkedin className="text-[var(--accent)]" size={20} />
                  <a href={personalData.socials.linkedin} target="_blank" className="hover:text-white transition-colors">
                    linkedin.com/in/aadilijaz
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Github className="text-[var(--accent)]" size={20} />
                  <a href={personalData.socials.github} target="_blank" className="hover:text-white transition-colors">
                    github.com/Adil-Ijaz7
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your name"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Your email"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    placeholder="Your message"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-bold py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 mt-20">
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
      className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-[var(--accent)] transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function HeroCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-[var(--accent)]/50 hover:bg-white/10 transition-all duration-300 group">
      <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
