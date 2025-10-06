import React from 'react';

const KYC = () => {
  return (
    <div style={{ backgroundColor: '#414143', padding: '20px', color: 'white' }}>
      <h2 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', color: 'white' }}>KYC FORM</h2>
      <form action="/submit-your-kyc" method="POST">
        <div style={fieldStyle}>
          <label htmlFor="fullName" style={labelStyle}>Full Name *</label>
          <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" style={inputStyle} required />
        </div>

        <div style={fieldStyle}>
          <label htmlFor="dateOfBirth" style={labelStyle}>Date of Birth *</label>
          <input type="date" id="dateOfBirth" name="dateOfBirth" style={inputStyle} required />
        </div>

        <div style={fieldStyle}>
          <label htmlFor="nationalId" style={labelStyle}>National ID *</label>
          <input type="text" id="nationalId" name="nationalId" placeholder="Enter your national ID" style={inputStyle} required />
        </div>

        <div style={fieldStyle}>
          <label htmlFor="address" style={labelStyle}>Address *</label>

        </div>

        <div style={fieldStyle}>
          <label htmlFor="uploadId" style={labelStyle}>Upload ID Document *</label>
          <input type="file" id="uploadId" name="uploadId" style={inputStyle} required />
        </div>

      
      </form>
    </div>
  );
};

const fieldStyle = {
  marginBottom: '15px'
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  color: 'white'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '6px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  backgroundColor: '#616161',
  color: 'white',
  boxSizing: 'border-box'
};

export default KYC;
