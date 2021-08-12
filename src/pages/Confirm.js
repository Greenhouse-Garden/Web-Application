import React from "react"
import Subtotal from "../components/Subtotal"
import CardInfo from "../components/CardInfo"
import "./style/Confirm.css"

const Confirm = (props) => {

    
    return (
        <React.Fragment>
            <div className="Confirm__container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="Cart col-md-6">
                        <div className="row">
                            <div className="col-md-11">
                                <h2 className="m-3">Confirm Information</h2>
                                <div className="row">
                                    <div className="col-md-5">
                                        <CardInfo
                                            cardInfo={"Av. Montes Americanos #9501, Col. Sector 35, C.P. 31216, Chihuahua, Chih., México."}
                                        ></CardInfo>
                                        <CardInfo
                                            cardInfo={"0451 4589 9833 6448"}
                                            exp={"02/25"}
                                            
                                        ></CardInfo>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <Subtotal
                            ammount={"2"}
                            total={"5"}
                            boton={"Complete purchase"}
                            link={`/catalogue/`}
                        ></Subtotal>
                    </div>

                </div>
            </div>


        </React.Fragment>
    );
}

export default Confirm;