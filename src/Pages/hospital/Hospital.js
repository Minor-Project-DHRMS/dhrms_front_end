import React, { useState, useEffect } from "react";
import mainLogo from "../hospital/logo192.png";
import { ReactSession } from "react-client-session";
import "./hospital.css";
import Btn from "../../components/button/Btn";
import LoadingInd from "../../components/Loading/LoadingInd";
import ContractInstance from "../../services/ContractInstance";
import { useNavigate } from "react-router-dom";

const Hospital = () => {
  let navigate = useNavigate();
  const [currentAccount,setCurrentAccount] = useState(ReactSession.get("currentAccount"));
  const [patientList, setPatientList] = useState([]);
  ReactSession.setStoreType("sessionStorage");
  const [doctorList, setDoctorList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hospitalDetails, setHospitalDetails] = useState({
    hospitalName: "",
    phoneNo: "",
    HID: "",
  });

  const getDetails = async () => {
    try {
      const dhrmsContract = ContractInstance(window);
      
      const details = await dhrmsContract.getHospitalDetails(currentAccount);
      console.log(details);
      setHospitalDetails({
        hospitalName: details[0],
        phoneNo: details[1],
        GID: currentAccount,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1];
  var log = () => {
    console.log("hello");
  };
  return (
    <div className="hospital">
      <div className="bio-hos">
        <div>
          <div className="hos-head-font">
            Hospital Name: {hospitalDetails.hospitalName}
          </div>
          <div className="hos-head-font">
            Phone No: {hospitalDetails.phoneNo}
          </div>
        </div>
        <div className="qr-lbl" onClick={()=>navigate('QRCode',{state:{address:currentAccount}})}>QR Code</div>
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
