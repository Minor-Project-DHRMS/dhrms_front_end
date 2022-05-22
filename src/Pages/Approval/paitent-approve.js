import React, { useEffect, useState } from "react";
import Btn from "../../components/button/Btn";
import "../../Pages/Approval/approv.css";
import Txt from "../../components/TxtInput/TxtInput"
import "../../Pages/DoctorDash/DocDash.css";
import { useNavigate } from "react-router-dom";
import {getPatientApproveList} from "../../functions/Approve"
// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import { create } from "ipfs-http-client";

// const client = create("https://ipfs.infura.io:5001/api/v0");
const nums = [1, 2, 3, 4, 5, 6];


export default function Paitentsapprov() {
  let navigate = useNavigate();
  let [patdata, setData] = useState("");
  // var sendnext= {fetch(client).then()}

  async function getData(){
     getPatientApproveList().then((x)=>{
      setData(x);
      console.log(x);
     });
  }

  useEffect(async () => {

    await getData();
  }, [])

  return (
    <div className="total">
      <div className="MainHead1">
        <div className="head1">
          Paitent Approval
        </div>
      </div>
      <div className="body-patient">
        {Object.values(patdata).map((s, index) => {
          return (
            <div key={index}>
              <div className="plist">

                <p className="obj1"></p>

                <h3 className="nmage">
                  <p className="fsize">Name: &nbsp;{s.details.name} </p>
                  <p className="fsize">PID:&nbsp;{s.address}</p>
                </h3>
                <Btn text={"View"}
                  onClick={() => {
                    navigate("/approvePat", { state: { data: s } })
                  }}
                  style={{
                    // width: "100px",
                    // marginRight: "90px",
                    fontSize: "14px",
                    padding: "10px 20px"
                  }}
                />

              </div>
            </div>
          );
        })}

      </div>
    </div>

  )
}