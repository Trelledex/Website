// src/WhoWeAre.js
import React from 'react';
import './styles.css';
import { Helmet } from 'react-helmet';

const WhoWeAre = () => {
  
  return (
    <div className="who-we-are">
      <Helmet>
        <title>Trelledex</title>
        <meta name="description" content="Trelledex is a consulting company" />
      </Helmet>
      <h1 className='title_black'>Contact Us</h1>
      <p className='subHeading'>Have any questions? We'd love to hear from you</p>
      <div className="divider"></div>
      <div className="content">
        <div className="left">
          <img className="smallImg" src={require("../../assets/imgs/contactus.jpg")} alt="People Holding Hands" />
        </div>
      <div className="right">
        <div className='formContainer'>
          <form className="contact-form"  action="https://formspree.io/f/xoqorwea"  method="POST">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
            </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
