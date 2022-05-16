import React from 'react';
import "../test/test.css"

import {
    addGovernmentOfficetoList,
    addHospitaltoList,
    addDoctortoList,
    addPatienttoList,
    getApproveList,
    approve,
    disApprove,
    getDoctorApproveList,
    getGovApproveList,
    getHospitalApproveList,
    getPatientApproveList
} from '../functions/Approve';

import {
    addGovernmentOffice,
    addHospital,
    addDoctor,
    addPatient,
    giveReadAccess,
    giveWriteAccess,
    removeReadAccess,
    removeWriteAccess,
    sendRecordsForUpload,
    sendRecordsForUploadH,
    reportUploaded,
    getDoctorsList,
    getHospitalsList,
    getRecordsHistory,
    getPatientDetails,
    getPatientDetailsForGov,
    getDoctorDetails,
    getPatientList,
    getDoctorH,
    getHospitalDetails,
    getHospitalDoctorList,
    getHospitalPatientList,
    getGovernmentDetails,
} from '../functions/Dhrms'

import {isGovernment, isHospital, isDoctor, isPatient } from '../functions/Rbac'

export default function Test(prop) {
    window.ethereum.enable();


    async function changeD(e) {
        // console.log(document.getElementById("aa").value);
        console.log(await getDoctorApproveList());
    }

    async function changeG(e) {
        // console.log(document.getElementById("ab").value);
        console.log(await getGovApproveList())
    }
    async function changeH(e) {
        // console.log(document.getElementById("ad").value);
        console.log(await getHospitalApproveList());

    }
    async function changeP(e) {
        // console.log(document.getElementById("ac").value);
        console.log(await getPatientApproveList());
    }


    return (
        <>
            <center>
                <h1>Approve Contract</h1>
                <div className='border'>
                    {/* <input type="text" id="aa"></input> */}
                    <button id="a" className='m' onClick={changeD}>
                        getDoctorApproveList
                    </button>
                </div>
                <br></br>

                <div className='border'>
                    {/* <input type="text" id="ab"></input> */}
                    <button id="b" className='m' onClick={changeG}>
                        getGovApproveList
                    </button>
                </div>
                <br></br>

                <div className='border'>
                    {/* <input type="text" id="ac"></input> */}
                    <button id="c" className='m' onClick={changeP}>
                        getPatientApproveList
                    </button>
                </div>
                <br></br>

                <div className='border'>
                    {/* <input type="text" id="ad"></input> */}
                    <button id="d" className='m' onClick={changeH}>
                        getHospitalApproveList
                    </button>
                </div>
                <br></br>

                {/* ---------------------- */}

                <div className='border'>
                    {/* <input type="text" id="getPatDetails"></input> */}
                    <button className='m' onClick={async () => {
                        // console.log(document.getElementById("getPatDetails").value);
                        console.log(await getApproveList());
                    }}>
                        getApproveList
                    </button>
                </div>
                <br></br>

                <hr />
                <h1>Rbac Contract</h1>
                <div className='border'>
                    <input type="text" id="isPatient"></input>
                    <button className='m' onClick={async (e) => {
                        // console.log(document.getElementById("getApproveList").value);
                        console.log(await isPatient(document.getElementById("isPatient").value));
                    }}>
                        isPatient
                    </button>
                </div>
                <br></br>

                {/* ----------------------------------- */}
                <div className='border'>
                    <input type="text" id="isDoctor"></input>
                    <button className='m' onClick={async (e) => {
                        // console.log(document.getElementById("getApproveList").value);
                        console.log(await isDoctor(document.getElementById("isDoctor").value));
                    }}>
                        isDoctor
                    </button>
                </div>
                <br></br>

                {/* ----------------------------------- */}
                <div className='border'>
                    <input type="text" id="isHospital"></input>
                    <button className='m' onClick={async (e) => {
                        // console.log(document.getElementById("getApproveList").value);
                        console.log(await isHospital(document.getElementById("isHospital").value));
                    }}>
                        isHospital
                    </button>
                </div>
                <br></br>

                {/* ----------------------------------- */}
                <div className='border'>
                    <input type="text" id="isGovernment"></input>
                    <button className='m' onClick={async (e) => {
                        // console.log(document.getElementById("getApproveList").value);
                        console.log(await isGovernment(document.getElementById("isGovernment").value));
                    }}>
                        isGovernment
                    </button>
                </div>
                <br></br>
                <hr />
                <h1>DHRMS Contract</h1>
                {/* ----------------------------------- */}
                <div className='border'>
                    <input type="text" id="getPatDetails"></input>
                    <button className='m' onClick={async (e) => {
                        // console.log(document.getElementById("getApproveList").value);
                        console.log(await getPatientDetails(document.getElementById("getPatDetails").value));
                    }}>
                        getPatientDetails
                    </button>
                </div>
                <br></br>

                {/* ----------------------------------- */}

                {/* ----------------------------------- */}
                <div className='border'>
                    <input type="text" id="getGovernmentDetails"></input>
                    <button className='m' onClick={async (e) => {
                        // console.log(document.getElementById("getApproveList").value);
                        console.log(await getGovernmentDetails(document.getElementById("getGovernmentDetails").value));
                    }}>
                        getGovernmentDetails
                    </button>
                </div>
                <br></br>

                {/* ----------------------------------- */}

                {/* ----------------------------------- */}
                <div className='border'>
                    <input type="text" id="getHospitalDetails"></input>
                    <button className='m' onClick={async (e) => {
                        // console.log(document.getElementById("getApproveList").value);
                        console.log(await getHospitalDetails(document.getElementById("getHospitalDetails").value));
                    }}>
                        getHospitalDetails
                    </button>
                </div>
                <br></br>

                {/* ----------------------------------- */}

                {/* ----------------------------------- */}
                <div className='border'>
                    <input type="text" id="getDoctorDetails"></input>
                    <button className='m' onClick={async (e) => {
                        // console.log(document.getElementById("getApproveList").value);
                        console.log(await getDoctorDetails(document.getElementById("getDoctorDetails").value));
                    }}>
                        getDoctorDetails
                    </button>
                </div>
                <br></br>

                {/* ----------------------------------- */}

                <div className='border'>
                    <input type="text" id="giveReadAccess"></input>
                    <button className='m' onClick={async (e) => {
                        // console.log(document.getElementById("getApproveList").value);
                        console.log(await giveReadAccess(document.getElementById("giveReadAccess").value));
                    }}>
                        giveReadAccess
                    </button>
                </div>
                <br></br>

                {/* ----------------------------------- */}

                <div className='border'>
                    <input type="text" id="giveWriteAccess"></input>
                    <button className='m' onClick={async (e) => {
                        // console.log(document.getElementById("getApproveList").value);
                        console.log(await giveWriteAccess(document.getElementById("giveWriteAccess").value));
                    }}>
                        giveWriteAccess
                    </button>
                </div>
                <br></br>

                {/* ----------------------------------- */}

                <div className='border'>
                    <input type="text" id="getDoctorsList"></input>
                    <button className='m' onClick={async (e) => {
                        // console.log(document.getElementById("getApproveList").value);
                        console.log(await getDoctorsList(document.getElementById("getDoctorsList").value));
                    }}>
                        getDoctorsList
                    </button>
                </div>
                <br></br>

                {/* ----------------------------------- */}
                <div className='border'>
                    <input type="text" id="getHospitalsList"></input>
                    <button className='m' onClick={async (e) => {
                        // console.log(document.getElementById("getApproveList").value);
                        console.log(await getHospitalsList(document.getElementById("getHospitalsList").value));
                    }}>
                        getHospitalsList
                    </button>
                </div>
                <br></br>

                {/* ----------------------------------- */}

                <br></br>
                <div id="text">

                </div>
            </center>
        </>
    )
}