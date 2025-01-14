import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../components/button/Btn";
import { getDoctorDetails, getPatientList } from "../../functions/Dhrms";
import { getAccountAddress } from "../../services/AccountDetails";
import { calculateAge } from "../../services/CalculateAge";
import mainlogo from "../hospital/pat1.png";
// import Patient from "../patient/Patient.js";

const Paintents = () => {
  const [docdata, setDocData] = useState({});
  const [pdata, setData] = useState("");
  // const [docaddr,]
  const getDetails1 = async () => {

    try {
      const acc = getAccountAddress();
      console.log("inside");
      await getPatientList(acc).then((x) => {
        console.log("mid");
        setData(x);
        // console.log(x);
      });

    } catch (error) {
      console.log(error);
    }
  };


  const getDetails = async () => {
    try {
      const acc = getAccountAddress();
      await getDoctorDetails(acc).then((x) => {

        setDocData(x);
        // console.log(x);
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log("outside");
  useEffect(() => {
    getDetails1();
    getDetails();
  }, []);



  function getList(){
    if(Object.keys(pdata).length === 0){

      return (<p className="noPatient">No Patients Available</p>);


    }else{
      return (
      Object.values(pdata).map((r, index) => {
        console.log(r)
        return (
          <div key={index}>
            <div className="lis1" id="docdashOut">
              {/* <img className="obj1" src={new URL(`https://ipfs.infura.io/ipfs/${r.photo}`)}></img> */}
              <img className="obj1" src={mainlogo}></img>
              <div className="subli1">
                <p>{r.name}</p>
                <br></br>
                <br></br>
                <p>
                  {r.gender} &nbsp;&nbsp;Age:&nbsp;{calculateAge(r.DOB)}
                </p>
              </div>
              <div className="subli4">
                <Btn
                  text={"View Details"}
                  onClick={() => {
                    Navigate("/viewPatDetails",{state: {
                      address:r.walletAddress
                     }});
                  }}
                  style={{
                    height: "1vh",
                    width: "150px",
                    marginTop: "7px",
                    textAlign: "center",
                    fontSize: "14px",
                    padding: "15px 20px",
                  }}
                />
                <Btn
                  text={"Write Report"}
                  style={{
                    height: "1vh",
                    textAlign: "center",
                    width: "150px",
                    marginTop: "7px",
                    marginLeft: "30px",
                    fontSize: "14px",
                    padding: "15px 20px",
                  }}
                  onClick={() => {
                    const objec = {
                      patientDetails: r,
                      did: docdata.DID,
                      docDetails: docdata,
                      hid: docdata.hosDetails.HID
                    }
                    console.log(objec);
                    Navigate("/medicalrepupload", { state: { obj: objec } });

                  }}
                />
              </div>
            </div>
          </div>
        );
      }));
    }
  }

  const Navigate = useNavigate();
  // console.log();
  return (
    <div className="container1">
      <div className="mainlis">
        <div className="list-items1">
          {getList()}
        </div>
      </div>
    </div>
  );
};

export default Paintents;
