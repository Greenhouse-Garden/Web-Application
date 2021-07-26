import React, { Component } from "react"
import './style/NewProductForm.css'

class NewProductForm extends Component {
    render() {
        return (
            <div className="SignUpForm">
                <h2>Register a new product</h2>
                <form>
                    <div className="form-group mb-2">
                        <label className="mb-1">
                            Product name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">
                            Product Description
                        </label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">
                            Price
                        </label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">
                            Quantity
                        </label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">
                            Image URL
                        </label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <button type="submit" className="SignUp__button">
                                Add product
                        </button>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}

export default NewProductForm;