import React from 'react';
import { useState } from 'react';
import ButtonImage1 from '../../assets/images/website-design.gif';
import ButtonImage2 from '../../assets/images/digital-marketing.gif';
import ButtonImage3 from '../../assets/images/graphics.gif';
import ButtonImage4 from '../../assets/images/e-commerce.gif';
import ButtonImage5 from '../../assets/images/seo.gif';
import ButtonImage6 from '../../assets/images/coaching.gif';
import StaticImage1 from '../../assets/images/site-web.png';
import StaticImage2 from '../../assets/images/marketing.png';
import StaticImage3 from '../../assets/images/graphics.png';
import StaticImage4 from '../../assets/images/e-commerce.png';
import StaticImage5 from '../../assets/images/seo-ss.png';
import StaticImage6 from '../../assets/images/coaching.png';


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
      title: 'Graphisme',
      content: "Chez Fusion Digital, nous excellez dans la Conception Visuelle et Graphisme, en créant des logos percutants, des gifs animés, des vidéos captivantes, et des flyers attrayants pour vos événements. Notre équipe de designers talentueux s'assure que chaque élément visuel reflète parfaitement l'identité de votre marque et capte l'attention de votre audience. Que ce soit pour renforcer votre image de marque ou pour donner vie à vos idées, nous travaillons main dans la main avec vous pour concevoir des visuels sur mesure qui se démarquent. Contactez-nous dès maintenant pour donner une nouvelle dimension à votre communication visuelle et marquer les esprits !",
      image: ButtonImage3,
      staticImage: StaticImage3,
    },
    {
      id: 4,
      title: 'E-Commerce',
      content: "Chez Fusion Digital, nous sommes spécialisés dans le développement et l'optimisation de solutions e-commerce adaptées à vos besoins spécifiques. Que vous souhaitiez créer une boutique en ligne avec Shopify ou améliorer votre présence sur d'autres plateformes de commerce électronique, notre équipe experte est là pour vous accompagner à chaque étape. Nous concevons des sites e-commerce attrayants, fonctionnels et performants qui offrent une expérience utilisateur fluide et engageante. Notre approche personnalisée vous aide à atteindre vos objectifs commerciaux en ligne, en optimisant la navigation, le design et les fonctionnalités de votre boutique. Contactez-nous dès maintenant pour transformer votre idée en une boutique en ligne prospère et efficace !",
      image: ButtonImage4,
      staticImage: StaticImage4,
    },
    {
      id: 5,
      title: 'Optimisation SEO',
      content: "Chez Fusion Digital, nous sommes spécialisés dans l'optimisation SEO pour améliorer votre visibilité sur les moteurs de recherche. Grâce à des techniques avancées et une connaissance approfondie des algorithmes, nous vous aidons à atteindre les premières positions sur Google et à attirer un trafic qualifié. Notre équipe travaille en étroite collaboration avec vous pour identifier les mots-clés pertinents, optimiser votre contenu et améliorer la structure de votre site. Contactez-nous dès maintenant pour maximiser votre présence en ligne et augmenter votre chiffre d'affaires !",
      image: ButtonImage5,
      staticImage: StaticImage5,
    },
    {
      id: 6,
      title: 'Coaching',
      content: "Vous ne souhaitez pas faire appel à des experts pour gérer votre présence en ligne ? Pas de problème ! Avec notre coaching digital personnalisé, nous vous apprendrons à le faire vous-même. Grâce à des séances de coaching individuelles, nos experts vous guideront pas à pas pour développer vos compétences et maîtriser les outils nécessaires à la gestion efficace de votre stratégie numérique. Contactez-nous dès maintenant pour devenir autonome et optimiser votre présence en ligne grâce à notre accompagnement sur mesure !",
      image: ButtonImage6,
      staticImage: StaticImage6,
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
        <>
          <div className='modal-overlay' onClick={() => setShowModal(false)}></div>
          <div className='modal'>
            <div className='modal-content'>
              <button className='close-modal-btn' onClick={() => setShowModal(false)}>
                X
              </button>
              <h2>{modalContent.title}</h2>
              <p>{modalContent.content}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Services;