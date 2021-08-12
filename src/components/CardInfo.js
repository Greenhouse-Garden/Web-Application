import React from "react"
import "./style/CardInfo.css"
import { BsPencil } from "react-icons/bs"


const CardInfo = (props) =>{


        return (
            <React.Fragment>
                <div className="CardInfo m-3 p-3">
                    <p></p>
                    <br></br>
                    <p>{props.cardInfo}</p>
                    <p>{props.exp}</p>
                    <p>{props.code}</p>
                    <a href="/update">

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
                    </a>
                    
                </div>
            </React.Fragment>
        );
    }


export default CardInfo;