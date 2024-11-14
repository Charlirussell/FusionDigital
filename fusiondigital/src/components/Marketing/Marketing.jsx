import React from 'react';
import { Link } from 'react-router-dom';

import './Marketing.scss';

const Marketing = () => {

    return (
        <div className='marketing-container'>
            <h1>Merketing Digitl</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis tenetur voluptatibus nulla? Molestiae voluptatum explicabo harum, ab doloribus, sapiente eligendi, veniam consequuntur blanditiis quam itaque optio eius repudiandae alias iusto?.</p>
            <button className='marketing-button'>Demander un Devis</button>
            <div class="marketing-solutions-container">
                <div class="marketing-solution-box">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia minus at reprehenderit doloribus ipsum neque quae voluptatem quia, nulla ea quo ratione repellat similique atque ab commodi illo amet eius.</p>
                </div>
                <div class="marketing-solution-box">
                    <h2>Lorem Ipusum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas tenetur eaque fugit suscipit id laudantium iusto sint, magni consectetur animi est, assumenda illo? Architecto vel, ab molestias voluptatibus necessitatibus dignissimos.</p>
                </div>
                <div class="marketing-solution-box">
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

export default Marketing;