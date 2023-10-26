// src/SocialMedia.js
import React from 'react';
import './styles.css';
import { styled } from '@emotion/styled';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const FollowUs = () => {
  return (
    <div className="social-media">
      <div className="section-title1">
        <h1>Follow us on social media</h1>
        <p>We would love to hear from you</p>
        <div className="divider1"></div>
      </div>
      <div className="social-icons">
        <a href='https://www.linkedin.com/company/trelledex/'>
        <div className="iconn">
          <LinkedInIcon className='mat-icon' />
          <p> LinkedIn</p>
        </div>
        </a>
        <div className="iconn">
          <TwitterIcon className='mat-icon'/>
          <p>Twitter</p>
        </div>
        <div className="iconn">
          <FacebookIcon className='mat-icon' />
          <p>Facebook</p>
        </div>
        <div className="iconn">
          <InstagramIcon className='mat-icon' />
          <p>Instagram</p>
        </div>
      </div>
    </div>
  );
}

export default FollowUs;
