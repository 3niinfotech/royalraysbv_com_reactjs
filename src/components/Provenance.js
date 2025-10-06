import React from 'react';

const Provenance = () => {
    const textStyle = {
        color: '#f1f1f8', 
        padding: '20px', 
        borderRadius: '5px',
        fontFamily: 'monospace', // This sets the font family
        backgroundColor: '#4A4A4A', // You can move common styles to this object
    };
    return (
        <div style={textStyle}>
            <h2 className="text-center mb-3">Provenance Claim Policy Statement</h2>
            <p className="text-center mt-4" style={{ fontSize: '25px', fontStyle: 'auto',  }}>
                The policies relating to this section are part of the Business Principles adopted by Royal Rays Exports are presented below for reference:
            </p>
            <p className=" text-center mt-4" style={{ fontSize: '15px', fontStyle: 'auto',  }}>a. “The company shall ensure all its Provenance Claims made will be fully valid along with available evidence to support the Claim(s)”</p>
            <p className="text-center mt-4" style={{ fontSize: '15px', fontStyle: 'auto',  }}>Origin - Geographical origin of material, for example country, region, mine or corporate ownership of the Mining Facility/ies; and/or</p>
            <p className="text-center mt-4" style={{ fontSize: '15px', fontStyle: 'auto', marginLeft: '-180px' }}>Source - Type of source, for example recycled, mined, artisanally mined, or date of production; and/or</p>
            <p className="text-center mt-4" style={{ fontSize: '15px', fontStyle: 'auto',  }}>Practices - Specific practices applied in the supply chain relevant to the Code of Practices, including but not limited to, standards applicable to extraction, processing or manufacturing, conflict-free status, or due diligence towards sources.</p>
            <p className="text-center mt-4" style={{ fontSize: '25px', fontStyle: 'auto',  }}>Provenance Claims may also relate to origin, sources or practices that are specifically excluded from the supply chain, such as through a ‘negative warranty’..</p>
            <p className="text-center mt-4" style={{ fontSize: '15px', fontStyle: 'auto', marginLeft: '10px' }}>
                b. The company shall ensure that all claims and statements (made to consumers or other businesses) on practices in the supply chain and the origin or source of Diamonds use of both descriptions and symbols are valid.
            </p>
            <p className="text-center mt-4" style={{ fontSize: '15px', fontStyle: 'auto', marginLeft: '10px' }}>
            c. The company shall ensure that there will be no attempt to mislead consumers through illustrations, descriptions, expressions, words, figures, depictions or symbols relating to the Provenance Claim(s).
            </p>
            <p className="text-center mt-4" style={{ fontSize: '15px', fontStyle: 'auto',marginLeft: '-500px' }}>
            d. The company shall ensure that all the relevant employees are aware about the provenance claim and it procedures.
            </p>
            <h2 className="text-center mb-3">GRIEVANCE MECHANISM:</h2>
            <p className="text-center mt-4" style={{ fontSize: '15px', fontStyle: 'auto',  }}>e. Royal Rays Exports has established this grievance procedure to hear concerns about circumstances in the provenance claim and sourcing from conflict-affected areas. The compliance officer is responsible for implementing and reviewing this procedure. Provenance claim related concerns can be raised by interested parties via email to: bvroyalrays@gmail.com</p>
            <p>Place: India Date 01/01/2020</p>
        </div>

    );
}

export default Provenance;
