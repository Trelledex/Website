// src/CoreSolutions.js
import React from 'react';
import './styles.css';
import { Helmet } from 'react-helmet';

const CoreSolutions = () => {
  return (
    <div className="core-solutions">
      <Helmet>
        <title>Trelledex</title>
        <meta name="description" content="Trelledex is a consulting company" />
      </Helmet>
      <div className="section-title">
          <h1 className='title_black1'>OUR CORE SOLUTIONS</h1>
          <p className='subHeading'>We are experts in developing your business</p>
        <div className="divider"></div>
      </div>
      <div className="solutions">
        <div className="solution">
        <i className="fa-solid fa-chart-column ic"></i>
          <h2 className='miniTitle'>ADVANCED DATA ANALYTICS</h2>
          <p className='description'>Swimming in your data? Our highly trained professionals can help you examine raw data to determine the right metrics for reports and visualizations, with a focus on capturing performance measures to enable data-driven decision making.</p>
        </div>
        <div className="solution">
          <i className="fa-solid fa-chart-line ic"></i>
          <h2 className='miniTitle'>BUSINESS INTELLIGENCE</h2>
          <p className='description'>Data is just data. It's what your people do with it that makes it valuable. Trelledex  can help you find the right business intelligence solution for your business challenges to gain actionable insight into your organization.</p>
        </div>
        <div className="solution">
        <i className="fa-solid fa-lightbulb ic" ></i>
          <h2 className='miniTitle'>SOFTWARE SOLUTIONS</h2>
          <p className='description'>We provide creative software solutions with an exploratory approach coupled with vision and a passion for technology. Trelledex  empowers it's customers by creating solutions to meet the needs of clients.</p>
        </div>
      </div>
    </div>
  );
}

export default CoreSolutions;
