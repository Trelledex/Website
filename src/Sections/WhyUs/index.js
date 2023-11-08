// src/WhyUs.js
import React from 'react';
import './styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Helmet } from 'react-helmet';

const WhyUs = () => {
  return (
    <div className="why-us">
      <Helmet>
        <title>Trelledex</title>
        <meta name="description" content="Trelledex is a consulting company" />
      </Helmet>
      <div className="background-image"></div>
      <div className="content1">
        <div className="why-us-item">
          <i className="fa-solid fa-champagne-glasses in"></i>
          <div className="number">2020</div>
          <div className="description0">Year founded</div>
        </div>
        <div className="why-us-item">
        <i className="fa-solid fa-database in"></i>
          <div className="number">15</div>
          <div className="description0">Databases</div>
        </div>
        <div className="why-us-item">
        <i className="fa-solid fa-network-wired in"></i>
          <div className="number">3230</div>
          <div className="description0">Datasets</div>
        </div>
        {/* <div className="why-us-item">
          <i className="fa-regular fa-handshake in"></i>
          <div className="number">0</div>
          <div className="description0">Partners</div>
        </div> */}
      </div>
    </div>
  );
}

export default WhyUs;
