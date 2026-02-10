import React from 'react';
import EngineeringInfo from "./EngineeringInfo.jsx";
import EngineeringCard from "./EngineeringCard.jsx";

const EngGallery = () => {
  return (
          <section className="eng-section">
          <div className="gallery">
            {EngineeringInfo.map(project => (
                <EngineeringCard key={project.id} project={project} />
            ))}
          </div>
        </section>
    );
}

export default EngGallery;