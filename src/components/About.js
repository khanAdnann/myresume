import React, { useState, useEffect } from 'react';

const About = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    technologies: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = {
      experience: 4,
      projects: 15,
      technologies: 8
    };

    Object.keys(targets).forEach((key) => {
      let current = 0;
      const increment = targets[key] / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= targets[key]) {
          current = targets[key];
          clearInterval(timer);
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, 40);
    });
  };

  const infoItems = [
    { icon: 'briefcase', label: 'Experience', value: '4+ Years' },
    { icon: 'map-marker-alt', label: 'Location', value: 'Mumbai, India' },
    { icon: 'plane', label: 'Relocation', value: 'Open to Relocation' },
    { icon: 'clock', label: 'Availability', value: 'Immediate Joiner' },
    { icon: 'passport', label: 'Visa', value: 'Sponsorship Required' }
  ];

  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-5" data-aos="fade-up">
              <h2 className="display-5 fw-bold">About Me</h2>
              <div className="title-line"></div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-content">
              <p className="lead">
                Seasoned Java Developer with 4+ years of hands-on experience designing, developing, 
                and deploying scalable enterprise applications. Strong expertise in Spring Boot, 
                Microservices architecture, and DevOps practices. Proven success delivering payment 
                and banking systems including UPI, AEPS, IMPS, and Card Reconciliation systems. 
                Skilled in secure API development, troubleshooting, leadership, and performance optimization.
              </p>
              <div className="about-info mt-4">
                {infoItems.map((item, index) => (
                  <div className="info-item" key={index}>
                    <i className={`fas fa-${item.icon}`}></i>
                    <span>
                      <strong>{item.label}:</strong> {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">{counters.experience}+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{counters.projects}</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{counters.technologies}</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
