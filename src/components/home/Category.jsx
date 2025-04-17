import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/Category.css";
import vegetablesImg from "../../assets/images/vegetables.png";
import curryPowdersImg from "../../assets/images/currypowders.png";
import dryImg from "../../assets/images/dry.png";
import juiceImg from "../../assets/images/juice.png";
import meatImg from "../../assets/images/meat.png";
import snacksImg from "../../assets/images/snacks.png";
import honeyImg from "../../assets/images/honey.png";
import dairyImg from "../../assets/images/diary.png";
import groceryImg from "../../assets/images/grocery.png";
import fruitsImg from "../../assets/images/fruits.png";

export default function Category() {
    const categories = [
        { name: "Vegetables", img: vegetablesImg },
        { name: "Curry Powders", img: curryPowdersImg },
        { name: "Dry Items", img: dryImg },
        { name: "Juice", img: juiceImg },
        { name: "Meat", img: meatImg },
        { name: "Snacks", img: snacksImg },
        { name: "Honey", img: honeyImg },
        { name: "Dairy", img: dairyImg },
        { name: "Grocery", img: groceryImg },
        { name: "Fruits", img: fruitsImg },
    ];

    const colors = [
        "#FCEDED", "#F5FBE3", "#FCF2E7", "#E3FBE9", "#E9E3FB",
        "#ECF8F2", "#F8F5E5", "#DDDDDD", "#F0F8E5", "#F6EBF3"
    ];

    const settings = {
        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1700, settings: { slidesToShow: 7 } },
            { breakpoint: 1200, settings: { slidesToShow: 6 } },
            { breakpoint: 1024, settings: { slidesToShow: 5 } },
            { breakpoint: 920, settings: { slidesToShow: 4 } },
            { breakpoint: 540, settings: { slidesToShow: 2 } },
            { breakpoint: 344, settings: { slidesToShow: 1 } },
        ]
    };

    return (
        <section className=" cat-list-scroll">
            <div className="container-fluid">
                <Slider {...settings}>
                    {categories.map((category, index) => (
                        <div className="text-center px-2" key={index}>
                            <div
                                className="category-box mx-auto d-flex justify-content-center align-items-center"
                                style={{ backgroundColor: colors[index % colors.length] }}
                            >
                                <img src={category.img} alt={category.name} className="img-fluid" />
                            </div>
                            <p className="fw-bold mt-2">{category.name}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
