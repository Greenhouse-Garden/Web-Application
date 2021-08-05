import React, { Component } from "react"
import './style/SignInForm.css'

class SignInForm extends Component {
    render() {
        return (
            <div className="SigninForm">
                <p>Welcome back</p>
                <h2>Sign in to your account</h2>
                <form>
                    <div className="form-group mb-2">
                        <label className="mb-1">
                            E-Mail
                        </label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                        />
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <button type="submit" className="SignUp__button">
                                Sign In
                    </button>
                        </div>
                        <div class="d-flex flex-column mt-4 form-footer col-6 ">
                            <p class="m-auto"><a href="{% url 'signup' %}">Create an account</a></p>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignInForm;