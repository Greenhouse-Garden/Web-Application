import React from "react"
import APIService from "../APIService"
import { useState, useEffect } from "react"
import NewProductForm from "../components/NewProductForm"
import "./style/NewProduct.css"

function NewProduct() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image_url, setImageUrl] = useState('')
    const [stock, setStock] = useState('')




    const addProduct = () => {
        APIService.AddProduct({ name, description, price, image_url, stock })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    return (
        <React.Fragment>
            <div className="container">


                <div className="SignUp" class="row">
                    <div className="SignUp__img" class="col-md-6">

                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div class="col-md-3"></div>
                            <div className="SignUp__form" class="col-md-5">
                                <div className="SignUpForm">
                                    <h2>Register a new product</h2>
                                    <form>
                                        <div className="form-group mb-2">
                                            <label htmlFor="productName" className="mb-1">
                                                Product name
                        </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                value={name} onChange={event => setName(event.target.value)}
                                            />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="description" className="mb-1">
                                                Product Description
                        </label>
                                            <input
                                                type="text"
                                                id="description"
                                                className="form-control"
                                                value={description} onChange={event => setDescription(event.target.value)}
                                            />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="price" className="mb-1">
                                                Price
                        </label>
                                            <input
                                                type="text"
                                                id="price"
                                                className="form-control"
                                                value={price} onChange={event => setPrice(event.target.value)}
                                            />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="stock" className="mb-1">
                                                Stock
                        </label>
                                            <input
                                                type="text"
                                                id="stock"
                                                className="form-control"
                                                value={stock} onChange={event => setStock(event.target.value)}
                                            />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="image" className="mb-1">
                                                Image URL
                        </label>
                                            <input
                                                type="text"
                                                id="image_url"
                                                className="form-control"
                                                value={image_url} onChange={event => setImageUrl(event.target.value)}
                                            />
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <button onClick={addProduct} type="submit" className="SignUp__button">
                                                    Add product
                        </button>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default NewProduct;