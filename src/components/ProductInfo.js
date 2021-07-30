import React from "react"
import './style/ProductInfo.css'

const ProductInfo = (props) => {
    return (
        <div className="Product__container">
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div >
                                <img className="" src={props.image} alt="Product" />
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="ProductInfo row">
                        <div className="col-md-2"></div>
                        <div className="col-md-6">
                            <h2>{props.productName}</h2>

                            <p>{props.description}</p>
                            <p><b>Select a package</b></p>

                            <div className="Package row">
                                <div class="col-md-4">
                                    <button type="button" class="btn btn-secondary">50 Seeds</button>
                                </div>
                                <div class="col-md-4">
                                    <button type="button" class="btn btn-secondary">100 Seeds</button>
                                </div>
                                <div class="col-md-4">
                                    <button type="button" class="btn btn-secondary">200 Seeds</button>
                                </div>

                            </div>
                            <br></br>
                            <p><b>Quantity</b></p>
                            <div className="Quantity row">
                                <div className="col-md-5">
                                    <div class="input-group">
                                        <button type="button" class="QuantityLess__button">-</button>
                                        <input type="text" class="form-control" placeholder="1"></input>
                                        <button type="button" className="QuantityAdd__button">+</button>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <p><b>Price</b></p>
                            <h3>${props.price} MXN</h3>
                            <button type="button" className="Product__button">
                                Add to cart
                            </button>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProductInfo;