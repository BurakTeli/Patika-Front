import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <div className="contact-left">
      <p><strong>Mobile Number</strong> &nbsp; +1 875 732 4842</p>
      <p><strong>Email Address</strong> &nbsp; demo@gmail.com</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows={5} placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactInfo;
