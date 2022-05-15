import React,{useState} from "react";
import Btn from "../../../components/button/Btn";
import "../../Approval/RegDetails/regdetails.css";
import { useLocation } from "react-router-dom";

export default function Docregs(){
let location = useLocation();
let [ddata,setData]=useState(location.state.ddata);

    return(
<table className="pcont1">
    <tr><h1 className="hdr11">Doctor Registration Details</h1></tr>
    <div  className="pbody2">
<tr className="imgcontact2">
    <td className="dimg1">
</td></tr>
<tr className="docdetails">
<tr className="genrl2">
<p>DR.name:-{ddata.name}</p>
<p>Dr.Walletaddress:-{ddata.phone}</p>
<p>Qualification:-{ddata.name}</p>
<p>DOB:-{ddata.dob}</p>
<p>Hospital-Wallet:-{ddata.phone}</p>
<p>Department:-{ddata.name}</p>
</tr>
<tr className="contacts2">
<p>phone number:-{ddata.phone}</p>
</tr>
</tr>
<td><Btn   text={"Approve"}
                        onclick=""
                        style={{
                 
                      width: "150px",
                      marginLeft:"100px",
                      fontSize: "16px",
                      textAlign:"center",
                      padding: "10px 20px"
                        }}
                      /></td>
                      <td><Btn   text={"Reject"}
                        onclick=""
                        style={{
                 
                      width: "150px",
                      marginLeft:"38%",
                      fontSize: "16px",
                      textAlign:"center",
                      padding: "10px 20px"
                        }}
                      /></td>
    </div>
</table>
    );
}