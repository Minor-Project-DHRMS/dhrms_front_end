import React from "react";
import Header from "./TopHead";
import Txt from "../../components/TxtInput/TxtInput";
import TextArea from "../../components/textArea/TextArea"
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
              <TextArea
                className="purpose"
                placeholder="Purpose Of Visit"
                style={{
                  width: "600px",
                }}
              />
              <div className="Prescription">
                <TextArea
                  placeholder="Prescription"
                  style={{
                    marginTop: "10px",
                    height: "200px",
                    width: "600px",
                  }}
                />
              </div>
              <p className="Scanrep1" >Scans</p>
              <div className="Scanrepofile">
        <div className="input--mfile">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#560c66"
            >
              <circle cx="12" cy="12" r="3.2" />
              <path d="M9 2l-1.83 2h-3.17c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2h-3.17l-1.83-2h-6zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
              <path d="M0 0h24v24h-24z" fill="none" />
            </svg>
          </span>
          <input name="Select File" type="file"  />
        </div>
        </div>
            </div>

            <div className="col2">
              <div className="Description">
                <TextArea
                  placeholder="Description"
                  style={{
                    height: "270px",
                    width: "650px",
                  }}
                />
              </div>

<p className="testrep1" >Test Reports</p>
              <div className="Testrepofile">
        <div className="input--mfile">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#560c66"
            >
              <circle cx="12" cy="12" r="3.2" />
              <path d="M9 2l-1.83 2h-3.17c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2h-3.17l-1.83-2h-6zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
              <path d="M0 0h24v24h-24z" fill="none" />
            </svg>
          </span>
          <input name="Select File" type="file"  />
        </div>
        </div>

              {/* <div className="Testrepofile">
                <TextArea
                  placeholder="Test Reports"
                  style={{
                    marginTop: "20px",
                    width: "650px",
                  }}
                  />
                  <div className="input--mfile">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="#560c66"
                        >
                          <circle cx="12" cy="12" r="3.2" />
                          <path d="M9 2l-1.83 2h-3.17c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2h-3.17l-1.83-2h-6zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                          <path d="M0 0h24v24h-24z" fill="none" />
                        </svg>
                      </span>
                      <input className="uploadsvg" name="Select File" type="file" />
                    </div>
                  </div> */}
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
