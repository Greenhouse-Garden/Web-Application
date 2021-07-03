import React from "react"
import "./style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                <img src="https://cdn.discordapp.com/attachments/844617951055577128/860675255525965894/Greenhouse_logoWHITE_LETTERS.png" alt="header_image"/>
                </div>
                
            </React.Fragment>
        );
    }
}

export default Header;