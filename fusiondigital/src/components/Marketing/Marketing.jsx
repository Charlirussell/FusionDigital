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
                <button className='small-button'>Design Web</button>
                <button className='small-button'>Développement Web</button>
                <button className='small-button'>Marketing Digital</button>
                <button className='small-button'>Graphisme</button>
            </div>
        </div>
    );
};

export default Marketing;