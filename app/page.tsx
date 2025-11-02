'use client';

import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Phone,
  Download,
  Moon,
  Sun,
  Sparkles
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  // REPLACE THIS DATA WITH YOUR ACTUAL RESUME INFORMATION
  const personalInfo = {
    name: "Sameer Ansari",
    title: "Full Stack Developer | Software Engineer",
    location: "Your City, Country",
    email: "sameer.ansari@example.com",
    phone: "+1 (234) 567-8900",
    bio: "Passionate software engineer with expertise in building scalable web applications and delivering innovative solutions. Specialized in modern web technologies with a focus on user experience and performance optimization.",
    github: "https://github.com/sameeransari",
    linkedin: "https://linkedin.com/in/sameeransari",
    twitter: "https://twitter.com/sameeransari"
  };

  const skills = [
    { 
      category: "Frontend Development", 
      items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux", "Vue.js"],
      icon: "💻"
    },
    { 
      category: "Backend Development", 
      items: ["Node.js", "Express.js", "Python", "Django", "FastAPI", "RESTful APIs", "GraphQL"],
      icon: "⚙️"
    },
    { 
      category: "Database & Cloud", 
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "AWS", "Firebase", "Docker"],
      icon: "☁️"
    },
    { 
      category: "Tools & Practices", 
      items: ["Git", "CI/CD", "Agile/Scrum", "Jest", "Testing", "Microservices", "System Design"],
      icon: "🛠️"
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and admin dashboard. Built with modern tech stack for optimal performance.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "AWS"],
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com",
      highlights: ["10K+ active users", "99.9% uptime", "Real-time analytics", "Mobile-responsive"]
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics. Supports multiple workspaces and custom workflows.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Redis"],
      github: "https://github.com/yourusername/project2",
      demo: "https://project2-demo.com",
      highlights: ["Real-time collaboration", "Custom workflows", "Team analytics", "Cloud storage"]
    },
    {
      title: "AI-Powered Dashboard",
      description: "Interactive data visualization dashboard with AI-driven insights and predictions. Features custom charts, export functionality, and automated reporting.",
      tech: ["React", "Python", "FastAPI", "TensorFlow", "D3.js"],
      github: "https://github.com/yourusername/project3",
      demo: "https://project3-demo.com",
      highlights: ["AI predictions", "Interactive charts", "Auto-reporting", "Export to PDF"]
    }
  ];

  const experience = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      duration: "Jan 2023 - Present",
      responsibilities: [
        "Led development of microservices architecture serving 1M+ users with 99.9% uptime",
        "Mentored team of 5 junior developers and conducted code reviews",
        "Improved application performance by 40% through optimization and caching strategies",
        "Collaborated with product team to define technical roadmap and architecture decisions",
        "Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes"
      ],
      tech: ["React", "Node.js", "AWS", "Docker", "Kubernetes"]
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions Corp",
      location: "Remote",
      duration: "Jun 2021 - Dec 2022",
      responsibilities: [
        "Built and deployed RESTful APIs using Node.js and Express serving 50K+ requests daily",
        "Developed responsive web applications with React and TypeScript",
        "Implemented real-time features using WebSockets and Redis pub/sub",
        "Worked in Agile environment with 2-week sprint cycles",
        "Reduced page load time by 60% through code splitting and lazy loading"
      ],
      tech: ["React", "Express.js", "PostgreSQL", "Redis"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      location: "City, State",
      duration: "2017 - 2021",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List (All Semesters)",
        "Academic Excellence Scholarship",
        "Best Final Year Project Award",
        "Coding Competition Winner 2020"
      ]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full backdrop-blur-md z-50 shadow-lg transition-colors ${
        darkMode ? 'bg-gray-900/90 border-b border-purple-500/20' : 'bg-white/90 border-b border-purple-200'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              {personalInfo.name}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-6 items-center"
            >
              {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium hidden md:block transition-all hover:scale-105 ${
                    darkMode 
                      ? 'text-gray-300 hover:text-cyan-400' 
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {item}
                </a>
              ))}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className={`p-2.5 rounded-full transition-all shadow-lg ${
                  darkMode 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900' 
                    : 'bg-gradient-to-r from-gray-800 to-purple-900 text-yellow-400'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-8 relative inline-block">
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-600 p-1.5 animate-pulse shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src="/profile.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to initials if image not found
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-5xl font-bold ${
                          darkMode ? 'bg-gray-900 text-cyan-400' : 'bg-white text-purple-600'
                        }">${personalInfo.name.split(' ').map(n => n[0]).join('')}</div>`;
                      }
                    }}
                  />
                </div>
              </div>
              <motion.div 
                className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 w-10 h-10 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Sparkles size={20} className="text-white" />
              </motion.div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent leading-tight">
              {personalInfo.name}
            </h1>
            
            <p className={`text-2xl md:text-3xl mb-6 font-semibold ${
              darkMode ? 'text-purple-300' : 'text-purple-700'
            }`}>
              {personalInfo.title}
            </p>
            
            <p className={`max-w-2xl mx-auto mb-8 text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white rounded-full font-bold shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center gap-2"
              >
                <Mail size={20} />
                Get in Touch
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Resume_Sameer_Ansari.pdf"
                className={`px-8 py-4 rounded-full font-bold shadow-xl transition-all flex items-center gap-2 border-2 ${
                  darkMode
                    ? 'bg-gray-800 text-white border-purple-500 hover:bg-gray-700'
                    : 'bg-white text-gray-800 border-purple-300 hover:bg-gray-50'
                }`}
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </div>

            <div className="flex gap-4 justify-center">
              {[
                { icon: Github, href: personalInfo.github, label: "GitHub" },
                { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-14 h-14 rounded-2xl shadow-xl transition-all flex items-center justify-center ${
                    darkMode
                      ? 'bg-gray-800 text-purple-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:text-white'
                      : 'bg-white text-purple-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white'
                  }`}
                >
                  <social.icon size={26} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 ${
        darkMode ? 'bg-gray-900/50' : 'bg-white/50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={`text-4xl md:text-6xl font-black mb-12 text-center ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              About <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">Me</span>
            </motion.h2>
            
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Hi! I'm <span className="font-bold text-purple-500">{personalInfo.name}</span>, a passionate software engineer who loves building amazing digital experiences. I specialize in creating scalable, performant applications that solve real-world problems.
                </p>
                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  With years of experience in modern web technologies, I focus on writing clean, maintainable code and delivering exceptional user experiences. I'm constantly learning and adapting to new technologies.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Location", value: personalInfo.location },
                  { icon: Mail, label: "Email", value: personalInfo.email },
                  { icon: Phone, label: "Phone", value: personalInfo.phone }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className={`flex items-center gap-4 p-5 rounded-2xl shadow-lg transition-all ${
                      darkMode 
                        ? 'bg-gray-800/80 hover:bg-gray-800' 
                        : 'bg-white hover:shadow-xl'
                    }`}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <p className={`text-sm font-semibold ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>{item.label}</p>
                      <p className={`font-bold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={`text-4xl md:text-6xl font-black mb-12 text-center ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Skills & <span className="bg-gradient-to-r from-cyan-500 to-pink-600 bg-clip-text text-transparent">Expertise</span>
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillGroup, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`rounded-3xl p-8 shadow-2xl transition-all ${
                    darkMode 
                      ? 'bg-gradient-to-br from-gray-800 to-purple-900/50 hover:shadow-purple-500/50' 
                      : 'bg-white hover:shadow-purple-200'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">{skillGroup.icon}</span>
                    <h3 className={`text-2xl font-bold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>{skillGroup.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIdx) => (
                      <motion.span
                        key={skillIdx}
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-all shadow-md ${
                          darkMode
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                            : 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 hover:from-purple-200 hover:to-pink-200'
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 ${
        darkMode ? 'bg-gray-900/50' : 'bg-white/50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={`text-4xl md:text-6xl font-black mb-12 text-center ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Featured <span className="bg-gradient-to-r from-cyan-500 to-pink-600 bg-clip-text text-transparent">Projects</span>
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className={`rounded-3xl overflow-hidden shadow-2xl transition-all ${
                    darkMode 
                      ? 'bg-gray-800 hover:shadow-purple-500/50' 
                      : 'bg-white hover:shadow-purple-200'
                  }`}
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-600 relative overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Code2 size={80} className="text-white/90" />
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className={`text-2xl font-bold mb-3 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>{project.title}</h3>
                    <p className={`mb-4 text-sm leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{project.description}</p>
                    
                    <div className="mb-4">
                      <p className={`text-xs font-bold mb-2 ${
                        darkMode ? 'text-purple-400' : 'text-purple-600'
                      }`}>KEY HIGHLIGHTS:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {project.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className={`text-xs flex items-center gap-1 ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIdx) => (
                        <span key={techIdx} className={`px-3 py-1 rounded-full text-xs font-bold ${
                          darkMode 
                            ? 'bg-purple-900/50 text-purple-300' 
                            : 'bg-purple-50 text-purple-700'
                        }`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        className="flex-1 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl text-center text-sm font-bold hover:from-gray-700 hover:to-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg"
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demo}
                        className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl text-center text-sm font-bold hover:from-cyan-600 hover:to-purple-700 transition-all flex items-center justify-center gap-2 shadow-lg"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={`text-4xl md:text-6xl font-black mb-12 text-center ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Work <span className="bg-gradient-to-r from-cyan-500 to-pink-600 bg-clip-text text-transparent">Experience</span>
            </motion.h2>
            
            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.01 }}
                  className={`rounded-3xl p-8 shadow-2xl transition-all relative overflow-hidden ${
                    darkMode 
                      ? 'bg-gradient-to-r from-gray-800 to-purple-900/30 hover:shadow-purple-500/30' 
                      : 'bg-white hover:shadow-purple-200'
                  }`}
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />
                  
                  <div className="ml-6">
                    <div className="flex flex-wrap justify-between items-start mb-6">
                      <div>
                        <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>{exp.role}</h3>
                        <p className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent mb-2">{exp.company}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech?.map((tech, tIdx) => (
                            <span key={tIdx} className={`px-2 py-1 rounded text-xs font-bold ${
                              darkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-700'
                            }`}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`flex items-center gap-2 mb-1 ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <Calendar size={16} />
                          <span className="text-sm font-semibold">{exp.duration}</span>
                        </div>
                        <div className={`flex items-center gap-2 ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className={`flex items-start gap-3 ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          <div className="w-7 h-7 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg">
                            <div className="w-2.5 h-2.5 bg-white rounded-full" />
                          </div>
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 px-6 ${
        darkMode ? 'bg-gray-900/50' : 'bg-white/50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={`text-4xl md:text-6xl font-black mb-12 text-center ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-cyan-500 to-pink-600 bg-clip-text text-transparent">Education</span>
            </motion.h2>
            
            <div className="max-w-4xl mx-auto">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`rounded-3xl p-8 shadow-2xl transition-all ${
                    darkMode 
                      ? 'bg-gradient-to-br from-gray-800 to-purple-900/50 hover:shadow-purple-500/50' 
                      : 'bg-white hover:shadow-purple-200'
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl">
                      <GraduationCap size={40} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>{edu.degree}</h3>
                      <p className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent mb-4">{edu.institution}</p>
                      
                      <div className={`flex flex-wrap gap-4 mb-4 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span className="text-sm font-semibold">{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award size={16} />
                          <span className="text-sm font-bold">GPA: {edu.gpa}</span>
                        </div>
                      </div>
                      
                      <div>
                        <p className={`text-sm font-bold mb-3 ${
                          darkMode ? 'text-purple-400' : 'text-purple-600'
                        }`}>ACHIEVEMENTS:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement, aIdx) => (
                            <span key={aIdx} className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${
                              darkMode
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                : 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800'
                            }`}>
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.h2 variants={itemVariants} className={`text-4xl md:text-6xl font-black mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Let's <span className="bg-gradient-to-r from-cyan-500 to-pink-600 bg-clip-text text-transparent">Connect</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className={`text-lg mb-12 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </motion.p>
            
            <motion.div variants={itemVariants} className={`rounded-3xl p-10 shadow-2xl ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                  { icon: MapPin, label: "Location", value: personalInfo.location, href: "#" }
                ].map((contact, idx) => (
                  <motion.a
                    key={idx}
                    href={contact.href}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className={`p-6 rounded-2xl transition-all ${
                      darkMode
                        ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 hover:from-purple-800/50 hover:to-pink-800/50'
                        : 'bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100'
                    }`}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <contact.icon size={28} className="text-white" />
                    </div>
                    <p className={`text-sm font-semibold mb-1 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>{contact.label}</p>
                    <p className={`font-bold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>{contact.value}</p>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-10 px-6 ${
        darkMode ? 'bg-gray-950 border-t border-purple-500/20' : 'bg-gray-900 border-t border-gray-200'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js, TypeScript & Tailwind CSS
          </p>
          <div className="flex gap-4 justify-center">
            {[
              { icon: Github, href: personalInfo.github },
              { icon: Linkedin, href: personalInfo.linkedin },
              { icon: Mail, href: `mailto:${personalInfo.email}` }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.2, y: -3 }}
                href={social.href}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
