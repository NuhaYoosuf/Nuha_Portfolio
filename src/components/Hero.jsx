import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import './Hero.css'
import nuha from '../assets/DP.jpg'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="highlight">Nuha Yoosuf</span>
          </motion.h1>
          
          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Software Engineer
          </motion.h2>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I develop modern, responsive software solutions with clean code and user-friendly designs. 
            Passionate about building scalable applications that solve real-world problems.

          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
           <a href="/Nuha_Yoosuf_CV.pdf" download>
  <button className="btn btn-secondary">
    <Download size={18} style={{ marginRight: '8px' }} />
    Download CV
  </button>
</a>

          </motion.div>
          
          <motion.div 
            className="hero-social"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a href="https://github.com/NuhaYoosuf" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nuha-y-67814a21b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:ahunfathi000@gmail.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="profile-card">
            <div className="profile-image">
              <img src={nuha} alt="Nuha Yoosuf" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero