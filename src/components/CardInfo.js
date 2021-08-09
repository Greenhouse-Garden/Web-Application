import React from "react"
import { Link } from "react-router-dom"
import "./style/CardInfo.css"
import { BsPencil } from "react-icons/bs"

const CardInfo = (props) => {
    return (
        <React.Fragment>
            <div className="CardInfo m-3 p-3">
                <p>{props.cardInfo}</p>
                <br></br>
                <button type="button" className="CardInfo__button" data-toggle="modal" data-target="cardModal">

                    <div className="row">
                        <div className="col-md-4">
                            <p>Edit</p>
                        </div>
                        <div className="col-md">
                            <BsPencil/>
                        </div>
                    </div>

                </button>
                <div class="modal fade" id="cardModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                ...
      </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CardInfo;