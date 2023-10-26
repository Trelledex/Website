import React from 'react';
import './styles.css'; // Import your CSS file for styling

const OurMainSkills = () => {
  return (
    <section className="our-main-skills">
      <div className='mainContainer'>
        <h2 className='Heading'>Our Main Skills</h2>
        <div className="skills-background">
            
            {/* Left Column */}
            <div className="left-column">
            <div className="skill-description">
                <p>Every solution we propose and implement is
                informed by a combination of in-depth research
                and rigorous analysis and is tailored to the
                specific dynamics of the client's organization.
                We don't just sit around and crunch numbers.
                More importantly, we conduct critical data
                analysis to provide the best recommendations
                clients</p>
            </div>
            </div>

            {/* Right Column */}
            <div className="right-column">
            <div className="skill-bar">
                <div className="bar" style={{ width: '100%' }}>
                  <span>1. Data Analysis & Statistics</span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="bar" style={{ width: '85%' }}>
                  <span>2. Data Visualization</span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="bar" style={{ width: '70%' }}>
                  <span>3. Design</span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="bar" style={{ width: '100%' }}>
                  <span>4. Strategy</span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="bar" style={{ width: '85%' }}>
                  <span>5. Business Intelligence</span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="bar" style={{ width: '68%' }}>
                  <span>6. Project Management</span>
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default OurMainSkills;