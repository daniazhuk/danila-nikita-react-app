import React, {FC} from 'react';
import ImageSlider from "../../components/Slider/ImageSlider";
import {SliderData} from "../../components/Slider/SliderData";

const HomePage:FC = () => {
    return (
        <div>
            <ImageSlider slides={SliderData}/>
        </div>
    );
};

export default HomePage;