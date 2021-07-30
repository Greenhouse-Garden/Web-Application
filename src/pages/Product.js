import React from "react"
import ProductInfo from "../components/ProductInfo"
import "./style/Product.css"

const Product = (props) => {
    return (
        <React.Fragment>
            <ProductInfo 
            productName={"Tomato Seeds"} 
            description={"Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget elementum ligula, vitae pharetra quam. Nullam at ligula sed metu. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget elementum ligula, vitae pharetra quam. Nullam at ligula sed metu"}
            image={"https://images.pexels.com/photos/5529596/pexels-photo-5529596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
            price={"200"}
            ></ProductInfo>
        </React.Fragment>
    );
}

export default Product;