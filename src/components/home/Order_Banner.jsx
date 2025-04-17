import React from 'react';
import '../../assets/css/Order_Banner.css';
import ban_one from '../../assets/images/banner.png';

const Order_Banner = () => {
    return (
        <section className="order-banner-home">
            <div className='container-fluid order-banner banner'>
                <div className="carousel">
                    <img src={ban_one} alt="Banner Image" className="carousel-image" />
                    <div className="carousel-content">
                        <h2>WE DELIVER ACROSS<br></br> INDIA</h2>
                        <button type="button" className="carousel-button">Order now</button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Order_Banner;