import React from "react";
import Btn from "../../../components/button/Btn";
import "../../Approval/RegDetails/regdetails.css";

export default function patientregs(){
    return(
<div className="pcont1">
    <h1 className="hdr1">Patient Registration Details</h1>
    <div className="pbody1">
<div className="pimg1">
    images
</div>
<div className="contacts">
    phone number
    emergency contacts
    etc....
</div>
<div className="details1">
<div className="genrl1">
    name:-
DOB:-
Gender:-
address:-
blood:-
height:-
weight:-
</div>
<div className="disease">
    <h1 className="hdr2">Diseases/allergies</h1>
    <p className="disease1">
        drug allergies
        Diseases....
        ....
    </p>
    <p className="medhistry">
        medical conditions
        operations
        medical history
        medication
        ETC...
    </p>
    <p className="habistats">
        smoking
        caffine
        diet
        habits
    </p>
</div>
        </div>
        <Btn   text={"Approv"}
                        onclick=""
                        style={{
                          height:"5vh",                 
                      width: "150px",
                      marginRight: "90px",
                      fontSize: "14px",
                      padding: "10px 20px"
                        }}
                      />
    </div>
</div>
    );
}