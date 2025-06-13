import React from "react";
import "../../styles/contact.css";
import ContactInfo from "./ContactInfo";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="section-title">CONTACT US</h2>
        <p className="section-subtitle">We are here to help you!</p>
        <div className="contact-content">
          <ContactInfo />
          <div className="contact-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!..."
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
