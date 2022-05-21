import React, { useState } from "react";
import Btn from "../../components/button/Btn";
import TxtInput from "../../components/TxtInput/TxtInput";
import { addHospital } from "../../functions/Dhrms";
import "./hospitalReg.css";
import { addHospitaltoList } from "../../functions/Approve";
import { useNavigate } from "react-router-dom";
import { getAccountAddress } from "../../services/AccountDetails";

import {
  isGovernment,
  isHospital,
  isDoctor,
  isPatient,
} from "../../functions/Rbac";

 export const HospitalReg = () => {
  
  const navigate = useNavigate();


  const [state, setState] = useState({
    hospitalName: "",
    phoneNo: "",
    walletAddress: "",
  });

  const registerHospital = async () => {
   

    try {
      if (
        (await isGovernment(state.walletAddress)) ||
        (await isHospital(state.walletAddress)) ||
        (await isDoctor(state.walletAddress)) ||
        (await isPatient(state.walletAddress))
      ) {
        console.log("account already exist");
      } else {
        if (await isGovernment(getAccountAddress())) {
          await addHospital(
            state.hospitalName,
            state.phoneNo,
            state.walletAddress
          ).then(()=>{
            navigate(-1);
        });
        } else {
          await addHospitaltoList(
            state.hospitalName,
            state.phoneNo,
            state.walletAddress
          ).then(()=>{
              navigate(-1);
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <div className="hos_reg">
      <div className="hos_head">Hospital Registration</div>
      <div className="hos_align_vt">
        <label className="lbl_hos">Hospital Name : </label>
        <TxtInput
          name={"hospitalName"}
          value={state.hospitalName}
          onChange={handleChanges}
          placeholder="Enter the Hospital name"
        />
      </div>

      <div className="hos_align_vt">
        <label className="lbl_hos">Phone No. : </label>
        <TxtInput
          name={"phoneNo"}
          value={state.phoneNo}
          onChange={handleChanges}
          placeholder="Enter the phone no"
        />
      </div>

      <div className="hos_align_vt">
        <label className="lbl_hos">Wallet Address : </label>
        <TxtInput
          name={"walletAddress"}
          value={state.walletAddress}
          onChange={handleChanges}
          placeholder="Enter the wallet address"
        />
      </div>
      <div>
        <Btn text={"Submit"} onClick={registerHospital} />
      </div>
    </div>
  );
};

