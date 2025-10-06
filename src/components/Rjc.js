import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported

function Rjc() {
  return (
    <div style={{ backgroundColor: '#4A4A4A', color: '#f1f1f8', padding: '20px', borderRadius: '5px' }}>
      <h2 className="text-center mb-3">RJC Compliance Policy</h2>
      <p className="text-center mt-4">
      Royal Rays Exports is a member of Responsible Jewellery Council – RJC and committed for ethical business practices and compliance with Code of Practices in all its business activities. The management of Royal Rays Exports shall implement responsible ethical, social and environmental practices throughout the diamond supply chain, from mine to retail. We being a responsible entity of diamond supply chain believe in consumer confidence in our trade and request our business partners to follow same. As a part of best endeavors and responsible business entity, we anticipate co-operation of our business partners in adopting the standard and ensuring that the entire diamond supply chain is compliant with respect to business, social and environmental responsibilities. We strongly encourage all our business partners to follow and implement the various requirements of the RJC code of practice and other prevailing trade standards. More information about the Compliance Program is available on www.responsiblejewellery.com For Royal Rays Exports
      </p>
      <div className="text-center zoom-on-hover">
        {/* Assuming you've moved the image to the public folder and renamed it for web compatibility */}
        <img src="/RJC-logoo.jpg" alt="Responsible Jewellery Council" style={{ maxWidth: '35%', height: 'auto' }} />
      </div>
    </div>
  );
}

export default Rjc;
