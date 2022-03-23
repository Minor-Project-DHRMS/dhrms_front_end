import React, { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";

import Btn from "../../components/button/Btn";
import "./patient.css";
import mainLogo from "../patient/logo192.png";
import { Navigate } from "react-router-dom";

const Patient = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1];
  var log = () => {
    console.log("hello");
  };
  return (
    <div className="patient">
      <div className="pt_align_ht">
        <div className="pt_profile">
          <div className="pt_align_vt">
            <img src={mainLogo} alt="Avatar" className="pt_avatar" />
            <a href="#" className="font_field">
              More Details
            </a>
          </div>
          <div className="pt_details">
            <div className="pt_name">
              <strong>Nandeesh B K</strong>
            </div>
            <div className="pt_align_ht">
              <div className="font_field">Male</div>
              <div className="font_field">Age : 20</div>
              <div className="font_field">Height : 5</div>
            </div>
            <div className="pt_align_ht">
              <div className="font_field">Weight : 60kg</div>
              <div className="font_field">Blood Group : B+ve</div>
            </div>
            <div className="font_field">Phone Number: +91 8124368890</div>
          </div>
        </div>

        <div className="pt_profile pt_align_vt">
          <div>Shrinivas's Doctors</div>
          <div className="pt_list_items">
            {nums.map((patient, index) => {
              return (
                <div key={index} className="pt_item">
                  <img src={mainLogo} alt="Avatar" className="ptd_avatar" />
                  <div className="ptd_details">
                    <div className="ptd_name">
                      Dr. Sahil Ljhjhjhjhj Naikwadi
                    </div>
                    <div className="ptd_font_field">Cardiologist, MBBS, MD</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="pt_profile pt_align_vt">
          <div>Afzal's Hospitals</div>
          <div className="pt_list_items">
            {nums.map((patient, index) => {
              return (
                <div key={index} className="pth_details">
                  <div className="pth_name">KIMMS, HUBLI, KA</div>
                  <div className="pth_font_field">
                    Phone Number : 9433387654
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="pt_align_ht">
        <div className="pt_align_vt">
          <div className="pt_profile pt_medical_list pt_align_vt">
            <div className="pt_medical">
              <strong>Allergies</strong>
            </div>
            <div className="pt_medical_items">
              {nums.map((patient, index) => {
                return (
                  <div key={index} className="pt_medical_font">
                    Penicilin
                  </div>
                );
              })}
            </div>
            <div className="pt_medical">
              <strong>Medical Conditions</strong>
            </div>
            <div className="pt_medical_items">
              {nums.map((patient, index) => {
                return (
                  <div key={index} className="pt_medical_font">
                    Penicilin
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
          <div className="journal_name">Nandeesh's medical journal</div>
          <div className="pt_journal_list">
            <div className="pt_align_vt">
              {nums.map((patient, index) => {
                if (index === 0) {
                  return (
                    <div key={index} className="pt_align_ht">
                      <div className="lines">
                        <div className="dot dot_one"></div>
                        <div className="line"></div>
                      </div>
                      <PatientD
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
  );
};

const PatientD = ({ treatment, name, doctorname }) => {
  var log = () => {
    console.log("hello");
  };
  return (
    <div className="pt_journal_item">
      <div className="pt_align_ht">
        <div className="journal_details pt_align_vt">
          <div className="pth_journal_font">{treatment}</div>
          <div className="pt_journal_font">{name}</div>
          <div className="pt_journal_font">{doctorname}</div>
        </div>
        <Btn
          text={"View"}
          func={log}
          style={{
            padding: "10px 20px",
            width: "100px",
            marginTop: "5px",
            fontSize: "12px",
          }}
        />
      </div>
    </div>
  );
};

export default Patient;
