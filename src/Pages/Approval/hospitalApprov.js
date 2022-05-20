import React, { useEffect, useState } from "react";
import Btn from "../../components/button/Btn";
import "../../Pages/Approval/approv.css";
import Txt from "../../components/TxtInput/TxtInput"
import "../../Pages/DoctorDash/DocDash.css";
import { useNavigate } from "react-router-dom";
import {getHospitalApproveList} from "../../functions/Approve"

export default function Hospitalapprov() {
  let navigate = useNavigate();
  let [hospdata, setData] = useState("");

  async function getData(){
    getHospitalApproveList().then((x)=>{
      setData(x);
      console.log(x);
    });
  }

  useEffect( async () => {
      getData(hospdata);
  }, [])


  
  return (
    <div className="total">
      <div className="MainHead1">
        <div className="head1">
          Hospital Approval
        </div>
      </div>
      <div className="hospital-body">
        {Object.values(hospdata).map((r, index) => {
          return (
            <div key={index}>
              <div className="hosp-list">

                <img className="obj1" src={new URL(`https://ipfs.infura.io/ipfs/${r.details.photo}`)}>
                  {/* <img src={}></img> */}
                </img>
                <div className="subli11">
                  <h3 className="nmage"><p className="nm">Hospital Name: {r.details.hospitalName}</p>
                    <p className="age">Phone: {r.details.phoneNumber}</p>
                    <p className="age">HID: {r.address}</p>
                  </h3>
                  <Btn text={"View"}
                    onClick={() => { 
                      
                      navigate("/approveHos", { state: { hdata: r } }) }}
                    style={{
                      width: "150px",
                      marginRight: "90px",
                      fontSize: "14px",
                      padding: "10px 20px"
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </div>

  )
}