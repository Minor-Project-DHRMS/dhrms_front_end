import React, { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";
import { getAccountAddress } from "../../services/AccountDetails";
import Btn from "../../components/button/Btn";
import "./patient.css";
import mainLogo from "../patient/logo192.png";
import { useNavigate } from "react-router-dom";
import LoadingInd from "../../components/Loading/LoadingInd";
import { Navigate } from "react-router-dom";
import {
  getDoctorsList,
  getHospitalsList,
  getPatientDetails,
  removeReadAccess,
} from "../../functions/Dhrms";

const Patient = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1];
  // const [state, setState] = useState({
  //   name: "Nandeesh B K",
  //   DOB: "12/23/23",
  //   gender: "Male",
  //   height: "12.12",
  //   weight: "45",
  //   bloodGroup: "A+",
  //   phoneNo: "1234567891",
  //   email: "hello@sdmcet",
  //   drugAllergies: ["asdsd", "asd", "asdAS", "asAS"],
  //   otherIllness: ["ASDSD", "ASDSD", "ASDASD"],
  //   operations: [],
  //   currentMedications: [],
  //   otherMedicalIllness: ["asd", "asd", "asd", "asd"],
  //   address: "0X2342342342",
  //   emergencyPerson: "",
  //   emergencyPhoneNo: "",
  //   unhealthyHabits: [],
  //   dietType: [],
  //   caffeineConsumption: "",
  //   smokingPerDay: "",
  // });

  const [state, setState] = useState({});

  const [loading, setLoading] = useState(false);

  const [journalList, setJournalList] = useState([]);
  const [journal, setJournal] = useState({
    treatment: "Annual medical Check Up",
    doctorName: "Dr. Raja",
    date: "Jan 28,2303",
  });
  const [doctorList, setDoctorList] = useState([]);
  const [hospitalList, setHospitalList] = useState([]);
  var log = () => {
    console.log("hello");
  };

  const getDetails = async () => {
    try {
      setLoading(true);
      const currentAccount = getAccountAddress();
      // const details = await getPatientDetails("0x2C4fF877B1ff2727D892F8B5F3DabEf79F14F14C");
      const details = await getPatientDetails(currentAccount);
      setState(JSON.parse(details));
      // setDoctorList(await getDoctorsList("0x2C4fF877B1ff2727D892F8B5F3DabEf79F14F14C"));
      setDoctorList(await getDoctorsList(currentAccount));
      console.log(await getDoctorsList(currentAccount));
      setHospitalList(await getHospitalsList(currentAccount));
      console.log(await getHospitalsList(currentAccount));
      
      // setHospitalList(await getHospitalsList("0x2C4fF877B1ff2727D892F8B5F3DabEf79F14F14C"));
      

      console.log(details);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const removeReadAccessD = (index) => {
    setDoctorList((doctorList) => doctorList.filter((_, i) => i !== index));
    console.log(doctorList);
  };

  const removeWirteAccessH = (index) => {
    setHospitalList((hospitalList) =>
      hospitalList.filter((_, i) => i !== index)
    );
    console.log(hospitalList);
  };

  useEffect(async () => {
    setLoading(true);
    await getDetails();
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingInd loading={loading} />
      ) : (
        <div className="patient">
          <div className="pt_align_ht pt_vt_media">
            <div className="pt_profile">
              <div className="pt_align_vt">
                <img src={mainLogo} alt="Avatar" className="pt_avatar" />
                <a href="/moreDetails" className="font_field">
                  More Details
                </a>
              </div>
              <div className="pt_details">
                <div className="pt_name">
                  <strong>{state.name}</strong>
                </div>
                <div className="pt_align_ht">
                  <div className="font_field">{state.gender}</div>
                  <div className="font_field">Age : 20</div>
                  <div className="font_field">Height : {state.height}</div>
                </div>
                <div className="pt_align_ht">
                  <div className="font_field">Weight : {state.weight}kg</div>
                  <div className="font_field">
                    Blood Group : {state.bloodGroup}
                  </div>
                </div>
                <div className="font_field">
                  Phone Number: +91 {state.phoneNo}
                </div>
              </div>
            </div>

            <div className="pt_profile pt_align_vt">
              <div>{state.name}'s Doctors</div>
              <div className="pt_list_items">
                {doctorList?.map((doctor, index) => {
                  return (
                    <div key={index} className="pt_item">
                      <img src={mainLogo} alt="Avatar" className="ptd_avatar" />
                      <div className="ptd_details">
                        <div className="ptd_name">{doctor.doctorName}</div>
                        <div className="ptd_font_field">
                          {doctor.qualification}
                        </div>
                      </div>
                      <span
                        onClick={() => {
                          removeReadAccessD(index);
                        }}
                      >
                        &#10005;
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="pt_profile pt_align_vt">
              <div>{state.name}'s Hospitals</div>
              <div className="pt_list_items">
                {hospitalList?.map((hospital, index) => {
                  return (
                    // <div key={index} className="pth_details">

                    //   <div className="hos_write_access">
                    //     <div>
                    //       <div className="pth_name">
                    //         {hospital.hospitalName}
                    //       </div>
                    //       <div className="pth_font_field">
                    //         Phone Number : {hospital.phoneNumber}
                    //       </div>
                    //     </div>

                    //     <span
                    //       onClick={() => {
                    //         removeWirteAccessH(index);
                    //       }}
                    //     >
                    //       &#10005;
                    //     </span>
                    //   </div>
                    // </div>
                    <div key={index} className="pt_item">
                      {/* <img src={mainLogo} alt="Avatar" className="ptd_avatar" /> */}
                      <div className="ptd_details">
                        <div className="ptd_name">
                          Hospital : {hospital.hospitalName}
                        </div>
                        <div className="pth_name">
                          Phone Number : {hospital.phoneNumber}
                        </div>
                      </div>
                      <span
                        onClick={() => {
                          removeWirteAccessH(index);
                        }}
                      >
                        &#10005;
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="pt_align_ht pt_vt_media">
            <div className="pt_align_vt pt_vt_media">
              <div className="pt_profile pt_medical_list pt_align_vt">
                <div className="pt_medical">
                  <strong>Allergies</strong>
                </div>
                <div className="pt_medical_items">
                  {state.drugAllergies?.map((allergies, index) => {
                    return (
                      <div key={index} className="pt_medical_font">
                        {allergies}
                      </div>
                    );
                  })}
                </div>
                <div className="pt_medical">
                  <strong>Medical Conditions</strong>
                </div>
                <div className="pt_medical_items">
                  {state.otherMedicalIllness?.map((illness, index) => {
                    return (
                      <div key={index} className="pt_medical_font">
                        {illness}
                      </div>
                    );
                  })}
                </div>
              </div>
              <Btn
                text={"My Prescriptions"}
                func={log}
                style={{
                  padding: "10px 20px",
                  width: "74%",
                  marginTop: "15px",
                  fontSize: "12px",
                }}
              />
            </div>
            <div className="pt_profile pt_journal pt_align_vt">
              <div className="journal_name">{state.name}'s medical journal</div>
              <div className="pt_journal_list">
                <div className="pt_align_vt">
                  {nums?.map((patient, index) => {
                    if (index === 0) {
                      return (
                        <div key={index} className="pt_align_ht">
                          <div className="lines">
                            <div className="dot dot_one"></div>
                            <div className="line"></div>
                          </div>
                          <PatientD
                            recordIndex={index}
                            treatment={"COVID Vacine"}
                            name={"Nandeesh"}
                            doctorname={"Doctor"}
                          />
                        </div>
                      );
                    }
                    return (
                      <div key={index} className="pt_align_ht">
                        <div className="lines">
                          <div className="line"></div>
                          <div className="dot"></div>
                          <div className="line"></div>
                        </div>

                        <PatientD
                          recordIndex={index}
                          treatment={"COVID Vacine"}
                          name={"Nandeesh"}
                          doctorname={"Doctor"}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const PatientD = ({ recordIndex, treatment, name, doctorname }) => {
  let navigate = useNavigate();
  var viewReport = (index) => {
    console.log(index);
    navigate("/register");
  };
  return (
    <div className="pt_journal_item pt_align_ht">
      <div className="journal_details pt_align_vt">
        <div className="pth_journal_font">{treatment}</div>
        <div className="pt_journal_font">{name}</div>
        <div className="pt_journal_font">{doctorname}</div>
      </div>
      <Btn
        text={"View"}
        func={() => {
          viewReport(recordIndex);
        }}
        style={{
          padding: "10px 20px",
          width: "70px",
          marginTop: "5px",
          fontSize: "12px",
          height: "20px",
        }}
      />
    </div>
  );
};

export default Patient;
