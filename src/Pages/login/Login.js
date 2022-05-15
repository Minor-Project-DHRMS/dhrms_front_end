import Btn from "../../components/button/Btn";
import React, { useEffect, useState } from "react";
import ContractInstance from "../../services/ContractInstance";
import { useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";
import LoadingInd from "../../components/Loading/LoadingInd";
import "./login.css";
import { pageRedirect } from "../../services/AccountValidation";

const Login = () => {
  let navigate = useNavigate();
  const [currentAccount, setCurrentAccount] = useState("");
  const [loading, setLoading] = useState(false);

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
      ReactSession.setStoreType("sessionStorage");
      ReactSession.set("currentAccount", accounts[0]);

      pageRedirect(accounts[0], navigate);

      // const mainContract = ContractInstance(window);

      // setLoading(true);
      // const gov = await mainContract.isGovernment(accounts[0]);
      // if (gov) {
      //     setLoading(false);
      //     navigate("/govDash")
      // }
      // const pat = await mainContract.isPatient(accounts[0]);
      // if (pat) {
      //     setLoading(false);
      //     navigate("/PatientDash")
      // }
      // const hos = await mainContract.isHospital(accounts[0]);
      // if (hos) {
      //     setLoading(false);
      //     navigate("/HospitalDash")
      // }
      // const doc = await mainContract.isDoctor(accounts[0]);
      // if (doc) {
      //     setLoading(false);
      //     navigate("/docdash")
      // }
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
      {loading ? (
        <LoadingInd loading={loading} />
      ) : (
        <div className="btn-grp">
          <Btn text={"Connect Wallet to login"} func={connectWallet} />
          <Btn text={"Register"} func={connectWallet} />
        </div>
      )}
    </div>
  );
};

export default Login;
