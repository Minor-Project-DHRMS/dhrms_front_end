import React, { useEffect, useState } from "react";
import "./PatientDetails.css";
import Btn from "../../components/button/Btn";
import { findByLabelText } from "@testing-library/react";
import { useLocation, useNavigate } from "react-router-dom";

const pdata = {
  date: "01/01/22",
  DR: "Kiran P V",
  Department: "Cadiology",
  Hospital: "KIMMS Hubli, KA",
  purpose: "Annual Medical Check up",
  Prescription: "xyz",
  Remarks: "xyz",
  reports: [
    {
      placeholder: "Report 1",
      cid: "QmaNxbQNrJdLzzd8CKRutBjMZ6GXRjvuPepLuNSsfdeJRJ",
    },
    {
      placeholder: "Report 2",
      cid: "QmTn96ALgzSRnVPrf8vHrGBChtRyTjBwsMaZzefZfMtTqw",
    },
    {
      placeholder: "Report 3",
      cid: "QmaNxbQNrJdLzzd8CKRutBjMZ6GXRjvuPepLuNSsfdeJRJ",
    },
    {
      placeholder: "Report 4",
      cid: "QmTn96ALgzSRnVPrf8vHrGBChtRyTjBwsMaZzefZfMtTqw",
    },
    {
      placeholder: "Report 5",
      cid: "QmaNxbQNrJdLzzd8CKRutBjMZ6GXRjvuPepLuNSsfdeJRJ",
    },
    {
      placeholder: "Report 6",
      cid: "QmTn96ALgzSRnVPrf8vHrGBChtRyTjBwsMaZzefZfMtTqw",
    },
    {
      placeholder: "Report 7",
      cid: "QmaNxbQNrJdLzzd8CKRutBjMZ6GXRjvuPepLuNSsfdeJRJ",
    },
    {
      placeholder: "Report 6",
      cid: "QmTn96ALgzSRnVPrf8vHrGBChtRyTjBwsMaZzefZfMtTqw",
    },
    {
      placeholder: "Report 7",
      cid: "QmaNxbQNrJdLzzd8CKRutBjMZ6GXRjvuPepLuNSsfdeJRJ",
    },
    {
      placeholder: "Report 6",
      cid: "QmTn96ALgzSRnVPrf8vHrGBChtRyTjBwsMaZzefZfMtTqw",
    },
    {
      placeholder: "Report 7",
      cid: "QmaNxbQNrJdLzzd8CKRutBjMZ6GXRjvuPepLuNSsfdeJRJ",
    },
  ],
  scans: [
    {
      placeholder: "Scan 1",
      cid: "Qmd5CN8vRwy2TuXNgzBsruYFrcdUEcvjesx3Tagxz95v9y",
    },
    {
      placeholder: "Scan 1",
      cid: "QmUjro98J837RuqHNLe4NedspQ6PE4736FMvQSvZt1zGJ7",
    },
    {
      placeholder: "Scan 1",
      cid: "Qmd5CN8vRwy2TuXNgzBsruYFrcdUEcvjesx3Tagxz95v9y",
    },
    {
      placeholder: "Scan 1",
      cid: "QmUjro98J837RuqHNLe4NedspQ6PE4736FMvQSvZt1zGJ7",
    },
    {
      placeholder: "Scan 1",
      cid: "Qmd5CN8vRwy2TuXNgzBsruYFrcdUEcvjesx3Tagxz95v9y",
    },
    {
      placeholder: "Scan 1",
      cid: "Qmd5CN8vRwy2TuXNgzBsruYFrcdUEcvjesx3Tagxz95v9y",
    },
    {
      placeholder: "Scan 1",
      cid: "Qmd5CN8vRwy2TuXNgzBsruYFrcdUEcvjesx3Tagxz95v9y",
    },
  ],
};

export default function PatientDetails() {
  let navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(location.state.record);
  const [date, setDate] = useState(Date(data.recordDetails.timeStamp));

  console.log(data)
  console.log(date);

  return (
    <>
      <div className="outer1">
        <div id="pdetails">
          <div className="heading">
            <h2> Medical Report</h2>
          </div>
          <div className="flex-container">
            <div className="details">
              <div className="data m c">
                <p className="right-align">Date: {date}</p>
                <p className="right-align">Doctor Name : {data.doctorDetails.doctorName}</p>
                <p className="right-align">Department : {data.doctorDetails.doctorName.department}</p>
                <p className="right-align">Hospital : {data.doctorDetails.hosDetails.hospitalName}</p>
                <p className="right-align">Purpose of visit : {data.recordDetails.purposeVisit}</p>
              </div>
              <div className="prescipt m c">
                <p className="right-align">prescription</p>
                <br></br>
                <p className="right-align">{data.recordDetails.prescription}</p>
              </div>

              <div className="buttons m">
                <Btn
                  text={"Scans"}
                  style={{
                    width: "15%",
                    height: "40%",
                    fontSize: "16px",

                    marginRight: "15px",
                  }}
                  onClick={() => {
                    navigate("/ListScan", { state: { scans: data.recordDetails.scans } });
                    // console.log(cid)
                  }}
                />

                <Btn
                  text={"Reports"}
                  style={{
                    width: "15%",
                    height: "40%",
                    fontSize: "16px",

                    marginLeft: "15px",
                  }}
                  onClick={() => {
                    navigate("/ListReport", {
                      state: { reports: data.recordDetails.testReports },
                    });
                    // console.log(cid)
                  }}
                />
              </div>
            </div>
            <div className="remarks m c">
              <p className="right-align">remarks</p> <br></br>
              <p className="right-align">{data.recordDetails.description}</p>
            </div>
          </div>
          <div className="centerBtn">
            <Btn
              text={"Back"}
              style={{
                margin: "20px",
              }}
              onClick={() => {
                navigate(-1);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
