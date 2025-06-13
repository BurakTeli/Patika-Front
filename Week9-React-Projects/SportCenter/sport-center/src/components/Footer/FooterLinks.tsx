import React from "react";

const FooterLinks: React.FC = () => {
  return (
    <>
      <div className="footer-column">
        <h3>Information</h3>
        <ul>
          <li><a href="#hero">About Us</a></li>
          <li><a href="#classes">Classes</a></li>
          <li><a href="#products">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Helpful Links</h3>
        <ul>
          <li><a href="#">Supports</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </>
  );
};

export default FooterLinks;
