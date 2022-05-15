import React from "react";
import "./ListReport.css"
import Btn from "../../components/button/Btn";
import { findByLabelText } from "@testing-library/react";
import {useNavigate,} from "react-router-dom"
import { useLocation } from "react-router-dom";

// const obj = [
//     {
//         placeholder: "Report 1",
//         cid:"QmaNxbQNrJdLzzd8CKRutBjMZ6GXRjvuPepLuNSsfdeJRJ"
//     },
//     {
//         placeholder: "Report 2",
//         cid:"QmTn96ALgzSRnVPrf8vHrGBChtRyTjBwsMaZzefZfMtTqw"
//     },
//     {
//         placeholder: "Report 3",
//         cid:"QmaNxbQNrJdLzzd8CKRutBjMZ6GXRjvuPepLuNSsfdeJRJ"
//     },
//     {
//         placeholder: "Report 4",
//         cid:"QmTn96ALgzSRnVPrf8vHrGBChtRyTjBwsMaZzefZfMtTqw"
//     },
//     {
//         placeholder: "Report 5",
//         cid:"QmaNxbQNrJdLzzd8CKRutBjMZ6GXRjvuPepLuNSsfdeJRJ"
//     },
//     {
//         placeholder: "Report 6",
//         cid:"QmTn96ALgzSRnVPrf8vHrGBChtRyTjBwsMaZzefZfMtTqw"
//     },
//     {
//         placeholder: "Report 7",
//         cid:"QmaNxbQNrJdLzzd8CKRutBjMZ6GXRjvuPepLuNSsfdeJRJ"
//     },
    
// ]

var index=1;
var obj=[];
function Data(value){
    return(
        <Views text={value.placeholder} key={index++} cid={value.cid}/>
    )
}

function Views({text, id, cid}) {
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
                navigate("/viewReport",{state : { CID: cid}})
                // console.log(cid)
            }}
        />
        </div>
    )
}

export default function ListReport() {
    const location = useLocation();
    obj=location.state.reports;
    return (
        <>
        <div className="heading1">
                Reports List
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





