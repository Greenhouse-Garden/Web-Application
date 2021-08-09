import React from "react"
import CartProduct from "../components/CartProduct"
import Subtotal from "../components/Subtotal"
import "./style/Cart.css"

const Cart = (props) => {
    return (
        <React.Fragment>
            <div className="Cart__container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="Cart col-md-6">
                        <div className="row">
                            <div className="col-md-11">
                                <h2>Shopping Cart</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <CartProduct
                                    price={"200"}
                                    name={"Tomato seeds 50 seeds package"}
                                    image={"https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                                ></CartProduct>
                                <CartProduct
                                    price={"200"}
                                    name={"Tomato seeds 50 seeds package"}
                                    image={"https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                                ></CartProduct>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <Subtotal
                            ammount={"2"}
                            total={"450"}
                            boton={"Proceed to checkout"}
                            link={"/confirm"}
                        ></Subtotal>
                    </div>
                </div>


            </div>
        </React.Fragment>
    );
}

export default Cart;