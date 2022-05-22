import React from "react";
import { QRCodeSVG } from "qrcode.react";
import "./QRCodeGen.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const QRCodeGen = () => {
  const location = useLocation();
  const [src, setSrc] = useState("");
  console.log(location.state.address);

  return (
    <div className="qr_head">
      {/* <QRCode value={text} /> */}
      <div className="head_whitebg">QR Code</div>
      <div className="qrcode_bg">
        <div
          style={{
            background: "white",
            padding: "16px",
            width: "200px",
            height: "200px",
          }}
        >
          <QRCodeSVG value={location.state.address} style={{ width: "200px", height: "200px" }} />
        </div>
        <div className="address">{location.state.address}</div>
      </div>
    </div>
  );
};
