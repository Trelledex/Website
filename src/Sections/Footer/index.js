// src/Footer.js
import React from 'react';
import './styles.css';
import { Helmet } from 'react-helmet';

const Footer = () => {
  return (
    <footer className="footer">
         <Helmet>
        <title>Trelledex</title>
        <meta name="description" content="Trelledex is a consulting company" />
      </Helmet>
      <div className="footer-content">
      <div className="logo">
          <img className='logopic'src={require("../../assets/logos/logoMain.png")} />
          <img className='companyname' src={require("../../assets/logos/company-name.png")} />
        </div>
        <div className="footer-contact">
          {/* Contact information */}
          <h3>Contact Us</h3>
          <p>Email: info@trelledex.com</p>
        </div>
        <div className="footer-social">
          {/* Links to social media */}
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/company/trelledex/">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Trelledex. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
