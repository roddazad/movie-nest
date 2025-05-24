import React from 'react';
import '../css/Hero.css';

function Hero({searchTerm, setSearchTerm, onSearch}) {
  return (
    <div className="hero-section">
      <div className="overlay">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to MovieNest 🎬</h1>
          <p className="hero-tagline">Search for your favorite movies and discover something new.</p>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
            onClick={onSearch}
            >Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;