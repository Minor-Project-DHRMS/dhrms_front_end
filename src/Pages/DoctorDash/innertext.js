import React,{useState,useEffect} from "react";
export default function Intext(){
    let [docdata,setData]=useState("");
  useEffect(()=>{
    fetch(`https://ipfs.infura.io/ipfs/QmbsBgfwYyyGeFUwdPFTEewTYDF2KoaKDyfbyxq9e84pwU`).then(r=>r.text()).then((a)=>{
  setData(JSON.parse(a));
    })
  })
    return(<nav>
        <div className="details111">
        <h1 className="tx1">Dr.Sahil.L.Naikwadi</h1>
    <p className="tx2">Cardiologist</p>
    <p className="tx3">MBBS ,MD</p>
    <p className="tx4
    ">Hospital Name : SDM Medical College Dharwad</p>
    </div>
    </nav>);
}