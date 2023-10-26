// src/WhoWeAre.js
import React from 'react';
import './styles.css';

const WhoWeAre = () => {
  return (
    <div className="who-we-are">
      <h1 className='title_black'>WHO WE ARE</h1>
      <p className='subHeading'>Some things you should know about us</p>
      <div className="divider"></div>
      <div className="content">
        <div className="left">
          <img className="smallImg" src={require("../../assets/imgs/tm.jpg")} alt="People Holding Hands" />
        </div>
        <div className="right">
          <p>Trelledex is a consulting firm that specializes in data analytics,
             business intelligence, and software implementation. 
             We provide our customers with bespoke innovative solutions that 
             leverage new and emerging technologies to meet and exceed 
             their expectations. We understand that while business 
             challenges follow common trends, each of our clients is unique
             which is why solutions are tailored to fit their particular needs.</p>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
