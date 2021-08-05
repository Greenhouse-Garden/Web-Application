import React from "react"
import Badge from "../components/Badge"
import "./style/Catalogue.css"

const Catalogue=(props) =>{
    return(
        <React.Fragment>
            <div className="Catalogue__container">
                <div className="row">
                    <div className="col-md-3">
                        <Badge productName={"Tomato seeds"} image={"https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}></Badge>
                    </div>
                    <div className="col-md-3">
                        <Badge productName={"Tomato seeds"} image={"https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}></Badge>
                    </div>
                    <div className="col-md-3">
                        <Badge productName={"Tomato seeds"} image={"https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}></Badge>
                    </div>
                    <div className="col-md-3">
                        <Badge productName={"Tomato seeds"} image={"https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}></Badge>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <Badge productName={"Tomato seeds"} image={"https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}></Badge>
                    </div>
                    <div className="col-md-3">
                        <Badge productName={"Tomato seeds"} image={"https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}></Badge>
                    </div>
                    <div className="col-md-3">
                        <Badge productName={"Tomato seeds"} image={"https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}></Badge>
                    </div>
                    <div className="col-md-3">
                        <Badge productName={"Tomato seeds"} image={"https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}></Badge>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Catalogue;