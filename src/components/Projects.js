import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'UPI Switch & UPI Lite',
      description: 'Unified Payments Interface switch system with lite version for low-value transactions, supporting multiple banks and payment providers.',
      tech: ['Java', 'Spring Boot', 'Kafka'],
      icon: 'exchange-alt',
      status: 'completed'
    },
    {
      id: 2,
      title: 'I-RECON Card Reconciliation',
      description: 'Intelligent reconciliation system for NFS, RuPay, Mastercard, and VISA transactions with automated dispute resolution.',
      tech: ['Spring Boot', 'React', 'Oracle'],
      icon: 'credit-card',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Intra-mart Banking Solutions',
      description: 'Comprehensive net banking and mobile banking platform with secure authentication and transaction processing.',
      tech: ['Java', 'Angular', 'MySQL'],
      icon: 'university',
      status: 'completed'
    },
    {
      id: 4,
      title: 'UDIR Dispute Resolution',
      description: 'Unified Dispute Resolution system for handling payment disputes and chargebacks with automated workflow management.',
      tech: ['Spring MVC', 'Hibernate', 'JWT'],
      icon: 'handshake',
      status: 'completed'
    },
    {
      id: 5,
      title: 'IMPS/NETC/AEPS Banking',
      description: 'Integrated payment solutions for Immediate Payment Service, National Electronic Toll Collection, and Aadhaar Enabled Payment System.',
      tech: ['Java', 'ISO8583', 'HSM'],
      icon: 'mobile-alt',
      status: 'completed'
    },
    {
      id: 6,
      title: 'Microservices Gateway',
      description: 'API Gateway with service discovery, load balancing, and security features for microservices architecture.',
      tech: ['Spring Cloud', 'Eureka', 'OAuth2'],
      icon: 'cogs',
      status: 'in-progress'
    }
  ];

  const getProjectIcon = (iconName) => {
    const iconMap = {
      'exchange-alt': 'fas fa-exchange-alt',
      'credit-card': 'fas fa-credit-card',
      'university': 'fas fa-university',
      'handshake': 'fas fa-handshake',
      'mobile-alt': 'fas fa-mobile-alt',
      'cogs': 'fas fa-cogs'
    };
    return iconMap[iconName] || 'fas fa-project-diagram';
  };

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-5" data-aos="fade-up">
              <h2 className="display-5 fw-bold">Projects</h2>
              <div className="title-line"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">
                    <i className={getProjectIcon(project.icon)}></i>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-status">
                    <span className={`status-badge ${project.status}`}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
