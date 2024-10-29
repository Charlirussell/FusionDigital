import React from 'react';

import designLogo from '../../assets/icons/design-icon.png';
import designWeb from '../../assets/images/web-design.jpeg';
import devLogo from '../../assets/icons/dev-icon.png';
import seoLogo from '../../assets/icons/seo-icon.png';
import graphicLogo from '../../assets/icons/graphic-icon.png';


import './Services.scss';


const Services = ({  }) => {

  return (
    <div className='services-container'>
      <div className='services-box'>
        <div className='services-card'>
          <img src={designLogo} alt="Services Icon" />
          <div className='service-details'>
            <h1>Design Web</h1>
            <img src={designWeb} alt="services-img" />
            <p>Sites à faible coût et facile à entretenir, créés avec Wix, Weebly ou WordPress.</p>
            <a href="/design"><button>Design Web</button></a>
          </div>
        </div>
        <div className='services-card'>
          <img src={devLogo} alt="Services Icon" />
          <div className='service-details'>
            <h1>Développement Web</h1>
            <img src={designWeb} alt="services-img" />
            <p>Coût plus élevé, mais conception de sites Web professionnels et sur mesure.</p>
            <a href="/development"><button>Développement Web</button></a>
          </div>
        </div>
        <div className='services-card'>
          <img src={seoLogo} alt="Services Icon" />
          <div className='service-details'>
            <h1>Marketing Digital</h1>
            <img src={designWeb} alt="services-img" />
            <p>Publicité sur Facebook, Twitter, Instagram Stories, Google Ads, et plus encore.</p>
            <a href="/marketing"><button>Marketing Digital</button></a>
          </div>
        </div>
        <div className='services-card'>
          <img src={graphicLogo} alt="Services Icon" />
          <div className='service-details'>
            <h1>Graphisme</h1>
            <img src={designWeb} alt="services-img" />
            <p>Création de logos, de flyers et d’images sur mesure.</p>
            <a href="/graphics"><button>Graphisme</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

