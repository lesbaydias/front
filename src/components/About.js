import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.text-content, .section-title, h1');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

    revealElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      revealElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="container2">
      <div className="text-content">
        <div className="section-title">
          <div className="title-bar"></div>
          <div className="title-text">About Us</div>
        </div>
        <h1>
          The Center for Regional and Local Development, established at SDU University in Kaskelen, Kazakhstan in 2024, is part of the Business School. It focuses on socio-economic research and capacity building for regions and cities. Our approach includes evidence-based policy-making and sustainable solutions through both quantitative and qualitative methods. We emphasize academic and professional integrity in research. 
        </h1>
      </div>
    </div>
  );
};

export default About;
