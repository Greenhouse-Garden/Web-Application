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
                                    price={"3"}
                                    name={"Asparagus 50 seeds package"}
                                    image={"https://images-ext-2.discordapp.net/external/R0EP15Z9HIvI3hFRWlluO-DUCWhJFX8otOyjX6GRsJg/%3Fv%3D1614818781/https/cdn.shopify.com/s/files/1/0260/4702/1102/products/5fdbee7326d53134fea9465c_ee199281-49c0-49b7-b555-d3dcd200bde0_1024x1024.png"}
                                ></CartProduct>
                                <CartProduct
                                    price={"60"}
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