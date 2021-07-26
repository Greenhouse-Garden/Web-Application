import React from "react"
import NewProductForm from "../components/NewProductForm"
import "./style/NewProduct.css"

const NewProduct = (props) => {
    return (
        <React.Fragment>
            <div className="SignUp" class="row">
                <div className="SignUp__img" class="col-md-6">
                    
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div className="SignUp__form" class="col-md-5">
                            <NewProductForm></NewProductForm>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default NewProduct;