import React, { useState, useEffect } from 'react';
import './History.css';  // Ensure the path to your CSS file is correct

function History() {
  const [selectedYear, setSelectedYear] = useState('1980');
  const timelineContent = {
    '1980': {
      year: '1980',
      content: (
        
        <div className="timeline-item-content">
          
          <div className="content">
            <h3>1980's - 1990's</h3>
            <p>

<h4>Tulsi Moradia on the Enduring Appeal of Single Cut Diamonds from the 1980s and 1990s</h4>

            

Single cut diamonds, featuring 17 or 18 facets, were highly sought after in the 1980s and 1990s for their understated elegance. Unlike the 58-facet full cuts, these diamonds, typically 1.2mm or less, were favored for watch dials, vintage jewelry, and pave settings. Their larger facets enhanced the stone’s brilliance, creating a unique play of light and color. This distinct charm made them a popular choice for adding subtle sparkle to fine jewelry during that era..</p>
          </div>
          <div className="image">
            <img src="/TK1.jpg" alt="2000" />
          </div>
        </div>
      )
    },
  
    '2000': {
      year: '2000',
      content: (
        
        <div className="timeline-item-content">
          
          <div className="content">
         
            <p>

<h4>


Brilliant Cut Diamonds</h4>

            

In 2000, we proudly introduced brilliant cut diamonds, a pinnacle of diamond cutting that amplifies light and maximizes sparkle. Designed with precise, cone-shaped geometry, this cut allows light to reflect optimally within the gemstone, enhancing its brilliance and fire. The brilliant cut is not merely a style; it is an engineering marvel that highlights the natural beauty of diamonds. By expertly reflecting light, this cut creates an unparalleled display of radiance, establishing a new standard in the industry and offering a breathtaking experience for our clients.

.</p>
          </div>
          <div className="image">
            <img src="/2122.jpg" alt="2000" />
          </div>
        </div>
      )
    },
    '2008': {
      year: '2008',
      content: (
        
        <div className="timeline-item-content">
          
          <div className="content">
           
            <p>

<h4>Crafting Excellence,Building Trust:Your Partner in Diamond Brilliance since 2008</h4>

            

Hiren Moradia has been passionately involved in the loose diamond industry since 2008, dedicated to earning client trust through exceptional quality and personalized service. His commitment to integrity and excellence drives his success in this dynamic market. Let's build a partnership based on trust and growth.</p>
          </div>
          <div className="image">
            <img src="/hrough.jpg" alt="2000" />
          </div>
        </div>
      )
    },
    '2012': {
      year: '2012',
      content: (
        
        <div className="timeline-item-content">
          
          <div className="content">
         
            <p>

<h4>Royal Rays' Fancy Colored Diamonds</h4>

            


In 2012, Royal Rays expanded its collection to include rare and vibrant fancy colored diamonds, offering a rich palette of hues. Known for their rarity and beauty, these gemstones have positioned Royal Rays as a leader in luxury diamonds. Our dedication to excellence and unique gemstones has made us a trusted name among those who value the rarity of natural colored diamonds.</p>
          </div>
          <div className="image">
            <img src="/121.jpg" alt="2000" />
          </div>
        </div>
      )
    },
    '2015': {
      year: '2015',
      content: (
        
        <div className="timeline-item-content">
          
          <div className="content">
        
            <p>

<h4>
Royal Rays' Step Cut Diamonds: The Art of Precision Since 2015</h4>

            


In 2015, Royal Rays introduced step cut diamonds, renowned for their clean lines and geometric symmetry. These diamonds offer a distinct clarity and subtle brilliance, appealing to lovers of both classic and contemporary jewelry. Since their debut, step cut diamonds have become a key part of our collection, favored for their timeless elegance. Whether in a solitaire ring or elaborate setting, they embody refined taste and exceptional craftsmanship.</p>
          </div>
          <div className="image">
            <img src="/00.jpg" alt="2000" />
          </div>
        </div>
      )
    },
    '2019': {
      year: '2019',
      content: (
        
        <div className="timeline-item-content">
          
          <div className="content">
           
            <p>

<h4>
EUROPEAN CUT / MINE CUT:</h4>

            


In 2019, Royal Rays unveiled its magnificent array of EUROPEAN CUT, a collection that embodies the precise and elegant facets of traditional craftsmanship. Celebrated for their architectural beauty, EUROPEAN CUT diamonds distinguish themselves through their rectangular facets, which are arranged parallel to the diamond's edges and emphasize its depth and clarity.</p>
          </div>
          <div className="image">
            <img src="/213.jpg" alt="2000" />
          </div>
        </div>
      )
    },
    '2024': {
      year: '2024',
      content: (
        
        <div className="timeline-item-content">
          
          <div className="content">
    
            <p>

<h4>Royal Rays' 2024 Alphabet Diamonds</h4>

            

In 2024, Royal Rays is proud to unveil a groundbreaking collection: the Alphabet Diamonds. This bespoke series celebrates individuality and innovation, featuring exquisitely crafted diamonds cut into every letter of the alphabet.As with all Royal Rays creations, these alphabet-shaped diamonds are sourced and crafted with an unwavering commitment to ethical practices and exceptional quality. Each piece is a testament to our dedication to innovation, blending the timeless allure of diamonds with a modern twist that speaks to the current trends and personal expressions of our clientele.</p>
          </div>
          <div className="image">
            <img src="/9.png" alt="2000" />
          </div>
        </div>
      )
    },
  };
  const years = Object.keys(timelineContent);

  useEffect(() => {
    const currentIndex = years.indexOf(selectedYear);
    const nextIndex = (currentIndex + 1) % years.length;
    const timer = setTimeout(() => {
      setSelectedYear(years[nextIndex]);
    }, 5000); // Change year every 5 seconds

    return () => clearTimeout(timer); // Clear timeout on cleanup
  }, [selectedYear, years]);

  return (
    <div className="history-container">
      <div className="top-image-container">
        <img src="/HDTHREE.jpeg" alt="Royal Rays Legacy" className="top-image" />
      </div>

      <section className="logo-section">
        <img src="/BRR.png" alt="Royal Rays Logo" className="logo" style={{ height: '150px', marginTop: '40px' }} />
        <div className="logo-content">
  <p style={{ fontSize: '20px' }}>
    Founded in 1986, Royal Rays BV has been a pioneer in the diamond industry, delivering unparalleled craftsmanship and quality for over three decades.

    We pride ourselves on our meticulous craftsmanship, ensuring each diamond is cut to perfection to maximize brilliance and beauty.

    As manufacturers, we source our diamonds directly, guaranteeing authenticity and providing cost efficiencies that we pass on to our valued customers.

    Whether it's for a special occasion or a timeless piece of everyday luxury, our diamonds are available in a variety of cuts and settings to suit every style and preference.

    At Royal Rays BV, customer satisfaction is our top priority. Our dedicated team ensures a seamless experience from selection to purchase, with personalized service at every step.

    We uphold the highest ethical standards in diamond sourcing and production, ensuring each diamond is conflict-free and ethically mined.
  </p>
</div>

      </section>

      <section className="journey-section">
        <h1 className="journey-title">OUR JOURNEY</h1>
        <h2 className="journey-tagline">From Tradition to Innovation – Our Diamond Journey Since 1985</h2>
        <div className="timeline-container">
          <div className="timeline">
            {years.map((year) => (
              <div
                key={year}
                className={`timeline-item ${selectedYear === year ? 'selected' : ''}`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </div>
            ))}
          </div>
        </div>
        <div className="timeline-content">
          {timelineContent[selectedYear].content}
        </div>
      </section>
    </div>
  );
}

export default History;
