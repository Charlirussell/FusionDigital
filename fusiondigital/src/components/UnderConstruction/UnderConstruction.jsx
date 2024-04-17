import React from "react";

import './UnderConstruction.scss';
import homeImage from '../../assets/icons/Fusion-image.png';

const UnderConstruction = () => {
  return (
    <div className='construction-container'>
      <div className='construction-image'>
      <img src={homeImage} alt="fusion-image" />
      <div className='construction-text'>
        <h1>Site en cours de construction</h1>
        <p>Nous travillions actuellement sur ce site. Veuillez revenir plus tard.</p>
      </div>
      </div>
    </div>

  );
};

export default UnderConstruction;