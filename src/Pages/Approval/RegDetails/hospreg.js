import React,{useState} from "react";
import Btn from "../../../components/button/Btn";
import "../../Approval/RegDetails/regdetails.css";
import { useLocation } from "react-router-dom";

export default function Hospregdet(){
  const location = useLocation();
  const [hdata,setData] = useState(location.state.hdata);

    return(<table className="hcont1">
<tr colspan="10"><h1 className="hosphead">Hospital Registration Details</h1></tr>
<div className="details2">
<p className="hname">Hospital Name:-{hdata.name}</p>
<div><p className="hcontacts">
    <p>phone:-{hdata.emergency}</p>
    <p>email:-{hdata.name}</p>
    </p>
    </div>
<div>
<p className="walletaddr1">
Wallet address:-{hdata.phone}
</p>
</div>
<div>
<td>
<Btn   text={"Approve"}
                        onclick=""
                        style={{                 
                      width: "130px",
                      marginLeft:"0px",
                      fontSize: "16px",
                      textAlign:"center",
                      padding: "10px 0px"
                        }}
                      /></td>
                      <td>
                      <Btn   text={"Reject"}
                        onclick=""
                        style={{                 
                      width: "130px",
                      marginLeft:"0px",
                      fontSize: "16px",
                      textAlign:"center",
                      padding: "10px 0px"
                        }}
                      /></td>
                      </div>
</div>

    </table>);
}