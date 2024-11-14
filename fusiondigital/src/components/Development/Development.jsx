import React from 'react';
import { Link } from 'react-router-dom';

import './Development.scss';

const Development = () => {

    return (
        <div className='dev-container'>
            <h1>Developpment Web</h1>
            <p>Chez Fusion Digital, nous nous spécialisons dans le développement de solutions web modernes, flexibles et performantes. En utilisant des technologies avancées comme React JSX, nous créons des sites web interactifs et sur mesure, parfaitement adaptés aux besoins uniques de chaque client. Que vous soyez une petite entreprise en pleine croissance ou une organisation bien établie, nous vous aidons à bâtir des sites dynamiques, optimisés et faciles à gérer. Grâce à React, nous vous offrons des expériences utilisateurs rapides, fluides et réactives, tout en assurant une scalabilité pour soutenir la croissance de votre activité.</p>
            <button className='dev-button'>Demander un Devis</button>
            <div class="dev-solutions-container">
                <div class="dev-solution-box">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia minus at reprehenderit doloribus ipsum neque quae voluptatem quia, nulla ea quo ratione repellat similique atque ab commodi illo amet eius.</p>
                </div>
                <div class="dev-solution-box">
                    <h2>Lorem Ipusum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas tenetur eaque fugit suscipit id laudantium iusto sint, magni consectetur animi est, assumenda illo? Architecto vel, ab molestias voluptatibus necessitatibus dignissimos.</p>
                </div>
                <div class="dev-solution-box">
                    <h2>Lorem Ipusum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas tenetur eaque fugit suscipit id laudantium iusto sint, magni consectetur animi est, assumenda illo? Architecto vel, ab molestias voluptatibus necessitatibus dignissimos.</p>
                </div>
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

export default Development;