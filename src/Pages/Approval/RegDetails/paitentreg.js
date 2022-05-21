import React, { useState } from "react";
import Btn from "../../../components/button/Btn";
import "../../Approval/RegDetails/regdetails.css";
import { useLocation } from "react-router-dom";
import {approve,disApprove} from "../../../functions/Approve"
import { useNavigate } from "react-router-dom";


export default function Patientregs() {
    const navigate=useNavigate();
    const location = useLocation();
    const [data, setData] = useState(location.state.data);


    return (
        <table className="pcont1">
            <tr><h1 className="hdr11">Patient Registration Details</h1></tr>
            <div className="pbody11">
                <tr className="imgcontact">
                    <td className="pimg1">
                    </td>
                    <td className="genrl1">
                        <p>Name:-{data.name}</p>
                        <p>DOB:-{data.dob}</p>
                        <p>Gender:-{data.gender}</p>
                        <p>address:-{data.addr}</p>
                        <p>blood:-{data.blood}</p>
                        <p>height:-{data.height}</p>
                        <p>weight:-{data.weight}</p>
                    </td>
                    <td className="contacts">
                        <p>phone:-{data.phone}</p>
                        <p>emergency:-{data.emergency}</p>
                    </td>
                </tr>
                <tr className="disease">
                    <td className="disease1">
                        <h3 className="hdr2">Diseases/allergies</h3>
                        <br></br>
                        <div className="disall">
                            {Object.values(data.disease).map((r) => {
                                return (<p>{r}</p>);
                            })}
                        </div>
                    </td>
                    <td className="medhistry">
                        <h3>MedicHistory</h3>
                        <br></br>
                        <div className="disall">
                            {Object.values(data.history).map((r) => {
                                return (<p>{r}</p>);
                            })}
                        </div>
                    </td>
                    <td className="habistats">
                        <h3>Habits</h3>
                        <br></br>
                        <div className="disall">
                            {Object.values(data.habit).map((r) => {
                                return (<p>{r}</p>);
                            })}
                        </div>
                    </td>
                </tr>
                <td>
                    <Btn text={"Approve"}
                        onClick={async ()=>{
                            await approve(data.address).then(async ()=>{
                              navigate("/paitentsapprovlist")
                            });
                        }}

                        style={{

                            width: "150px",
                            marginRight: "100px",
                            marginLeft: "42%",
                            fontSize: "16px",
                            textAlign: "center",
                            padding: "10px 0px"
                        }}
                    /></td>
                <td>
                    <Btn text={"Reject"}
                        onClick={async ()=>{
                            await disApprove(data.address).then(async ()=>{
                              navigate("/paitentsapprovlist")
                            });
                        }}

                        style={{

                            width: "150px",
                            marginRight: "100px",
                            marginLeft: "42%",
                            fontSize: "16px",
                            textAlign: "center",
                            padding: "10px 0px"
                        }}
                    /></td>
            </div>
        </table>
    );
}