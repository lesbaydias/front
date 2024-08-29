import React from "react";
import { FaArrowDown } from "react-icons/fa"; // Import an icon for visual appeal

const Hero = () => {
  return (
    <section className="hero">
      <div className="text-container">
        <h1>
          Welcome to <br /> Center for Regional and Local Development
        </h1>
        <p className="subtext">Empowering regions through sustainable solutions.</p>
        <a href="#about" className="scroll-down">
          <FaArrowDown className="scroll-icon" />
        </a>
      </div>
      <div className="photo-container">
        <img
          src="https://sdu.edu.kz/wp-content/uploads/2023/04/o-nas.webp"
          alt="Development"
        />
      </div>
    </section>
  );
};

export default Hero;
