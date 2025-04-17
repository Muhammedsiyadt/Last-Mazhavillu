
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../../assets/css/Banner.css'
import bannerImage from '../../assets/images/bannerImage.png';



export default function Banner() {

    const [clicked, setClicked] = useState(false);

    const handleScroll = () => {
        const banner = document.getElementById("banner-container");
        if (banner) {
            const bannerHeight = banner.offsetHeight;
            const extraOffset = 250;
            window.scrollTo({
                top: bannerHeight + extraOffset,
                behavior: 'smooth',
            });
        }
    };




    const handleClick = () => {
        setClicked(true);
    };

    return (
        <>
            <div className="container-fluid" id="banner-container">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators d-none">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={bannerImage} className="d-block w-100 " alt="First Slide" />
                            <button className="scrolldown" onClick={handleScroll}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                                </svg>
                            </button>


                            <div className="carousel-caption  d-md-block">
                                <h1>Daily grocery order and</h1>
                                <h1>get express delivery</h1>
                                <Link to="/products">
                                    <button
                                        className={`${!clicked ? "ordernow" : "clicked"}`}
                                        onClick={handleClick}
                                    >
                                        Order now
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={bannerImage} className="d-block w-100 img-fluid" alt="Second Slide" />
                            <button className="scrolldown">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                                </svg>
                            </button>
                            <div className="carousel-caption  d-md-block">
                                <h1>Daily grocery order and</h1>
                                <h1>get express delivery</h1>
                                <Link to="/products">
                                    <button className="ordernow">Order now</button>
                                </Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={bannerImage} className="d-block w-100 img-fluid" alt="Third Slide" />
                            <button className="scrolldown">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                                </svg>
                            </button>
                            <div className="carousel-caption  d-md-block">
                                <h1>Daily grocery order and</h1>
                                <h1>get express delivery</h1>
                                <Link to="/products">
                                    <button className="ordernow">Order now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon " aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#1f1f1f"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#1f1f1f"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>



        </>
    );
}


