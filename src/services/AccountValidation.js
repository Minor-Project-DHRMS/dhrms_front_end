import React from "react";
// import ContractInstance from "./ContractInstance
import RbacInstance from '../instance/DhrmsIntance'
import LoadingInd from "../components/Loading/LoadingInd";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const isGovernment = async (address) => {
  const rbacContract = RbacInstance();
  return rbacContract.isGovernment(address);
};

const isHospital = async (address) => {
  const rbacContract = RbacInstance();
  return rbacContract.isHospital(address);
};

const isDoctor = async (address) => {
  const rbacContract = RbacInstance();
  return rbacContract.isDoctor(address);
};

const isPatient = async (address) => {
  const rbacContract = RbacInstance();
  return rbacContract.isPatient(address);
};

const pageRedirect = async (address, navigate) => {
  console.log("Hello2");

  if (await isGovernment(address)) {
    console.log("Hello1");
    navigate("/govDash");
  }
  else if (await isPatient(address)) {
    navigate("/PatientDash");
  }
  else if (await isHospital(address)) {
    navigate("/HospitalDash");
  }
  else if (await isDoctor(address)) {
    navigate("/docdash");
  }
};
export { isGovernment, isHospital, isDoctor, isPatient, pageRedirect };
