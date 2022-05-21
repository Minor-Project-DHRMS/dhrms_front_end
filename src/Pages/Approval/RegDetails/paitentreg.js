import React, { useState } from "react";
import Btn from "../../../components/button/Btn";
import "../../Approval/RegDetails/regdetails.css";
import { useLocation } from "react-router-dom";


export default function Patientregs() {
    const location = useLocation();
    const [data, setData] = useState(location.state.data);
    // const [data, setData] = useState("");


    console.log(data);
    return (
        <table className="pcont1">
            <tr><h1 className="hdr11">Patient Registration Details</h1></tr>
            <div className="pbody11">
                <tr className="imgcontact">
                    <td className="pimg1">
                    </td>
                    <td className="genrl1">
                        <p>Name:-{data.details.name}</p>
                        <p>DOB:-{data.details.DOB}</p>
                        <p>Gender:-{data.details.gender}</p>
                        <p>address:-{data.details.address}</p>
                        <p>blood:-{data.details.bloodGroup}</p>
                        <p>height:-{data.details.height}</p>
                        <p>weight:-{data.details.weight}</p>
                    </td>
                    <td className="contacts">
                        <p>phone:-{data.details.phoneNo}</p>
                        <p>emergency:-{data.details.emergencyPhoneNo}</p>
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
                <td>
                    <Btn text={"Approve"}
                        onclick=""
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
                        onclick=""
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