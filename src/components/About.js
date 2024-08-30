import React from "react";
import { FaMapMarkerAlt, FaUsers, FaGlobeAmericas } from "react-icons/fa"; // Import modern icons

const About = () => {
  return (
    <section className="section dark-section" id="about">
      <div className="content-container">
        <h1 className="about-title">About Us</h1>
        <h3 className="about-subtitle">Local Development, Global Impact</h3>

        <div className="about-description">
          <p className="animated-text">
          The Center for Regional and Local Development was established at SDU University in Kaskelen, 
          Kazakhstan in 2024. Housed at Business School, the Center facilitates and promotes research
          and builds capacity on socio-economic development of okrugs, cities, raions, oblasts and beyond. 
          </p>
          <p className="animated-text">
          Scientific research approach will facilitate evidence-based policy making and 
          generate new sustainable solutions through both quantitative and qualitative methods.
          Our team has expertise in various methods and promote academic and professional 
          integrity in research and evaluation.
          </p>
          <p className="animated-text">
          Capacity building will promote better governance for improved socio-economic outcomes. 
          The capacity building elements include program evaluation, fiscal policy and budget 
          management, among others. 
          </p>
        </div>

        {/* Image Section */}
        <div className="image-container">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Research Image"
            className="animated-image"
          />
          <img
            src="https://via.placeholder.com/600x400"
            alt="Team Collaboration"
            className="animated-image"
          />
          <img
            src="https://via.placeholder.com/600x400"
            alt="Impactful Projects"
            className="animated-image"
          />
        </div>

        {/* Mission and Goals Section */}
        <div className="mission-goals-container">
          <div className="mission-section">
            <h2 className="sectionss-title">Mission</h2>
            <p className="animated-text">
            Empowering communities through innovative research and collaboration, 
            our mission is to drive sustainable regional and local development. 
            </p>
          </div>
          <div className="goals-section">
            <h2 className="sectionss-title">Goals</h2>
            <p className="animated-text">
            Our goal is to strive to identify and implement impactful solutions 
            that enhance economic prosperity, social well-being, and environmental 
            resilience, fostering a vibrant and inclusive future for all.
            </p>
          </div>
        </div>

        {/* Icons Section */}
        <div className="icons-container">
          <div className="icon-box">
            <FaMapMarkerAlt className="icon" />
            <p>Regional Focus</p>
          </div>
          <div className="icon-box">
            <FaUsers className="icon" />
            <p>Community Engagement</p>
          </div>
          <div className="icon-box">
            <FaGlobeAmericas className="icon" />
            <p>Global Impact</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
