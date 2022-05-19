import React, { useState, useEffect } from "react";
import Btn from "../../components/button/Btn";
import "../../Pages/Approval/approv.css";
import Txt from "../../components/TxtInput/TxtInput";
import "../../Pages/DoctorDash/DocDash.css";
import { useNavigate } from "react-router-dom";
import {getDoctorApproveList} from "../../functions/Approve";



export default function Docapprov() {

  let navigate = useNavigate();
  let [docdata, setData] = useState("");

  useEffect(async () => {
    // fetch(`https://ipfs.infura.io/ipfs/QmbsBgfwYyyGeFUwdPFTEewTYDF2KoaKDyfbyxq9e84pwU`).then(r => r.text()).then((a) => {
    //   setData(JSON.parse(a));
    // });

    await getDoctorApproveList().then(x=>{
      setData(x);
      console.log(x);
    });


  }, []);

  return (
    <div className="total">
      <div className="MainHead1">
        <div className="head1">Doctor Approval</div>
      </div>
      <div className="bodyList">
        {/* <div className="b1"> */}
        {Object.values(docdata).map((s, index) => {
          return (
            <div key={index}>
              <div className="listing-approve {
">
                <p className="obj1"></p>
                <div className="sublist">
                  <h3 className="nmage">
                    <p className="nm">Doctor Name: {s.details.doctorName}</p>
                    <p className="age">Doctor ID: {s.address}</p>
                  </h3>
                  <Btn
                    text={"View"}
                    onClick={() => {
                      navigate("/approveDoc", { state: { ddata: s } })
                    }}
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
        {/* </div> */}
      </div>
    </div>
  );
}
