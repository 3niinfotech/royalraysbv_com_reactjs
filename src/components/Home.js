import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 

function Home() {
  const mainContainerRef = useRef(null); 
  
  const [isNavExpanded, setIsNavExpanded] = useState(false); 

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = mainContainerRef.current.querySelectorAll('.animated, .compliance-image');
    elements.forEach(element => observer.observe(element));
    
    return () => elements.forEach(element => observer.unobserve(element));
  }, []);

  const directors = [
    {
      name: "Tulsi  Moradia",
      role: "Founder & Chief Visionary Officer",
       img: "/5436.jpg",
      bio: "With over three decades of experience, Tulsi  Moradia, the founder, is the visionary behind our pioneering approaches in diamond manufacturing."
    },
    {
      name: "Dharmesh Moradia",
      role: "Operations Director",
      img: "/dharmeshbhai.jpeg",
      bio: "Dharmesh integrates modern technology with artisan techniques, ensuring sustainable and top-quality production."
    },
    {
      name: "Hiren Moradia",
      role: "Sales & Marketing Director",
      img: "/Hirensir.jpeg",
      bio: "Hiren enhances our brand's global presence through strategic marketing and robust client relationships."
    }
  ];

  return (
    <div ref={mainContainerRef}>

      
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <video className="d-block w-100 animated" autoPlay loop muted>
              <source src="web.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="text-center mt-4 animated">
  <h2 className="section-heading">The Art of Diamond Manufacturing</h2>
  <p className="intro-text">Discover the exquisite craftsmanship and precision involved in creating the world's most stunning diamonds.</p>
</div>


      <div className="container my-5 animated">
        <div className="row">
          <div className="col-md-4 text-center animated">
            <img src="/MINING.jpg" className="img-fluid mb-3" alt="Sourcing Excellence" />
            <h3>Sourcing Excellence</h3>
            <p>Our diamonds are sourced with utmost care and responsibility, ensuring ethical practices and exceptional quality from the mines to your hands.</p>
          </div>
          <div className="col-md-4 text-center animated">
            <img src="/HOMEE2.jpg" className="img-fluid mb-3" alt="Prime Selection" />
            <h3>Prime Selection</h3>
            <p>Handpicked for their brilliance and rarity, our prime selection of diamonds represents the epitome of elegance and beauty, curated to exceed your expectations.</p>
          </div>
          <div className="col-md-4 text-center animated">
            <img src="/laser.jpg" className="img-fluid mb-3" alt="Precision Cutting Mastery" />
            <h3>Precision Cutting Mastery</h3>
            <p>Guided by seasoned craftsmen, our diamonds undergo meticulous cutting techniques, revealing their inherent radiance and allure with precision and mastery.</p>
          </div>
        </div>
      </div>
      <div className="container my-5 animated">
    <div className="row">
      <div className="col-md-4 text-center">
        <img src="/machine.jpg" className="img-fluid mb-3" alt="Exquisite Polishing Expertise" />
        <h3>Exquisite Polishing Expertise</h3>
        <p>With decades of expertise, our artisans meticulously polish each diamond to perfection, unveiling its flawless beauty and unmatched sparkle.</p>
      </div>
      <div className="col-md-4 text-center">
        <img src="/home.jpg" className="img-fluid mb-3" alt="Rigorous Quality Assurance" />
        <h3>Rigorous Quality Assurance</h3>
        <p>Our commitment to quality is unwavering, as every diamond undergoes rigorous inspections and quality checks to ensure unparalleled purity and brilliance.</p>
      </div>
      <div className="col-md-4 text-center">
  <img src="/sdfa.jpg" className="img-fluid mb-3 custom-image-size" alt="Seamless Customer Access" />
  <h3>Seamless Customer Access</h3>
  <p>From selection to delivery, we prioritize your experience with seamless access and personalized service, making your journey with us effortless and enjoyable.</p>
</div>

    </div>
  </div>
  <div className="container my-5 animated">
  <div className="text-center mb-4">
    <h2 className="section-title">FOUNDERS</h2> {/* Add a specific class for styling */}
  </div>
  <div className="row">
    {directors.map((director, index) => (
      <div key={index} className="col-md-4 text-center animated">
        <div className="director-card">
          <img src={director.img} className="img-fluid mb-3" alt={director.name} />
          <div className="bio">
            <h3>{director.name}</h3>
            <p className="role">{director.role}</p>
            <div>{director.bio}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


<div className="container my-5">
  <div className="text-center mb-4">
    <h2 className="section-heading">COMPLIANCES</h2>  {/* Use common class here */}
  </div>
  <div className="row justify-content-center" style={{ marginTop: '80px' }}>
    <div className="col-md-4 d-flex justify-content-center">
      <img src="/rorjc.jpg" className="img-fluid mb-3 compliance-image" alt="Compliance Detail" />
    </div>
    <div className="col-md-4 d-flex justify-content-center">
      <img src="/cert.jpg" className="img-fluid mb-3 compliance-image" alt="Compliance Detail" />
    </div>
  </div>
</div>

    </div>
  );
}

export default Home;

