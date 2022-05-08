import React from "react";
import "./ViewScan.css"
//import Btn from "../../components/button/Btn";
import { useLocation } from "react-router-dom";

export default function ViewScan() {
    // let cid= "Qmd5CN8vRwy2TuXNgzBsruYFrcdUEcvjesx3Tagxz95v9y";
    const location = useLocation();
    // console.log(location.state.CID)
    return (

        <>
            <div className="headingScan">
                Scaned Page
            </div>
            <div className="outerLayerforScan">

                <div className="outerForScan">
                    <img src={`https://ipfs.infura.io/ipfs/${location.state.CID}`} className="myimg" alt="">
                    </img>
                </div>
            </div>
        </>
    );
}