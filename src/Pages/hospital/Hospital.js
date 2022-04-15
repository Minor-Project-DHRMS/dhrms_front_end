import React, { useState } from "react";
import mainLogo from "../hospital/logo192.png";
import "./hospital.css";
import Btn from "../../components/button/Btn";

const Hospital = () => {
  const [patientList, setPatientList] = useState([]);
  const [doctorList, setDoctorList] = useState([]);
  const [hospitalDetails, setHospitalDetails] = useState({
    hospitalName: "KIMMS, HUBLI, KA",
    phoneNo: "213123",
    HID: "0x123434234234234324234231231231231223424",
  });

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1];
  var log = () => {
    console.log("hello");
  };
  return (
    <div className="hospital">
      <div className="bio-hos">
        <div className="hos-head-font">
          Office Name: {hospitalDetails.hospitalName}
        </div>
        <div className="hos-head-font">Phone No: {hospitalDetails.phoneNo}</div>
      </div>
      <div className="list">
        <div className="bio-hos">
          <div className="hos-head-font">Patients</div>
          <div className="list-items">
            {nums.map((patient, index) => {
              return (
                <div key={index} className="item">
                  <img src={mainLogo} alt="Avatar" className="avatar" />
                  <div className="item_details">
                    <div>Sahil Ljhjhjhjhj Naikwadi</div>
                    <div className="div-align">
                      <div className="font-field">Male</div>
                      <div className="font-field">Age : 20</div>
                    </div>
                  </div>
                  <Btn
                    text={"View Report"}
                    func={log}
                    style={{
                      padding: "10px 15px",
                      width: "100px",
                      fontSize: "12px",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="bio-hos">
          <div className="hos-head-font">Doctors</div>
          <div className="list-items">
            {nums.map((patient, index) => {
              return (
                <div key={index} className="item">
                  <img src={mainLogo} alt="Avatar" className="avatar" />
                  <div className="item_details">
                    <div>Dr. Sahil Ljhjhjhjhj Naikwadi</div>
                    <div className="div-align">
                      <div className="font-field">Cardiologist, MBBS, MD</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
