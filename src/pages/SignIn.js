import React from "react"
import SignInForm from "../components/SignInForm"
import "./style/SignIn.css"

const SignIn = (props) => {
    return (
        <React.Fragment>
        <div className="SignIn__container">
            <div  class="row">
                <div className="col-md-6">
                    <img class="" src={"https://images.pexels.com/photos/5529596/pexels-photo-5529596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} alt="" />
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div className="SignIn__form" class="col-md-5">
                            <SignInForm></SignInForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default SignIn;