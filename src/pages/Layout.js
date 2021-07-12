import React from "react"
import './style/Layout.css'

import Footer from "../components/Footer"
import Header from "../components/Header"

function Layout(props){
    return(
        <React.Fragment>
            <div className="Layout">
                <Header></Header>
                <Footer></Footer>
                {props.children}
            </div>
        </React.Fragment>

    );
}

export default Layout;