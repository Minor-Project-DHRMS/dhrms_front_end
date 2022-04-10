import React from "react";
import "./ListScan.css"
import Btn from "../../components/button/Btn";
import { findByLabelText } from "@testing-library/react";

const obj = {
    img1:{
        placeholder: "fksajhfsdgajfhgsjfksajhfsdgajfhgsjhfgffksajhfsdgajfhgsjhfgffksajhfsdgajfhgsjhfgffksajhfsn \n dgajfhgsjhfgffksajhfsdgajfhgsjhfgffksajhfsdgajfhgsj \n hfgffksajhfsdgajfhgsjhfgffksajhfsdgajfhgsjhfgfhfgf"
    },
    img2:{
        placeholder: "csfs fdsafsfsa"
    },
    img3:{
        placeholder: "fksajhfsdgajfhgsjfksajhfsdgajfhgsjhfgffksajhfsdgajfhgsjhfgffksajhfsdgajfhgsjhfgffksajhfsn \n dgajfhgsjhfgffksajhfsdgajfhgsjhfgffksajhfsdgajfhgsj \n hfgffksajhfsdgajfhgsjhfgffksajhfsdgajfhgsjhfgfhfgf"
    },
    img4:{
        placeholder: "fksajhfsdgajfhgsjfksajhfsdgajfhgsjhfgffksajhfsdgajfhgsjhfgffksajhfsdgajfhgsjhfgffksajhfsn \n dgajfhgsjhfgffksajhfsdgajfhgsjhfgffksajhfsdgajfhgsj \n hfgffksajhfsdgajfhgsjhfgffksajhfsdgajfhgsjhfgfhfgf"
    },
    img5:{
        placeholder: "fksajhfsdgajfhgsjfksajhfsdgajfhgsjhfgffksajhfsdgajfhgsjhfgffksajhfsdgajfhgsjhfgffksajhfsn \n dgajfhgsjhfgffksajhfsdgajfhgsjhfgffksajhfsdgajfhgsj \n hfgffksajhfsdgajfhgsjhfgffksajhfsdgajfhgsjhfgfhfgf"
    },
    img6:{
        placeholder: "fksajhfsdgajfhgsjfksajhfsdgajfhgsjhfgffksajhfsdgajfhgsjhfgffksajhfsdgajfhgsjhfgffksajhfsn \n dgajfhgsjhfgffksajhfsdgajfhgsjhfgffksajhfsdgajfhgsj \n hfgffksajhfsdgajfhgsjhfgffksajhfsdgajfhgsjhfgfhfgf"
    },
    img7:{
        placeholder: "fksajhfsdgajfhgsjfksajhfsdgajfhgsjhfgffksajhfsdgajfhgsjhfgffksajhfsdgajfhgsjhfgffksajhfsn \n dgajfhgsjhfgffksajhfsdgajfhgsjhfgffksajhfsdgajfhgsj \n hfgffksajhfsdgajfhgsjhfgffksajhfsdgajfhgsjhfgfhfgf"
    },
    img8:{
        placeholder: "csfs fdsafsfsa"
    },
    
}

function Data(value){
    return(
        <Views text={value.placeholder}/>
    )
}

function Views(prop) {
    return (
        <div className="place c">
            <p className="title">
                {prop.text}
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
        />
        </div>
    )
}

export default function ListScan() {
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





