import React, { useState } from "react";
import Btn from "../../../components/button/Btn";
import "../../Approval/RegDetails/regdetails.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {approve,disApprove} from "../../../functions/Approve"

export default function Patientregs() {
    const location = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState(location.state.data);
    // const [data, setData] = useState("");


    console.log(data);
    return (
        <table className="pcont1">
            <tr><h1 className="hdr11">Patient Registration Details</h1></tr>
            <div className="pbody11">
                <tr className="imgcontact">
       
                    <img className="pimg1" src={new URL(`https://ipfs.infura.io/ipfs/${data.details.photo}`)}>
                    </img>


                    <td className="genrl1">
                        <p>Name: {data.details.name}</p>
                        <hr className="mb-5"></hr>

                        <p>DOB: {data.details.DOB}</p>
                        <hr className="mb-5"></hr>

                        <p>Gender: {data.details.gender}</p>
                        <hr className="mb-5"></hr>

                        <p>address: {data.details.address}</p>
                        <hr className="mb-5"></hr>

                        <p>Email: {data.details.email}</p>
                        <hr className="mb-5"></hr>

                        <p>blood: {data.details.bloodGroup}</p>
                        <hr className="mb-5"></hr>

                        <p>height: {data.details.height}</p>
                        <hr className="mb-5"></hr>

                        <p>weight: {data.details.weight}</p>
                        <hr className="mb-5"></hr>

                        <p>PID: {data.details.walletAddress}</p>
                        <hr className="mb-5"></hr>

                        <p>phone: {data.details.phoneNo}</p>
                        <hr className="mb-5"></hr>

                        <p>Emergency Person: {data.details.emergencyPerson}</p>
                        <hr className="mb-5"></hr>

                        <p>Emergency Contact: {data.details.emergencyPhoneNo}</p>



                    </td>
                </tr>




                {/* ---------------------------------- */}
                <tr className="disease">
                    <td className="disease1">
                        <h3 className="hdr2">Diseases/allergies</h3>
                        <br></br>
                        <div className="disall">

                            <b><u><p>Drug Allergies</p></u></b>
                            {Object.values(data.details.drugAllergies).map((r) => {
                                return (<p>{r}</p>);
                            })}

                            <br></br>
                            <b><u><p>Other Illness</p></u></b>

                            {Object.values(data.details.otherIllness).map((r) => {
                                return (<p>{r}</p>);
                            })}

                            <br></br>
                            <b><u><p>Other Medical Illness</p></u></b>

                            {Object.values(data.details.otherMedicalIllness).map((r) => {
                                return (<p>{r}</p>);
                            })}


                        </div>
                    </td>
                    <td className="medhistry">
                        <h3>MedicHistory</h3>

                        <div className="disall">

                            <br></br>
                            <b><u><p>Operations</p></u></b>
                            {Object.values(data.details.operations).map((r) => {
                                return (<p>{r}</p>);
                            })}

                            <br></br>
                            <b><u><p>Current Medications</p></u></b>
                            {Object.values(data.details.currentMedications).map((r) => {
                                return (<p>{r}</p>);
                            })}



                        </div>
                    </td>
                    <td className="habistats">
                        <h3>Habits</h3>
                        <br></br>
                        <div className="disall">
                            <b><u><p>Unhealthy Habits</p></u></b>
                            {Object.values(data.details.unhealthyHabits).map((r) => {
                                return (<p>{r}</p>);
                            })}

                            <br></br>
                            <b><u><p>Caffeine Consumption</p></u></b>
                            {data.details.caffeineConsumption}

                            <br></br> <br></br>
                            <b><u><p>Smoking Per Day</p></u></b>
                            {data.details.smokingPerDay}

                        </div>
                    </td>
                </tr>

                <td className="pbtns">
                    <Btn text={"Approve"}
                        
                        onClick={async ()=>{
                            await approve(data.address).then(()=>{
                              navigate(-1)
                            });
                          }}    

                        style={{

                            width: "150px",
                            marginRight: "120px",
                            // marginLeft: "42%",
                            fontSize: "16px",
                            textAlign: "center",
                            padding: "10px 0px"
                        }}
                    />
    
                    <Btn text={"Reject"}
                        
                        onClick={async ()=>{
                            await disApprove(data.address).then(()=>{
                              navigate(-1)
                            });
                          }}

                        style={{

                            width: "150px",
                            marginLeft: "120px",
                            // marginLeft: "42%",
                            fontSize: "16px",
                            textAlign: "center",
                            padding: "10px 0px"
                        }}
                    />
                </td>
            </div>
        </table>
    );
}