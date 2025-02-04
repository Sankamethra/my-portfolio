import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

function App() {
  const bubblesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createBubble = () => {
      if (!bubblesRef.current) return;
      
      const bubble = document.createElement('div');
      const size = Math.random() * 60 + 20;
      const position = Math.random() * 100;
      
      bubble.className = 'absolute rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 animate-float';
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${position}vw`;
      bubble.style.animationDuration = `${Math.random() * 3 + 2}s`;
      
      bubblesRef.current.appendChild(bubble);
      
      setTimeout(() => {
        if (bubblesRef.current?.contains(bubble)) {
          bubblesRef.current.removeChild(bubble);
        }
      }, 5000);
    };

    const interval = setInterval(createBubble, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] text-gray-300 overflow-hidden">
      {/* Animated Bubbles */}
      <div ref={bubblesRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Header/Nav */}
      <nav className="fixed w-full bg-gradient-to-r from-[#0a192f]/90 to-[#112240]/90 backdrop-blur-sm z-50 px-8 py-4 border-b border-purple-500/10">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent 
                         hover:scale-110 transition-transform cursor-pointer">S</h1>
          <div className="flex gap-8">
            {[
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#experience", label: "Experience" },
              { href: "#projects", label: "Projects" },
              { href: "#education", label: "Education" }
            ].map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="relative group hover:text-cyan-400 transition-colors py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 
                               group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-8 pt-16">
        <div className="max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-cyan-400 mb-2 animate-fade-in">Hi, I'm</h2>
            <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2 animate-fade-in-delay-1">
              Sankamethra S
            </h1>
            <h3 className="text-4xl text-gray-400 mb-4 animate-fade-in-delay-2">Software Development Engineer</h3>
            <p className="text-gray-400 max-w-2xl mb-6 animate-fade-in-delay-3">
              Proactive Software Developer with 1.8 years of experience in DevOps, Backend development, Cloud, and
              Blockchain technologies. Skilled in automating workflows, optimizing CI/CD pipelines, and deploying scalable
              applications using AWS, Docker, and the MERN stack.
            </p>
            <div className="flex flex-wrap items-center gap-6 mb-8 animate-fade-in-delay-4">
              <a 
                href="https://drive.google.com/file/d/1Qa69d6pGqs0R4enzFYH1mM59RO44mFua/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer" 
                className="group relative px-8 py-3 rounded-md bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium 
                         overflow-hidden transition-all hover:scale-105"
              >
                <span className="relative z-10">View Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <div className="flex gap-6">
                <a href="https://github.com/Sankamethra" target="_blank" rel="noopener noreferrer" 
                   className="text-cyan-400 hover:text-cyan-300 transition-colors transform hover:scale-110">
                  <Github size={24} />
                </a>
                <a href="http://linkedin.com/in/sankamethra-senthilkumar-932a14220" target="_blank" rel="noopener noreferrer" 
                   className="text-cyan-400 hover:text-cyan-300 transition-colors transform hover:scale-110">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:sankamethra2@gmail.com" 
                   className="text-cyan-400 hover:text-cyan-300 transition-colors transform hover:scale-110">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full filter blur-3xl"></div>
            <div className="relative animate-float-slow">
              <div className="w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 
                            backdrop-blur-sm border border-purple-500/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard title="Programming Languages" skills={["JavaScript", "Python", "TypeScript", "Shell Script", "Solidity", "Go", "HTML", "CSS"]} />
            <SkillCard title="Web Development" skills={["React JS", "Node JS", "RESTful API"]} />
            <SkillCard title="DevOps & Automation" skills={["Ansible", "Docker", "Nginx", "CI/CD", "Terraform", "Prometheus", "Grafana", "ELK Stack"]} />
            <SkillCard title="Database Management" skills={["MySQL", "MongoDB", "AWS DynamoDB", "Aggregation pipelines"]} />
            <SkillCard title="Blockchain" skills={["Smart contract development", "Solidity", "EVM", "Optimism", "Polygon", "Hardhat"]} />
            <SkillCard title="Cloud Computing" skills={["Amazon Web Services (AWS)"]} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProjectCard 
              title="QuizMaster"
              description="A full-stack quiz application built with Go and React + TypeScript that allows users to create, share, and participate in quizzes in real-time."
              tech={["Go", "React", "TypeScript", "PostgreSQL", "Redis", "JWT", "Swagger"]}
              features={[
                "User Authentication",
                "Create Custom Quizzes",
                "Real-time Quiz Participation",
                "Global Leaderboards",
                "Interactive UI"
              ]}
              link="https://github.com/Sankamethra/QuizMaster"
            />
            <ProjectCard 
              title="LedgerEase"
              description="A blockchain-based ledger system for secure and transparent financial record-keeping."
              tech={["Solidity", "React", "Web3.js", "Hardhat", "Ethereum"]}
              features={[
                "Smart Contract Integration",
                "Decentralized Storage",
                "Transaction History",
                "Automated Auditing",
                "Multi-signature Support"
              ]}
              link="https://github.com/Sankamethra/LedgerEase"
            />
            <ProjectCard 
              title="Project Sakthi"
              description="An innovative blockchain solution for secure and efficient digital asset management."
              tech={["Solidity", "React", "Node.js", "Web3", "IPFS"]}
              features={[
                "Asset Tokenization",
                "Decentralized Storage",
                "Smart Contract Management",
                "User Authentication",
                "Transaction Tracking"
              ]}
              link="https://github.com/Sankamethra/project_sakthi"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8">
            Experience
          </h2>
          <div className="max-w-3xl">
            <ExperienceCard 
              title="Software Development Engineer"
              company="Clar Technologies"
              period="07/2023 - Present"
              description="Working on full-stack development and blockchain solutions."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-8 text-center text-gray-400">
      </footer>
    </div>
  );
}

interface SkillCardProps {
  title: string;
  skills: string[];
}

function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="bg-[#112240]/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 
                    hover:border-cyan-500/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                     from-purple-400 to-cyan-400 mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2 group">
            <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full 
                           group-hover:scale-150 transition-transform"></span>
            <span className="group-hover:text-cyan-400 transition-colors">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  link: string;
}

function ProjectCard({ title, description, tech, features, link }: ProjectCardProps) {
  return (
    <div className="bg-[#112240]/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 
                    hover:border-cyan-500/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                       from-purple-400 to-cyan-400">{title}</h3>
        <a href={link} target="_blank" rel="noopener noreferrer" 
           className="text-cyan-400 hover:text-cyan-300 transition-all transform hover:scale-125">
          <ExternalLink size={20} />
        </a>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="text-gray-200 font-bold mb-2">Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span key={index} className="text-xs bg-gradient-to-r from-purple-400/10 to-cyan-400/10 text-cyan-400 px-2 py-1 rounded">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

function ExperienceCard({ title, company, period, description }: ExperienceCardProps) {
  return (
    <div className="bg-[#112240]/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 hover:border-cyan-500/20 transition-colors">
      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">{title}</h3>
      <div className="text-gray-400 mb-4">
        <p className="font-medium">{company}</p>
        <p className="text-sm">{period}</p>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default App;