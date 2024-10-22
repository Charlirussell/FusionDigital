import React from 'react';

import designLogo from '../../assets/icons/design-icon.png';
import devLogo from '../../assets/icons/dev-icon.png';
import seoLogo from '../../assets/icons/seo-icon.png';
import graphicLogo from '../../assets/icons/graphic-icon.png';


import './Services.scss';


const Services = ({  }) => {

  return (
    <div className='services-container'>
      <div className='services-box'>
        <div className='services-card'>
          <img src={designLogo} alt="Design Web" />
          <div className='service-details'>
            <h2>Design Web</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="/design"><button>Design Web</button></a>
          </div>
        </div>
        <div className='services-card'>
          <img src={devLogo} alt="Dev Web" />
          <div className='service-details'>
            <h2>Développement Web</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="/development"><button>Développement Web</button></a>
          </div>
        </div>
        <div className='services-card'>
          <img src={seoLogo} alt="Marketing" />
          <div className='service-details'>
            <h2>Marketing Digital</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="/marketing"><button>Marketing Digital</button></a>
          </div>
        </div>
        <div className='services-card'>
          <img src={graphicLogo} alt="Graphisme" />
          <div className='service-details'>
            <h2>Graphisme</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="/graphics"><button>Graphisme</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

