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
    // fetch(`https://ipfs.infura.io/ipfs/QmbsBgfwYyyGeFUwdPFTEewTYDF2KoaKDyfbyxq9e84pwU`).
    //   then(r => r.text()).
    //   then((d) => {
    //     setData(JSON.parse(d));
    //   })

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
              <div className="lis11">

                <p className="obj1"></p>

                <h3 className="nmage"><p className="nm">&nbsp;{s.name} </p>
                  <p className="age">{s.gender} &nbsp;&nbsp;Age:&nbsp;&nbsp;{s.dob}</p>
                </h3>
                <Btn text={"View"}
                  onClick={() => {
                    navigate("/ApprovePat", { state: { data: s } })
                  }}
                  style={{
                    width: "100px",
                    marginRight: "90px",
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