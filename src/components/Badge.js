import React from "react"
import "./style/Badge.css"

const Badge = (props) => {
    return (
        <React.Fragment>
            <div className="Badge__container mt-5">
                    <h2 className="Badge__title">{props.productName}</h2>
                <div className="Badge__img">
                    <img className="card-img-bottom" src={props.image} />
                </div>
                    <button className="Badge__button">Add to cart</button>
            </div>
        </React.Fragment>
    );
}

export default Badge;