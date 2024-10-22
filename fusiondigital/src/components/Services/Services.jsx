import React from 'react';

import boxLogo from '../../assets/icons/close.png';


import './Services.scss';


const Services = ({  }) => {

  return (
    <div className='services-container'>
      <div className='services-box'>
        <div className='services-card-1'>
          <img src={boxLogo} alt="Design Web" />
          <h2>Design Web</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="/design"><button>Design Web</button></a>
        </div>
        <div className='services-card-2'>
          <img src={boxLogo} alt="Dev Web" />
          <h2>Développement Web</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="/development"><button>Développement Web</button></a>
        </div>
        <div className='services-card-3'><img src={boxLogo} alt="Marketing" />
          <h2>Marketing Digital</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="/marketing"><button>Marketing Digital</button></a>
        </div>
        <div className='services-card-4'><img src={boxLogo} alt="Graphisme" />
          <h2>Graphisme</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="/graphics"><button>Graphisme</button></a>
        </div>
      </div>
    </div>
  );
};

export default Services;

