import React from 'react';
import './ArtCard.css';

const ArtCard = ({ art }) => {
  return (
    <div className = "art-card">
        <img src={art.url} alt={art.title} className="art-image"/>
        <div className="art-info">
            <h2>{art.title}</h2>
            <p>{art.date}</p>
        </div>
    </div>
  )
}

export default ArtCard;