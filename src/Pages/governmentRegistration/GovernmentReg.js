import React, { useState } from "react";
import Btn from "../../components/button/Btn";
import TxtInput from "../../components/TxtInput/TxtInput";
import "./governmentReg.css";
export const GovernmentReg = () => {
  const [state, setState] = useState({
    officeName: "",
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
    <div className="gov_reg">
      <div className="gov_head">Government Registration</div>
      <div className="gov_align_vt">
        <label className="lbl_gov">Office Name : </label>
        <TxtInput
          name={"officeName"}
          value={state.officeName}
          onChange={handleChanges}
          placeholder="Enter the office name"
        />
      </div>
      <div className="gov_align_vt">
        <label className="lbl_gov">Phone No. : </label>
        <TxtInput
          name={"phoneNo"}
          value={state.phoneNo}
          onChange={handleChanges}
          placeholder="Enter the phone no"
        />
      </div>
      <div className="gov_align_vt">
        <label className="lbl_gov">Wallet Address : </label>
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
