import React from "react";
import Btn from "../../../components/button/Btn";
import "../../Approval/RegDetails/regdetails.css";

export default function docregs(){
    return(
<table className="pcont1">
    <tr><h1 className="hdr11">Doctor Registration Details</h1></tr>
    <div  className="pbody2">
<tr className="imgcontact2">
    <td className="dimg1">
</td></tr>
<tr className="docdetails">
<tr className="genrl2">
<p>DR.name:-</p>
<p>Dr.Walletaddress:-</p>
<p>qualification:-</p>
<p>speciality:-</p>
<p>.....:-</p>
</tr>
<tr className="contacts2">
<p>phone number:-</p>
<p>emergency contacts:-</p>
<p>etc....:-</p>
</tr>
</tr>
<Btn   text={"Approve"}
                        onclick=""
                        style={{
                          height:"5vh",                 
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