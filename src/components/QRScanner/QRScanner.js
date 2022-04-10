import React, { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import Popup from "reactjs-popup";
import "./QRScanner.css";

export const QRScanner = () => {
  const [data, setData] = useState("No result");
  const [open, setOpen] = useState(false);
  navigator.mediaDevices.getUserMedia({ video: true });
  const handleError = (err) => {
    console.error(err);
  };

  const handleScan = (result, error) => {
    if (!!result) {
      setData(result?.text);
      setOpen(true);
    }

    if (!!error) {
      console.info(error);
    }
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
      <p>{data}</p>

      <Popup
        open={open}
        trigger={<button className="btn_scan"> Open Modal </button>}
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
              <div>{data}</div>
            </div>
            <div className="actions">
              <button
                className="btn_scan btn_access"
                onClick={() => {
                  console.log("modal closed ");
                  close();
                }}
              >
                Access
              </button>
              <button
                className="btn_scan btn_deny"
                onClick={() => {
                  console.log("modal closed ");
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
