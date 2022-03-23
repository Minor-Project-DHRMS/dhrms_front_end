import React, { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";

import Btn from "../../components/button/Btn";
import Login from "../login/Login";
import "./government.css";
import { Navigate } from "react-router-dom";

const Government = () => {
  const [officeName, setOfficeName] = useState("Dharwad");
  const [phoneNo, setPhoneNo] = useState("213123");
  const [GID, setGID] = useState("0x123434234234234324234231231231231223424");
  var log = () => {
    console.log("hello");
    console.log(ReactSession.get("account"));
  };

  // if (ReactSession.get("account") == undefined) {
  //   return <Navigate to="/" replace />;
  // } else {
  return (
    <div className="government">
      <div className="bio-gov">
        <p>Office Name: {officeName}</p>
        <p>Phone No: {phoneNo}</p>
        <p>GID: {GID}</p>
      </div>
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
        func={log}
        style={{
          width: "250px",
          marginTop: "20px",
          fontSize: "18px",
        }}
      />
      <Btn
        text={"Register new Hospital"}
        func={log}
        style={{
          width: "250px",
          marginTop: "20px",
          fontSize: "18px",
        }}
      />
      <Btn
        text={"Register new Government"}
        func={log}
        style={{
          width: "250px",
          marginTop: "20px",
          fontSize: "18px",
        }}
      />
    </div>
  );
  // }
};

export default Government;
