import React from "react";
import "./ListReport.css"
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

var index=1;
function Data(value){
    return(
        <Views text={value.placeholder} key={index++}/>
    )
}

function Views({text, id}) {
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
        />
        </div>
    )
}

export default function ListReport() {
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





