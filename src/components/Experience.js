import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Sr Software Engineer',
      company: 'IDBI Intech',
      period: 'Dec 2023 – Present | Navi Mumbai',
      responsibilities: [
        'Built debit card reconciliation systems for NFS, RuPay, Mastercard, VISA',
        'Migrated Spring MVC to Spring Boot Java 21',
        'Built React dashboards for monitoring and analytics',
        'Used Citrix and IDBI Cloud for deployment',
        'Performance optimization using lazy loading techniques',
        'Implemented comprehensive logging using Log4j',
        'Unit testing and integration testing with JUnit'
      ]
    },
    {
      id: 2,
      position: 'Java Developer',
      company: 'Takira Solution',
      period: 'Aug 2022 – Nov 2023',
      responsibilities: [
        'Developed REST API integrations for payment systems',
        'Workflow automation reduced manual effort by 40%',
        'Created Angular frontend modules for user interfaces',
        'Implemented sensitive data masking for security',
        'Runtime error handling and exception management',
        'Secure API integrations with third-party services'
      ]
    },
    {
      id: 3,
      position: 'Jr Java Developer',
      company: 'Uno Tech Pvt Ltd',
      period: 'Dec 2021 – Aug 2022',
      responsibilities: [
        'Worked on UPI Switch, UPI Lite, and UDIR systems',
        'Implemented Kafka messaging for real-time processing',
        'Developed AEPS modules for banking operations',
        'HSM integrations for secure key management',
        'ISO8583 banking systems implementation',
        'SQL development and database optimization'
      ]
    }
  ];

  return (
    <section id="experience" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-5" data-aos="fade-up">
              <h2 className="display-5 fw-bold">Experience</h2>
              <div className="title-line"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
                  data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>{exp.position}</h3>
                      <span className="company">{exp.company}</span>
                      <span className="period">{exp.period}</span>
                    </div>
                    <div className="timeline-body">
                      <ul>
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
