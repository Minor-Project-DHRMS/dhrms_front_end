import React from "react";
import Btn from "../../components/button/Btn";
import Patient from "../patient/Patient.js";
const nums = [ 1,2,3,4];
  var log = () => {
  };
export default function Paintents() {
  return (
    <div className="container1">
      <div className="mainlis">
      <div className="list-items">
            {nums.map((patient, index) => {
              return (
                <div key={index}>
              <div className="lis1">
          <p className="obj1"></p>
          <div className="subli1">
            <p>Shrinivas Dixit</p>
            <p>Male Age:21</p>
          </div>
          <div className="subli4">
          <Btn 
                    text={"View Report"}
                    onclick="</Patient>"
                    style={{     
                      height:"6vh",                 
                      width: "150px",
                      marginTop: "15px",
                      fontSize: "14px",
                      padding: "15px 20px"
                    }}
                  />
            <Btn 
                    text={"Write Report"}
                    style={{
                      height:"6vh",                 
                      width: "150px",
                      marginTop: "15px",
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
