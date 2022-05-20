import React, { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import Popup from "reactjs-popup";
import "./QRScanner.css";
import { ReactSession } from "react-client-session";
import ContractInstance from "../../services/ContractInstance";
import LoadingInd from "../../components/Loading/LoadingInd";
import { useNavigate } from "react-router-dom";

import {
  isGovernment,
  isHospital,
  isDoctor,
  isPatient,
  pageRedirect,
} from "../../services/AccountValidation";
import { giveReadAccess, giveWriteAccess } from "../../functions/Dhrms";

export const QRScanner = () => {
  let navigate = useNavigate();
  const [currentAccount, setCurrentAccount] = useState(
    ReactSession.get("currentAccount")
  );
  const [address, setAddress] = useState("No result");
  const [open, setOpen] = useState(false);
  navigator.mediaDevices.getUserMedia({ video: true });
  const handleError = (err) => {
    console.error(err);
  };

  const handleScan = (result, error) => {
    if (!!result) {
      setAddress(result?.text);
      setOpen(true);
    }

    // if (!!error) {
    //   console.info(error);
    // }
  };

  return (
    <div className="qr_scanner">
      <div className="qrhead_whitebg">Scan QR Code</div>
      <div className="qrscanner_bg">
        <QrReader
          onResult={handleScan}
          constraints={{ facingMode: "environment" }}
          className="scan"
        />
      </div>

      <Popup
        open={open}
        // trigger={<button className="btn_scan"> Open Modal </button>}
        modal
      >
        {(close) => (
          <div className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="header"> Permission </div>
            <div className="address_details">
              <div>Address</div>
              <div>{address}</div>
            </div>
            <div className="actions">
              <button
                className="btn_scan btn_access"
                onClick={async () => {

                  try {
                    const dhrmsContract = ContractInstance(window);
              
                    if (await isDoctor(address)) {
                      const details = await giveReadAccess(address);
                      console.log(details)
                    } else if (await isHospital(address)) {
                      const details = await giveWriteAccess(address);
                      console.log(details)
                    }

                    navigate('/PatientDash')

                  } catch (error) {
                    console.log(error);
                  }
                  
                  setOpen(false);
                  close();
                }}
              >
                Access
              </button>
              <button
                className="btn_scan btn_deny"
                onClick={() => {
                  console.log("modal closed ");
                  setOpen(false);
                  close();
                }}
              >
                Deny
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};
