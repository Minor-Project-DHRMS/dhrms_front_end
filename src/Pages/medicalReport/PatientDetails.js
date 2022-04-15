import React from "react";
import "./PatientDetails.css"
import Btn from "../../components/button/Btn";
import { findByLabelText } from "@testing-library/react";



export default function PatientDetails() {
    return (
        <>
            <div className="outer1">
                <div id="pdetails">
                    <div className="heading"><h2> Medical Report</h2></div>
                    <div className="flex-container">
                        <div className="details">
                            <div className="data m c">
                                <p class="right-align">Date: 01/01/22</p>
                                <p class="right-align">Dr. Kirav P V</p>
                                <p class="right-align">Department: cardiology</p>
                                <p class="right-align">Hospital: KIMMS Hubli, KA</p>
                                <p class="right-align">Purpose of visit: Annual Medical Check up</p>
                            </div>
                            <div className="prescipt m c">
                                <p class="right-align">prescription</p>
                            </div>

                            <div className="buttons m">
                                <Btn text={"Scans"} style={{
                                    
                                    width: "15%",
                                    height: "40%",
                                    fontSize: "16px",
                                    

                                    marginRight: "15px",
                                }} />
                                <Btn text={"Reports"} style={{
                                    width: "15%",
                                    height: "40%",
                                    fontSize: "16px",

                                    marginLeft: "15px",
                                }} />
                            </div>
                        </div>
                        <div className="remarks m c">
                        <p class="right-align">remarks</p>
                        </div>
                    </div>
                    <div className="centerBtn">
                        <Btn text={"Back"} style={{
                            margin: "20px",
                        }} />
                    </div>
                </div>
            </div>
        </>
    );
}





