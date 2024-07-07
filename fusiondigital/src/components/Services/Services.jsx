import React from 'react';
import { useState } from 'react';
import ButtonImage1 from '../../assets/images/website-design.gif';
import ButtonImage2 from '../../assets/images/digital-marketing.gif';
import ButtonImage3 from '../../assets/images/seo.gif';
import StaticImage1 from '../../assets/images/site-web.png';
import StaticImage2 from '../../assets/images/marketing.png';
import StaticImage3 from '../../assets/images/seo-ss.png';


import './Services.scss';

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseOver =(id) => {
    setHoveredButton(id);
  };

  const handleMouseOut = () => {
    setHoveredButton(null);
  };

  const modalContents = [
    {
      id: 1,
      title: 'Création de Site Web',
      content: "Chez Fusion Digital, nous sommes spécialisés dans la création de sites web professionnels et modernes. Que vous ayez besoin d'un site dynamique avec React ou d'une solution rapide et efficace avec des plateformes telles que Wix et Weebly, nous avons l'expertise nécessaire pour répondre à vos besoins. Notre équipe dévouée travaille en étroite collaboration avec vous pour concevoir un site qui reflète parfaitement votre marque et qui attire vos clients. Découvrez comment nous pouvons transformer votre présence en ligne dès aujourd'hui !",
      image: ButtonImage1,
      staticImage: StaticImage1,
    },
    {
      id: 2,
      title: 'Marketing Digital',
      content: "Chez Fusion Digital, nous sommes experts en marketing digital, prêts à propulser votre entreprise vers de nouveaux sommets. Que ce soit par le biais de campagnes publicitaires ciblées ou de la gestion efficace de vos réseaux sociaux, nous avons les compétences et l'expérience pour maximiser votre visibilité en ligne. Notre équipe dévouée travaille en étroite collaboration avec vous pour élaborer des stratégies sur mesure qui répondent à vos objectifs spécifiques. Contactez-nous dès maintenant pour dynamiser votre présence digitale et attirer plus de clients !",
      image: ButtonImage2,
      staticImage: StaticImage2,
    },
    {
      id: 3,
      title: 'Optimisation SEO',
      content: "Chez Fusion Digital, nous sommes spécialisés dans l'optimisation SEO pour améliorer votre visibilité sur les moteurs de recherche. Grâce à des techniques avancées et une connaissance approfondie des algorithmes, nous vous aidons à atteindre les premières positions sur Google et à attirer un trafic qualifié. Notre équipe travaille en étroite collaboration avec vous pour identifier les mots-clés pertinents, optimiser votre contenu et améliorer la structure de votre site. Contactez-nous dès maintenant pour maximiser votre présence en ligne et augmenter votre chiffre d'affaires !",
      image: ButtonImage3,
      staticImage: StaticImage3,
    },
  ];

  const toggleModal = (content) => {
    setShowModal(!showModal);
    setModalContent(content);
  };

  return (
    <div className='services-wrapper'>
      {modalContents.map((content) => (
        <button
          key={content.id}
          className='open-modal-btn'
          onMouseEnter={() => handleMouseOver(content.id)}
          onMouseLeave={handleMouseOut}
          onClick={() => toggleModal(content)}
        >
          <img src={hoveredButton === content.id ? content.image : content.staticImage} alt='button-image'/>
        </button>
      ))}

      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <button className='close-modal-btn' onClick={() => setShowModal(false)}>
              X
            </button>
            <h2>{modalContent.title}</h2>
            <p>{modalContent.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;