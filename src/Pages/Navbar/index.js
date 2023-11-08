import './styles.css';
import Home from '../../Sections/Home';
import WhoWeAre from '../../Sections/WhoWeAre';
import WhyUs from '../../Sections/WhyUs';
import CoreSolutions from '../../Sections/CoreSolutions';
import FollowUs from '../../Sections/FollowUs';
import Footer from '../../Sections/Footer';
import ContactUs from '../../Sections/ContactUs';
import OurMainSkills from '../../Sections/MainSkills';
import WhyUs2 from '../../Sections/WhyUs2';
import Disclaimer from '../../Pages/Disclaimer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

function Navbar() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");

  function scrollToSection  (sectionId) {
    navigate("/" );
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  function handleClick  (section) {
    scrollToSection(section);
    setActiveTab(section);
  };


  return (
    <>
       <Helmet>
        <title>Trelledex</title>
        <meta name="description" content="Trelledex is a consulting company" />
      </Helmet>
     <div className="navbar">
        <div className="logo">
          <img className='logopic'src={require("../../assets/logos/logoMain.png")} />
          <img className='companyname' src={require("../../assets/logos/company-name.png")} />
        </div>
        <div className="nav-links">
          <ul className='navBar'>
            {    console.log(activeTab === 'home')}
            <li className={activeTab === 'home' ? 'active' : ''} onClick={() => handleClick('home')}><a href="#">Home</a></li>
            <li className={activeTab === 'about' ? 'active' : ''} onClick={() => handleClick('about')}><a href="#">About</a></li>
            <li className={activeTab === 'solutions' ? 'active' : ''} onClick={() => handleClick('solutions')}><a href="#">Solutions</a></li>
            <li className={activeTab === 'whyUs' ? 'active' : ''} onClick={() => handleClick('whyUs')}><a href="#" >Why Us</a></li>
            <li className={activeTab === 'portfolio' ? 'active' : ''} onClick={() => handleClick('portfolio')}><a href="#">Portfolio</a></li>
            <li onClick={() => navigate("/disclaimer")}><a href="" >Disclaimer</a></li>
          </ul>
        </div>
      </div>  

      <section id="home" className="section"> <Home/> </section>
      <section id="about" className="section"><WhoWeAre/> </section>
      <section id="solutions" className="section"><WhyUs /></section>
      <section id="whyUs" className="section"> <CoreSolutions /></section>
      <section id="portfolio" className="section"> <OurMainSkills /> </section>
      <section id="disclaimer" className="section"> <WhyUs2 /> </section>
      <section id="home" className="section"> <FollowUs /> </section>
      <section id="home" className="section"> <ContactUs /> </section>
      <section id="home" className="section"> <Footer /> </section>
    </>
  );
}

export default Navbar;


