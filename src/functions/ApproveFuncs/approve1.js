import ApproveInstance from "../../instance/ApproveInstance";
import {getPatientDetails,getGovernmentDetails,getHospitalDetails,getDoctorDetails,getDoctorH}  from './approve2'

const approve = async (_userAdd) => {
    const approveContract = ApproveInstance();
    const r=await approveContract.approve(_userAdd);
    return r;
};


const disApprove = async (_userAdd) => {
    const approveContract = ApproveInstance();
    const r=await approveContract.disApprove(_userAdd);
    return r;
};

const getApproveList = async () => {
    const approveContract = ApproveInstance();
    const list = await approveContract.getApproveList();

    let cleanedList = [];
    list.forEach(item => {
        cleanedList.push(
            {
                instanceAdd: item.instanceAdd,
                userAdd: item.userAdd,
                userType: item.userType,
                timestamp: new Date(item.timestamp * 1000),
            }
        )
    })

    return cleanedList;
};

const getDoctorApproveList = async () => {
    const list = await getApproveList();
    const patList = list.filter((item) => item.userType === "DOC");
    let finalList = [];

    for (const item of patList) {
        const data = await getDoctorDetails(item.instanceAdd);
        finalList.push({
            details: {
                doctorName: data[0],
                phoneNumber: data[1],
                qualification: data[2],
                photo: data[3],
                dob: data[4],
                department: data[5],
                // hid: ids[0],
                // did: ids[1],
            },
            address: item.userAdd,
            timestamp: new Date(item.timestamp * 1000),
        })
    }

    return finalList;
};
const getHospitalApproveList = async () => {
    const list = await getApproveList();
    const patList = list.filter((item) => item.userType === "HOS");
    let finalList = [];

    for (const item of patList) {
        {
            const data = await getHospitalDetails(item.instanceAdd);
            finalList.push({
                details: {
                    hospitalName: data[0],
                    phoneNumber: data[1]
                },
                address: item.userAdd,
                timestamp: new Date(item.timestamp * 1000),
            })
        };
    }

    return finalList;
};

const getGovApproveList = async () => {
    const list = await getApproveList();
    const patList = list.filter((item) => item.userType === "GOV");
    let finalList = [];

    for (const item of patList) {
        const data = await getGovernmentDetails(item.instanceAdd);
        finalList.push({
            details: {
                officeName: data[0],
                phoneNumber: data[1]
            },
            address: item.userAdd,
            timestamp: new Date(item.timestamp * 1000),
        })
    }

    return finalList;
};

const getPatientApproveList = async () => {
    const list = await getApproveList();
    console.log(list);
    const patList = list.filter((item) => item.userType === "PAT");
    let finalList = [];

    // console.log(patList);

    for (const item of patList) {
        const details = await getPatientDetails(item.instanceAdd);
        finalList.push({
            details: JSON.parse(details),
            address: item.userAdd,
            timestamp: new Date(item.timestamp * 1000),
        });
    }
    return finalList;
};

export {
    getApproveList,
    approve,
    disApprove,
    getDoctorApproveList,
    getGovApproveList,
    getHospitalApproveList,
    getPatientApproveList
};
