import React from "react"
import SignInForm from "../components/SignInForm"
import "./style/SignIn.css"

const SignIn = (props) => {
    return (
        <React.Fragment>
            <div className="SignIn">
                <div className="SignIn__img">
                    <img src={"https://images.pexels.com/photos/5529596/pexels-photo-5529596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} alt="" />
                    
                </div>
                <SignInForm></SignInForm>
            </div>
        </React.Fragment>
    );
}

export default SignIn;