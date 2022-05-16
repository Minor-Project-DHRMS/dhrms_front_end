import React, { useEffect, useState } from "react";
import { getAccountAddress } from "../../services/AccountDetails";
import Btn from "../../components/button/Btn";
import "./government.css";
import { useNavigate } from "react-router-dom";
import { getGovernmentDetails } from "../../functions/Dhrms";

const Government = () => {
  let navigate = useNavigate();

  const [govDetails, setGovDetails] = useState({
    officeName: "",
    phoneNo: "",
    GID: "",
  });

  var log = () => {
    console.log("hello");
    console.log(getAccountAddress());
  };
  // , { replace: true }
  // if (ReactSession.get("account") == undefined) {
  //   return <Navigate to="/" replace />;
  // } else {
  const getDetails = async () => {
    try {
      const currentAccount = getAccountAddress();
      const details = await getGovernmentDetails(currentAccount);
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
            func={() => navigate("/PatientReg")}
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
            func={() => navigate("/PatientReg")}
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
