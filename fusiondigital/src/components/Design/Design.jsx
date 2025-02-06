import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import thumbnail1 from '../../assets/images/LL-mobile.webp';
import thumbnail2 from '../../assets/images/SHL-mobile.webp';
import thumbnail3 from '../../assets/images/SM-mobile.webp';

import './Design.scss';

const Design = () => {

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    const [isReadMoreOpen, setReadMoreIsOpen] = useState(false);

    const [images1, setImages1] = useState([]);
    const [images2, setImages2] = useState([]);
    const [images3, setImages3] = useState([]);

    useEffect(() => {
        const importImages = async () => {
            const imagePath1 = [
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
            ];
            const imagePath2 = [
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
            ];
            const imagePath3 = [
                import('../../assets/images/SM-1.webp'),
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

    const ToggleText = () => {
        setReadMoreIsOpen(!isReadMoreOpen);
    };
  

    return (
        <div className='design-container'>
            <h1>Design Web</h1>
            <p>Concevoir pour l'impact, développer pour le succès</p>
            <button className='small-button'>Demander un Devis</button>
            <div class="solutions-container">
                <div class="solution-box">
                    <h2>Création de Sites Web sur Mesure</h2>
                    <p>Chez Fusion Digital, nous nous spécialisons dans la création de sites web professionnels en utilisant des plateformes puissantes et conviviales telles que WordPress, Wix et Weebly.
                        {isReadMoreOpen && (
                            <>
                            {' '}
                            Que vous soyez une petite entreprise ou une grande organisation, nous nous assurons que votre site soit parfaitement adapté à vos besoins spécifiques. Nous exploitons la flexibilité de ces outils pour concevoir des sites esthétiques et fonctionnels qui captivent vos visiteurs, tout en étant faciles à gérer. Nous veillons à ce que chaque projet bénéficie d’une expérience utilisateur optimale, d’un design moderne et d’une grande réactivité sur tous les appareils.
                            </>
                        )}
                    </p>
                    <button onClick={ToggleText} className='read-more-btn'>
                        {isReadMoreOpen ? 'Lire moins' : 'Lire plus'}
                    </button>
                </div>
                <div class="solution-box">
                    <h2>Solutions E-commerce Performantes</h2>
                    <p>Pour les entreprises souhaitant vendre en ligne, nous offrons des solutions e-commerce intégrées sur WordPress, Wix et Weebly.
                        {isReadMoreOpen && (
                            <>
                            {' '}
                            Chaque plateforme permet de créer des boutiques en ligne personnalisées, sécurisées et faciles à gérer. Grâce à des outils tels que WooCommerce pour WordPress, les fonctionnalités de boutique de Wix et les solutions de Weebly, nous pouvons mettre en place des systèmes de gestion des produits, des paiements et des expéditions adaptés à votre activité. De plus, chaque site est conçu pour offrir une expérience de magasinage fluide et sécurisée, permettant à vos clients de faire leurs achats en toute confiance.
                            </>
                        )}
                    </p>
                    <button onClick={ToggleText} className='read-more-btn'>
                        {isReadMoreOpen ? 'Lire moins' : 'Lire plus'}
                    </button>
                </div>
                <div class="solution-box">
                    <h2>Gestion Simplifiée et Maintenance</h2>
                    <p>Nos services incluent également la mise en place de sites web avec une gestion simple et intuitive, adaptée aux débutants comme aux utilisateurs avancés.
                        {isReadMoreOpen && (
                            <>
                            {' '}
                            Que vous choisissiez WordPress, Wix ou Weebly, chaque plateforme offre des outils permettant une gestion facile de votre contenu, de vos produits ou de vos services. Nous vous accompagnons dans la formation et la gestion de votre site après la création, afin que vous puissiez le mettre à jour vous-même, à tout moment. De plus, nous assurons la maintenance continue pour garantir le bon fonctionnement de votre site et sa sécurité, vous permettant ainsi de vous concentrer sur le développement de votre entreprise.
                            </>
                        )}
                    </p>
                    <button onClick={ToggleText} className='read-more-btn'>
                        {isReadMoreOpen ? 'Lire Moins' : 'Lire Plus'}
                    </button>
                </div>
            </div>
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
                    {/* Lightbox 3 */}
                    <Lightbox 
                    open={isOpen3} 
                    close={() => setIsOpen3(false)} 
                    slides={images3}   />
                </div>         
            </div>
            <div className='other-services'>
                <h3>Nos Autres Services</h3>
                <Link to="/design" className="small-button">Design Web</Link>
                <Link to="/development" className="small-button">Développement Web</Link>
                <Link to="/marketing" className="small-button">Marketing Digital</Link>
                <Link to="/graphics" className="small-button">Graphisme</Link>
            </div>
        </div>
    );
};

export default Design;