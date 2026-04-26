import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const skillBarsRef = useRef([]);

  const skillsData = {
    languages: [
      { name: 'Java', level: 95 },
      { name: 'JavaScript', level: 80 }
    ],
    backend: [
      { name: 'Spring Boot', level: 90 },
      { name: 'Spring MVC', level: 85 },
      { name: 'Hibernate', level: 80 },
      { name: 'REST API', level: 92 }
    ],
    frontend: [
      { name: 'HTML5/CSS3', level: 88 },
      { name: 'Bootstrap', level: 85 },
      { name: 'React JS', level: 75 },
      { name: 'Angular', level: 70 }
    ],
    database: [
      { name: 'Oracle', level: 82 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 75 }
    ]
  };

  const devOpsTags = ['AWS', 'Jio Cloud', 'Git', 'Kafka', 'Tomcat', 'Linux'];
  const securityToolsTags = ['JWT', 'OAuth2', 'JUnit', 'Log4j', 'Spring Batch', 'Eureka', 'API Gateway'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.getAttribute('data-width');
            setTimeout(() => {
              progressBar.style.width = width;
            }, 200);
            observer.unobserve(progressBar);
          }
        });
      },
      { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
    );

    skillBarsRef.current.forEach((bar) => {
      if (bar) observer.observe(bar);
    });

    return () => observer.disconnect();
  }, []);

  const SkillCategory = ({ title, icon, skills, isTagList = false, tags = [] }) => (
    <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
      <div className="skill-category">
        <h3>
          <i className={`fas fa-${icon}`}></i> {title}
        </h3>
        {isTagList ? (
          <div className="skill-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        ) : (
          skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <span>{skill.name}</span>
              <div className="progress">
                <div
                  ref={(el) => (skillBarsRef.current[index] = el)}
                  className="progress-bar"
                  data-width={`${skill.level}%`}
                ></div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-5" data-aos="fade-up">
              <h2 className="display-5 fw-bold">Technical Skills</h2>
              <div className="title-line"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <SkillCategory
            title="Languages"
            icon="code"
            skills={skillsData.languages}
          />
          
          <SkillCategory
            title="Backend"
            icon="server"
            skills={skillsData.backend}
          />
          
          <SkillCategory
            title="Frontend"
            icon="laptop-code"
            skills={skillsData.frontend}
          />
          
          <SkillCategory
            title="Database"
            icon="database"
            skills={skillsData.database}
          />
          
          <SkillCategory
            title="DevOps/Cloud"
            icon="cloud"
            isTagList={true}
            tags={devOpsTags}
          />
          
          <SkillCategory
            title="Security & Tools"
            icon="shield-alt"
            isTagList={true}
            tags={securityToolsTags}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
