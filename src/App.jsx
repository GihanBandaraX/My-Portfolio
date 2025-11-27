import React, { useState, useEffect } from 'react';
import BackToTopButton from './BackToTopButton';
import { Github, Linkedin, Mail, ExternalLink, Code, CircleUserRound, Database, Layout, Server, Cpu, Moon, Sun, Menu, X, Download, Cloud, Calendar, Layers, Zap, Brush, MapPin, BookOpen, BrainCircuit, Layers2, Palette, Laptop } from 'lucide-react';

// --- Static Data Definitions ---
const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
   { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

// Certifications Data
const certifications = [
    {
    title: "Multicloud Network Associate",
    issuer: "Aviatrix",
    date: "Sep 2025",
    image: "multicloud-network-associate.png",
    skills: ["Multicloud Networking", "Cloud Network Design", "Aviatrix Solutions"],
    color: "bg-orange-100 text-orange-800 border-orange-500",
    credlyUrl: "https://www.credly.com/earner/earned/badge/7a82f3c9-cac0-4f98-bd39-a32dab5a306f" 
  },

  {
    title: "AWS Knowledge: Amazon Q Developer Fundamentals - Training Badge",
    issuer: "Amazon Web Services (AWS)",
    date: "Sep 2025",
    skills: ["Generative AI", "Prompt Engineering"],
    color: "bg-pink-100 text-pink-800 border-pink-500",
    image: "/aws-knowledge-amazon-q-developer-fundamentals-train.png",
    credlyUrl: "https://www.credly.com/earner/earned/badge/98e1a608-fbde-49b9-9386-2062b6dee45c"
    },

    {
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Sep 2024",
    skills: ["Cloud Computing", "AWS Core", "AWS Architecture"],
    color: "bg-blue-100 text-blue-800 border-blue-500",
    image: "/aws-academy-graduate-cloud-foundations-training-bad.png",
    credlyUrl: "https://www.credly.com/earner/earned/badge/edb03703-22b8-4e06-8615-c619772776e2"
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Oct 2025",
    skills: ["AI Fundamentals", "Machine Learning Basics"],
    color: "bg-red-100 text-red-800 border-red-500",
    image: "/artificial-intelligence-fundamentals.png",
    credlyUrl: "https://www.credly.com/earner/earned/badge/3f58115c-0c7f-476c-839c-f808407365e5"
  },
  {
    title: "AI Fundamentals with IBM SkillsBuild",
    issuer: "Cisco Networking Academy",
    date: "Oct 2025",
    skills: ["AI Ethics", "Data Analytics", "AI Applications"],
    color: "bg-green-100 text-green-800 border-green-500",
    image: "/ai-fundamentals-with-ibm-skillsbuild.png",
    credlyUrl: "https://www.credly.com/earner/earned/badge/89ead67f-9655-469e-a3af-2dafad635d7e"
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "Jul 2025",
    skills: ["Data Collection", "Data Validation", "Data Analysis"],
    color: "bg-teal-100 text-teal-800 border-teal-500",
    image: "/introduction-to-data-science.png",
    credlyUrl: "https://www.credly.com/earner/earned/badge/5e0647c5-ad9e-4cb0-8d90-8b09361deb3d"
  },

  {
    title: "Introduction to IoT",
    issuer: "Cisco Networking Academy",
    date: "Mar 2025",
    skills: ["Internet of Things (IoT)", "Digital Transformation"],
    color: "bg-cyan-100 text-cyan-800 border-cyan-500",
    image: "/introduction-to-iot.png",
    credlyUrl: "https://www.credly.com/earner/earned/badge/7606c14d-68a9-46a8-b0f9-fb3f44973767"
  },

  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "Mar 2025",
    skills: ["Protocol Standards", "IP Addressing", "Network Types"],
    color: "bg-sky-100 text-sky-800 border-sky-500",
    image: "/networking-basics.png",
    credlyUrl: "https://www.credly.com/earner/earned/badge/4ffaade3-ca87-48be-ae2e-02819d5c77d6"
  }
];

// Projects Data
const projects = [
  // Keeping this first as the user requested "latest one first" and this is the most complex/relevant project.

    { // Traffic Guardian Project
    title: 'Traffic Guardian (2024)',
    category: 'IoT & ML',
    description: `Built an Intelligent Traffic Management System with image processing, ML, and IoT. 
                  Created a web app for automated violation detection and real-time monitoring with IoT hardware. 
                  Produced related research documentation (thesis and journal).`,
    tech: ['OpenCV', 'Python 3.12', 'Node.js', 'React', 'HTML', 'CSS', 'JS', 'Bootstrap', 'My SQL Server DB', 'IoT devices','Visual Studio Code'],
    link: 'https://traffic-guardian-sliit-r-7034c.web.app/home.html',
    icon: BrainCircuit
  },

  {// MediHelp Project
    title: 'MediHelp (2023)',
    category: 'Full Stack',
    description: `Created a Health Management System for secure medical resource distribution using the MERN stack. 
                  Supports CRUD operations for inventory and requests, with scalable code and a responsive UI.`,
    tech: ['MongoDB', 'Express', 'React', 'Node.js','HTML', 'CSS', 'JS', 'Bootstrap', 'Visual Studio Code'],
    link: 'https://github.com/Ranjula001/MediHelp---ITPM-project',
    icon: Layers2
  },

  { // Foodies Project
    title: 'Foodies (2023)',
    category: 'Full Stack',
    description: `A dynamic culinary-focused social media platform where users share dishes, follow friends, and interact with content. 
                  Built with Spring Boot and a MERN-style structure, it supports CRUD for posts, comments, and profiles, 
                  with a responsive web and mobile design.`,
    tech: ['Spring Boot', 'React.js', 'Java', 'Visual Studio Code'],
    link: 'https://github.com/PAF-IT3030/paf-assignment-2023-2023_083_team',
    icon: Layers2
  },

  { //OrderSanp Project
    title: 'OrderSnap (2025)',
    category: 'Web App',
    description: 'Java Servlet-based web application enabling users to browse menus, place orders, and manage transactions securely.',
    tech: ['Java Servlet', 'OOP', 'MySQL', 'Eclipse IDE'],
    link: 'https://github.com/GihanBandaraX/OrderSnap',
    icon: Code
  },

  { // Riyasewana UI Redesign
    title: 'Riyasewana UI Redesign (2023)',
    category: 'UI/UX',
    description: 'Redesigned key functionalities including Login, Registration, and Profile Editing to improve usability and navigation.',
    tech: ['Canva', 'Figma', 'Mockflow Wireframes', 'Adobe Photoshop CC'],
    link: 'https://www.figma.com/design/p5WwGYaCkSoJlOnZnsusuL/Completed-Protoype?node-id=0-1&p=f&t=0oN42KXxKUA4IcLc-0',
    icon: Brush
  },

  { // MyPlanner Project
    title: 'MyPlanner (2025)',
    category: 'Web App',
    description: 'Online Event Management System to plan events, manage bookings, and access vendor services. Full CRUD operations for events and bookings with MVC architecture.',
    tech: ['Java Servlet', 'OOP', 'MySQL', 'Eclipse IDE'],
    link: 'https://github.com/GihanBandaraX/MyPlanner', 
    icon: Code 
  },

  { // Eventra Project
    title: 'Eventra (2025)',
    category: 'UI/UX',
    description: `UI/UX design project for an event management mobile app, featuring user flows, wireframes, and polished mockups. 
    Covers dashboard, overview, event browsing, and attendee insights, using a consistent design system with reusable components.`,
    tech: ['Canva', 'Figma', 'Mockflow Wireframes', 'Adobe Photoshop CC'],
    link: 'https://www.behance.net/gallery/229715817/Eventra',
    icon: Brush
  },

  { // Dish Delight Project
    title: 'Dish Delight (2025)',
    category: 'UI/UX',
    description: `Minimal online food ordering app UI for mobile view. Browse food items, view details, and place orders. 
                  Simple three-page interface for smooth user experience.`  ,
    tech: ['Canva', 'Figma', 'Mockflow Wireframes', 'Adobe Photoshop CC'],
    link: 'https://www.behance.net/gallery/200509519/Dish-Delight',
    icon: Brush
  },

  { // Wedding Planning System Project
    title: 'Wedding Planning System (2021)',
    category: 'Web App',
    description: `Full-featured wedding planning system with event and booking management.
                  Users can create, update, and track wedding plans and related tasks with ease. 
                  Implemented with HTML, CSS, and JavaScript, focusing on frontend functionality.`,
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'XAMPP', 'Visual Studio Code'],
    link: 'https://github.com/GihanBandaraX/Y1S2_Wedding-Planning-System',
    icon: Code
  }
];

// Technical Skills Data
const skills = {
  "Languages": { items: ["Java", "Python", "JavaScript", "PHP","SQL"], icon: Code, color: "bg-indigo-500" },
  "Frontend": { items: ["HTML/CSS", "React.js", "Tailwind CSS", "Vue.js","Bootstrap"], icon: Layers, color: "bg-blue-500" },
  "Backend": { items: ["Node.js", "Express.js", "Spring Boot", "Java Servlets"], icon: Server, color: "bg-purple-500" },
  "Database": { items: ["MongoDB", "MySQL", "SQL Server"], icon: Database, color: "bg-rose-500" },
  "Cloud & DevOps": { items: ["AWS", "Microsoft Azure", "Git/GitHub", "Docker"], icon: Cloud, color: "bg-sky-500" },
  "IoT & Network": { items: ["IoT Architecture", "Cisco Packet Tracer", "Arduino"], icon: Cpu, color: "bg-green-500" },
  "UI/UX Design": { items: ["Canva", "Figma", "Mockflow Wireframes", "Adobe Photoshop CC", "Adobe XD"], icon: Brush, color: "bg-pink-500" },
  "Operating Systems": { items: ["Windows", "Linux (Ubuntu)"], icon: Laptop, color: "bg-yellow-500" }  
};

// --- Helper Components for Tailwind Styling ---

// Dark Mode Toggle Logic
const ThemeToggle = ({ darkMode, toggleDarkMode }) => (
  <button
    onClick={toggleDarkMode}
    aria-label="Toggle theme"
    className={`p-2 rounded-full transition-colors duration-300 ${
      darkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    } shadow-md`}
  >
    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
  </button>
);

// Section Header Component
const SectionHeader = ({ title }) => (
  <div className="flex items-center gap-4 mb-12">
    <div className="h-0.5 bg-indigo-500 w-12 rounded-full"></div>
    <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
  </div>
);

// Main App Component
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  // Simple Dark Mode Handler (sets class on body/html for global tailwind support)
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category.includes(activeFilter) || (activeFilter === 'Web' && ['Full Stack', 'Web App'].includes(p.category)));

  // Tailwind theme classes
  // Enhanced background to simulate a material/textured look
  const bgColor = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const navBg = darkMode ? 'bg-gray-900/90 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md';
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white';
  const borderColor = darkMode ? 'border-gray-700' : 'border-gray-200';
  const textMuted = darkMode ? 'text-gray-400' : 'text-gray-600';
  const textPrimary = darkMode ? 'text-white' : 'text-gray-900';
  const linkHoverColor = 'hover:text-indigo-500';

  return (
    // Outer Container with subtle dark mode background texture
    <div className={`min-h-screen ${bgColor} ${textPrimary} font-inter transition-colors duration-300`}>
      
      {/* Navigation Bar */}
      <nav className={`sticky top-0 z-50 w-full border-b ${borderColor} ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Icon */}
                <div 
                  className="cursor-pointer"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <CircleUserRound className="w-8 h-8 text-indigo-500 hover:text-purple-600 transition-colors" />
                </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`p-2 rounded-md text-sm font-medium transition-colors duration-200 ${textMuted} ${linkHoverColor}`}>
                  {link.name}
                </a>
              ))}
              <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 md:hidden">
              <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle mobile menu"
                className={`p-2 rounded-lg transition-colors ${textPrimary} hover:bg-gray-200 dark:hover:bg-gray-700`}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className={`md:hidden ${cardBg} border-b ${borderColor} shadow-xl`}>
            <div className="pt-2 pb-3 space-y-1 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${textPrimary} hover:bg-indigo-500 hover:text-white transition-colors`}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Sections */}
      <main>
        {/* Hero Section (About) */}
        <section 
          id="about" 
          className="max-w-7xl mx-auto pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex flex-col space-y-6 flex-1 animate-fadeInUp">
            
            {/* New Title Structure */}
            <div className='flex flex-col space-y-2'>
              <div className="flex items-center space-x-2 text-sm font-semibold tracking-wide uppercase text-indigo-500">
                <BookOpen size={16} />
                <span>IT UNDERGRADUATE - SLIIT (2021-2025) </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight"> Gihan Bandara</h1>

              <p className={`text-xl sm:text-2xl max-w-4xl ${textMuted} font-medium`}>
                Full-Stack Developer | UI/UX Designer <br />
                IoT & Cloud Enthusiast <span className='ml-2 text-base font-bold text-green-500'>(AWS & Aviatrix Certified)</span>
              </p>

              <p className={`flex items-center space-x-1 text-base ${textMuted}`}>
                <MapPin size={16} className='text-red-400' />
                <span><b>Colombo District, Western Province, Sri Lanka</b></span>
              </p>
            </div>
            
            {/* Bio Description (Updated) */}
              <div className={`leading-relaxed max-w-3xl pt-4 space-y-4 ${textMuted}`}>
                <p>
                  I'm an IT undergraduate at SLIIT specializing in Full-Stack Development, UI/UX Design, Cloud Computing, Networking, and IoT. 
                  Gained hands-on experience through my internship at SLT Digital Lab, contributing to innovative, user-focused digital solutions.
                </p>
                <p>
                  Certified in AWS Cloud, Generative AI, and Aviatrix Multicloud Networking, with additional training in AI, IoT, and Data Science, 
                  I am passionate about applying emerging technologies to solve real-world problems. 
                  I thrive in collaborative, fast-paced environments, bringing strong communication, problem-solving, and time management skills.
                </p>
                <p>
                  Currently seeking internship opportunities to apply my academic knowledge to real-world projects, 
                  contribute to dynamic teams, and further develop both technical and creative skills while staying updated 
                  with the latest trends in software development, cloud computing, and IoT innovations.
                </p>
              </div>

            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out transform hover:scale-[1.01]">
                Contact Me
              </a>

              { /* Download CV Button */}
              <a
                href="/Resume-Gihan-Bandara.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-8 py-3 border ${borderColor} text-base font-medium rounded-lg shadow-md ${textPrimary} ${cardBg} hover:border-indigo-500 transition duration-150 ease-in-out transform hover:scale-[1.01]`}>
                <Download size={18} className="mr-2" />
                Downlaod CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-6">
              <a href="mailto:gihanshanpriyaviraj1999@gmail.com" className="text-gray-500 hover:text-red-500 transition-transform duration-200 hover:translate-y-[-2px]">
                <Mail size={24} />
              </a>

              <a href="https://www.linkedin.com/in/gihan-bandara-1bb9522b5/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-transform duration-200 hover:translate-y-[-2px]">
                <Linkedin size={24} />
              </a>

              <a href="https://github.com/GihanBandaraX" target="_blank" rel="noopener noreferrer" className={`text-gray-500 ${linkHoverColor} transition-transform duration-200 hover:translate-y-[-2px]`}>
                <Github size={24} />
              </a>
              
              <a href="https://www.behance.net/gihanbandara" target="_blank" rel="noopener noreferrer" className={`text-gray-500 hover:text-teal-500 transition-colors duration-200`}>
                    <Palette size={24} />
                  </a>
            </div>
          </div>
          
        {/* Profile Image */}
          <div className="flex-1 flex justify-center relative">
            <div
              className={`relative z-10 w-full max-w-md rounded-3xl overflow-hidden border-8 shadow-2xl ${
                darkMode ? 'border-gray-800 bg-gray-800' : 'border-white bg-white'
              } border-indigo-400/50`}>
              <div
                className={`w-full h-full aspect-square flex items-center justify-center ${
                  darkMode
                    ? 'bg-gradient-to-br from-gray-700 to-gray-800'
                    : 'bg-gradient-to-br from-gray-100 to-gray-300'
                }`} >
                <img
                  src="/profile_img.png"
                  alt="Gihan Bandara"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
          </section>

        {/* Experience Section */}
        <section id="experience" className={`py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Experience" />

            {/* Timeline Item */}
            <div className="relative border-l-2 border-indigo-500 ml-3 sm:ml-6">
              <div className="relative pl-8 sm:pl-12 pb-12">
                {/* Timeline dot */}
                <div 
                  className={`absolute left-[-10px] sm:left-[-11px] top-0 w-5 h-5 rounded-full border-2 border-indigo-500 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                ></div>
                
                <div 
                  className={`p-6 rounded-2xl border ${borderColor} transition-all duration-300 ${cardBg} shadow-xl hover:shadow-2xl hover:border-indigo-500`}>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-indigo-500">Software Developer (UI/UX Designer & IoT Engineer)</h3>
                      <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Sri Lanka Telecom (SLT Digital Lab)</p>
                    </div>
                    <span className="flex-shrink-0 px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                      Jul 2024 - Jan 2025
                    </span>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 ml-4 text-sm text-gray-600 dark:text-gray-400">
                    <li>Contributed to UI design and responsive web development for projects named as <b>Fazenda Smart Agro</b> and <b>DHL Warehouse</b>.</li>
                    <li>Integrated hardware devices with front-end interfaces for IoT-based solutions.</li>
                    <li>Collaborated with cross-functional teams to deliver innovative, user-focused digital products.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Certifications & Badges" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx} 
                  className={`flex p-6 rounded-2xl border ${borderColor} shadow-lg ${cardBg} gap-6 items-start transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:border-indigo-500`}>
                  {/* Badge Image container */}
                  <div
                    className={`w-24 h-24 flex-shrink-0 rounded-lg p-2 bg-white flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 ${cert.color.split(' ')[2].replace('border-', 'border-')}`}>
                    <a href={cert.credlyUrl} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
                      <img 
                        src={cert.image.startsWith('/') ? cert.image : `/${cert.image}`} 
                        onError={(e) => { 
                          e.target.onerror = null; 
                          e.target.src = `https://placehold.co/96x96/f1f1f1/333333?text=Missing`; 
                        }}
                        alt={cert.title} 
                        className="max-w-full max-h-full object-contain" 
                      />
                    </a>
                  </div>
                  
                  {/* Badge Details */}
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-1 leading-tight">
                      <a href={cert.credlyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
                        {cert.title}
                      </a>
                    </h4>
                    <p className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{cert.issuer}</p>
                    
                    {/* Date */}
                    <div className="flex items-center space-x-2 text-xs mb-3 opacity-70 text-gray-600 dark:text-gray-400">
                      <Calendar size={14} />
                      <span><b>{cert.date}</b></span>
                    </div>

                    {/* Skills/Tags */}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx} 
                          className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${cert.color}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Technical Skills" />

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, { items, icon: IconComponent, color }]) => (
                <div 
                  key={category} 
                  className={`p-6 rounded-2xl border ${borderColor} ${cardBg} shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:border-indigo-500`}
                >
                  <h3 className="text-lg font-bold mb-4">
                    <div className="flex items-center space-x-2">
                      <IconComponent size={20} className="text-indigo-500" />
                      <span>{category}</span>
                    </div>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span 
                        key={skill} 
                        className={`px-3 py-1 text-sm font-medium rounded-md text-white ${color} shadow-sm`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

    {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header and Filter Buttons */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
            <SectionHeader title="Featured Projects" />

            <div className="flex flex-wrap gap-2">
              {['All', 'Full Stack', 'IoT & ML', 'UI/UX', 'Web App'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 shadow-md ${
                    activeFilter === filter 
                      ? 'bg-indigo-600 text-white shadow-lg' 
                      : `border ${borderColor} ${cardBg} ${textMuted} hover:border-indigo-500`}`}>
                  {filter}
                </button>
              ))}
            </div>
          </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project, index) => {
        const IconComponent = project.icon;
        return (
          <div 
            key={index}
            className={`flex flex-col rounded-2xl overflow-hidden border ${borderColor} shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:border-indigo-500 ${cardBg}`}>
            {/* Project Thumbnail Placeholder (Icon) */}
            <div 
              className={`h-48 w-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-600`}>
              <div className="transform transition duration-500 hover:scale-110">
                <IconComponent size={40} className="text-indigo-500" />
              </div>
            </div>
            
            <div className="p-6 w-full flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase">
                  {project.category}
                </span>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={`text-gray-500 hover:text-indigo-500 transition-colors`}>
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className={`text-sm mb-4 line-clamp-5 ${textMuted}`}>{project.description}</p>
              
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-md bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

      {/* Contact Section */}
        <section id="contact" className={`py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className={`text-lg mb-12 max-w-2xl mx-auto ${textMuted}`}>
              I'm currently seeking internship opportunities to apply my skills in Full-Stack Development and UI/UX Design. 
              Have a project in mind or just want to say hi?
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              {/* Email CTA */}
              <a
                href="mailto:gihanshanpriyaviraj1999@gmail.com"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out transform hover:scale-[1.01]"
              >
                <Mail size={20} className="mr-2" />
                Send an Email
              </a>
              
              {/* Phone CTA */}
              <a
                href="tel:+94767241653"
                className={`inline-flex items-center justify-center px-8 py-3 border ${borderColor} text-base font-medium rounded-xl shadow-md ${textPrimary} ${cardBg} hover:border-indigo-500 transition duration-150 ease-in-out transform hover:scale-[1.01]`}
              >
                +94 76 724 1653
              </a>
            </div>

      {/* Footer */}
              <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 relative">
                <div className="flex justify-center space-x-6 mb-4">
                  <a href="https://github.com/GihanBandaraX" target="_blank" rel="noopener noreferrer" className={`text-gray-500 ${linkHoverColor} transition-colors duration-200`}>
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/gihan-bandara-1bb9522b5/" target="_blank" rel="noopener noreferrer" className={`text-gray-500 hover:text-blue-500 transition-colors duration-200`}>
                    <Linkedin size={24} />
                  </a>
                  <a href="https://www.behance.net/gihanbandara" target="_blank" rel="noopener noreferrer" className={`text-gray-500 hover:text-teal-500 transition-colors duration-200`}>
                    <Palette size={24} />
                  </a>
                </div>

              <p className="text-sm text-gray-500 text-center">
                {new Date().getFullYear()} © Gihan Bandara. Built with React & Tailwind CSS
              </p>

      {/* Back to Top Button */}
          <BackToTopButton />

            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default App;