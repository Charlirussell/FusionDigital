import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            <p>Découvrez nos services de conception graphique sur mesure, adaptés à tous vos projets, qu’il s’agisse de logos, de flyers ou de visuels pour les réseaux sociaux. Chez Fusion Digital, nous créons des designs percutants et uniques qui reflètent l’identité de votre marque et attirent l’attention de votre public.</p>
            <button className='small-button'>Demander un Devis</button>
            <div class="graphics-solutions-container">
                <div class="graphics-solution-box">
                    <h2>Logo</h2>
                    <p>Création de logos sur mesure pour tous vos besoins, qu’il s’agisse d'une entreprise, d’une vitrine, ou d’un projet personnel. Chez Fusion Digital, nous concevons des logos uniques qui capturent l’essence de votre marque et attirent l’attention de vos clients. Que vous soyez une petite entreprise ou une grande organisation, nous créons des identités visuelles adaptées à votre image et à vos objectifs.</p>
                </div>
                <div class="graphics-solution-box">
                    <h2>Flyer</h2>
                    <p>Conception de flyers pour tous types d'événements : vide-greniers, soirées, promotions, et bien plus encore. Chez Fusion Digital, nous créons des flyers percutants et professionnels qui captivent l’attention et transmettent efficacement votre message. Que ce soit pour un événement personnel ou professionnel, nos designs sont adaptés à vos besoins et à votre public.</p>
                </div>
            </div>
            <div className='graph-lightbox-container'>
                <div className='graph-thumbnail-grid'>
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
                </div>
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
            <div>
                <h3>Nos Autres Services</h3>
                <Link to="/design" className="small-button">Design Web</Link>
                <Link to="/development" className="small-button">Développement Web</Link>
                <Link to="/marketing" className="small-button">Marketing Digital</Link>
                <Link to="/graphics" className="small-button">Graphisme</Link>
            </div>
        </div>
    );
};


export default Graphics;