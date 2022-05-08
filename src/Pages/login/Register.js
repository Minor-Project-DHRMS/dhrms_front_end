import Btn from "../../components/button/Btn";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import "./login.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();

  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="login">
      <div className="whitebg">
        <p>Health Record Management System</p>
      </div>
      <div className="btn-reg-grp">
        <Btn
          text={"Register new Patient"}
          func={() => navigate("/patientReg")}
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
    </div>
  );
};

export default Register;
