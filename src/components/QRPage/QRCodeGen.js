import React from "react";
import { QRCodeSVG } from "qrcode.react";
import "./QRCodeGen.css";
import { useState, useEffect } from "react";

export const QRCodeGen = ({ text }) => {
  const [src, setSrc] = useState("");

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
          <QRCodeSVG value={text} style={{ width: "200px", height: "200px" }} />
        </div>
        <div className="address">{text}</div>
      </div>
    </div>
  );
};
