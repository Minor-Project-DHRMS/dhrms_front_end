import React, { useState } from "react";
import Btn from "../../../components/button/Btn";
import "../../Approval/RegDetails/regdetails.css";
import { useLocation } from "react-router-dom";
import {approve,disApprove} from "../../../functions/Approve"
import { useNavigate } from "react-router-dom";
// import {setTransition} from 

export default function Hospregdet() {
  const location = useLocation();
  const [hdata, setData] = useState(location.state.hdata);
  const navigate=useNavigate();

  console.log(hdata);

  return (<table className="hcont1">
    <tr colspan="10"><h1 className="hosphead">Hospital Registration Details</h1></tr>
    <div className="details2">
      <p className="hname">Hospital Name: {hdata.details.hospitalName}</p>
      <div><p className="hcontacts">
        <p>phone: {hdata.details.phoneNumber}</p>
      </p>
      </div>
      <div>
        <p className="walletaddr1">
          Wallet address: {hdata.address}
        </p>
      </div>
      <div>
        <td>
          <Btn text={"Approve"}
            onClick={async ()=>{
              await approve(hdata.address).then(()=>{
                navigate("/hospApprovlist")
              });
              
            }}
            style={{
              width: "130px",
              marginLeft: "0px",
              fontSize: "16px",
              textAlign: "center",
              padding: "10px 0px"
            }}
          /></td>

        <td>
          <Btn text={"Reject"}
            onClick={async ()=>{
              await disApprove(hdata.address).then(async ()=>{
                navigate("/hospApprovlist")
              });
              
            }}

            style={{
              width: "130px",
              marginLeft: "0px",
              fontSize: "16px",
              textAlign: "center",
              padding: "10px 0px"
            }}
          /></td>
      </div>
    </div>

  </table>);
}