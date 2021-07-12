import React from "react"
import "./style/Header.css"
import Button from "../components/MainButton"


class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Header">
                    <img src="https://media.discordapp.net/attachments/844617951055577128/860675255525965894/Greenhouse_logoWHITE_LETTERS.png" alt="header_image" />
                    <Button contentText={"Sign in"} clase={"lightButton"} id={"signButton"} link={"/signin"}></Button>
                    <Button contentText={"Sign up"} clase={"lightButton"} id={"signButton"} link={"/signup"}></Button>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;