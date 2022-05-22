import React, { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";

import Btn from "../../components/button/Btn";
import "./patient.css";
import mainLogo from "../patient/logo192.png";
import { Navigate } from "react-router-dom";
import { QRCodeGen } from "../../components/QRPage/QRCodeGen";
import { useNavigate } from "react-router-dom";

const MoreDetails = () => {
  let navigate = useNavigate();

  ReactSession.setStoreType("sessionStorage");
  const currentAccount = ReactSession.get("currentAccount");

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1];
  const [state, setState] = useState({
    name: "Nandeesh B K",
    DOB: "12/23/23",
    gender: "Male",
    height: "12.12",
    weight: "45",
    bloodGroup: "A+",
    phoneNo: "1234567891",
    email: "hello@sdmcet",
    drugAllergies: ["asdsd", "asd", "asdAS", "asAS"],
    otherIllness: ["ASDSD", "ASDSD", "ASDASD"],
    operations: [],
    currentMedications: [],
    otherMedicalIllness: ["asd", "asd", "asd", "asd"],
    address: "0X2342342342",
    emergencyPerson: "",
    emergencyPhoneNo: "",
    unhealthyHabits: [],
    dietType: [],
    caffeineConsumption: "",
    smokingPerDay: "",
  });

  const [journalList, setJournalList] = useState([]);
  const [journal, setJournal] = useState({
    treatment: "Annual medical Check Up",
    doctorName: "Dr. Raja",
    date: "Jan 28,2303",
  });
  const [doctor, setDoctor] = useState({
    doctorName: "Sahil",
    qualification: "Cardiologist, MBBS, MD",
  });
  const [hospital, setHospital] = useState({
    hospitalName: "KIMMS, HUBLI, KA",
    phoneNo: "2121212121",
  });


  return (
    <div className="patient">
      <div className="bio_pat">
        <div>More Details</div>
      </div>

      <div className="pt_align_ht">
        {/* <div>Hello</div>
        <div>Hello</div> */}
      </div>
      <Btn
        text={"Scan QR Code"}
        func={()=>navigate("/qrscan")}
        style={{
          padding: "10px 20px",
          width: "10%",
          marginTop: "15px",
          fontSize: "12px",
        }}
      />
    </div>
  );
};

export default MoreDetails;
