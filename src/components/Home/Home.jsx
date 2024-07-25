import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Saveetha Engineering College</h1>
      <p>Inspiring future innovators and leaders.</p>
      <div className="image-container">
        <img src="/college/assets/image.jpg" alt="Description of image 1" />
        <img src="/college/assets/image1.jpg" alt="Description of image 2" />
        <img src="/college/assets/image2.jpg" alt="Description of image 3" />
      </div>
    </div>
  );
};

export default Home;
