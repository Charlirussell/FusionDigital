import React from "react";
import './UnderConstruction.scss';
import homeImage from '../../assets/icons/fusion-logo-new.png';

const UnderConstruction = () => {
  return (
    <div className='construction-container'>
      <div className='construction-content'>
        <img src={homeImage} alt="fusion-image" />
        <div className='construction-text'>
          <h1>Site en cours de construction</h1>
          <p>Nous travaillons actuellement sur ce site. Veuillez revenir plus tard.</p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;