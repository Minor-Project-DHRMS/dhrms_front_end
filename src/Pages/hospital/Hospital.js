import React, { useState, useEffect } from "react";
import mainLogo from "../hospital/pat1.png";
import "./hospital.css";
import Btn from "../../components/button/Btn";
import LoadingInd from "../../components/Loading/LoadingInd";
import ContractInstance from "../../services/ContractInstance";
import { useNavigate } from "react-router-dom";
import { getAccountAddress } from "../../services/AccountDetails";
import client from "../../services/FileUpload";

import {
  getHospitalDetails,
  getHospitalDoctorList,
  getHospitalPatientList,
  getUploadQueue,
  reportUploaded,
} from "../../functions/Dhrms";
import { calculateAge } from "../../services/CalculateAge";
import ViewReport from "../viewReport/viewReport";

const Hospital = () => {
  let navigate = useNavigate();
  const [patientList, setPatientList] = useState([]);
  const [currentAccount, setCurrentAccount] = useState(getAccountAddress());
  const [doctorList, setDoctorList] = useState([]);
  const [recordList, setRecordList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hospitalDetails, setHospitalDetails] = useState({
    hospitalName: "",
    phoneNo: "",
    HID: "",
  });

  const getDetails = async () => {
    try {
      const currentAccount = getAccountAddress();
      const details = await getHospitalDetails(currentAccount);
      setHospitalDetails({
        hospitalName: details[0],
        phoneNo: details[1],
        HID: currentAccount,
      });
      const docList = await getHospitalDoctorList(currentAccount);
      console.log(docList);
      setDoctorList(docList);
      const patList = await getHospitalPatientList(currentAccount);
      setPatientList(patList);
      console.log(patList);
      const uploadList = await getUploadQueue();
      console.log(uploadList);
      setRecordList(uploadList);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);

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
        <div
          className="qr-lbl"
          onClick={() =>
            navigate("/QRCode", { state: { address: currentAccount } })
          }
        >
          QR Code
        </div>
      </div>
      <div className="list">
        <div className="align-vh">
          <div className="bio-hos bio-user bio-pat">
            <div className="hos-head-font">Patients</div>
            <div className="list-items">
              {patientList.map((patient, index) => {
                return (
                  <div key={index} className="item">
                    {/* <img src={new URL(new URL(`https://ipfs.infura.io/ipfs/${patient.photo}`))} alt="Avatar" className="avatar" /> */}
                    <img src={mainLogo} alt="Avatar" className="avatar" />
                    <div className="item_details">
                      <div>{patient.name}</div>
                      <div className="div-align">
                        <div className="font-field">{patient.gender}</div>
                        <div className="font-field">
                          Age : {calculateAge(patient.DOB)}
                        </div>
                      </div>
                    </div>
                    <Btn
                      text={"View Details"}
                      func={() =>
                        navigate("/viewPatDetails", {
                          state: { address: patient.walletAddress },
                        })
                      }
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
          <div className="bio-hos bio-user">
            <div className="hos-head-font">Doctors</div>
            <div className="list-items">
              {doctorList.map((doctor, index) => {
                return (
                  <div key={index} className="item">
                    <img src={new URL(doctor.photo)} alt="Avatar" className="avatar" />
                    <div className="item_details">
                      <div>{doctor.doctorName} </div>
                      <div className="div-align">
                        <div className="font-field">
                          {doctor.department}, {doctor.qualification}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bio-hos bio-report">
          <div className="hos-head-font">Patient Reports</div>
          <div className="list-items">
            {recordList.map((record, index) => {
              return (
                <div key={index} className="item">
                  <div className="item_details">
                    <div>Name : {record.patientDetails.name}</div>
                    <div className="div-align">
                      <div className="font-field">
                        PurposeVisit : {record.recordDetails.purposeVisit}
                      </div>
                    </div>
                  </div>
                  <Btn
                    text={"View Report"}
                    func={() =>
                      navigate("/medicalReportview", {
                        state: { record: record },
                      })
                    }
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
      </div>
    </div>
  );
};

export default Hospital;
