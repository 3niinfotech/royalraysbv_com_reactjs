// src/components/Alphabets.js

import React, { useState } from 'react';
import './Alphabets.css'; // Create this file for styles

const Alphabets = () => {
  const [name, setName] = useState('');
  const [finish, setFinish] = useState('');
  const [fontStyle, setFontStyle] = useState('');

  return (
    <div className="product-page">
      <div className="image-section">
        <img
          src="alp.jpeg" // Replace with your local image in /public or use URL
          alt="Custom Necklace"
          className="main-image"
        />
      </div>

      <div className="info-section">
        <h2>Custom Name Necklace</h2>
       
        <p className="description">
          Personalized Name Necklace
        </p>

        <div className="dropdown">
          <label>Necklace Finish & Length:</label>
          <select value={finish} onChange={(e) => setFinish(e.target.value)}>
            <option value="">Select an option</option>
            <option value="gold">18K Gold</option>
            <option value="silver">Sterling Silver</option>
            <option value="rose">Rose Gold</option>
          </select>
        </div>

        <div className="dropdown">
          <label>Font Style:</label>
          <select value={fontStyle} onChange={(e) => setFontStyle(e.target.value)}>
            <option value="">Select an option</option>
            <option value="script">Script</option>
            <option value="bold">Bold</option>
            <option value="italic">Italic</option>
          </select>
        </div>

        <div className="input-section">
          <label>Enter your personalized name:</label>
          <input
            type="text"
            value={name}
            placeholder="e.g. Royal Rays"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button
  className="submit-button"
  onClick={() => alert('Thank you! Our team will contact you shortly.')}
>
  Submit
</button>

      </div>
    </div>
  );
};

export default Alphabets;
