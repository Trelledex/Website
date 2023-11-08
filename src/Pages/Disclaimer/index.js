import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Disclaimer = () => {

    const navigate = useNavigate();

    function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: 'smooth' });
    }

  return (
    <>
       <Helmet>
        <title>Trelledex</title>
        <meta name="description" content="Trelledex is a consulting company" />
      </Helmet>
     <div className="navbar-ds">
        <div className="logo">
          <img className='logopic'src={require("../../assets/logos/logoMain.png")} />
          <img className='companyname' src={require("../../assets/logos/company-name.png")} />
        </div>
        <div className="nav-links">
          <ul className='navBar'>
            <li onClick={() => navigate('/')}><a href="#">Home</a></li>
            <li onClick={() => navigate('/')}><a href="#">About</a></li>
            <li onClick={() => navigate('/')}><a href="#">Solutions</a></li>
            <li onClick={() => navigate('/')}><a href="#" >Why Us</a></li>
            <li onClick={() => navigate('/')}><a href="#">Portfolio</a></li>
            <li className ="active" onClick={() => navigate('/')}><a href="" >Disclaimer</a></li>
          </ul>
        </div>
      </div>  



    <div className="disclaimer-container">
      <p className='disc-text'>
            Communications from Trelledex Pty. Ltd and the content of this website are not intended to provide investment,
            financial, accounting, or tax advice. They are solely for informational purposes. 
            In preparing this information, we have not considered your specific needs and investment objectives. 
            Any prices or quotations provided are indicative only and should not be used for any purposes, including valuation. <br/><br/>

            Opinions expressed in our communications may change without notice. 
            We do not intend to solicit the purchase or sale of any product. To the extent permitted by law, 
            Trelledex Pty. Ltd. and/or the author accept no responsibility or liability, 
            whether in negligence or otherwise, for any loss or damage resulting from the 
            use of or reliance on any errors in the information provided. This information 
            has been prepared in good faith and is based on information obtained from third-party sources. <br/><br/>

            Any modeling, scenario analysis, past performance, or simulated past performance 
            (including back-testing) contained in this information does not indicate future performance. 
            Analysts at Trelledex Pty. Ltd might have direct exposure to companies they cover. <br/><br/>

            This information may not be eligible for distribution in all jurisdictions and is directed at 
            institutional investors with professional experience as defined by the applicable law and/or 
            regulation in the relevant jurisdiction. It is not intended for retail investors and should not be 
            distributed in any jurisdiction where it is not permitted. <br/><br/>

            This communication is intended for the recipient specified, and if you have received communication 
            from Trelledex Pty. Ltd in error or in an unlawful manner, the information must be destroyed, 
            and the authors must be notified immediately. These disclaimers and exclusions shall be governed 
            and construed in accordance with South African law. If any provisions of these disclaimers 
            and exclusions are found to be unlawful, void, or unenforceable for any reason, that provision 
            shall be deemed severable and shall not affect the validity and enforceability of the remaining provisions. <br/><br/>

            All rights of Trelledex Pty. Ltd are reserved. © Trelledex Pty. Ltd.  <br/><br/>     
        </p>
    </div>
    </>
  );
};

export default Disclaimer;
