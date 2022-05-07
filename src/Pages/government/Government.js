import React, { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";
import Btn from "../../components/button/Btn";
import ContractInstance from "../../services/ContractInstance";
import "./government.css";
import { Navigate, useNavigate } from "react-router-dom";

const Government = () => {
  let navigate = useNavigate();

  const [govDetails, setGovDetails] = useState({
    officeName: "",
    phoneNo: "",
    GID: "",
  });

  var log = () => {
    console.log("hello");
    console.log(ReactSession.get("account"));
  };
  // , { replace: true }
  // if (ReactSession.get("account") == undefined) {
  //   return <Navigate to="/" replace />;
  // } else {
  const getDetails = async () => {
    try {
      const dhrmsContract = ContractInstance(window);
      const currentAccount = ReactSession.get("currentAccount");
      console.log(currentAccount);
      const details = await dhrmsContract.getGovernmentDetails(
        currentAccount
      );
      console.log(details);
      setGovDetails({
        officeName: details[0],
        phoneNo: details[1],
        GID: currentAccount,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="government">
      <div className="bio-gov">
        <p>Office Name: {govDetails.officeName}</p>
        <p>Phone No: {govDetails.phoneNo}</p>
        <p>GID: {govDetails.GID}</p>
      </div>
      <div className="govdash_align_ht">
        <div className="government">
          <Btn
            text={"Register new Patient"}
            func={log}
            style={{
              width: "250px",
              marginTop: "20px",
              fontSize: "18px",
            }}
          />
          <Btn
            text={"Register new Doctor"}
            func={() => navigate("/docreg")}
            style={{
              width: "250px",
              marginTop: "20px",
              fontSize: "18px",
            }}
          />
          <Btn
            text={"Register new Hospital"}
            func={() => navigate("/hosreg")}
            style={{
              width: "250px",
              marginTop: "20px",
              fontSize: "18px",
            }}
          />
          <Btn
            text={"Register new Government"}
            func={() => navigate("/govreg")}
            style={{
              width: "250px",
              marginTop: "20px",
              fontSize: "18px",
            }}
          />
        </div>
        <div className="government">
          <Btn
            text={"Approve new Patients"}
            func={log}
            style={{
              width: "250px",
              marginTop: "20px",
              fontSize: "18px",
            }}
          />
          <Btn
            text={"Approve new Doctor"}
            func={() => navigate("/docreg")}
            style={{
              width: "250px",
              marginTop: "20px",
              fontSize: "18px",
            }}
          />
          <Btn
            text={"Approve new Hospital"}
            func={() => navigate("/hosreg")}
            style={{
              width: "250px",
              marginTop: "20px",
              fontSize: "18px",
            }}
          />
          <Btn
            text={"Approve new Government"}
            func={() => navigate("/govreg")}
            style={{
              width: "250px",
              marginTop: "20px",
              fontSize: "18px",
            }}
          />
        </div>
      </div>
    </div>
  );
  // }
};

export default Government;
