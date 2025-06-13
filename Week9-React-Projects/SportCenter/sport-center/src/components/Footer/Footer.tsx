import React from "react";
import "../../styles/footer.css";
import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks";

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <FooterLogo />
        <FooterLinks />
      </div>
    </footer>
  );
};

export default Footer;
