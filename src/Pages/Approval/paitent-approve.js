import React, { useEffect, useState } from "react";
import Btn from "../../components/button/Btn";
import "../../Pages/Approval/approv.css";
import Txt from "../../components/TxtInput/TxtInput"
import "../../Pages/DoctorDash/DocDash.css";
import { useNavigate } from "react-router-dom";
// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import { create } from "ipfs-http-client";

// const client = create("https://ipfs.infura.io:5001/api/v0");
const nums = [ 1,2,3,4,5,6];
  

  // const patdata=[
  //   {
  //     name: "shrinivas dixit",
  //     dob: "12/5/2000",
  //     gender: "m",
  //     addr: "jkdfsahkjha",
  //     blood: "no blood",
  //     height: "100ft",
  //     weight: "100ft",
  //     phone: 125633298,
  //     emergency: 52655655,
  //     timeStamp:1651977178,
  //     history: [
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //     ],
  //     disease: [
  //       "kjfadshfk",
  //       "fskjfha",
  //       "kjfadshfk",
  //       "fskjfha",
  //       "kjfadshfk",
  //       "fskjfha",
  //       "jdsfh",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //     ],
  //     habit: ["liqure", "smoker", "heroine","ui", "h", "g","f", "e", "d","c", "b", "a"],
  //   },
  //   {
  //     name: "Afzal A P",
  //     dob: "21/4/2000",
  //     gender: "m",
  //     addr: "jkdfsahkjha",
  //     blood: "B+",
  //     height: "5.9ft",
  //     weight: "70kg",
  //     phone: 125633298,
  //     emergency: 52655655,
  //     timeStamp:1651977177,
  //     history: [
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //     ],
  //     disease: [
  //       "kjfadshfk",
  //       "fskjfha",
  //       "jdsfh",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //     ],
  //     habit: ["liqure", "smoker", "heroine"],
  //   },
  //   {
  //     name: "shrinivas dixit",
  //     dob: "12/5/2000",
  //     gender: "m",
  //     addr: "jkdfsahkjha",
  //     blood: "no blood",
  //     height: "100ft",
  //     weight: "100ft",
  //     phone: 125633298,
  //     emergency: 52655655,
  //     timeStamp:1651977179,
  //     history: [
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //     ],
  //     disease: [
  //       "kjfadshfk",
  //       "fskjfha",
  //       "jdsfh",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //     ],
  //     habit: ["liqure", "smoker", "heroine"],
  //   },
  //   {
  //     name: "shrinivas dixit",
  //     dob: "12/5/2000",
  //     gender: "m",
  //     addr: "jkdfsahkjha",
  //     blood: "no blood",
  //     height: "100ft",
  //     weight: "100ft",
  //     phone: 125633298,
  //     emergency: 52655655,
  //     timeStamp:1651977173,
  //     history: [
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //     ],
  //     disease: [
  //       "kjfadshfk",
  //       "fskjfha",
  //       "jdsfh",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //     ],
  //     habit: ["liqure", "smoker", "heroine"],
  //   },
  //   {
  //     name: "shrinivas dixit",
  //     dob: "12/5/2000",
  //     gender: "m",
  //     addr: "jkdfsahkjha",
  //     blood: "no blood",
  //     height: "100ft",
  //     weight: "100ft",
  //     phone: 125633298,
  //     emergency: 52655655,
  //     timeStamp:1651977178,
  //     history: [
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //     ],
  //     disease: [
  //       "kjfadshfk",
  //       "fskjfha",
  //       "jdsfh",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //     ],
  //     habit: ["liqure", "smoker", "heroine"],
  //   },
  //   {
  //     name: "Sahil Naikwadi",
  //     dob: "25/12/1999",
  //     gender: "m",
  //     addr: "xyz",
  //     blood: "o+",
  //     height: "100ft",
  //     weight: "100ft",
  //     phone: 125633298,
  //     emergency: 52655655,
  //     timeStamp:1651977178,
  //     history: [
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //       "dkafh",
  //     ],
  //     disease: [
  //       "kjfadshfk",
  //       "fskjfha",
  //       "jdsfh",
  //       "dkafh",
  //       "fdshfh",
  //       "jfjkhasf",
  //     ],
  //     habit: ["liqure", "smoker", "heroine"],
  //   }
  // ]
export default function Paitentsapprov(){
    let navigate  = useNavigate();
    let  [patdata,setData]=useState("");
    // var sendnext= {fetch(client).then()}

    useEffect(()=>{
        fetch(`https://ipfs.infura.io/ipfs/QmbsBgfwYyyGeFUwdPFTEewTYDF2KoaKDyfbyxq9e84pwU`).
        then(r=>r.text()).
        then((d)=>{
            setData(JSON.parse(d));
        })
    },[])

    return(
        <div className="total">
            <div className="MainHead1">
    <div className="head1">
        Paitent Approval
    </div>
    </div>
    <div className="body103">
   {Object.values(patdata).map((s, index) => {
        return (
          <div key={index}>       
        <div className="lis11">
          
          <p className="obj1"></p>
          
           <h3 className="nmage"><p className="nm">&nbsp;{s.name} </p>
            <p className="age">{s.gender} &nbsp;&nbsp;Age:&nbsp;&nbsp;{s.dob}</p>
            </h3>
          <Btn     text={"View"}
                    onClick={()=>{
                      navigate("/ApprovePat",{state: {data: s}})
                    }}
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