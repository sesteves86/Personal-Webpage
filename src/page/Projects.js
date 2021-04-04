import React from 'react';
import ProjectTile from '../components/ProjectTile';

const Home = () => {
    return (
      <div>
        <h1>Projects</h1>
        <p>Here's a sample of personal projects that I've done recently.</p>

        <ProjectTile
          href = "/project/flamme-rouge"
          imageSrc = "bloggerLogo.png"
          imageAlt = "Flamme Rouge project"
          title = "Flamme Rouge"
          text = "React based projected adapted from an award winning boardgame."
        />
        
        <ProjectTile
          href = "/project/rain-on-image"
          imageSrc = "bloggerLogo.png"
          imageAlt = "Rain on image project"
          title = "Rain on image"
          text = "Rain on image some very long text with a lot of words"
        />

      </div>
    );
}

export default Home;