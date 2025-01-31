import React from "react";
import './UnderConstruction.scss';
import homeImage from '../../assets/icons/Fusion-01.png';

const UnderConstruction = () => {
  return (
    <div className='construction-container'>
      <div className='construction-content'>
        <img src={homeImage} alt="fusion-image" />
        <div className='construction-text'>
          <h1>🚧 Site en cours de construction 🚧</h1>
          <p>🔜 Nous travaillons actuellement sur ce site. Veuillez revenir plus tard 🔜</p>
          <button className="small-button"><a href="mailto:charlifusiondigital@gmail.com">Envoyer un mail 📧</a></button>
          <button className="small-button"><a href="tel:0638826940">Un coup de fil ? 📱</a></button>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;