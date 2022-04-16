import React, { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";
import abi from "../../utils/dhrms_backend.json";
import Btn from "../../components/button/Btn";
import Login from "../login/Login";
import "./government.css";
import { ethers } from "ethers";
import { Navigate, useNavigate } from "react-router-dom";

const Government = () => {
  let navigate = useNavigate();

  const contractAddress = "0x24D17E87719516B55Ce5C6d5be0485E00644C8D0";
  const contractABI = abi.abi;

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
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const dhrmsContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const details = await dhrmsContract.getGovernmentDetails(
          "0x8B8979B6580F1c0797c6B9AFE6cAA22DF8417460"
        );
        console.log(details);
        setGovDetails({
          officeName: details[0],
          phoneNo: details[1],
          GID: await signer.getAddress(),
        });

        await window.ethereum.currentProvider.disconnect();
      } else {
        console.log("Ethereum object doesn't exist!");
      }
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
