import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Eye, Code } from 'lucide-react'
import MusicRec from '../assets/MusicRec.png'
import FindMyRecipe from '../assets/FindMyRecipe.png'
import ChatApp from '../assets/ChatApp.jpg'
import MyDailyHub from '../assets/MyDailyHub.png'
import CampusEats from '../assets/CampusEats.jpg'
import PillCare from '../assets/PillCare.png'
import SmartPill from '../assets/SmartPill.png'

import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  
  const projects = [
    {
      id: 1,
      title: "MusicRec",
      description: "A full-stack music app that recommends songs based on user preferences. Includes track search, save feature, and personalized recommendations using Spotify.",
      image: MusicRec,
      category: "webapp",
      technologies: ["Pyhton", "React", "FastAPI", "MongoDB", "Spotify API"],
      github: "https://github.com/NuhaYoosuf/MusicRec",
      demo: "https://ecommerce-demo.netlify.app",
    
    },
    {
      id: 2,
      title: "Find My Recipe",
      description: "A Flutter-powered mobile application that helps users find recipes based on ingredients they have in their kitchen. Perfect for reducing food waste and discovering new meal ideas.",
      image: FindMyRecipe,
      category: "mobile app",
      technologies: ["Flutter", "Dart", "Google ML Kit", "Hive", "Spoonacular API"],
      github: "https://github.com/NuhaYoosuf/Find-My-Recipe",
      demo: "https://task-manager-demo.netlify.app",
      
    },
    {
      id: 3,
      title: "My Daily Hub | Group",
      description: "A cloud-powered mobile productivity app designed to unify task management, note-taking, file uploads, and real-time communication into one responsive platform for Android users.",
      image: MyDailyHub,
      category: "mobile app",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      github: "https://github.com/SEUSL-DICT/Group_3",
      demo: "https://weather-dashboard-demo.netlify.app",
      featured: false
    },
    {
      id: 4,
      title: "ChatApp | Group ",
      description: "A simple web-based chat application that enables real-time communication between users.",
      image: ChatApp,
      category: "webapp",
      technologies: ["PHP",   "JavaScript",  "HTML", "CSS", "MySQL"],
      github: "https://github.com/NuhaYoosuf/SWT2202-IAD-Mini-Project-ChatApp",
      demo: "https://blog-api-docs.herokuapp.com",
     
    },
    {
      id: 5,
      title: "PillCare",
      description: "An Android application that helps users track their medication with smart reminders and daily logs.",
      image: PillCare,
      category: "mobile app",
      technologies: ["Java", "XML", "Room (SQLite)"],
      github: "https://github.com/NuhaYoosuf/PillCare",
      demo: "https://finance-tracker-demo.herokuapp.com",
     
    },
    {
      id: 6,
      title: "Smart Pill Reminder System | IoT-Based Healthcare App | Group ",
      description: "An IoT-powered medication management system combining real-time reminders, sensor automation, and ML-based pill verification to assist users in adhering to medication schedules.",
      image: SmartPill,
      category: "iot",
      technologies: [ "ESP32","Firebase",  "Blynk IoT", "Android (Java)", "TensorFlow Lite", "Wokwi"],
      github: "https://github.com/HanaShams/SmartPillReminder",
      demo: "https://recipe-platform-demo.netlify.app",
    
    },
    {
      id: 7,
      title: "CampusEats | Group	 ",
      description: "A Laravel-based platform designed to connect university students with nearby restaurants for convenient online food ordering. It supports both restaurant and user functionalities with distinct dashboards and workflows.",
      image: CampusEats,
      category: "webapp",
      technologies: [ "Laravel", "PHP", "MySQL", "Git"],
      github: "https://github.com/rashadamd/CampusEats",
      demo: "https://recipe-platform-demo.netlify.app",
    
    }
  ]

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'webapp', label: 'Web App' },
    { key: 'mobile app', label: 'Mobile App' },
    { key: 'iot', label: 'IOT Project' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A showcase of my recent work and contributions</p>
        </motion.div>

        <motion.div 
          className="filter-tabs"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-tab ${filter === category.key ? 'active' : ''}`}
              onClick={() => setFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {project.featured && <div className="featured-badge">Featured</div>}
                
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View source code"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      <Code size={16} />
                      Code
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <Eye size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Projects