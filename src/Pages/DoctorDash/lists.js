import React,{useState,useEffect} from "react";
import Btn from "../../components/button/Btn";
import Patient from "../patient/Patient.js";
import { useNavigate } from "react-router-dom";
const nums = [ 1,2,3,4];
  var log = () => {
  };
export default function Paintents() {
  let [docdata,setData]=useState("");
  useEffect(()=>{
    fetch(`https://ipfs.infura.io/ipfs/QmbsBgfwYyyGeFUwdPFTEewTYDF2KoaKDyfbyxq9e84pwU`).
    then(r=>r.text()).
    then((a)=>{
      setData(JSON.parse(a));
    });
    console.log(docdata);
    // getPatientList("")
  },[])

  const navigate=useNavigate();
 
  return (
    <div className="container1">
      <div className="mainlis">
      <div className="list-items">
            {Object.values(docdata).map((s, index) => {
              return (
                <div key={index}>
              <div className="lis1">
          <p className="obj1"></p>
          <div className="subli1">
            <p>{s.name}</p>
            <p>{s.gender} &nbsp;&nbsp;Age:&nbsp;{s.dob}</p>
          </div>
          <div className="subli4">
          <Btn 
                    text={"Patient Details"}
                    onClick={()=>{
                      navigate("/PatientDash")
                    }}
                    style={{     
                      height:"1vh",                 
                      width: "150px",
                      marginTop: "7px",
                      textAlign:"center",
                      fontSize: "14px",
                      padding: "15px 20px"
                    }}
                  />
            <Btn 
                    text={"Write Report"}
                    onClick={()=>{
                      navigate("/medicalrepupload")
                    }}
                    style={{
                      height:"1vh", 
                      textAlign:"center",                
                      width: "150px",
                      marginTop: "7px",
                      marginLeft: "30px",
                      fontSize: "14px",
                      padding: "15px 20px"
                    }}

                  />
          </div>
        </div>
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
}
