import homeImage from '../../assets/icons/fusion-logo-new.png';

import './Home.scss';

const Home = () => {
  
  return (
    <div className='home-container'>
      <div className='home-content'>
      <img src={homeImage} alt="fusion-image" />
      <div className='home-text'>
        <h1>&#8226; Création de Site Web &#8226; Marketing Digital &#8226; SEO &#8226; </h1>
      </div>
      </div>
    </div>
  );
};

export default Home;