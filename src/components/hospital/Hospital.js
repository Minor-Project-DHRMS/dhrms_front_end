import React, { useState } from "react";
import Btn from "../hospital/button/Btn";
import mainLogo from "../hospital/logo192.png";
import "./hospital.css";

const Hospital = () => {
  const [hospitalName, setHospitalName] = useState("KIMMS, HUBLI, KA");
  const [phoneNo, setPhoneNo] = useState("213123");
  const [HID, setHID] = useState("0x123434234234234324234231231231231223424");
  const [patientList, setPatientList] = useState([]);

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1];
  var log = () => {
    console.log("hello");
  };
  return (
    <div className="hospital">
      <div className="bio-hos">
        <p>Office Name: {hospitalName}</p>
        <p>Phone No: {phoneNo}</p>
      </div>
      <div className="list">
        <div className="bio-hos">
          <p>Patients</p>
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
                  <Btn text={"View Report"} func={log} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="bio-hos">
          <p>Doctors</p>
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
