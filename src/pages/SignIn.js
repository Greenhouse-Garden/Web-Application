import React, { useState, useEffect } from "react"
import APIService from "../APIService"
import { useCookies } from 'react-cookie'
import { useHistory } from "react-router-dom"
import "./style/SignIn.css"

 
function SignIn(){

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const [isLogIn, setLogIn] = useState(true)
    let history = useHistory()

    useEffect(() => {
        if(token['mytoken']) {
            history.push('/catalogue/')
        }
    }, [token])
 
    const loginButton = () => {
        APIService.Login({username, password})
        .then(response => setToken('mytoken', response.token))
        .catch(error => console.log(error))
    }

    const registerButton = () => {
        APIService.Register({username, email, password, password_confirmation})
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    return (
        <React.Fragment>
        <div className="SignIn__container">
            <div className="row">
                <div className="col-md-6">
                    <img className="" src={"https://images.pexels.com/photos/5529596/pexels-photo-5529596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="SignIn__form" className="col-md-5">
                            <div className="SigninForm">

                                {isLogIn ? <h2>Sign in to your account</h2>:<h2>Sign up to a new account</h2>}
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

                                {isLogIn ? <div/>
                                : 
                                <div className="form-group mb-2">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control" id="email" placeholder="Enter your email"
                                        value = {email} onChange = {event => setEmail(event.target.value)}
                                        />
                                </div>
                                }

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
                                
                                {isLogIn ? <div/>
                                : 
                                <div className="form-group mb-2">
                                    <label htmlFor="passwordConfirmation" className="form-label">
                                        Password Confirmation
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control" id="passwordConfirmation" placeholder="Confirm your password"
                                        value = {password_confirmation} onChange = {event => setPasswordConfirmation(event.target.value)}
                                    />
                                </div>
                                }

                                <div className="row">
                                    <div className="col-6">

                                         {isLogIn ? <button onClick = {loginButton} type="submit" className="Signin__button">Sign In</button>
                                        : <button onClick = {registerButton} type="submit" className="Signin__button">Sign Up</button>
                                        }
                                        
                                    </div>

                                    <div className = "mb-3">
                                        <br/>
                                        {isLogIn ? <h5>You dont have an account? <h5 onClick = {() => setLogIn(false)}><u>Register</u></h5></h5>
                                        :
                                        <h5>If you have an account <h5 onClick = {() => setLogIn(true)}><u>Login</u></h5></h5>
                                        }
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