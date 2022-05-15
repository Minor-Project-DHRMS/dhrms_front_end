import React, { useState } from "react";
import Btn from "../../components/button/Btn";
import TxtInput from "../../components/TxtInput/TxtInput";
import "./governmentReg.css";
import LoadingInd from "../../components/Loading/LoadingInd";
import ContractInstance from "../../services/ContractInstance";
import { useNavigate } from "react-router-dom";

import {
  isGovernment,
  isHospital,
  isDoctor,
  isPatient,
  pageRedirect,
} from "../../services/AccountValidation";

export const GovernmentReg = () => {
  const [state, setState] = useState({
    officeName: "",
    phoneNo: "",
    walletAddress: "",
  });

  const register = async () => {
    try {
      const dhrmsContract = ContractInstance(window);

      if (
        (await isGovernment(state.walletAddress)) ||
        (await isHospital(state.walletAddress)) ||
        (await isDoctor(state.walletAddress)) ||
        (await isPatient(state.walletAddress))
      ) {
        console.log("account already exist");
      } else {
        const details = await dhrmsContract.addGovernmentOffice(
          state.officeName,
          state.phoneNo,
          state.walletAddress
        );
        await details.wait();
        console.log(details);
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
        <Btn text={"Submit"} onClick={register} />
      </div>
    </div>
  );
};
