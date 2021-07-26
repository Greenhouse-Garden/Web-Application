import React, { Component } from "react"
import './style/SignUpForm.css'

class SignUpForm extends Component {
    render() {
        return (
            <div className="SignUpForm">
                <p>Welcome</p>
                <h2>Create your account</h2>
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
                            Name
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
                    <div className="form-group mb-2">
                        <label className="mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                        />
                    </div>
                    <div class="row">
                    <div class="col-6">
                    <button type="submit" className="SignUp__button">
                            Sign Up
                    </button>
                    </div>
                    <div class="d-flex flex-column mt-4 form-footer col-6 ">
                        <p class="m-auto"><a href="{% url 'signup' %}">I have an account</a></p>
                    </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;