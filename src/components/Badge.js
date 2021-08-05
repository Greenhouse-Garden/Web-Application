import React from "react"
import "./style/Badge.css"

const Badge = (props) => {
    return (
        <React.Fragment>
            <div className="Badge">
                    <h2>{props.productName}</h2>
                <div className="Badge__img">
                    <img src={props.imagen} />
                </div>
                    <button className="Boton">Add to cart</button>
            </div>
        </React.Fragment>
    );
}

export default Badge;