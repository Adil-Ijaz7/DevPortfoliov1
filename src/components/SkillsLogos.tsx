"use client";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiMysql,
  SiAmazon,
  SiLinux,
  SiFastapi,
  SiPytorch,
  SiTensorflow,
  SiNextdotjs,
  SiCplusplus,
  SiHuggingface,
  SiScikitlearn,
  SiKeras,
  SiNumpy,
  SiPandas,
  SiGithub,
  SiGit,
  SiBootstrap,
  SiMarkdown,
  SiGooglecolab,
  SiHeroku,
  SiWordpress,
  SiShopify
} from "react-icons/si";
import { FaJava, FaPython} from "react-icons/fa";

const skills = [
  { name: "Python", Icon: FaPython },
  { name: "Java", Icon: FaJava },
  { name: "C++", Icon: SiCplusplus },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Bootstrap", Icon: SiBootstrap },
  { name: "Docker", Icon: SiDocker },
  { name: "AWS", Icon: SiAmazon },
  { name: "PyTorch", Icon: SiPytorch },
  { name: "TensorFlow", Icon: SiTensorflow },
  { name: "Pandas", Icon: SiPandas },
  { name: "Scikit-learn", Icon: SiScikitlearn },
  { name: "Keras", Icon: SiKeras },
  { name: "Numpy", Icon: SiNumpy },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "MySQL", Icon: SiMysql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Linux", Icon: SiLinux },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "Hugging Face", Icon: SiHuggingface },
  { name: "Markdown", Icon: SiMarkdown },
  { name: "WordPress", Icon: SiWordpress },
  { name: "Shopify", Icon: SiShopify },
  { name: "Google Colab", Icon: SiGooglecolab },
  { name: "Heroku", Icon: SiHeroku },

];

export default function SkillsLogos() {
  return (
    <section id="skills" className="py-24 overflow-hidden relative">
      {/* Background Gradients for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[var(--bg)] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[var(--bg)] to-transparent z-10" />

      <div className="container mb-12 text-center relative z-20">
        <h2 className="heading text-3xl md:text-4xl mb-4 text-[var(--text)]">Tech Stack</h2>
        <p className="subheading max-w-[700px] mx-auto text-gray-500">
          Technologies I use to build intelligent systems.
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-8 py-4 pr-8">
          {[...skills, ...skills].map(({ name, Icon }, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-center justify-center gap-3 px-8 py-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:border-[var(--accent)] transition-all duration-300 min-w-[140px] group/item"
            >
              <Icon className="text-5xl text-gray-400 group-hover/item:text-[var(--accent)] transition-colors duration-300" />
              <span className="text-sm font-medium text-gray-400 group-hover/item:text-white transition-colors">{name}</span>
            </div>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8 py-4 pr-8">
          {[...skills, ...skills].map(({ name, Icon }, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-center justify-center gap-3 px-8 py-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:border-[var(--accent)] transition-all duration-300 min-w-[140px] group/item"
            >
              <Icon className="text-5xl text-gray-400 group-hover/item:text-[var(--accent)] transition-colors duration-300" />
              <span className="text-sm font-medium text-gray-400 group-hover/item:text-white transition-colors">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
