import React, { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";

import Btn from "../../components/button/Btn";
import Login from "../login/Login";
import "./government.css";
import { Navigate, useNavigate } from "react-router-dom";

const Government = () => {
  let navigate = useNavigate();

  const [govDetails, setGovDetails] = useState({
    officeName: "Dharwad",
    phoneNo: "213123",
    GID: "0x123434234234234324234231231231231223424",
  });

  var log = () => {
    console.log("hello");
    console.log(ReactSession.get("account"));
  };
  // , { replace: true }
  // if (ReactSession.get("account") == undefined) {
  //   return <Navigate to="/" replace />;
  // } else {
  return (
    <div className="government">
      <div className="bio-gov">
        <p>Office Name: {govDetails.officeName}</p>
        <p>Phone No: {govDetails.phoneNo}</p>
        <p>GID: {govDetails.GID}</p>
      </div>
      <div className="govdash_align_ht">
        <div className="government">
          <Btn
            text={"Register new Patient"}
            func={log}
            style={{
              width: "250px",
              marginTop: "20px",
              fontSize: "18px",
            }}
          />
          <Btn
            text={"Register new Doctor"}
            func={() => navigate("/docreg")}
            style={{
              width: "250px",
              marginTop: "20px",
              fontSize: "18px",
            }}
          />
          <Btn
            text={"Register new Hospital"}
            func={() => navigate("/hosreg")}
            style={{
              width: "250px",
              marginTop: "20px",
              fontSize: "18px",
            }}
          />
          <Btn
            text={"Register new Government"}
            func={() => navigate("/govreg")}
            style={{
              width: "250px",
              marginTop: "20px",
              fontSize: "18px",
            }}
          />
        </div>
        <div className="government">
          <Btn
            text={"Approve new Patients"}
            func={log}
            style={{
              width: "250px",
              marginTop: "20px",
              fontSize: "18px",
            }}
          />
          <Btn
            text={"Approve new Doctor"}
            func={() => navigate("/docreg")}
            style={{
              width: "250px",
              marginTop: "20px",
              fontSize: "18px",
            }}
          />
          <Btn
            text={"Approve new Hospital"}
            func={() => navigate("/hosreg")}
            style={{
              width: "250px",
              marginTop: "20px",
              fontSize: "18px",
            }}
          />
          <Btn
            text={"Approve new Government"}
            func={() => navigate("/govreg")}
            style={{
              width: "250px",
              marginTop: "20px",
              fontSize: "18px",
            }}
          />
        </div>
      </div>
    </div>
  );
  // }
};

export default Government;
