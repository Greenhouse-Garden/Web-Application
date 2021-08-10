import React, { useState } from "react"
import APIService from "../APIService"
import "./style/SignIn.css"
import {useCookies} from 'react-cookie'

function SignIn(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])

    const loginButton = () => {
        APIService.Login({username, password})
        .then(response => setToken('mytoken', response.token))
        .catch(error => console.log(error))
}

    return (
        <React.Fragment>
        <div className="SignIn__container">
            <div  class="row">
                <div className="col-md-6">
                    <img className="" src={"https://images.pexels.com/photos/5529596/pexels-photo-5529596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="SignIn__form" class="col-md-5">
                            <div className="SigninForm">
                                <p>Welcome back</p>
                                <h2>Sign in to your account</h2>
                                <div className="form-group mb-2">
                                    <label htmlFor="username" className="form-label">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control" id="username" placeholder="Enter a valid username"
                                        value = {username} onChange = {event => setUsername(event.target.value)}
                                        />
                                </div>
                                <div className="form-group mb-2">
                                <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control" id="password" placeholder="Enter a valid password"
                                        value = {password} onChange = {event => setPassword(event.target.value)}

                                    />
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <button onClick = {loginButton} type="submit" className="SignUp__button">
                                            Sign In
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column mt-4 form-footer col-6 ">
                                        <p className="m-auto"><a href="{% url 'signup' %}">Create an account</a></p>
                                    </div>
                                </div>
                            </div>                 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default SignIn;