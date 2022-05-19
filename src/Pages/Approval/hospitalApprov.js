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
    // fetch(`https://ipfs.infura.io/ipfs/QmbsBgfwYyyGeFUwdPFTEewTYDF2KoaKDyfbyxq9e84pwU`).
    //   then(r => r.text()).then((d) => {
    //     setData(JSON.parse(d));
    //   })
      getData();
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

                <p className="obj1"></p>
                <div className="subli11">
                  <h3 className="nmage"><p className="nm">{r.name}</p>
                    <p className="age">{r.phone}</p>
                  </h3>
                  <Btn text={"View"}
                    onClick={() => { navigate("/approveHos", { state: { hdata: r } }) }}
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