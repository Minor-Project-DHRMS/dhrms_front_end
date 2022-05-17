import React, { useEffect, useState } from "react";
import Btn from "../../components/button/Btn";
import { useLocation } from "react-router-dom";
import "../../Pages/Approval/approv.css";
import Txt from "../../components/TxtInput/TxtInput"
import "../../Pages/DoctorDash/DocDash.css";
import { useNavigate } from "react-router-dom";
import { getGovApproveList } from "../../functions/Approve"



export default function Govapprov() {
  let navigate = useNavigate();
  const [govdata, setData] = useState([]);

function getData() {

    getGovApproveList().then((r) => {
      setData(r);
      console.log(r);
    })

    // setData( );
  }

  useEffect( () => {
      getData();

  },[]);

  return (
    <div className="total">

      <div className="head1">
        Government Approval
      </div>

      <div className="body102">
        {Object.values(govdata).map((r, index) => {
          return (

            <div className="lis11" key={index}>
              <p className="obj1"></p>
              <div className="subli11">
                <div className="nmage">
                  <p className="nm">Office Name : {r.details.officeName}</p>
                  <p className="age">GovID : &nbsp;{r.address}</p>
                </div>

                <Btn text={"View"}
                  onClick={() => {
                    console.log("provided");
                    console.log(r);
                    navigate("/approveGov", { state: { data: r } })
                  }}
                  
                  style={{
                    // height: "1vh",
                    height: "10px",
                    width: "10px",
                    fontSize: "12px",
                    alignContent: "center",
                    // padding: "10px 20px"
                  }}
                />

              </div>
            </div>
          );
        })}

      </div>
    </div>

  )
}