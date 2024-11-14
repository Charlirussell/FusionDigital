import { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './Graphics.scss';
import graphThumbnail1 from '../../assets/images/Logo.png';
import graphThumbnail2 from '../../assets/images/Flyer.png';


const Graphics = () => {

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const [images1, setImages1] = useState([]);
    const [images2, setImages2] = useState([]);

    useEffect(() => {
        const importImages = async () => {
            const imagePath1 = [
                import('../../assets/images/steel-logo.png')
            ];
            const imagePath2 = [

            ];
    
        const loadedImages1 = await Promise.all(imagePath1);
        const loadedImages2 = await Promise.all(imagePath2);

        setImages1(loadedImages1.map(images => ({src: images.default})));
        setImages2(loadedImages2.map(images => ({src: images.default})));
    };

    importImages();
    }, []);

    return (
        <div className='graphics-container'>
            <h1>Graphisme</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis tenetur voluptatibus nulla? Molestiae voluptatum explicabo harum, ab doloribus, sapiente eligendi, veniam consequuntur blanditiis quam itaque optio eius repudiandae alias iusto?.</p>
            <button className='graphics-button'>Demander un Devis</button>
            <div class="graphics-solutions-container">
                <div class="graphics-solution-box">
                    <h2>Logo</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia minus at reprehenderit doloribus ipsum neque quae voluptatem quia, nulla ea quo ratione repellat similique atque ab commodi illo amet eius.</p>
                </div>
                <div class="graphics-solution-box">
                    <h2>Flyer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas tenetur eaque fugit suscipit id laudantium iusto sint, magni consectetur animi est, assumenda illo? Architecto vel, ab molestias voluptatibus necessitatibus dignissimos.</p>
                </div>
            </div>
            <div className='Lightbox-container-three'>
                <div className='thumbail-grid-three'>
                    {/* Lightbox 1 */}
                    <button className='graph-gallery-btn' type='button' onClick={() => setIsOpen1(true)}>
                        <div className='graph-thumbnail'>
                            <img src={graphThumbnail1} alt='graph-thumbnail 1' />
                        </div>
                    </button>
                    {/* Lightbox 2 */}
                    <button className='graph-gallery-btn' type='button' onClick={() => setIsOpen2(true)}>
                        <div className='graph-thumbnail'>
                            <img src={graphThumbnail2} alt='graph-thumbnail 2' />
                        </div>
                    </button>
                    {/* Lightbox 1 */}
                    <Lightbox 
                    open={isOpen1} 
                    close={() => setIsOpen1(false)} 
                    slides={images1}
                    />
                    {/* Lightbox 2 */}
                    <Lightbox 
                    open={isOpen2} 
                    close={() => setIsOpen2(false)} 
                    slides={images2}  
                    />
                </div>
            </div>
        </div>
    );
};


export default Graphics;