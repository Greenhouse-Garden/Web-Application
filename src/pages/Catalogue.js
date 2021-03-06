import React from "react"
import CardBadge from "../components/CardBadge"
import { useState, useEffect } from "react"
import { useCookies } from 'react-cookie'
import { useHistory } from "react-router-dom"

import "./style/Catalogue.css"

function Catalogue() {

    const [products, setProducts] = useState([])
    const [token, removeToken] = useCookies(['mytoken'])
    let history = useHistory()


    useEffect(() => {
        fetch('https://greenhouse-api-django.herokuapp.com/products/list/', {
            'method': 'GET',
            headers: {
                "Content-Type": "application/json",

            }
        })
            .then(response => response.json())
            .then(response => setProducts(response))
            .catch(error => console.log(error))

    }, [])

    useEffect(() => {
        if (!token['mytoken']) {
            history.push('/signin/')
        }
    }, [token])

    const logoutButton = () => {
        removeToken(['mytoken'])
    } 


    return (
        <React.Fragment>
            <div className="Catalogue__container">
                 <div>
                    <button onClick={logoutButton} className="btn btn-primary" id="logoutButton">Logout</button>
                </div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="row">
                            {products.map(product => {
                                return <div className="col-md-3">
                                    <CardBadge
                                        productName={product.name}
                                        productDescription={product.description}
                                        image={product.image_url}
                                        price={product.price}
                                        id={product.id}
                                    >
                                    </CardBadge>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Catalogue;