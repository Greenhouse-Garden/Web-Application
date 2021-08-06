import React from "react"
import CartProduct from "../components/CartProduct"
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
                    
                    <h3>$ {props.total} MXN</h3>
                    <br></br>
                    <br></br>
                    <br></br>

                    <button type="button" to={props.link} className="Subtotal__button">{props.boton}</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Subtotal;