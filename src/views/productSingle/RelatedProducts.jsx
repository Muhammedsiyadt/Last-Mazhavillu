import React from "react";
import "../../assets/css/RelatedProducts.css";

import card_5 from "../../assets/images/card_5.png";
import card_6 from "../../assets/images/card_6.png";
import card_7 from "../../assets/images/card_7.png";
import card_8 from "../../assets/images/card_8.png";

const RelatedProducts = () => {
    return (
        <div className="relatedProducts">
            <div className="container-fluid ">
                <div className="row justify-content-center ">
                    <div className="youmightheading">
                        <h4 className="h4_1">You might also like </h4>
                        <h4 className="h4_2">All Products <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg></h4>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="youmightlikecard">
                            <div className="card topcard3">
                                <div className="cardimgdiv3">
                                    <img className="topimg3" src={card_5} alt={card_5} />
                                    <div className="icons">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="wishlisttop bi bi-suit-heart-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="carttop bi bi-cart-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">KOTTHAS KITCHEN</h2>
                                    <h6 className="subheading3">Chicken Masala (100g)</h6>
                                    <h5 className="card-text">
                                        4.8 <span className="star3">★</span> (10k)
                                    </h5>
                                    <div className="row row-2">
                                        <div className="col-6">
                                            ₹59.00{" "}
                                            <span>
                                                <b>₹55.00</b>
                                            </span>
                                        </div>
                                        <div className="col-6 d-flex justify-content-end">
                                            <button className="btn topbtn3">
                                                <b>Buy Now</b>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="youmightlikecard">
                            <div className="card topcard3">
                                <div className="cardimgdiv3">
                                    <img className="topimg3" src={card_6} alt={card_6} />
                                    <div className="icons">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="wishlisttop bi bi-suit-heart-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="carttop bi bi-cart-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">KOTTHAS KITCHEN</h2>
                                    <h6 className="subheading3">Chicken Masala (100g)</h6>
                                    <h5 className="card-text">
                                        4.8 <span className="star3">★</span> (10k)
                                    </h5>
                                    <div className="row row-2">
                                        <div className="col-6">
                                            ₹59.00{" "}
                                            <span>
                                                <b>₹55.00</b>
                                            </span>
                                        </div>
                                        <div className="col-6 d-flex justify-content-end">
                                            <button className="btn topbtn3">
                                                <b>Buy Now</b>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="youmightlikecard">
                            <div className="card topcard3">
                                <div className="cardimgdiv3">
                                    <img className="topimg3" src={card_7} alt={card_7} />
                                    <div className="icons">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="wishlisttop bi bi-suit-heart-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="carttop bi bi-cart-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">KOTTHAS KITCHEN</h2>
                                    <h6 className="subheading3">Chicken Masala (100g)</h6>
                                    <h5 className="card-text">
                                        4.8 <span className="star3">★</span> (10k)
                                    </h5>
                                    <div className="row row-2">
                                        <div className="col-6">
                                            ₹59.00{" "}
                                            <span>
                                                <b>₹55.00</b>
                                            </span>
                                        </div>
                                        <div className="col-6 d-flex justify-content-end">
                                            <button className="btn topbtn3">
                                                <b>Buy Now</b>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="youmightlikecard">
                            <div className="card topcard3">
                                <div className="cardimgdiv3">
                                    <img className="topimg3" src={card_8} alt={card_8} />
                                    <div className="icons">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="wishlisttop bi bi-suit-heart-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="carttop bi bi-cart-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">KOTTHAS KITCHEN</h2>
                                    <h6 className="subheading3">Chicken Masala (100g)</h6>
                                    <h5 className="card-text">
                                        4.8 <span className="star3">★</span> (10k)
                                    </h5>
                                    <div className="row row-2">
                                        <div className="col-6">
                                            ₹59.00{" "}
                                            <span>
                                                <b>₹55.00</b>
                                            </span>
                                        </div>
                                        <div className="col-6 d-flex justify-content-end">
                                            <button className="btn topbtn3">
                                                <b>Buy Now</b>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default RelatedProducts;
