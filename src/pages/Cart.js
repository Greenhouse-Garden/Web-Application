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
                                    price={"4"}
                                    name={"Eggplant"}
                                    image={"https://cdn.shopify.com/s/files/1/0260/4702/1102/products/5fcbd3fd6a9c03601e4251c8_2c01105e-4ece-48cf-9b85-652f6aa8a843_1024x1024.png?v=1613494238"}
                                ></CartProduct>
                                <CartProduct
                                    price={"3"}
                                    name={"Cherry Tomato"}
                                    image={"https://cdn.shopify.com/s/files/1/0260/4702/1102/products/5fc8b984b511930a7c7e8da1_1024x1024.png?v=1615668358"}
                                ></CartProduct>
                                <CartProduct
                                    price={"2"}
                                    name={"Carrot"}
                                    image={"https://cdn.shopify.com/s/files/1/0260/4702/1102/products/5f37bae7616b9b050368e41b_8b55225c-32b0-4b9a-b4ac-d324db8fc9e1_1024x1024.jpg?v=1604248491"}
                                ></CartProduct>
                                <CartProduct
                                    price={"2"}
                                    name={"White Onion"}
                                    image={"https://cdn.shopify.com/s/files/1/0260/4702/1102/products/5fc2e4956997a438fa8cf885_1024x1024.png?v=1615743652"}
                                ></CartProduct>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <Subtotal
                            ammount={"2"}
                            total={"5"}
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