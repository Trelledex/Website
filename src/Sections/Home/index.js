// src/Home.js
import React from 'react';
import './styles.css';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Trelledex</title>
        <meta name="description" content="Trelledex is a consulting company" />
        <link rel="icon" href={base64Favicon} type="image/x-icon" />
      </Helmet>
      <div className='centerText'>
        <h1>SIMPLY DATA</h1>
        <h3>INVESTING IN THE POTENTIAL OF PREDICTIVE ANALYTICS </h3>
      </div>

      <div className='divsContainer'>
        <div className='expandableDiv1'>
            <p className="divTitle">Data</p> 
            <p className='summary'>Analytics, Management, Storage, Research </p>
        </div>
        <div className='expandableDiv'>
            <p className="divTitle">Portfolio</p> 
            <p className='summary'>Investment,Advisory, Insights, Client Support</p>
        </div>  
        <div className='expandableDiv'>
            <p className="divTitle">Labs</p>
            <p className='summary'>Analytics Projects, Solution Development, Implementation </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
