import React from "react";
import "./Home.css";
import Link from "react-router-dom";
// import "../../App.css";

export const Home = () => {
    return (
        <div>
             <div className="hero-container">

            {/* HEADER */}
            <div className="hero-header">
                <h1>Hi, I'm Catherine!</h1>
                <h2>Welcome to my portfolio website!</h2> 
            </div>

            {/* COLUMNS */}
            <div className="hero-content">
                <div className="hero-image" >
                    <img src="/assets/headshot.jpg" className="headshot"/>
                    <p2></p2>
                </div>  
                <div className="hero-text"> 
                    <h2>CompSci/MechE @ Tufts University</h2>
                    <p>Making stuff is my passion! I love making machines, code programs, visual art, designs, and music. Feel free to look around my website to see for yourself!</p>
                    <p> </p>
                    {/* CONTACTS */}
                    <div className="contact">
                        <p2>Reach me here:</p2>
                        <div className="contact-info">
                            <ul className="list">
                                <li>
                                     <a href="mailto:cting2006@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                                        cting2006@gmail.com
                                    </a>
                                </li>
                                <li>
                                     <a href="https://www.linkedin.com/in/catherine-ting-701078385/" className="contact-link">
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <s1>This website is coded from scratch using ReactJS. Although fully functional, the design and mobile view is still in progress.</s1>
                    <s1>Last updated: January 2026</s1>
                </div>
            </div>
            
        </div>
        </div>
    )
}