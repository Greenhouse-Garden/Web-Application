import React from "react"
import "./style/Header.css"



class Header extends React.Component {
    render() {
        return (

            <React.Fragment>
                <nav class="navbar navbar-expand navbar-dark bg-dark sticky-top" style={{height:"65px"}} >
                    <div class="container">
                        <a class="navbar-brand" href="/"><img className="logoHeader" src="https://media.discordapp.net/attachments/844617951055577128/874570232713342986/Greenhouse_logo.png?width=676&height=676" alt="header_image" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                <a class="nav-link" href="#" id="headerText">About</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#" id="headerText">Services</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#" id="headerText">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Header;