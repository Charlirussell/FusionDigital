import homeImage from '../../assets/icons/fusion-logo-new.png';

import './Home.scss';

const Home = () => {
  
  return (
    <div className='home-container'>
      <div className='home-content'>
      <img src={homeImage} alt="fusion-image" />
      <div className='home-text'>
        <h1><span>&#8226;</span> Création de Site Web <span>&#8226;</span> Marketing Digital <span>&#8226;</span> Optimisation SEO <span>&#8226;</span> </h1>
      </div>
      </div>
    </div>
  );
};

export default Home;