import React from "react";
import { Link } from "react-router-dom"
import "./style/Footer.css"

const Footer=()=>{
    return(
        <React.Fragment>
            <div className="Footer">
                <Link to="/about"><p>About us</p></Link>
            </div>
        </React.Fragment>
    );
}

export default Footer;