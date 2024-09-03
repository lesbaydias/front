import React from "react";
import { FaArrowDown } from "react-icons/fa"; // Import an icon for visual appeal

const Hero = () => {
  return (
    <section className="hero">
      <div className="background-animation"></div>
      <div className="text-container">
        <h1 className="animate-title">
          Welcome to <br /> Center for Regional and Local Development
        </h1>
        <p className="subtext animate-subtext">
          Empowering regions through sustainable solutions.
        </p>
        <a href="#about" className="scroll-down animate-scroll">
          <FaArrowDown className="scroll-icon" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
