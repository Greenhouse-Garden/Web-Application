import React from "react"
import ProductInfo from "../components/ProductInfo"
import { useState, useEffect } from "react"
import "./style/Product.css"
import { useParams } from "react-router"

const Product = (props) => {

    const [product, setProduct] = useState([])

    let{id}=useParams()

    useEffect(() => {
        fetch(`https://greenhouse-api-django.herokuapp.com/products/get/${id}`, {
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