import React from "react";
import Header from "./TopHead";
import Txt from "../../components/TxtInput/TxtInput";
import Btn from "../../components/button/Btn";
// import { useResolvedPath } from "react-router-dom";




export default function body() {
  return (
      <>
    {/* <div className="cont1"> */}
      <div className="bb1">
        <Header />
        <dv className="bb2">
          <div className="date">Date:25/03/2022</div>
          <div className="Dep">Department: Cardiology , orthology</div>
          <div className="Alltxt">
            <div className="col1">
              <Txt
                className="purpose"
                placeholder="Purpose Of Visit"
                style={{
                  width: "600px",
                }}
              />
              <div className="Prescription">
                <Txt
                  placeholder="Prescription"
                  style={{
                    marginTop: "20px",
                    height: "200px",
                    width: "600px",
                  }}
                />
              </div>
              <div className="Scans">
                <Txt
                  placeholder="Scans"
                  style={{
                    marginTop: "20px",
                    width: "600px",
                  }}
                />
              </div>
            </div>

            <div className="col2">
              <div className="Description">
                <Txt
                  placeholder="Description"
                  style={{
                    height: "270px",
                    width: "650px",
                  }}
                />
              </div>

              <div className="Testrepo">
                <Txt
                  placeholder="Test Report"
                  style={{
                    marginTop: "20px",
                    width: "650px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="Upload">
            <Btn
              text={"Send For Upload"}
              style={{
                padding: "15px 20px",
                fontSize:"20px",
                width:"auto",
                alignItems:"center",
                display:"flex",
                justifyContent:"center",
              }}
            />
          </div>
        </dv>
      </div>
    {/* </div> */}
    </>
  );
}
