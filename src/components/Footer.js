
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Left Column for Mumbai Office */}
        <div className="footer-column">
          <h4>Mumbai</h4>
          <p>DW-1350, Bharat Diamond Bourse, BKC, Bandra East, Mumbai, Maharashtra 400051</p>
          <a href="tel:+917045356688">+91 7045356688</a>
          <p><a href="mailto:india@royalraysbv.com">india@royalraysbv.com</a></p>
        </div>

       
       

        {/* Right Column for Belgium Office */}
        <div className="footer-column">
          <h4>Belgium </h4>
          <p>341, Hoveniersstraat 2, 2018 Antwerpen, Belgium.</p>
             <a href="tel:+32 472 78 43 66">+32 472 78 43 66</a>
          <p><a href="mailto:belgium@royalraysbv.com">belgium@royalraysbv.com</a></p>
        </div>

        {/* Social Media Links */}
        <div className="footer-column center-column">
        { <div className="footer-column logo-center">
          <img src="/RRLOGO.png" alt="Royal Rays BV Logo" style={{ height: '120px', marginTop: '-30px' }} />
        </div> }
          <h4>FIND US</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/royalraysbv" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/royal-rays-bv-665417298/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://twitter.com/royalraysbv" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://wa.me/917045356688" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
            <a href="skype:hirenmoradia?chat"><i className="fab fa-skype"></i></a>
            {/* <a href="weixin://"><i className="fab fa-weixin"></i></a> */}
           
          </div>
          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
