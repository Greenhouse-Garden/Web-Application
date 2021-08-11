import React from "react"
import "./style/Header.css"
import Button from "../components/MainButton"


class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Header">
                    <a href = "/"><img src="https://media.discordapp.net/attachments/844617951055577128/874570232713342986/Greenhouse_logo.png?width=676&height=676" alt="header_image" /></a>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;