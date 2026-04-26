import React from 'react';

const ResumeDownload = ({ className = '', children }) => {
  const handleDownload = (e) => {
    e.preventDefault();
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Adnan_Khan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <a 
      href="/resume.pdf" 
      className={className}
      download="Adnan_Khan_Resume.pdf"
      onClick={handleDownload}
    >
      {children}
    </a>
  );
};

export default ResumeDownload;
