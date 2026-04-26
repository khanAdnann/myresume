import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import ResumeDownload from './ResumeDownload';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Profile image - replace with your actual image path
  const profileImage = "/images/adnan-profile.jpg";

  const roles = [
    'Java Developer',
    'Spring Boot Expert',
    'Microservices Engineer',
    'React Developer',
    'Full Stack Developer'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      
      if (isDeleting) {
        setTypedText(currentRole.substring(0, typedText.length - 1));
        setTypingSpeed(50);
      } else {
        setTypedText(currentRole.substring(0, typedText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && typedText === currentRole) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  useEffect(() => {
    // Create particles
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  return (
    <section id="home" className="hero">
      <div className="particles-bg" id="particles"></div>
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 hero-content" data-aos="fade-right">
            <div className="hero-text">
              <h1 className="display-3 fw-bold mb-3">
                Hi, I'm <span className="gradient-text">Adnan Khan</span>
              </h1>
              <div className="typing-text">
                <h2 className="h4 mb-4">I'm a <span id="typedText">{typedText}</span></h2>
              </div>
              <p className="lead mb-4">
                Senior Java Developer crafting scalable enterprise solutions with Spring Boot, 
                Microservices, and modern web technologies.
              </p>
              
              <div className="hero-buttons">
                <Link
                  to="contact"
                  className="btn btn-primary btn-lg me-3"
                  smooth={true}
                  duration={500}
                  offset={-80}
                >
                  <i className="fas fa-envelope"></i> Hire Me
                </Link>
                <ResumeDownload className="btn btn-outline-primary btn-lg">
                  <i className="fas fa-download"></i> Download Resume
                </ResumeDownload>
              </div>
              
              <div className="social-links mt-4">
                <a href="mailto:adnankhanpvtt@gmail.com" className="social-icon">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="tel:+918082293411" className="social-icon">
                  <i className="fas fa-phone"></i>
                </a>
                <a href="https://linkedin.com/in/adnankhan" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/adnankhan" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 hero-image" data-aos="fade-left">
            <div className="profile-card">
              <div className="profile-img">
                <img 
                  src={profileImage} 
                  alt="Adnan Khan" 
                  className="img-fluid rounded-circle"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x400/4a69bd/ffffff?text=Adnan+Khan";
                  }}
                />
              </div>
              <div className="profile-overlay">
                <div className="profile-info">
                  <h3>Adnan Khan</h3>
                  <p>Senior Java Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
