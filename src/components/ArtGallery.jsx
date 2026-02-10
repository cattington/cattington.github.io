import React from 'react';
import artPieces from './ArtPieces';
import ArtCard from './ArtCard';
import './ArtGallery.css'

const categories = [
  { key: "recent", label: "Recent Works"},
  { key: "finished", label: "Finished Pieces"},
  { key: "design", label: "Design Work"},
];
const Gallery = () => {

  return (
    <div className="art-page"> 
    {categories.map(( {key,label }) => {
      const filteredArt = artPieces.filter(
        art => art.category === key
      );
      if (filteredArt. length === 0) return null;

      return (
          <section key={key} className="art-section">
            <h1>{label}</h1>
          
          <div className="gallery-container">
            {filteredArt.map(art => (
                <ArtCard key={art.id} art={art} />
            ))}
          </div>
        </section>
      );
    })}
    </div>
  );
};

export default Gallery;