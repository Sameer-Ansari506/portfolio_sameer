'use client';

import { motion, AnimatePresence } from 'framer-motion';
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
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    // Track scroll position for navbar image animation
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  // Personal Information from Resume
  const personalInfo = {
    name: "Sameer Ansari",
    title: "iOS/Android & Full-Stack Developer",
    location: "Lahore, Pakistan",
    email: "Aaleadam485@gmail.com",
    phone: "+92 (325) 233 3384",
    bio: "Result-driven Computer Science student with 2 years of industry experience in mobile and full-stack development. Specialized in iOS (SwiftUI/UIKit), Android (Kotlin/Jetpack Compose), and React Native applications. Seeking opportunities to create innovative solutions and deliver exceptional user experiences.",
    github: "https://github.com/Sameer-Ansari506",
    linkedin: "https://linkedin.com/in/sameer-ahmad-651194269",
    twitter: "https://github.com/Sameer-Ansari506"
  };

  const skills = [
    { 
      category: "Programming Languages", 
      items: ["Swift", "Kotlin", "Java", "C/C++", "C#", "JavaScript", "HTML", "CSS", "XML", "Matlab"],
      icon: "💻"
    },
    { 
      category: "Frameworks & Technologies", 
      items: ["SwiftUI", "UIKit", "Jetpack Compose", "React", "React Native", "MERN Stack", "ASP.NET", "SFML"],
      icon: "⚙️"
    },
    { 
      category: "Development Tools", 
      items: ["Xcode", "Android Studio", "VS Code", "Unity", "Linux", "Git", "Firebase", "MSSQL"],
      icon: "🛠️"
    },
    { 
      category: "Skills & Certifications", 
      items: ["iOS Development", "Android Development", "Full-Stack Development", "Unity Game Dev (2023)", "Agile/Scrum", "Team Leadership"],
      icon: "🎯"
    }
  ];

  const projects = [
    {
      title: "Automated Scrum Master",
      description: "Fully functional cross-platform mobile application automating agile workflow using AI agents and Generative AI. Built as an internship project with advanced features.",
      tech: ["React Native", "AI/ML", "Gen AI", "Node.js"],
      github: "https://github.com/Sameer-Ansari506",
      demo: "#",
      highlights: ["AI-powered automation", "Cross-platform", "Agile workflow", "Responsive UI"]
    },
    {
      title: "Islamic App (iOS & Android)",
      description: "Real-time Islamic application developed for client using native development. Led team and managed entire project with efficient API handling and modern UI/UX.",
      tech: ["SwiftUI", "Kotlin", "Firebase", "REST APIs"],
      github: "https://github.com/Sameer-Ansari506",
      demo: "#",
      highlights: ["Dual platform", "Real-time features", "Team leadership", "Client project"]
    },
    {
      title: "Health Monitoring App",
      description: "Real-time Android application with Bluetooth device integration for health monitoring. Features real-time data recording and updates with professional UI/UX.",
      tech: ["Kotlin", "Jetpack Compose", "Bluetooth", "Firebase"],
      github: "https://github.com/Sameer-Ansari506",
      demo: "#",
      highlights: ["Bluetooth integration", "Real-time data", "Health monitoring", "Native Android"]
    },
    {
      title: "Fitness App",
      description: "Fully functional Android fitness application with computer vision integration and AI chatbot. Advanced features with responsive UI and efficient network requests.",
      tech: ["Kotlin", "Jetpack Compose", "Computer Vision", "AI Chatbot"],
      github: "https://github.com/Sameer-Ansari506",
      demo: "#",
      highlights: ["Computer vision", "AI chatbot", "Fitness tracking", "Modern UI"]
    },
    {
      title: "ARScanning iOS App",
      description: "Augmented Reality scanning application for construction company. Built using UIKit with efficient AR implementation and responsive design.",
      tech: ["Swift", "UIKit", "ARKit", "Computer Vision"],
      github: "https://github.com/Sameer-Ansari506",
      demo: "#",
      highlights: ["AR technology", "Construction focus", "iOS native", "Open source"]
    },
    {
      title: "Lost & Found Social Platform",
      description: "Social media application for lost and found items with real-time messaging and data storage. Available on both iOS (SwiftUI) and Android (Jetpack Compose).",
      tech: ["SwiftUI", "Kotlin", "Firebase", "Real-time DB"],
      github: "https://github.com/Sameer-Ansari506",
      demo: "#",
      highlights: ["Social features", "Real-time messaging", "Dual platform", "Firebase integration"]
    }
  ];

  const experience = [
    {
      role: "Software Engineering Intern",
      company: "Folio3",
      location: "Hybrid (Lahore, Pakistan)",
      duration: "June 2025 - Aug 2025",
      responsibilities: [
        "Nine weeks of hands-on industry experience working on multiple technology stacks",
        "Developed a fully functional real-time React Native mobile application",
        "Worked on diverse projects gaining practical experience in modern development practices",
        "Collaborated with senior developers to deliver production-ready solutions",
        "Gained expertise in cross-platform mobile development and agile methodologies"
      ],
      tech: ["React Native", "JavaScript", "Mobile Development", "Agile"]
    },
    {
      role: "Application Development Intern",
      company: "Analyzinn Solutions",
      location: "Remote (Lahore, Pakistan)",
      duration: "July 2024 - March 2025",
      responsibilities: [
        "Nine months of comprehensive industry experience in mobile application development",
        "Led a 2-person team in real-time iOS mobile application development",
        "Excelled in both SwiftUI and UIKit frameworks for iOS development",
        "Developed a real-time Android mobile application using Kotlin",
        "Managed end-to-end development lifecycle from design to deployment"
      ],
      tech: ["SwiftUI", "UIKit", "Kotlin", "iOS", "Android"]
    },
    {
      role: "Web Development Intern",
      company: "PrepVista",
      location: "Remote (Lahore, Pakistan)",
      duration: "June 2024 - July 2024",
      responsibilities: [
        "Contributed to real-time web development projects",
        "Worked with modern web technologies and frameworks",
        "Implemented responsive UI designs and efficient backend integrations",
        "Collaborated with team members to meet project deadlines",
        "Gained experience in full-stack web development practices"
      ],
      tech: ["Web Development", "JavaScript", "React", "Full-Stack"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "National University of Computing and Emerging Sciences (FAST-NUCES)",
      location: "Lahore, Pakistan",
      duration: "Aug 2022 - Continuing",
      gpa: "3.45/4.0"
    },
    {
      degree: "Intermediate in Computer Science",
      institution: "Government College University",
      location: "Lahore, Pakistan",
      duration: "Aug 2020 - Aug 2022",
      gpa: "1033/1100 (94%)"
    },
    {
      degree: "Matriculation in Computer Science",
      institution: "Dar-E-Arqam School",
      location: "Lahore, Pakistan",
      duration: "Completed Aug 2020",
      gpa: "1072/1100 (98%)"
    }
  ];

  const achievements = [
    {
      title: "Dean's List Holder",
      description: "FAST-NUCES",
      years: "2022, 2023, 2025",
      icon: "🏆"
    },
    {
      title: "1st Position Holder",
      description: "ECAT-ICS",
      years: "2022",
      icon: "🥇"
    },
    {
      title: "98% Marks",
      description: "Matriculation (BISE)",
      years: "2020",
      icon: "📚"
    },
    {
      title: "93% Marks",
      description: "Intermediate (BISE)",
      years: "2020",
      icon: "⭐"
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
            <div className="flex items-center gap-3">
              <AnimatePresence>
                {scrolled && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0, y: 100 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 100 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-600 p-0.5 shadow-lg"
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img
                        src="/profile.jpg"
                        alt={personalInfo.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-sm font-bold ${
                              darkMode ? 'bg-gray-900 text-cyan-400' : 'bg-white text-purple-600'
                            }">${personalInfo.name.split(' ').map(n => n[0]).join('')}</div>`;
                          }
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                {personalInfo.name}
              </motion.h1>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-6 items-center"
            >
              {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Achievements', 'Contact'].map((item) => (
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
            <AnimatePresence>
              {!scrolled && (
                <motion.div 
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, y: -100 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="mb-8 relative inline-block"
                >
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
                </motion.div>
              )}
            </AnimatePresence>
            
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
            
            <div className="max-w-5xl mx-auto space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.01 }}
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
                      <h3 className={`text-2xl font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>{edu.degree}</h3>
                      <p className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent mb-4">{edu.institution}</p>
                      
                      <div className={`flex flex-wrap gap-4 ${
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
                          <span className="text-sm font-bold">{edu.gpa}</span>
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

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6">
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
              Awards & <span className="bg-gradient-to-r from-cyan-500 to-pink-600 bg-clip-text text-transparent">Achievements</span>
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className={`rounded-3xl p-8 shadow-2xl transition-all text-center ${
                    darkMode 
                      ? 'bg-gradient-to-br from-gray-800 via-purple-900/50 to-pink-900/30 hover:shadow-purple-500/50' 
                      : 'bg-gradient-to-br from-white via-purple-50 to-pink-50 hover:shadow-purple-300'
                  }`}
                >
                  <motion.div 
                    className="text-6xl mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, delay: idx * 0.2 }}
                  >
                    {achievement.icon}
                  </motion.div>
                  
                  <h3 className={`text-xl font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>{achievement.title}</h3>
                  
                  <p className={`text-sm font-semibold mb-2 ${
                    darkMode ? 'text-purple-400' : 'text-purple-600'
                  }`}>{achievement.description}</p>
                  
                  <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold ${
                    darkMode
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                      : 'bg-gradient-to-r from-cyan-100 to-purple-100 text-purple-800'
                  }`}>
                    {achievement.years}
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
