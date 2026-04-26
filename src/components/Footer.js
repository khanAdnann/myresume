import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: 'envelope',
      href: 'mailto:adnankhanpvtt@gmail.com',
      label: 'Email'
    },
    {
      icon: 'phone',
      href: 'tel:+918082293411',
      label: 'Phone'
    },
    {
      icon: 'linkedin',
      href: 'https://linkedin.com/in/adnankhan',
      label: 'LinkedIn'
    },
    {
      icon: 'github',
      href: 'https://github.com/adnankhan',
      label: 'GitHub'
    }
  ];

  return (
    <footer className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-content text-center">
              <p>&copy; {currentYear} Adnan Khan. Built with ❤️ using React, Bootstrap & Modern Web Technologies</p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="footer-social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <i className={`fab fa-${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
