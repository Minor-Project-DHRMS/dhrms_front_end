import React from "react";
import "./ListScan.css"
import Btn from "../../components/button/Btn";
import {useNavigate,} from "react-router-dom"
import { findByLabelText } from "@testing-library/react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// const obj = [
//     {
//         placeholder: "Scan 1",
//         cid:"Qmd5CN8vRwy2TuXNgzBsruYFrcdUEcvjesx3Tagxz95v9y"
//     },
//     {
//         placeholder: "Scan 1",
//         cid:"QmUjro98J837RuqHNLe4NedspQ6PE4736FMvQSvZt1zGJ7"
//     },
//     {
//         placeholder: "Scan 1",
//         cid:"Qmd5CN8vRwy2TuXNgzBsruYFrcdUEcvjesx3Tagxz95v9y"
//     },
//     {
//         placeholder: "Scan 1",
//         cid:"QmUjro98J837RuqHNLe4NedspQ6PE4736FMvQSvZt1zGJ7"
//     },
//     {
//         placeholder: "Scan 1",
//         cid:"Qmd5CN8vRwy2TuXNgzBsruYFrcdUEcvjesx3Tagxz95v9y"
//     }
// ]

var obj=[]

var key=0;

function Data(value){
    return(
        <Views key={key++} text={value.name} cid={value.cid} />
    )
}


function Views({text,cid}) {
    let navigate = useNavigate();

    return (
        <div className="place c">
            <p className="title">
                {text}
            </p>

            <Btn text={"view"} style={{
                           width:"1%",
                            height:"10px",
                            display:"flex",
                            flexDirection:"column",
                            justifyContent:"center",
                            alignItem:"center",
                            fontSize: "12px",
                            
            }}
            onClick={()=>{
                navigate("/viewScan",{state : { CID: cid}})
                // console.log(cid)
            }}
        />
        </div>
    )
}

export default function ListScan() {
    const location = useLocation();
    obj=location.state.scans;
    // console.log(obj);    

    return (
        <>
        <div className="heading1">
                Scan Reports
            </div>
        <div className="outerLayer">
            
            <div className="outer c">
                {
                    
                    Object.values(obj).map(Data)
                }
            </div>
            </div>
        </>
    );
}





