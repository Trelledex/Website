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
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
       <Helmet>
        <title>Trelledex</title>
        <meta name="description" content="Trelledex is a consulting company" />
      </Helmet>

      <AppBar  className='mobile'>
      <Toolbar>
        <div style={{ position: 'absolute', top: 0, right: 0 }}   className='menuBar'>
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            onClick={handleClick1}
            className='menu-btn'
            // sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon      className='btn' />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            
            // anchorOrigin={{
            //   vertical: 'top',
            //   horizontal: 'left',
            // }}
            // transformOrigin={{
            //   vertical: 'top',
            //   horizontal: 'left',
            // }}
          
          >
            <MenuItem  className='menuItem' onClick={() => handleClick('home')}>Home</MenuItem>
            <MenuItem  className='menuItem' onClick={() => handleClick('about')}>About</MenuItem>
            <MenuItem  className='menuItem' onClick={() => handleClick('solutions')}>Solutions</MenuItem>
            <MenuItem  className='menuItem' onClick={() => handleClick('whyUs')}>Why Us</MenuItem>
            <MenuItem  className='menuItem' onClick={() => handleClick('portfolio')}>Portfolio</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>

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


