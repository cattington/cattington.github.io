import React from 'react';
import "./MusicCard.css"

const MusicCard = ({ band }) => {
    const songs = band.songs;
  return (
    <div className = "music-card">
        <div className="music-text">
            <h1>{band.title}</h1>
            <h3>• {band.role}</h3>
        </div>
        <h2>{band.caption}</h2>
        <div className="info-pic"> 
            <img src={band.cover} alt={band.title} className="band-image"/>
            {/* <div className="band-vid">
                <video controls>
                    <source src={band.vid} type="video/mp4" />
                </video>
            </div> */}
            <div className="band-info">
                <h2>Gigs:</h2>
                <p>{band.gigs}</p>
                <h2>Song List:</h2>
                <ul>
                    {songs.map((songs, index) => (
                        <li key={index}>{songs}</li> 
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MusicCard;