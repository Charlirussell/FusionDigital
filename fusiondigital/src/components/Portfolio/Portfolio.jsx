import React, { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Thumbnail1 from '../../assets/images/LL-thumbnail.png';
import Thumbnail2 from '../../assets/images/SM-thumbnail.png';

import './Portfolio.scss';

const Portfolio = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [images1, setImages1] = useState([]);
  const [images2, setImages2] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const imagePaths1 = [
        import('../../assets/images/Liverpool-landscaping-2.png'),
        import('../../assets/images/Liverpool-landscaping-3.png'),
        import('../../assets/images/Liverpool-landscaping-4.png'),
        import('../../assets/images/Liverpool-landscaping-5.png'),
      ];
  
      const imagePaths2 = [
        import('../../assets/images/scaffolding-manchester-1.png'),
        import('../../assets/images/scaffolding-manchester-2.png'),
        import('../../assets/images/scaffolding-manchester-3.png'),
        import('../../assets/images/scaffolding-manchester-4.png'),
        import('../../assets/images/scaffolding-manchester-5.png'),
      ];
  
      const loadedImages1 = await Promise.all(imagePaths1);
      const loadedImages2 = await Promise.all(imagePaths2);
  
      console.log('Loaded images 1:', loadedImages1);
      console.log('Loaded images 2:', loadedImages2);
  
      setImages1(loadedImages1.map(image => ({ src: image.default })));
      setImages2(loadedImages2.map(image => ({ src: image.default })));
    };
  
    importImages();
  }, []);
  return (
    <>
    <div className='lightbox-wrapper'>
      {/* Lightbox 1 */}
      <button className='gallery-btn' type='button' onClick={() => setIsOpen1(true)}>
        <img className='LL1' src={ Thumbnail1} alt='Thumbnail 1'/>
      </button>
      <Lightbox
        open={isOpen1}
        close={() => setIsOpen1(false)}
        slides={images1}
      />
      {/* Lightbox 2 */}
      <button className='gallery-btn' type='button' onClick={() => setIsOpen2(true)}>
      <img className='SM1' src={ Thumbnail2} alt='Thumbnail 2'/>
      </button>
      <Lightbox
        open={isOpen2}
        close={() => setIsOpen2(false)}
        slides={images2}
      />
    </div>
    </>
  );
};

export default Portfolio;