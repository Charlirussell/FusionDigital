import homeImage from '../../assets/icons/fusion-logo-new.png';

import './Home.scss';

const Home = () => {
  
  return (
    <div className='home-container'>
        <img src={homeImage} alt="fusion-image" />
    </div>
  );
};

export default Home;