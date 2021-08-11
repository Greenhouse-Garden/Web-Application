import React from "react"
import APIService from "../APIService"
import { useState, useEffect } from "react"
import "./style/UpdateProfile.css"

function UpdateProfile() {

    const [cc_number, setCc_number] = useState('')
    const [cc_expiry, setCc_expiry] = useState('')
    const [cc_code, setCc_code] = useState('')
    const [address, setAddress] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')

    const updateCard = () => {
        APIService.Update({ cc_number, cc_expiry, cc_code })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
    const updateAddress = () => {
        APIService.Update({ address, postalCode, city, country })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="SignUp" class="row">
                    <div className="SignUp__img" class="col-md-6">
                        <div className="row">
                            <div class="col-md-3"></div>
                            <div className="SignUp__form" class="col-md-6">
                                <div className="SignUpForm">
                                    <h2>Update address information</h2>
                                    <form>
                                        <div className="form-group mb-2">
                                            <label htmlFor="address" className="mb-1">
                                                Address
                        </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address"
                                                value={address} onChange={event => setAddress(event.target.value)}
                                            />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="postalCode" className="mb-1">
                                                Postal Code
                        </label>
                                            <input
                                                type="text"
                                                id="postalCode"
                                                className="form-control"
                                                value={postalCode} onChange={event => setPostalCode(event.target.value)}
                                            />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="city" className="mb-1">
                                                City
                        </label>
                                            <input
                                                type="text"
                                                id="city"
                                                className="form-control"
                                                value={city} onChange={event => setCity(event.target.value)}
                                            />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="country" className="mb-1">
                                                Country
                        </label>
                                            <input
                                                type="text"
                                                id="country"
                                                className="form-control"
                                                value={country} onChange={event => setCountry(event.target.value)}
                                            />
                                        </div>
                                        <div class="row">
                                            <div className="col-9">
                                                <button onClick={updateAddress} className="SignUp__button">
                                                    Update
                        </button>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div class="col-md-3"></div>
                            <div className="SignUp__form" class="col-md-6">
                                <div className="SignUpForm">
                                    <h2>Update card information</h2>
                                    <form>
                                        <div className="form-group mb-2">
                                            <label htmlFor="cc_number" className="mb-1">
                                                Card Number
                        </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="cc_number"
                                                value={cc_number} onChange={event => setCc_number(event.target.value)}
                                            />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="cc_expiry" className="mb-1">
                                                Card Expiration
                        </label>
                                            <input
                                                type="text"
                                                id="cc_expiry"
                                                className="form-control"
                                                value={cc_expiry} onChange={event => setCc_expiry(event.target.value)}
                                            />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="cc_code" className="mb-1">
                                                Price
                        </label>
                                            <input
                                                type="text"
                                                id="cc_code"
                                                className="form-control"
                                                value={cc_code} onChange={event => setCc_code(event.target.value)}
                                            />
                                        </div>
                                    
                                        <div class="row">
                                            <div className="col-9">
                                                <button onClick={updateCard} className="SignUp__button">
                                                Update
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

export default UpdateProfile;