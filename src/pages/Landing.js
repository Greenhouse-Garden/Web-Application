import React from "react"
import Hero from "../components/Hero"
import Button from "../components/MainButton"
import "./style/Landing.css"

const Landing=(props) =>{
    return(
        <React.Fragment>
            <div className="Main">
                <div className="Main__content">
                    <h1 className="Main__title">Greenhouse</h1>
                    <h2 className="Main__subtitle">Garden</h2>
                    <Button clase={"darkButton"} contentText={"Get your own Greenhouse"} link={"/new"} id={"landingButton"}></Button>
                </div>
                <Hero h={"88vh"} foto={"https://images.pexels.com/photos/2749165/pexels-photo-2749165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}></Hero>
            </div>
        </React.Fragment>
    );
}

export default Landing;
