import React, { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Thumbnail1 from '../../assets/images/web-development-2.webp';
import Thumbnail2 from '../../assets/images/web-development-2.webp';
import Thumbnail3 from '../../assets/images/web-development-2.webp';

import './Portfolio.scss';

const Portfolio = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const [images1, setImages1] = useState([]);
  const [images2, setImages2] = useState([]);
  const [images3, setImages3] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const imagePaths1 = [
        import('../../assets/images/LL-1.webp'),
        import('../../assets/images/LL-2.webp'),
        import('../../assets/images/LL-3.webp'),
        import('../../assets/images/LL-4.webp'),
        import('../../assets/images/LL-5.webp'),
        import('../../assets/images/LL-6.webp'),
        import('../../assets/images/LL-7.webp'),
        import('../../assets/images/LL-8.webp'),
        import('../../assets/images/LL-9.webp'),
        import('../../assets/images/LL-10.webp'),
        import('../../assets/images/SM-1.webp'),
        import('../../assets/images/SM-2.webp'),
        import('../../assets/images/SHL-1.webp'),
        import('../../assets/images/SHL-2.webp'),
        import('../../assets/images/SHL-3.webp'),
        import('../../assets/images/SHL-4.webp'),
        import('../../assets/images/SHL-5.webp'),
        import('../../assets/images/SHL-6.webp'),
        import('../../assets/images/SHL-7.webp'),
        import('../../assets/images/SHL-8.webp'),
        import('../../assets/images/SHL-9.webp'),
        import('../../assets/images/SHL-10.webp'),
        import('../../assets/images/SHL-11.webp'),
        import('../../assets/images/SM-1.webp'),
        import('../../assets/images/SM-2.webp'),
      ];

      const imagePaths2 = [

      ];

      const imagePaths3 = [

      ];

      const loadedImages1 = await Promise.all(imagePaths1);
      const loadedImages2 = await Promise.all(imagePaths2);
      const loadedImages3 = await Promise.all(imagePaths3);

      /*console.log('Loaded images 1:', loadedImages1);
      console.log('Loaded images 2:', loadedImages2);
      console.log('Loaded images 2:', loadedImages3);*/

      setImages1(loadedImages1.map(image => ({ src: image.default })));
      setImages2(loadedImages2.map(image => ({ src: image.default })));
      setImages3(loadedImages3.map(image => ({ src: image.default })));
    };

    importImages();
  }, []);

  return (
    <>
      <div className='lightbox-container'>
        <div className='thumbnail-grid'>
          {/* Lightbox 1 */}
          <button className='gallery-btn' type='button' onClick={() => setIsOpen1(true)}>
            <div className='thumbnail'>
              <img className='LL1' src={Thumbnail1} alt='Thumbnail 1' />
            </div>
          </button>
          {/* Lightbox 2 */}
          <button className='gallery-btn' type='button' onClick={() => setIsOpen2(true)}>
            <div className='thumbnail'>
              <img className='SM1' src={Thumbnail2} alt='Thumbnail 2' />
            </div>
          </button>
          {/* Lightbox 3 */}
          <button className='gallery-btn' type='button' onClick={() => setIsOpen3(true)}>
            <div className='thumbnail'>
              <img className='SHL' src={Thumbnail3} alt='Thumbnail 3' />
            </div>
          </button>
        </div>
      </div>
      <Lightbox
        open={isOpen1}
        close={() => setIsOpen1(false)}
        slides={images1}
      />
      <Lightbox
        open={isOpen2}
        close={() => setIsOpen2(false)}
        slides={images2}
      />
      <Lightbox
        open={isOpen3}
        close={() => setIsOpen3(false)}
        slides={images3}
      />
    </>
  );
};
export default Portfolio;