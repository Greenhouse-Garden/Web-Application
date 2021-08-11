import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./style/CardInfo.css"
import { BsPencil } from "react-icons/bs"


class CardInfo extends Component {

    

    render() {
        return (
            <React.Fragment>
                <div className="CardInfo m-3 p-3">
                    <p></p>
                    <br></br>
                    
                    <button type="button" className="CardInfo__button" >
                        <div className="row">
                            <div className="col-md-4">
                                <p>Edit</p>
                            </div>
                            <div className="col-md">
                                <BsPencil />
                            </div>
                        </div>
                    </button>
                    
                </div>
            </React.Fragment>
        );
    }
}

export default CardInfo;