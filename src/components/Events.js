import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Events.css'; // Make sure to style .event-card and .event-image

function Events() {
  return (
    <div className="events-container">
      <h2 className="text-center my-4 custom-heading">EVENTS UPDATES</h2>
      <p className="text-center mb-4 custom-paragraph">WE EXHIBIT IN THE FOLLOWING SHOWS</p>

      <div className="container">
        <div className="row">
          {/* First row */}
          <div className="col-md-6 mb-4">
            <div className="event-card">
              <img src="/las vegas.jpg" alt="JCK Las Vegas" className="event-image" />
              <p className="text-center mt-2">LAS VEGAS</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="event-card">
              <img src="/GENEVA.jpg" alt="GemGeneve" className="event-image" />
              <p className="text-center mt-2">GEMGENÈVE</p>
            </div>
          </div>

          {/* Second row */}
          <div className="col-md-6 mb-4">
            <div className="event-card">
              <img src="/HONGKONG.jpg" alt="Jewellery & Gem Hong Kong" className="event-image" />
              <p className="text-center mt-2">JEWELLERY & GEM HONG KONG</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="event-card">
              <img src="/VICENZARO.jpg" alt="Vicenzaoro" className="event-image" />
              <p className="text-center mt-2">VICENZAORO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
