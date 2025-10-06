
import React from 'react';
import './Custom.css'; 

const Custom = () => {
    return (
        <div className="custom-container">
            <img src="/ROUGH.JPG" alt="Custom" className="img-fluid custom-image" />
            <div className="msg-container">
                Royal Rays exports manufactures Diamonds of all Shapes, Size, Color, Clarity and Measurements, perfectly suited for your Jewellery.
            </div>
            <div className="new-section">
                <img src="/Custom-2.jpg" alt="New Section" className="new-image" />
                <div className="right-container">
                    <h3>Customer Ideas</h3>
                At Royal Rays, we recognize your IDEAS as well as you do. So whether you begin with just an imagination or a full-ﬂedged design concept, we will work actively with you to help provide you perfect set of Diamonds for your jewellery.
                </div>
            </div>
          
            <div className="new-section">
            <div className="right-containertwo">
                    <h3>CUSTOMER PROCUREMENT</h3>
                    Once we have a custom design, we will CUT all the diamonds necessary as per the measurements. Our trained craftsmen will match every diamond’s gauge to the design requirements, ensuring the correct cut and quality of diamonds.
                </div>
                <img src="/Custom-3.jpg" alt="New Section" className="new-image" />
              
            </div>

            <div className="new-section">
                <img src="/Custom-4.jpg" alt="New Section" className="new-image" />
                <div className="right-container">
                    <h3>MANUFACTURING EXPERTISE</h3>
                    Our in-house team of highly-trained Craftsmen will then use the design as a blueprint to craft your customized diamonds. By combining old-world charm with new-age techniques, the Diamonds will be provided for the beautiful piece that it is meant to be.
                </div>
            </div>

            <div className="new-section">
            <div className="right-containertwo">
                    <h3>BESPOKE CREATIONS</h3>
                    Royal Rays  guarantees customer satisfaction, trust and door to door delivery across the Globe.
                </div>
                <img src="/Custom-5.jpg" alt="New Section" className="new-image" />
              
            </div>
            
        </div>
        
    );
};

export default Custom;



