import homeImage from '../../assets/icons/fusion-logo-new.png';

import './Home.scss';

const Home = () => {
  
  return (
    <div className='home-container'>
      <div className='home-content'>
        <img src={homeImage} alt="fusion-image" />
        <div className='home-text'>
          <h2 className='home-tagline'>Transformez vos idées en réalité numérique – Conception, Développement et Visibilité Web sur mesure</h2>
          <button className='call-to-action'><span>C'est parti !</span></button>
        </div>
      </div>
    </div>
  );
};

export default Home;