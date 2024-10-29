import React from "react";
import "../css/Welcome.css";

const Welcome = () => {
  return (
    <div class="hero">
      <div class="hero-content">
        <h1>Image-Gallery</h1>
        <p class="lead">
          This is a simple website build to find imaeges using Unsplash API
          Use The Search Component to get Started .
        </p>
        <button href ="https://unsplash.com/" className="cta-button" target="_blank">Learn More</button>
      </div>
    </div>
  );
};

export default Welcome;
