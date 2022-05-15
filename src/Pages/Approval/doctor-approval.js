import React,{useState,useEffect} from "react";
import Btn from "../../components/button/Btn";
import "../../Pages/Approval/approv.css";
import Txt from "../../components/TxtInput/TxtInput";
import "../../Pages/DoctorDash/DocDash.css";
import { useNavigate } from "react-router-dom";
const nums = [1, 2, 3, 4, 5, 6];
var log = () => {};
export default function Docapprov() {
  
  let navigate = useNavigate();
let [docdata,setData]=useState("");

useEffect(()=>{
  fetch(`https://ipfs.infura.io/ipfs/QmbsBgfwYyyGeFUwdPFTEewTYDF2KoaKDyfbyxq9e84pwU`).then(r=>r.text()).then((a)=>{
setData(JSON.parse(a));
  })
})

  return (
    <div className="total">
      <div className="MainHead1">
        <div className="head1">Doctor Approval</div>
      </div>
      <div className="body102">
        {/* <div className="b1"> */}
          {" "}
          {Object.values(docdata).map((s, index) => {
            return (
              <div key={index}>
                <div className="lis11">
                  <p className="obj1"></p>
                  <div className="subli11">
                    <h3 className="nmage">
                      <p className="nm">{s.name}</p>
                      <p className="age">{s.gender} &nbsp;Age:&nbsp;{s.dob}</p>
                    </h3>
                      <Btn
                        text={"View"}
                        onClick={()=>{
                          navigate("/approveDoc",{state:{ddata:s}})
                        }}
                        style={{                
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
        {/* </div> */}
      </div>
    </div>
  );
}
