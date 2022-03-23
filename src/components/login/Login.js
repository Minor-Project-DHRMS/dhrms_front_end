import Btn from "../button/Btn";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import "./login.css";
import { ReactSession } from "react-client-session";

ReactSession.setStoreType("sessionStorage");

const Login = () => {
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
        ReactSession.set("account", account);
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
      ReactSession.set("account", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {
    ReactSession.remove("account");
  };
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="login">
      <div className="whitebg">
        <p>Health Record Management System</p>
      </div>
      <div className="btn-grp">
        <Btn text={"Connect Wallet to login"} func={connectWallet} />
        <Btn text={"Register"} func={connectWallet} />
        <Btn text={"Logout"} func={logout} />
      </div>
    </div>
  );
};

export default Login;
