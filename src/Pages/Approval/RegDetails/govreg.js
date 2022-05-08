import React from "react";
import Btn from "../../../components/button/Btn";
import "../../Approval/RegDetails/regdetails.css";

export default function govtregdet(){
    return(<table className="hcont1">
<tr colspan="10"><h1 className="hosphead">Government Registration Details</h1></tr>
<div className="details3">
<p className="hname2">Government Office:-</p>
<div>
    <p className="hcontacts2">
    <p>phone:-</p>
    <p>email:-</p>
    <p>.....</p>
    </p>
</div>
<div>
<p className="walletaddr2">
Wallet address:-
</p>
</div>
<Btn   text={"Approve"}
                        onclick=""
                        style={{                 
                      width: "150px",
                      marginLeft:"36%",
                      fontSize: "16px",
                      textAlign:"center",
                      padding: "10px 0px"
                        }}
                      />
</div>

    </table>);
}