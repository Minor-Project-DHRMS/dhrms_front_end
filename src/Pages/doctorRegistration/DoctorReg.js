import React from "react";
import { useState } from "react";
import Btn from "../../components/button/Btn";
import TxtInput from "../../components/TxtInput/TxtInput";
import mainLogo from "../doctorRegistration/logo192.png";
import "./doctorReg.css";
import { ethers } from "ethers";
import abi from "../../utils/dhrms_backend.json";

import FileUpload from "../../services/FileUpload";

import { create } from "ipfs-http-client";

const client = create("https://ipfs.infura.io:5001/api/v0");

export const DoctorReg = () => {
  const contractAddress = "0x24D17E87719516B55Ce5C6d5be0485E00644C8D0";
  const contractABI = abi.abi;

  const [state, setState] = useState({
    doctorName: "",
    doctorWallet: "",
    phoneNo: "",
    qualification: "",
    hospitalWallet: "",
    doctorPhoto: "",
    doctorDOB: "",
    doctorDept: "",
  });

  //const [doctorPhoto, setDoctorPhoto] = useState(null);

  const submit = async () => {
    console.log(state);
    const cid = await FileUpload(state.doctorPhoto);
    console.log(cid);
  };

  const registerDoctor = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const dhrmsContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const docPhoto = await client.add(state.doctorPhoto);
        console.log(docPhoto.cid);
        console.log(docPhoto.path);

        const details = await dhrmsContract.setDoctorDetails(
          state.doctorName,
          state.phoneNo,
          state.qualification,
          docPhoto,
          state.doctorDOB,
          state.doctorWallet,
          state.hospitalWallet,
          state.doctorDept
        );
        console.log(details);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChanges = (e) => {
    if (e.target.type !== "file") {
      const name = e.target.name;
      const value = e.target.value;
      setState({
        ...state,
        [name]: value,
      });
    } else {
      setState({
        ...state,
        doctorPhoto: e.target.files[0],
      });
    }
  };
  return (
    <div className="doc_reg">
      <div className="doc_head">Doctor Registration</div>
      {/* Doctor Name DID Phone Number Qualification Photo Dob HID */}
      <div className="doc_align_ht">
        <img
          src={
            state.doctorPhoto
              ? URL.createObjectURL(state.doctorPhoto)
              : mainLogo
          }
          alt="Avatar"
          className="doc_avatar"
        />
        <div className="input--file">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#560c66"
            >
              <circle cx="12" cy="12" r="3.2" />
              <path d="M9 2l-1.83 2h-3.17c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2h-3.17l-1.83-2h-6zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
              <path d="M0 0h24v24h-24z" fill="none" />
            </svg>
          </span>
          <input name="doctorPhoto" type="file" onChange={handleChanges} />
        </div>
      </div>
      <div className="doc_align_ht">
        <div className="doc_align_vt">
          <label className="lbl_hos">Doctor name :</label>
          <TxtInput
            name={"doctorName"}
            value={state.doctorName}
            onChange={handleChanges}
            style={{
              width: "350px",
              marginRight: "40px",
              fontSize: "14px",
            }}
            placeholder="Enter the Doctor name"
          />
        </div>
        <div className="doc_align_vt">
          <label className="lbl_hos">Doctor Wallet Address :</label>
          <TxtInput
            name={"doctorWallet"}
            value={state.doctorWallet}
            onChange={handleChanges}
            style={{
              width: "350px",
              fontSize: "14px",
            }}
            placeholder="Enter the doctor wallet address"
          />
        </div>
      </div>
      <div className="doc_align_ht">
        <div className="doc_align_vt">
          <label className="lbl_hos">Phone No. :</label>
          <TxtInput
            name={"phoneNo"}
            value={state.phoneNo}
            onChange={handleChanges}
            style={{
              width: "350px",
              marginRight: "40px",
              fontSize: "14px",
            }}
            placeholder="Enter the phone no"
          />
        </div>
        <div className="doc_align_vt">
          <label className="lbl_hos">Qualification :</label>
          <TxtInput
            name={"qualification"}
            value={state.qualification}
            onChange={handleChanges}
            style={{
              width: "350px",
              fontSize: "14px",
            }}
            placeholder="Enter the qualification"
          />
        </div>
      </div>
      <div className="doc_align_ht">
        <div className="doc_align_vt">
          <label className="lbl_hos">DOB :</label>
          <TxtInput
            name={"doctorDOB"}
            value={state.doctorDOB}
            onChange={handleChanges}
            style={{
              width: "350px",
              marginRight: "40px",
              fontSize: "14px",
            }}
            placeholder="Enter the Hospital wallet address"
          />
        </div>
        <div className="doc_align_vt">
          <label className="lbl_hos">Department :</label>
          <TxtInput
            name={"doctorDept"}
            value={state.doctorDept}
            onChange={handleChanges}
            style={{
              width: "350px",
              fontSize: "14px",
            }}
            placeholder="Enter the Hospital wallet address"
          />
        </div>
      </div>
      <div className="doc_align_vt doc_align_sp">
        <label className="lbl_hos">Hospital Wallet Address :</label>
        <TxtInput
          name={"hospitalWallet"}
          value={state.hospitalWallet}
          onChange={handleChanges}
          style={{
            width: "350px",
            marginRight: "40px",
            fontSize: "14px",
          }}
          placeholder="Enter the Hospital wallet address"
        />
      </div>
      <div>
        <Btn text={"Submit"} onClick={submit} />
      </div>
    </div>
  );
};
