import React from "react";
import { Link } from "react-router-dom"
import "./style/Footer.css"

const Footer=()=>{
    return(
        <React.Fragment>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                    {/* Column1 */}
                        <div className="col">
                            <div>
                                <img src="https://media.discordapp.net/attachments/844617951055577128/867923464525348894/Greenhouse_Medium_logo.png">
                                </img>
                            </div>
                        </div>
                    
                    
                        {/* Column3 */}
                        <div className="col">
                            <a className="aboutUsText" href=""><h5>About Us</h5></a>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} Greenhouse Garden | All rights reserved | Privacy | Contact Us
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;