import React from "react";
import "./btn.css";

const Btn = ({ text, func }) => {
  return (
    <div className="btn-gov" onClick={func}>
      {text}
    </div>
  );
};

export default Btn;
