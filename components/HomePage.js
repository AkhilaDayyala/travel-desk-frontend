import React from 'react';
import './HomePage.css'; 
import Footer from './Footer'; // Import the Footer component

// Import images from src/assets/images
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Your Next Adventure</h1>
        <p>Your journey to discover amazing places starts here!</p>
      </header>
      <section className="home-features">
        <div className="feature-card">
          <img src={image1} alt="Feature 1" className="feature-image" />
          <h2>Explore Destinations</h2>
          <p>Find the most beautiful places to visit around the world.</p>
        </div>
        <div className="feature-card">
          <img src={image2} alt="Feature 2" className="feature-image" />
          <h2>Plan Your Trip</h2>
          <p>Use our tools to organize your next vacation seamlessly.</p>
        </div>
        <div className="feature-card">
          <img src={image3} alt="Feature 3" className="feature-image" />
          <h2>Travel Tips</h2>
          <p>Get valuable tips and guides to make your trip unforgettable.</p>
        </div>
      </section>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default HomePage;
