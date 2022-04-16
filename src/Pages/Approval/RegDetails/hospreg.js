import React from "react";
import Btn from "../../../components/button/Btn";
import "../../Approval/RegDetails/regdetails.css";

export default function hospregdet(){
    return(<table className="hcont1">
<tr colspan="10"><h1 className="hosphead">Hospital Registration Details</h1></tr>
<div className="details2">
<p className="hname">Hospital Name:-</p>
<div><p className="hcontacts">
    <p>phone:-</p>
    <p>email:-</p>
    <p>.....</p>
    </p>
    </div>
<div>
<p className="walletaddr1">
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