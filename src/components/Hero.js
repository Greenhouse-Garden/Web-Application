import React from 'react';
import { Link } from 'react-router-dom';
import LandingImage from '../images/LandingImage'
import './style/Hero.css'

const Hero = props =>{
    return (
        <React.Fragment>
            <div className="Hero">
                <div className="Hero_img" style={{height: props.h}}>
                    <img src={LandingImage} alt="Landing_Image" /> 
                </div>
            </div>

        </React.Fragment>
    );
}

export default Hero