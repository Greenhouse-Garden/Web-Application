import React from "react"
import { Link } from "react-router-dom"
import "./style/Subtotal.css"

const Subtotal = (props) => {
    return (
        <React.Fragment>
            <div className="Subtotal container ">
                <div className="row">
                    <div className="col-md-4">
                        <h4 className="mt-1">Subtotal</h4>
                    </div>
                    <div className="col-md-6">
                        <p className="mt-2">({props.ammount} items):</p>
                    </div>
                    
                    <h3>${props.total}</h3>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Link to={props.link} className="Subtotal__button"><p>{props.boton}</p></Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Subtotal;