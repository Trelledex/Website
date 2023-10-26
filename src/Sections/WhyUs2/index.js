// WhyUs.js
import React from 'react';
import './styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const WhyUs2 = () => {
  return (
    <div className="why-us-2">
      <h1>Why Us</h1>
      <p className="subtitle-2">6 Reasons why you should choose us</p>
      <div className="divider"></div>
      <div className='column'>

        <div className='col1'>
          <div className="reasons-2">
            <div className="reason-2">
              <div className="icon-2 blue-2 iconHeading">
                <h2 className='minHeading'><span className='whiteLetter'>Q</span>UALITY</h2>
              </div>
                <p className="description-2">Providing superior products and services are a fundamental part of our culture and something in which we take immense pride.</p>
            </div>
            <div className="reason-2">
              <div className="icon-2 green-2 iconHeading">
                <h2 className='minHeading'>EXPERTISE</h2>
              </div>
                <p className="description-2">Our experts bring real-world experience and hands-on involvement to every engagement, and stay current with the latest technologies.</p>
            </div>
            <div className="reason-2">
              <div className="icon-2 yellow-2 iconHeading">
                <h2 className='minHeading'><span className='whiteLetter'>R</span>ELIABILITY</h2>
              </div>
                <p className="description-2">We are dependable, sincere, and trustworthy. We are responsive to your needs at all times and always recommend the best solutions.</p>
            </div>
          </div>
        </div>

        <div className='col2'>
          <div className='reasons-2'>
            <div className="reason-2">
              <div className="icon-2 orange-2 iconHeading">
                <h2 className='minHeading'>STRATEGY</h2>
              </div>
                <p className="description-2">Our recommendations help clients explore the future impacts of their decisions so that they are best prepared for an ever-changing world.</p>
            </div>
            <div className="reason-2">
              <div className="icon-2 blue-2 iconHeading">
                <h2 className='minHeading'><span className='whiteLetter'>F</span>LEXIBILITY</h2>
              </div>
                <p className="description-2">We are highly responsive and able to provide a nimble and efficient approach to giving you the services you need and when you need them.</p>
            </div>
            <div className="reason-2">
                <div className="icon-2 green-2 iconHeading">
                  <h2 className='minHeading'>FUN</h2>
                </div>
                <p className="description-2">It is essential to have some fun at work! We believe our culture makes everyone more productive, more engaged, and more fulfilled.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhyUs2;
