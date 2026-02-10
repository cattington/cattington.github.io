import React from 'react';
import MusicInfo from "./MusicInfo.jsx";
import MusicCard from "./MusicCard.jsx";

const MusicGallery = () => {
  return (
          <section className="music-section">
          <div className="gallery">
            {MusicInfo.map(band => (
                <MusicCard key={band.id} band={band} />
            ))}
          </div>
        </section>
    );
}

export default MusicGallery;