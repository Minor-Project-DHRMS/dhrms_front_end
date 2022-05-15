import React,{useEffect,useState} from "react";
import Btn from "../../components/button/Btn";
import { useLocation } from "react-router-dom";
import "../../Pages/Approval/approv.css";
import Txt from "../../components/TxtInput/TxtInput"
import "../../Pages/DoctorDash/DocDash.css";
import { useNavigate } from "react-router-dom";
const nums = [ 1,2,3,4,5,6];
  var log = () => {
  };
export default function Govapprov(){
    let navigate = useNavigate();
    let [govdata,setData]=useState("");

  useEffect(()=>{
    fetch(`https://ipfs.infura.io/ipfs/QmbsBgfwYyyGeFUwdPFTEewTYDF2KoaKDyfbyxq9e84pwU`).then(r=>r.text()).then((a)=>{
    setData(JSON.parse(a))
    })
  },[])

    return(
        <div className="total">
            <div className="MainHead1">
    <div className="head1">
        Government Approval
    </div>
    </div>
    <div className="body102">
     {Object.values(govdata).map((r, index) => {
        return (
          <div key={index}>       
        <div className="lis11">
          <p className="obj1"></p>
          <div className="subli11">
           <h3 className="nmage"><p className="nm">{r.name}</p>
            <p className="age">GovID:&nbsp;{r.phone}</p>
            </h3>
       <Btn text={"View"}
                    onClick={()=>{
navigate("/approveGov",{state:{gdata: r}})}}
                    style={{                      
                      height:"2vh",                 
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
    
    )
}