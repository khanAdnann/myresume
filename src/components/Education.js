import React from 'react';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'B.Sc Information Technology',
      institution: 'Vidyalankar, Mumbai',
      university: 'University of Mumbai – 2020',
      icon: 'graduation-cap',
      description: 'Comprehensive study of software development, database management, and computer networks with focus on practical applications.'
    },
    {
      id: 2,
      degree: 'Diploma Computer Engineering',
      institution: 'Vidyalankar, Mumbai',
      university: 'University of Mumbai – 2018',
      icon: 'laptop-code',
      description: 'Foundation in computer engineering principles, programming languages, and hardware-software integration.'
    }
  ];

  return (
    <section id="education" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-5" data-aos="fade-up">
              <h2 className="display-5 fw-bold">Education</h2>
              <div className="title-line"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {education.map((edu, index) => (
            <div className="col-lg-6 mb-4" key={edu.id} data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
              <div className="education-card">
                <div className="education-icon">
                  <i className={`fas fa-${edu.icon}`}></i>
                </div>
                <div className="education-content">
                  <h3>{edu.degree}</h3>
                  <p className="institution">{edu.institution}</p>
                  <p className="university">{edu.university}</p>
                  <div className="education-details">
                    <p>{edu.description}</p>
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

export default Education;
