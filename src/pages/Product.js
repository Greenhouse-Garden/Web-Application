import React from "react"
import { useState, useEffect } from "react"
import ProductInfo from "../components/ProductInfo"
import "./style/Product.css"

function Product (props) {

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://greenhouse-api-django.herokuapp.com/products/get/4', {
            'method': 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }   
        })
        .then(response => response.json())
        .then(response => setProduct(response))
        .catch(error => console.log(error))

    }, [])

    return (
        <React.Fragment>
            <ProductInfo 
            productName={product.name} 
            description={product.description}
            image={product.image_url}
            price={product.price}
            ></ProductInfo>
        </React.Fragment>
    );
}

export default Product;