import React from "react"
import './Layout.css'

function Layout(props){
    return(
        <React.Fragment>
            <div className="Layout">
                {props.children}
            </div>
        </React.Fragment>

    );
}