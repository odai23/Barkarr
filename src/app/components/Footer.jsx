import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>RESERVATIONS</h3>
          <p>info@barkarr.com</p>
          <p>+420 777 555 555</p>
          <p>Reservations by mail or whatsapp call</p>
        </div>
        <div className="footer-section">
          <h3>OPENING HOURS</h3>
          <p>
            SUNDAY - FRIDAY
            <br />
            11:00 - 23:00
          </p>
        </div>
        <div className="footer-section">
          <h3>ADDRESS</h3>
          <p>Barkarr | Greek Traditional Cuisine in Prague</p>
          <p>Vinohrady</p>
          <p>📍 Vršovická 1525/1a</p>
        </div>
      </div>

      <div className="footer-socials">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/barkarr.cz/">
          <FaInstagram />
        </a>
      </div>

      <div className="footer-bottom">
        Non-smoking restaurant | Air-conditioned | WiFi connection | Pets are
        welcome
      </div>
    </footer>
  );
};

export default Footer;
