import React, { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";

import Btn from "../../components/button/Btn";
import "./patient.css";
import mainLogo from "../patient/logo192.png";
import { Navigate, useLocation } from "react-router-dom";
import { QRCodeGen } from "../../components/QRPage/QRCodeGen";
import { useNavigate } from "react-router-dom";
import { dateFormate } from "../../services/DateFormate";

const Prescriptions = () => {
  let navigate = useNavigate();
  const location = useLocation();

  console.log(location.state.record);

  const [data, setData] = useState(location.state.record);
  return (
    <div className="patient">
      <div className="bio_pat">
        <div>My Prescriptions</div>
      </div>

      {/* <div className="pt_align_ht">
        <div className="bio-hos bio-user  bio-pat">
          <div className="list-items">{data.recordDetails.prescription}</div>
        </div>
      </div> */}
      <div className="bio-hos bio-user bio-pres">
        <div className="list-items">
          {data.map((record, index) => {
            return (
              <div key={index} className="item item-size">
                <div className="align-vh">
                  <div className="pres_font">
                    Date : {dateFormate(record.recordDetails.timeStamp)}
                  </div>
                  <hr />
                  <div className="pres_font">{record.recordDetails.prescription}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Prescriptions;
