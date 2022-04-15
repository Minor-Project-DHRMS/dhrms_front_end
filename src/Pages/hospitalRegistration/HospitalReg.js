import React, { useState } from "react";
import Btn from "../../components/button/Btn";
import TxtInput from "../../components/TxtInput/TxtInput";
import "./hospitalReg.css";

export const HospitalReg = () => {
  const [state, setState] = useState({
    hospitalName: "",
    phoneNo: "",
    walletAddress: "",
  });

  const submit = () => {
    console.log(state);
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
        <Btn text={"Submit"} onClick={submit} />
      </div>
    </div>
  );
};
