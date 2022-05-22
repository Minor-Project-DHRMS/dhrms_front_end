import React, { useState, useEffect } from "react";
import { getDoctorDetails } from "../../functions/Dhrms";
import { getAccountAddress } from "../../services/AccountDetails";

export default function Topbar({ docData }) {
  const [loading, setLoading] = useState(false);

  const [docDetails, setDocDeatils] = useState("");
  const getDetails = async () => {
    try {
      const currentAccount = getAccountAddress();
      const details = await getDoctorDetails(currentAccount);
      console.log(details);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setLoading(true);
    getDetails();
    setLoading(false);
  }, []);
  return (
    <div className="topbar1">
      <div className="topbar2">
        <p className="Obj"></p>
        <div className="docheading">
          <h1 className="tx1">{docDetails}</h1>
          <p className="tx1">Cardiologist</p>
          <p className="tx1">MBBS ,MD</p>
          <p className="tx1">Hospital Name : SDM Medical College Dharwad</p>
        </div>
      </div>
    </div>
  );
}
