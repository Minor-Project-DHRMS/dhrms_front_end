import React from "react";
import Btn from "../../../components/button/Btn";
import "../../Approval/RegDetails/regdetails.css";

export default function patientregs(){
    return(
<table className="pcont1">
    <tr><h1 className="hdr11">Patient Registration Details</h1></tr>
    <div  className="pbody11">
<tr className="imgcontact">
    <td className="pimg1">
</td>
<td className="genrl1">
<p>name:-</p>
<p>DOB:-</p>
<p>Gender:-</p>
<p>address:-</p>
<p>blood:-</p>
<p>height:-</p>
<p>weight:-</p>
</td>
<td className="contacts">
<p>phone number:-</p>
<p>emergency contacts:-</p>
<p>etc....:-</p>
</td>
</tr>
<tr className="disease">
<td className="disease1">
<h3 className="hdr2">Diseases/allergies</h3>
    <p>drug allergies</p>
    <p> Diseases....</p>
    <p> ....</p>
    </td>
    <td className="medhistry">
        <h3>MedicHistory</h3>
        <p>medical conditions</p>
        <p>operations</p>
        <p>medical history</p>
        <p>medication</p>
        <p>ETC...</p>
    </td>
    <td className="habistats">
        <h3>Habits</h3>
       <p>smoking</p>
       <p>caffine</p>
       <p>diet</p>
       <p>habits</p>
    </td>
</tr>
<Btn   text={"Approve"}
                        onclick=""
                        style={{
                 
                      width: "150px",
                      marginRight: "100px",
                      marginLeft:"42%",
                      fontSize: "16px",
                      textAlign:"center",
                      padding: "10px 0px"
                        }}
                      />
    </div>
</table>
    );
}