import React, { useState } from "react";
import Btn from "../../../components/button/Btn";
import "../../Approval/RegDetails/regdetails.css";
import { useLocation } from "react-router-dom";

export default function Docregs() {
  let location = useLocation();
  let [ddata, setData] = useState(location.state.ddata);

  console.log(ddata);

  return (
    <table className="pcont1">
      <tr>
        <h1 className="hdr11">Doctor Registration Details</h1>
      </tr>
      <div className="pbody2">
        {/* <tr className="imgcontact2">
          <td className="dimg1">
          </td>
        </tr> */}

        <tr className="docdetails">
          <td className="dimg1">
          </td>

          <tr className="genrl2">
            <p className="m-b">DR.name: {ddata.details.doctorName}</p>
            <hr className="m-h"></hr>

            <p className="m-b">Dr.Walletaddress: {ddata.address}</p>
            <hr className="m-h"></hr>

            <p className="m-b">Qualification: {ddata.details.qualification}</p>
            <hr className="m-h"></hr>

            <p className="m-b">DOB: {ddata.details.dob}</p>
            <hr className="m-h"></hr>

            <p className="m-b">Hospital-Wallet: {ddata.phone}</p>
            <hr className="m-h"></hr>

            <p className="m-b">Department:{ddata.details.department}</p>
            <hr className="m-h"></hr>

            <p className="m-b">phone number: {ddata.details.phoneNumber}</p>
          </tr>
        </tr>

        <td className="bts-m">
          <Btn text={"Approve"}
            // onclick=""
            style={{

              width: "150px",
              marginRight: "10%",
              fontSize: "16px",
              textAlign: "center",
              padding: "10px 20px"
            }}
          />

          <Btn text={"Reject"}
            onclick=""
            style={{

              width: "150px",
              marginLeft: "10%",
              fontSize: "16px",
              textAlign: "center",
              padding: "10px 20px"
            }}
          />
        </td>

      </div>
    </table>
  );
}