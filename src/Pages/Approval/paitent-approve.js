import React from "react";
import Btn from "../../components/button/Btn";
import "../../Pages/Approval/approv.css";
import Txt from "../../components/TxtInput/TxtInput"
import "../../Pages/DoctorDash/DocDash.css";
const nums = [ 1,2,3,4,5,6];
  var log = () => {
  };
export default function paitentsapprov(){
    
    return(
        <div className="total">
            <div className="MainHead1">
    <div className="head1">
        Paitent Approval
    </div>
    </div>
    <div className="body103">
   {nums.map((patient, index) => {
        return (
          <div key={index}>       
        <div className="lis11">
          
          <p className="obj1"></p>
          
           <h3 className="nmage"><p className="nm">Shrinivas Dixit</p>
            <p className="age">Male Age:21</p>
            </h3>
          <Btn     text={"View"}
                    onclick=""
                    style={{                      
                      width: "100px",
                      marginRight: "90px",
                      fontSize: "14px",
                      padding: "10px 20px"
                    }}
                  />
          
        </div>
                </div>
              );
            })}
     
     </div>
     </div>
    
    )
}