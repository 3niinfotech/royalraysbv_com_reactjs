import React from 'react';

const Contactus = () => {
  return (
    <div style={{ backgroundColor: 'white', padding: '20px', color: 'black' }}> {/* Changed to white background and black text */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
        <div style={{ width: '40%' }}> {/* Adjusted width for the form container */}
          <h2 style={{ borderBottom: '1px solid #333', paddingBottom: '10px', color: 'black' }}>
            CONTACT FORM
          </h2>
          <form action="https://formspree.io/f/xjvqqgbw" method="POST">
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="name" style={{ color: 'black' }}>Name *</label>
              <input type="text" id="name" name="name" placeholder="Full Name" style={{ ...inputStyle, padding: '6px', width: '100%' }} required />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="email" style={{ color: 'black' }}>Email *</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" style={{ ...inputStyle, padding: '6px', width: '100%' }} required />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="subject" style={{ color: 'black' }}>Subject *</label>
              <input type="text" id="subject" name="subject" placeholder="Subject" style={{ ...inputStyle, padding: '6px', width: '100%' }} required />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="message" style={{ color: 'black' }}>Your Message</label>
              <textarea id="message" name="message" placeholder="Write Your Message" style={{ ...textareaStyle, padding: '6px', width: '100%' }} />
            </div>
            <button type="submit" style={{ ...buttonStyle, padding: '8px 12px' }}>Send Your Message</button>
          </form>
        </div>


        {/* Contact Info */}
        <div style={{ width: '48%', minWidth: '300px' }}>
          <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '10px', color: 'black', fontSize: '22px', fontWeight: '600', marginTop: '0' }}>
            CONTACT INFO
          </h2>

          <p style={{ fontSize: '18px', marginBottom: '10px', marginTop: '20px' }}><strong>WHERE TO REACH US</strong></p>
          <p style={{ fontSize: '16px', lineHeight: '1.5', margin: '0 0 15px 0' }}>
            You can reach us at the following<br />
            Address: Bharat Diamond Bourse, Mumbai - 400051.
          </p>

          <p style={{ fontSize: '18px', marginBottom: '10px', marginTop: '20px' }}><strong>EMAIL US @</strong></p>
          <p style={{ fontSize: '16px', lineHeight: '1.5', margin: '0 0 15px 0' }}>
            Email your issues and suggestion for the following<br />
            <p>Email Addresses: bvroyalrays@gmail.com</p>
          </p>

          <div style={{ maxWidth: '600px', width: '100%', height: '320px', marginTop: '20px' }}>
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9860628326783!2d72.86135697497707!3d19.064350382137864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9db48bcc7d1%3A0x52c692071ad14131!2sBharat%20Diamond%20Bourse%20-%20Mumbai!5e0!3m2!1sen!2sin!4v1700820177087"
              style={{ border: '0', width: '100%', height: '100%', borderRadius: '4px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '6px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  backgroundColor: '#f7f7f7', // Lighter background for input
  color: 'black', // Dark text for readability
  boxSizing: 'border-box'
};

const textareaStyle = {
  ...inputStyle,
  height: '150px',
  resize: 'vertical'
};

const buttonStyle = {
  backgroundColor: 'rgb(76 83 90)',
  color: 'white',
  padding: '14px 20px',
  margin: '8px 0',
  border: 'none',
  cursor: 'pointer',
  width: '100%',
  opacity: '0.9'
};

export default Contactus;
