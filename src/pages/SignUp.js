import React from "react"
import SignUpForm from "../components/SignUpForm"
import "./style/SignUp.css"

const SignUp = (props) => {
    return (
        <React.Fragment>
            <div className="SignUp__container">
                <div className="row">
                    <div className="SignUp__img" class="col-md-6">
                        <img class="" src={"https://images.pexels.com/photos/7125434/pexels-photo-7125434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} alt="" />
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-3"></div>
                            <div className="SignUp__form" class="col-md-5">
                                <SignUpForm></SignUpForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SignUp;