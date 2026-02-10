import React from 'react';
import "./EngineeringCard.css"
import {Link, NavLink} from "react-router-dom";

const EngCard = ({ project }) => {
    const skills = project.skills;
  return (
    <div className = "eng-card">
        <h1>{project.link ? (
            <a
            href={project.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="project-title-link"
            >
            {project.title}
            </a>
        ) : (
            project.title
        )}
        </h1>
        <h2>{project.role}</h2>
        <div className="proj-info-pic"> 
            <div className="proj-pics">
                <img src={project.photo1} alt={project.title} className="project-image"/>
                <img src={project.photo2} alt={project.title} className="project-image"/>
            </div>
            <div className="proj-info">
                <h2>Goal:</h2>
                <p>{project.goal}</p>
                <h2>Contributions:</h2>
                <p>{project.contributions}</p>
                <h2>Related Skills:</h2>
                <ul>
                    {skills.map((skills, index) => (
                        // Key prop is important for list items in React
                        <li key={index}>{skills}</li> 
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default EngCard;