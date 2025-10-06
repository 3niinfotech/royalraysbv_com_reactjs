import React from 'react';
import './Expert.css'; // Ensure the path to your CSS file is correct

function Expert() {
  return (
    <div className="expert-container">
      <div className="hero-section">
        <img src="/team.jpg" alt="Meet the Experts" className="hero-image" />
        <h1 className="hero-title">Meet the Experts</h1>
      </div>
      <div className="experts-section">
        <div className="expert-card">
          <div className="expert-image-container">
            <img src="/expert1.jpg" alt="Expert 1" className="expert-image" />
          </div>
          <div className="expert-details">
            <h2>Garo Rupchian</h2>
            <h3>Master Craftsmen / Design Specialist / Head of Production</h3>
            <p>For Garo Rupchian, every day at Royal Rays is personally and professionally fulfilling. Garo spends his time doing what he does best, while his children work together to create and sell beautiful pieces. He started Royal Rays, formerly European Jewelry Company, in 1969 and continues to operate out of the same city, building, and floor. Practicing jewelry work since he was 16 years old, Garo is one of the most seasoned jewelers in the business. He possesses a level of visualization and technique essential to ensuring the beauty and quality of each piece.</p>
            <p>Need your ring re-sized? Need your jewelry custom made or repaired? Refer to Garo!</p>
            <div className="contact-info">
              <a href="mailto:garo@royalrays.com">SEND AN EMAIL</a>
              <span>(213) 622-6150</span>
              <a href="#">READ BLOG</a>
              <a href="#">SCHEDULE APPOINTMENT</a>
            </div>
          </div>
        </div>
        <div className="expert-card">
          <div className="expert-image-container">
            <img src="/expert2.jpg" alt="Expert 2" className="expert-image" />
          </div>
          <div className="expert-details">
            <h2>Vic Rupchian</h2>
            <h3>Director of Product & Marketing / Senior Sales Consultant / GIA Diamonds Graduate</h3>
            <p>Of the three Rupchian siblings, Vic was the first to join the family business in 1996. At the time, his primary goal was to master the art of crafting fine jewelry, and he was fortunate enough to learn from the best - his father, Garo. Vic's education behind the bench was formative and impactful. Most of the Royal Rays collection has been influenced by his trained eye. He completed the Gemological Institute of America's program and became a Certified Gemologist in 1998. Today, you're likely to find him happily working with customers in the store, helping them select a gorgeous diamond with a tasteful and stunning design.</p>
            <div className="contact-info">
              <a href="mailto:vic@royalrays.com">SEND AN EMAIL</a>
              <span>(213) 622-6150</span>
              <a href="#">READ BLOG</a>
              <a href="#">SCHEDULE APPOINTMENT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expert;


