import React from "react"
import Badge from "../components/Badge"
import CardBadge from "../components/CardBadge"
import { useState, useEffect } from "react"
import { useCookies } from 'react-cookie'
import { useHistory } from "react-router-dom"

import "./style/Catalogue.css"

function Catalogue() {

    const [products, setProducts] = useState([])
    const [token, setToken, removeToken] = useCookies(['mytoken'])
    let history = useHistory()


    useEffect(() => {
        fetch('https://greenhouse-api-django.herokuapp.com/products/list/', {
            'method': 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token['mytoken']}`,
            }   
        })
            .then(response => response.json())
            .then(response => setProducts(response))
            .catch(error => console.log(error))

    }, [])

    useEffect(() => {
        if(!token['mytoken']) {
            history.push('/signin/')
        }
    }, [token])
    
    const logoutButton = () => {
        removeToken(['mytoken'])
    }


    return (
        <React.Fragment>


            <div className="Catalogue__container">

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
                                        id={product.id} >
                                    </CardBadge>
                                </div>

                            })}

                        </div>
                    </div>
                    {/*  <div className="col-md-3">
                <div>
                    <button onClick={logoutButton} className="btn btn-primary" id="logoutButton">Logout</button>
                </div>
                <div className="row">
                   {products.map(product => {
                    return <div className="col-md-3">
                       <CardBadge 
                           productName={product.name}
                           productDescription={product.description}
                           image={product.image_url} >
                       </CardBadge>
                   </div>
                   })} 
                    
                   {/*  <div className="col-md-3">
                        <Badge productName={"Tomato seeds"} image={"https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}></Badge>
                    </div> */}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Catalogue;