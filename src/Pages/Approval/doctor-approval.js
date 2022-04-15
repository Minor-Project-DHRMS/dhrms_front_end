import React from "react";
import Btn from "../../components/button/Btn";
import "../../Pages/Approval/approv.css";
import Txt from "../../components/TxtInput/TxtInput";
import "../../Pages/DoctorDash/DocDash.css";
const nums = [1, 2, 3, 4, 5, 6];
var log = () => {};
export default function docapprov() {
  return (
    <div className="total">
      <div className="MainHead1">
        <div className="head1">Doctor Approval</div>
      </div>
      <div className="body12">
        <div className="b1">
          {" "}
          {nums.map((patient, index) => {
            return (
              <div key={index}>
                <div className="lis11">
                  <p className="obj1"></p>
                  <div className="subli11">
                    <h3 className="nmage">
                      <p className="nm">Doctor Name</p>
                      <p className="age">Male Age:21</p>
                    </h3>
                      <Btn
                        className="bt1"
                        text={"View"}
                        onclick=""
                        style={{
                          height:"5vh",                 
                      width: "150px",
                      marginRight: "90px",
                      fontSize: "14px",
                      padding: "10px 20px"
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
