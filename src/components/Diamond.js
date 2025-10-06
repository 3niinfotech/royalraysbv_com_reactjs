import React from 'react';
import './Diamond.css';

function Diamond() {
  const textStyle = {
    background: 'content-box',
    backgroundColor: '##fdf6eb',
    fontFamily: 'ui-sans-serif'
  };

  return (
    <>
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/artfex.jpeg" className="d-block w-100" alt="First Carousel"/>
            </div>
          </div>
        </div>
        <div className="text-center mt-4 fade-in" style={textStyle}>
          <h2>Diamonds We Deal In: From Classic Cuts to Alphabetical Wonders</h2>
        </div>
      </div>

      <div className="image-and-text-container">
        <div className="image-container">
          <img src="/2122.jpg" alt="Descriptive Alt Text"/>
        </div>
        <div className="text-container">
          <div className="text-content">
            <h2>Brilliant Cut</h2>
            <p>A brilliant cut is simply a diamond or any other gemstone cut in a particular form with numerous facets to ensure exceptional brilliance.</p>
          </div>
        </div>
      </div>

      <div className="container-step-cut-and-image">
        <div className="text-and-image-container step-cut-container">
          <div className="text-containerr">
            <div className="text-content">
              <h2>Step Cut</h2>
              <p>Stones whose outlines are either square or rectangular and whose facets are rectilinear and arranged parallel to the griddle known as step-or-step cut stones.</p>
            </div>
          </div>
          <div className="image-container">
            <img src="/00.jpg" alt="Descriptive Alt Text for Home-4" className="move-left"/>
          </div>
        </div>
      </div>

      <div className="container-step-cut-and-image">
        <div className="text-and-image-container step-cut-container">
          <div className="image-container">
            <img src="/213.jpg" alt="Descriptive Alt Text for Home-4" className="move-right"/>
          </div>
          <div className="text-containerr specific-text-container">
            <div className="text-content">
              <h2>Old European / Mine Cut</h2>
              <p>Old European and Mine cuts are among the oldest diamond cutting styles. Modern jewelry designers are now incorporating these historic cuts into contemporary pieces, creating a fascinating blend of old-world charm and modern elegance.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-step-cut-and-image">
        <div className="text-and-image-container step-cut-container">
          <div className="text-containerr">
            <div className="text-content">
              <h2>  ROSE CUT / PORTRAIT CUT</h2>
              <p>At Royal Rays, we are proud to be the custodians of the world's most exquisite diamonds, each meticulously crafted to showcase the timeless elegance of the Rose and Portrait cuts. Our diamonds are more than just stones; they are a celebration of our enduring legacy and commitment to unparalleled craftsmanship..</p>
            </div>
          </div>
          <div className="image-container">
            <img src="/rrcut.jpg" alt="Descriptive Alt Text for Home-4" className="move-left"/>
          </div>
        </div>
      </div>

      <div className="container-step-cut-and-image">
        <div className="text-and-image-container step-cut-container">
          <div className="image-container">
            <img src="/121.jpg" alt="Descriptive Alt Text for Home-4" className="move-right"/>
          </div>
          <div className="text-containerr specific-text-container">
            <div className="text-content">
              <h2>FANCY COLOR</h2>
              <p>Natural Fancy colored diamonds are as rare as they are exquisite. Royal Rays exports carries a variety of fancy colours in a range of shapes, sizes, colours and clarity.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-step-cut-and-image">
        <div className="text-and-image-container step-cut-container">
          <div className="text-containerr">
            <div className="text-content">
              <h2>SIGNATURE ALPHABET DIAMONDS</h2>
              <p>Royal Rays introduces Signature Alphabet Diamonds, a collection where each letter is a sparkling gem, perfect for creating personalized name jewelry that embodies elegance and uniqueness.</p>
            </div>
          </div>
          <div className="image-container">
            <img src="/9.png" alt="Descriptive Alt Text for Home-4" className="move-left"/>
          </div>
        </div>
      </div>

      {/* <div className="image-below-caption">
        <img src="/Hd.png" className="d-block w-100" alt="Descriptive Alt Text"/>
      </div> */}
    </>
  );
}

export default Diamond;
