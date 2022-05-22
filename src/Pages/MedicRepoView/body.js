import Header from "./TopHead";
import Txt from "../../components/TxtInput/TxtInput";
import TextArea from "../../components/textArea/TextArea";
import Btn from "../../components/button/Btn";
// import { useResolvedPath } from "react-router-dom";
import React, { useState } from "react";
import client from "../../services/FileUpload";
import { sendRecordsForUpload } from "../../functions/Dhrms";
import { useLocation, useNavigate } from "react-router-dom";

// import { create } from "ipfs-http-client";

// const client = create("https://ipfs.infura.io:5001/api/v0");

let initialValues = {
  PID: "",
  HID: "",
  DID: "",
  timeStamp: "",
  purposeVisit: "",
  prescription: "",
  description: "",
  scans: [],
  testReports: [],
};

let initialList = {
  scans: [],
  testReports: [],
};

export default function Body() {
  const location=useLocation();
  const navigate = useNavigate();

  const [values, setValues] = useState(initialValues);
  const [list, setList] = useState(initialList);
  // const data={
  //   name:"sahil kdsja dfkjasdl",
  //   pid: "0x32jk4jkh23jk4h2345hbb23k5h"
  // }
  const [data, setData] = useState(location.state.obj);
  console.log(data);


  const date=new Date();
  const sdate=""+date.getDate()+
  "/"+(date.getMonth()+1)+
  "/"+date.getFullYear();

  console.log(sdate);

  const [Report, setReportList] = useState([]);
  const [Scanlist, setScanList] = useState([]);

  const handleInputChangeM = (e) => {
    e.preventDefault();

    const { name, files } = e.target;

    let tempList = list;

    setList({
      ...list,
      [name]: [...list[name], ...files],
    });
  };

  const handleInputChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const sendUpload = async (e) => {
    e.preventDefault();

    for (const file of list.testReports) {
      const ucid = await client.add(file);
      let temp = {
        name: file.name,
        cid: ucid.path,
      };

      let templist = values.testReports;
      setValues({
        ...values,
        testReports: templist.push(temp),
      });
    }

    for (const scan of list.scans) {
      const ucid = await client.add(scan);
      let temp = {
        name: scan.name,
        cid: ucid.path,
      };

      let oldscans = values.scans;

      setValues({
        ...values,
        scans: oldscans.push(temp),
      });
    }
    values.timeStamp = Math.floor(new Date().getTime());
    values.PID=data.patientDetails.walletAddress;
    values.DID=data.did;
    values.HID=data.hid;

    console.log(values);

    await sendRecordsForUpload(JSON.stringify(values)).then(()=>{
      navigate(-1);
    });
    
  };

  // const printReport = () => {
  //   console.log(Report);
  // };

  return (
    <>
      {/* <div className="cont1"> */}
      <div className="bb1">
        <Header />
        <div className="bb2">
          <div className="date1">Name : {data.patientDetails.name}</div>
          <div className="Dep1">PID : {data.patientDetails.walletAddress}</div>
          <h2 className="h">Date : {sdate}</h2>
          <div className="Alltxt">
            <div className="col1">
              <TextArea
                className="purpose"
                name="purposeVisit"
                placeholder="Purpose Of Visit"
                style={{
                  width: "600px",
                }}
                onChange={handleInputChange}
              />
              <div className="Prescription">
                <TextArea
                  name="prescription"
                  placeholder="Prescription"
                  style={{
                    marginTop: "10px",
                    height: "200px",
                    width: "600px",
                  }}
                  onChange={handleInputChange}
                />
              </div>
              <p className="Scanrep1">Upload Scans</p>
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
                  <input
                    name="scans"
                    multiple
                    type="file"
                    onChange={handleInputChangeM}
                  />
                </div>
              </div>
            </div>

            <div className="col2">
              <div className="Description">
                <TextArea
                  name="description"
                  placeholder="Description"
                  style={{
                    height: "270px",
                    width: "650px",
                  }}
                  onChange={handleInputChange}
                />
              </div>

              <p className="testrep1">Upload Test Reports</p>
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
                  <input
                    name="testReports"
                    multiple
                    type="file"
                    onChange={handleInputChangeM}
                  />
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
                fontSize: "20px",
                width: "auto",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
              onClick={sendUpload}
            />
          </div>
        </div>
        {/* hiiiiiii
        {Report.forEach((s) => {
          <>
            <h1>{s.name}</h1>
            <h1>{s.cid}</h1>
          </>;
        })}
        <div onClick={printReport}>print</div> */}
      </div>
      {/* </div> */}
    </>
  );
}
