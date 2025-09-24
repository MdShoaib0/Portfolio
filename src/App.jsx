import React, { useState, useRef, useEffect } from "react";
import { PiShootingStarThin } from "react-icons/pi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { IoArrowForward } from "react-icons/io5";
import { MdOutlineFileDownload, MdOutlineMail } from "react-icons/md";
import { RiFlashlightLine } from "react-icons/ri";
import { LuLinkedin } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";

import SkillsCard from "./components/SkillsCard";
import ServiceCard from "./components/ServiceCard";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import ContactDetail from "./components/ContactDetails";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollToPlugin);

// Social Links
const socialLinks = [
  { icon: FiGithub, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: LuLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: MdOutlineMail, href: "mailto:muhammedshoaib06@gmail.com", label: "Email" },
];

// Skills Data
const skills = [
  "Frontend Development",
  "Backend Development",
  "UI/UX Design",
  "Testing Automation",
  "DevOps",
  "Freelancing",
];

// Navigation Items
const navItems = [
  { label: "Home", path: "#home" },
  { label: "Skills", path: "#skill" },
  { label: "Projects", path: "#project" },
  { label: "Services", path: "#service" },
  { label: "Contact", path: "#contact" },
];

// Project Categories
const categories = ["All Projects", "Web Apps", "Testing", "Design"];

// Projects
const projects = [
  {
    title: "Portfolio Website",
    category: "Frontend",
    description: "Responsive portfolio built with React and Tailwind CSS.",
    tags: ["React", "Tailwind", "Vite"],
    liveDemo: "https://example.com",
    codeLink: "https://github.com/example",
    type: "Web Apps",
  },
  {
    title: "Real-Time Chat Application",
    category: "Web Development",
    description:
      "Scalable chat app with real-time messaging, file sharing, and video calls using WebSocket and microservices.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveDemo: "https://example.com/chat",
    codeLink: "https://github.com/example/chat",
    type: "Web Apps",
  },
  {
    title: "Automation Testing Suite",
    category: "Testing",
    description:
      "Comprehensive testing automation suite with Selenium and Java for cross-browser testing.",
    tags: ["Selenium", "Java", "JUnit"],
    liveDemo: "#",
    codeLink: "https://github.com/example/testing",
    type: "Testing",
  },
  {
    title: "UI Design System",
    category: "Design",
    description: "A reusable design system for consistent and scalable UI development.",
    tags: ["Figma", "Design Tokens", "UX"],
    liveDemo: "#",
    codeLink: "https://github.com/example/design-system",
    type: "Design",
  },
];

// Services
const services = [
  {
    iconColor: "white",
    title: "Full-Stack Development",
    description: "End-to-end web applications built with modern technologies.",
    features: ["Custom Web Apps", "E-commerce Platforms", "API Development", "Database Architecture"],
  },
  {
    iconColor: "white",
    title: "UI/UX Design",
    description: "User-centric designs with intuitive interfaces.",
    features: ["Wireframes", "Responsive Design", "Branding", "Visual Identity"],
  },
  {
    iconColor: "white",
    title: "Automation Testing",
    description: "Robust testing automation for web and mobile apps.",
    features: ["Test Scripts", "Regression Testing", "Integration Testing", "Cross-Browser Testing"],
  },
  {
    iconColor: "white",
    title: "DevOps & Deployment",
    description: "Efficient CI/CD pipelines and cloud deployment strategies.",
    features: ["CI/CD Setup", "Docker & Kubernetes", "AWS Deployment", "Monitoring"],
  },
  {
    iconColor: "white",
    title: "Freelancing",
    description: "Flexible freelance solutions for startups and enterprises.",
    features: ["Consultation", "Custom Development", "Support", "Maintenance"],
  },
  {
    iconColor: "white",
    title: "Consulting",
    description: "Expert guidance on technology and architecture improvements.",
    features: ["Technical Audits", "Strategy Planning", "Team Training", "Optimization"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const mobileMenuRef = useRef(null);

  // Smooth Scroll Handler
  const handleScroll = (e, path) => {
    e.preventDefault();
    setMenuOpen(false);
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: path, autoKill: true },
      ease: "power2.inOut",
    });
  };

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((p) => p.type === activeCategory);

    useGSAP(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

  if (menuOpen) {
    // Timeline for opening menu
    tl.fromTo(
      mobileMenuRef.current,
      { y: -300, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, display: 'flex' }
    )
    .fromTo(
      '#navigations_2',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 },
      "-=0.3" // starts 0.5s before previous animation ends (overlap)
    );
  } else {
    // Timeline for closing menu
    tl.fromTo(
      mobileMenuRef.current,
      { y: 0, opacity: 1 },
      { y: -300, opacity: 0, display: 'none', duration: 1 }
    );
    // If you want to animate navigations on close, you can uncomment this:
    tl.fromTo(
      '#navigations_2',
      { y: 0, opacity: 1 },
      { y: -50, opacity: 0, duration: 0.7, stagger: 0.1 },
      "-=0.3" // starts 0.5s before previous animation ends (overlap)
    );
  }

}, [menuOpen]);
  

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);


  return (
    <>
      {/* Header */}
      <header className="w-full h-20 flex items-center fixed top-0 left-0 bg-white z-50">
        <nav className="w-full" role="navigation">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex justify-end gap-10 font-bold px-10 py-6 items-center w-full">
            <li id="navigations" className="mr-auto text-3xl font-bold cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              <a href="#home" onClick={(e) => handleScroll(e, "#home")}>
                Shoaib's Portfolio
              </a>
            </li>
            {navItems.map(({ label, path }) => (
              <li key={label} id="navigations">
                <a
                  href={path}
                  onClick={(e) => handleScroll(e, path)}
                  className="text-pink-600"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-between items-center px-6 py-5 w-full">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              <a href="#home" onClick={(e) => handleScroll(e, "#home")}>
                Shoaib's Portfolio
              </a>
            </span>
            <button
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              className="text-purple-500 focus:outline-none z-50"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <svg width="32" height="32" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l20 20M26 6L6 26" />
                </svg>
              ) : (
                <svg width="32" height="32" stroke="currentColor" strokeWidth="2">
                  <path d="M6 10h20M6 16h20M6 22h20" />
                </svg>
              )}
            </button>
          </div>

          <ul
            // id="navi"
            ref={mobileMenuRef}
            className={`w-full absolute top-full left-0 rounded-b-3xl bg-gradient-to-b from-white to-emerald-50 hidden flex-col items-center gap-1 font-bold py-4 text-pink-600 shadow-2xl md:hidden origin-top z-50`}
          >
            {navItems.map(({ label, path }) => (
              <li id="navigations_2" key={label} className="py-2 px-4 rounded-lg hover:bg-purple-50 w-full text-center">
                <a href={path} onClick={(e) => handleScroll(e, path)} className="block w-full">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col gap-6 items-center text-center mt-10">
          <div id="free" className="flex items-center py-2 mt-4 px-3.5 gap-2.5 rounded-full bg-gradient-to-r from-emerald-300 to-emerald-200 shadow font-medium cursor-pointer hover:scale-105 transition-duration duration-300">
            <PiShootingStarThin size={21} color="orange" />
            <p className="text-sm text-slate-700">Available for Freelance Projects</p>
          </div>

          <h1 className="text-6xl sm:text-8xl font-bold py-1 text-slate-900">Full Stack</h1>
          <h1 className="text-6xl sm:text-8xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-all duration-300">
            Developer
          </h1>

          <p className="sm:text-3xl text-2xl px-12 font-light text-slate-950 leading-10">
            Web Development • Testing Automation • UI/UX Design • Freelancing
          </p>

          <p className="px-6 md:px-24 lg:px-48 xl:px-96 text-xl text-slate-800 leading-8">
            Crafting exceptional digital experiences through code, design, and testing.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8 mt-8">
            <button className="flex items-center justify-center text-white hover:text-black hover:border hover:border-pink-600 gap-3 shadow rounded-2xl w-56 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-none transition-all duration-300 hover:scale-105 active:scale-95">
              View My Work <IoArrowForward />
            </button>
            <button className="flex items-center justify-center gap-3 shadow rounded-2xl w-56 h-12 border bg-transparent hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-slate-200 text-pink-500 transition-all duration-300 hover:scale-105 active:scale-95">
              <MdOutlineFileDownload /> Download CV
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 mt-6 relative pb-20">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FiGithub size={25} className="text-slate-700" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FiLinkedin size={26} className="text-slate-700" />
            </a>
            <a href="mailto:your@email.com">
              <MdOutlineMail size={28} className="text-slate-700" />
            </a>

            {/* Scroll Animation Indicator */}
            <div id="outerLine" className="w-10 h-16 border-2 border-purple-600 rounded-full flex items-center justify-center absolute top-12">
              <div id="innerLine" className="w-2.5 h-4 bg-gradient-to-b from-pink-300 to-pink-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skill" className="flex flex-col">
        <div className="flex flex-col gap-6 justify-center items-center text-center mt-28 px-6">
          <div className="flex items-center gap-2 py-2.5 px-5 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium shadow">
            <RiFlashlightLine size={20} />
            <p>Expertise</p>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold leading-tight text-slate-950">
            Skills & <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg sm:text-xl leading-8 text-slate-800 max-w-2xl">
            A comprehensive toolkit built through years of experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 mx-6 sm:mx-10">
          {skills.map((skill) => (
            <SkillsCard key={skill} name={skill} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="project" className="flex flex-col">
        <div className="flex flex-col gap-8 justify-center items-center text-center mt-28 px-6">
          <div className="flex items-center justify-center gap-1.5 py-2.5 my-1 px-5 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium">
            <FaRegStar size={19} />
            <p>Portfolio</p>
          </div>
          <h2 className="sm:text-6xl text-5xl font-bold leading-tight text-slate-950">
            Featured <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
        </div>

        <div className="flex justify-center gap-4 flex-wrap font-medium text-sm py-12 px-8 text-slate-700">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2 rounded-full border transition-colors duration-300 ${activeCategory === cat
                ? "text-white bg-gradient-to-r from-purple-500 to-pink-500 border-none"
                : "hover:bg-purple-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-6">
          {filteredProjects.map((proj) => (
            <ProjectCard key={proj.title} {...proj} />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="service" className="flex flex-col">
        <div className="flex flex-col gap-8 justify-center items-center text-center mt-28 px-6">
          <div className="flex items-center gap-2 py-2.5 px-5 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium shadow">
            <RiFlashlightLine size={20} />
            <p>Services</p>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold leading-tight text-slate-950">
            What I <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Offer</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 mx-6 sm:mx-10">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex flex-col mt-28 mb-20 px-6">
        <div className="flex flex-col gap-6 justify-center items-center text-center mb-10">
          <h2 className="text-5xl sm:text-6xl font-bold leading-tight text-slate-950">
            Get in <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Touch</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10 justify-center items-start">
          <ContactForm />
          <ContactDetail />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full flex flex-col py-20 px-8 text-center justify-center items-center bg-gradient-to-r gap-8 from-blue-950 to-blue-900">
        <p className="text-3xl font-bold text-white">DevPortfolio</p>
        <p className="text-sm font-medium text-gray-50">
          Crafting exceptional digital experiences with passion and precision
        </p>

        <div className="flex gap-6">
          {socialLinks.map(({ icon: Icon, href, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 rounded-2xl shadow-lg flex justify-center items-center bg-blue-800 hover:bg-blue-700 transition-colors"
            >
              <Icon color="white" size={25} />
            </a>
          ))}
        </div>

        <p className="text-sm font-medium text-gray-200">
          © 2024 DevPortfolio. Designed & Developed with ❤️
        </p>
      </footer>
    </>
  );
}

export default App;