import React, { useEffect, useState } from "react";
import "./PatientDetailsView.css";
import Btn from "../../components/button/Btn";
import { findByLabelText } from "@testing-library/react";
import { useLocation, useNavigate } from "react-router-dom";
import { reportUploaded } from "../../functions/Dhrms";
import client from "../../services/FileUpload";

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

export default function PatientDetailsView() {
  let navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(location.state.record);

  console.log(data);
  // useEffect(()=>{
  //     setData(location.state.data);
  // },[])

  return (
    <>
      <div className="outer1">
        <div id="pdetails">
          <div className="heading">
            <h2> Medical Report</h2>
          </div>
          <div className="flex-container">
            <div className="detailsP">
              <div className="data c">
                <p className="right-align">
                  Date : {Date(data.recordDetails.timeStamp)}
                </p>
                <p className="right-align">
                  Doctor Name : {data.doctorDetails.doctorName}
                </p>
                <p className="right-align">
                  Department:{data.doctorDetails.department}
                </p>
                <p className="right-align">
                  Hospital: {data.doctorDetails.hosDetails.hospitalName}
                </p>
                <p className="right-align">
                  Purpose of visit: {data.recordDetails.purposeVisit}
                </p>
              </div>
              <div className="presciption c">
                <p className="right-align">prescription</p>
                <br></br>
                <p className="right-align">{data.recordDetails.prescription}</p>
              </div>

              <div className="buttons">
                <Btn
                  text={"Scans"}
                  style={{
                    width: "15%",
                    height: "35%",
                    fontSize: "16px",

                    marginRight: "15px",
                  }}
                  onClick={() => {
                    navigate("/ListScan", {
                      state: { scans: data.recordDetails.scans },
                    });
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

            <div className="remarks1 m1 c">
              <p className="right-align">remarks</p> <br></br>
              <p className="right-align">{data.recordDetails.description}</p>
            </div>
          </div>

          <div className="centerBtn">
            <Btn
              text={"Approve"}
              style={{
                margin: "20px",
              }}
              onClick={ async () => {
                const cid = await client.add(JSON.stringify(data.recordDetails));
                const upload = await reportUploaded(
                    data.recordDetails.PID,
                    cid.path,
                    data.recordDetails
                );

                navigate(-1);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
