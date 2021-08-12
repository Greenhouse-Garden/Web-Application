import React from "react"
import "./style/CartProduct.css"

const CartProduct = (props) => {
    return (
        <React.Fragment>
            <div className="CartProduct__container ">
                <div className="row">
                    <div className="col-md-2">
                        <img className="card-img-bottom" src={props.image} />
                    </div>
                    <div className="col-md-7">
                        <h4 class="">{props.name}</h4>
                        
                        <p className="mb-0">Quantity</p>
                        <div className="Quantity row">
                            <div className="col-md-3">
                                <div class="input-group">
                                    <button type="button" class="QuantityLess__button">-</button>
                                    <input type="text" class="form-control" placeholder="1"></input>
                                    <button type="button" className="QuantityAdd__button">+</button>
                                </div>
                            </div>
                        </div>
                        <p className="mb-0 mt-2">Price</p>
                        <h3>${props.price}</h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CartProduct;