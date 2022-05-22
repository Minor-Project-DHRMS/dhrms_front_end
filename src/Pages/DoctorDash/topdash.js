import React, { useState, useEffect } from "react";
import { getDoctorDetails } from "../../functions/Dhrms";
import { getAccountAddress } from "../../services/AccountDetails";

export default function Topbar() {
  const [docdata, setData] = useState({});
  const getDetails = async () => {
    try {
      const acc = getAccountAddress();
      await getDoctorDetails(acc).then((x) => {
        setData(x);
        console.log(x);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  // console.log(docdata.hos.HID);
  return (
    <div className="topbar1">
      <div className="topbar2">
        <img className="Obj" src={docdata.photo}></img>
        <div className="docheading">
          <h1 className="tx1">{docdata.doctorName}</h1>
          <p className="tx1">{docdata.department}</p>
          <p className="tx1">{docdata.qualification}</p>
          {/* <p className="tx1">{console.log(docdata)}</p> */}
        </div>
      </div>
    </div>
  );
}
