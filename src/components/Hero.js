import React from "react"
import "./style/Hero.css"

const Hero = (props) => {
    return (
        <React.Fragment>
            <div className="Hero">
                <div className="Hero__img" style={{ height: props.h }}>
                    <img src={props.foto} width={props.width} alt="" />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Hero;