import React, { useState, useEffect } from "react";
import { getDoctorDetails } from "../../functions/Dhrms";
import { getAccountAddress } from "../../services/AccountDetails";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate=useNavigate();
  const [currentAccount, setCurrentAccount] = useState(getAccountAddress());
  const [docdata, setData] = useState({});
  const [photo, setPhoto] = useState("");


  const getDetails = async () => {
    try {
      const acc = getAccountAddress();
      await getDoctorDetails(acc).then((x) => {
        setData(x);
        console.log(x);
        setPhoto(x.photo);

      });
    } catch (error) {
      console.log(error);
    }
  };

  function getPhoto() {
    if (photo !== "") {
      return new URL(photo);
    } else {
      return "../hospital/logo192.png";
    }
  }

  useEffect(async () => {
    await getDetails();
  }, []);

  // console.log(docdata.hos.HID);
  return (
    <div className="topbar1">
      <div className="topbar2">
        <img className="Obj" src={
          getPhoto()
        }></img>
        <div className="docheading">
          <h1 className="tx1">{docdata.doctorName}</h1>
          <p className="tx1">{docdata.department}</p>
          <p className="tx1">{docdata.qualification}</p>
          <p className="tx1">DID: {docdata.DID}</p>
          <b>
            <div
              className="qr-lbl-1"
              onClick={() =>
                navigate("/QRCode", { state: { address: currentAccount } })
              }
            >
              QR Code
            </div>
          </b>
        </div>
      </div>
    </div>
  );
}
