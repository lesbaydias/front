import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaComments   } from "react-icons/fa"; // Import the icons you want to use

const Contact = () => {
  return (
    <section className="section light-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">
          <FaComments  className="contact-title-icon" />
          Contact Us
        </h2>
        
        <div className="contact-info">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p><strong className="abv">Address:</strong> Almaty region, Karasai district, 040900, Kaskelen city, 1/1 Abylai Khan street</p>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <p><strong className="abv">Tel:</strong> +7 (727) 307 95 65</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p><strong className="abv">Email:</strong> <a href="mailto:bauyrzhan.yedgenov@sdu.edu.kz" className="aLink">bauyrzhan.yedgenov@sdu.edu.kz</a>, <a href="mailto:info@crld.sdu.edu.kz" className="aLink">info@crld.sdu.edu.kz</a></p>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1160.938676771185!2d76.9517868927859!3d43.19447959734547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3887d00000000001%3A0xf5b54fd9dd45886b!2sSDU%20University!5e0!3m2!1sen!2skz!4v1695816954853!5m2!1sen!2skz"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
