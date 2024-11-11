import React, { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import thumbnail1 from '../../assets/images/LL-1.webp';
import thumbnail2 from '../../assets/images/SHL-1.webp';
import thumbnail3 from '../../assets/images/SM-1.webp';

import './Design.scss';

const Design = () => {

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    const [images1, setImages1] = useState([]);
    const [images2, setImages2] = useState([]);
    const [images3, setImages3] = useState([]);

    useEffect(() => {
        const importImages = async () => {
            const imagePath1 = [
                import('../../assets/images/LL-2.webp'),
                import('../../assets/images/LL-3.webp'),
                import('../../assets/images/LL-4.webp'),
                import('../../assets/images/LL-5.webp'),
                import('../../assets/images/LL-6.webp'),
                import('../../assets/images/LL-7.webp'),
                import('../../assets/images/LL-8.webp'),
                import('../../assets/images/LL-9.webp'),
                import('../../assets/images/LL-10.webp'),
            ];
            const imagePath2 = [
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
            ];
            const imagePath3 = [
                import('../../assets/images/SM-2.webp'),
            ];
        
            const loadedImages1 = await Promise.all(imagePath1);
            const loadedImages2 = await Promise.all(imagePath2);
            const loadedImages3 = await Promise.all(imagePath3);

            setImages1(loadedImages1.map(image => ({ src: image.default })));
            setImages2(loadedImages2.map(image => ({ src: image.default })));
            setImages3(loadedImages3.map(image => ({ src: image.default })));
        };

        importImages();
    }, []);
  

    return (
        <div className='design-container'>
            <h1>Design Web</h1>
            <p>
            Chez Fusion Digital, nous nous spécialisons dans l'offre de solutions flexibles, conviviales et rentables. En utilisant des plateformes puissantes telles que WordPress, Wix et Weebly, nous créons des sites web élégants, adaptés aux besoins spécifiques de chaque client. Que vous soyez une petite start-up ou une grande entreprise bien établie, nous avons quelque chose pour vous.</p>
            <button className='design-button'>Demander un Devis</button>
            <div className='lightbox-container'>
                <div className='thumbnail-grid'>
                    {/* Lightbox 1 */}
                    <button className='gallery-btn' type='button' onClick={() => setIsOpen1(true)}>
                        <div className='thumbnail'>
                            <img src={thumbnail1} alt='thumbnail 1' />
                        </div>
                    </button>
                    {/* Lightbox 2 */}
                    <button className='gallery-btn' type='button' onClick={() => setIsOpen2(true)}>
                        <div className='thumbnail'>
                            <img src={thumbnail2} alt='thumbnail 2' />
                        </div>
                    </button>
                    {/* Lightbox 3 */}
                    <button className='gallery-btn' type='button' onClick={() => setIsOpen3(true)}>
                        <div className='thumbnail'>
                            <img src={thumbnail3} alt='thumbnail 3' />
                        </div>
                    </button>
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
                    <Lightbox open={isOpen3} close={() => setIsOpen3(false)} slides={images3}   />
                </div>         
            </div>
        </div>
    );
};

export default Design;