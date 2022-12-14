import React, {FC} from 'react';
import HomePageTop from '../../components/HomePageTop';
import ImageSlider from "../../components/Slider/ImageSlider";
import {SliderData} from "../../components/Slider/SliderData";

const HomePage:FC = () => {
    
    return (
        <div>
            <ImageSlider slides={SliderData}/>
            <HomePageTop id={0} type={''} brand={''} url={''} name={''} description={''} price={0} status={''}/>
        </div>
    );
};

export default HomePage;