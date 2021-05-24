import { SliderData } from "./sliderData";
import React, { useState } from 'react';

function Slider() {

    const [getCurrentSlide, setCurrentSlide] = useState(0);
    const [getDotActiveStatus, setDotActiveStatus] = useState(0);

    //Change slide when dot is clicked
    const changeSlide = (n) => {
        setCurrentSlide(n);
        setDotActiveStatus(n);
    }

    return (
        <div className="slider-container">
            {SliderData.map((slide, index) => {
                return (
                    <div className="slider-img" key={index}>
                        <img src={slide.image} alt="products"
                            style={index === getCurrentSlide ? { display: "block" } : { display: "none" }}>
                        </img>
                    </div>  
                )
            })}

            <div className="dot-container">
                {Array.from(Array(3), (x, i) => {
                    return <span
                        className={i === getDotActiveStatus ? "dot active" : "dot"}
                        onClick={() => changeSlide(i)}
                        key={i}></span>
                })}
            </div>
        </div>
    )
}

export default Slider;