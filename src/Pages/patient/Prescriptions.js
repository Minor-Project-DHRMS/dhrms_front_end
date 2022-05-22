import React, { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";

import Btn from "../../components/button/Btn";
import "./patient.css";
import mainLogo from "../patient/logo192.png";
import { Navigate } from "react-router-dom";
import { QRCodeGen } from "../../components/QRPage/QRCodeGen";
import { useNavigate } from "react-router-dom";

const Prescriptions = ({ desc }) => {
  let navigate = useNavigate();

  ReactSession.setStoreType("sessionStorage");
  const currentAccount = ReactSession.get("currentAccount");

  return (
    <div className="patient">
      <div className="bio_pat">
        <div>My Prescriptions</div>
      </div>

      <div className="pt_align_ht">
        {/* <div>Hello</div>
        <div>Hello</div> */}
        <div className="bio-hos bio-user">
          <div className="list-items">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Prescriptions;
