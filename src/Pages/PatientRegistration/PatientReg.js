import React, { useState } from 'react'
import TxtInput from '../../components/TxtInput/TxtInput'
import MInput from '../../components/mInput/MInput'
import Btn from '../../components/button/Btn.js'
import TextArea from '../../components/textArea/TextArea'
import mainLogo from './mainLogo.png'
import './PatientReg.css'



const initialValues = {
    photo: "",
    name: "",
    DOB: "",
    gender: "",
    height: "",
    weight: "",
    bloodGroup: "",
    phoneNo: "",
    email: "",
    drugAllergies: [],
    otherIllness: [],
    operations: [],
    currentMedications: [],
    otherMedicalIllness: [],
    address: "",
    emergencyPerson: "",
    emergencyPhoneNo: "",
    unhealthyHabits: [],
    dietType: [],
    caffeineConsumption: "",
    smokingPerDay: "",
    walletAddress: ""
}


const sug = ['pollen', 'dry', 'wind']

const PatientReg = () => {

    const [values, setValues] = useState(initialValues);

    const handleInputChangeM = (e) => {
        e.preventDefault();

        const value = e.target.getAttribute("value");
        const name = e.target.getAttribute("name");
        console.log(name);
        console.log(value);

        setValues({
            ...values,
            [name]: [...values[name], value],
        });
    };

    const handleInputChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleInputChangeFile = (e) => {
        e.preventDefault();

        setValues({
            ...values,
            photo: URL.createObjectURL(e.target.files[0]),
        });
    };

    const deleteI = (e) => {
        const item = e.target.getAttribute("value");
        const naam = e.target.getAttribute("name");

        let newList = values[naam];
        newList = newList.filter((i) => {
            return i !== item
        })

        setValues({
            ...values,
            [naam]: newList
        });
    }

    const submit = () => {
        console.log(values);
    }



    return (
        <div className='mainCont'>
            <div className="whitebgP">
                <p>Patient Registration Form</p>
            </div>
            {/* <div className='title'>Patient Registration Form</div> */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="upload_img doc_align_ht">
                    <img src={values.photo? values.photo: mainLogo} alt="Avatar" className="doc_avatar" />
                    <div className="input--file">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="#711685"
                            >
                                <circle cx="12" cy="12" r="3.2" />
                                <path d="M9 2l-1.83 2h-3.17c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2h-3.17l-1.83-2h-6zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                                <path d="M0 0h24v24h-24z" fill="none" />
                            </svg>
                        </span>
                        <input name="Select File" type="file" onChange={handleInputChangeFile}/>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <TxtInput Tlabel="Name" placeholder="Enter the name" name="name" onChange={handleInputChange} />
                            </td>
                            <td rowSpan={4}>
                                <TextArea Tlabel="Address" placeholder="Enter the Address" name="address" onChange={handleInputChange} style={{ height: "300px" }} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <TxtInput Tlabel="Date Of Birth"type="date" placeholder="DOB" name="DOB" onChange={handleInputChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='radio-group'>
                                    <div className='radio'>
                                        <input type="radio" name="gender" id="male" value="Male" onChange={handleInputChange} />
                                        <label htmlFor="male">Male</label>
                                    </div>
                                    <div className='radio'>
                                        <input type="radio" name="gender" id="female" value="female" onChange={handleInputChange} />
                                        <label htmlFor="female">Female</label>
                                    </div>
                                    <div className='radio'>
                                        <input type="radio" name="gender" id="others" value="Others" onChange={handleInputChange} />
                                        <label htmlFor="others">Others</label>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='height-weight-blood'>
                                    <TxtInput Tlabel="Height" placeholder="Height" name="height" onChange={handleInputChange} divsStyle={{ width: "25%" }} style={{ width: "100%", boxSizing: 'border-box' }} />
                                    <TxtInput Tlabel="Weight" placeholder="Weight" name="weight" onChange={handleInputChange} divsStyle={{ width: "25%" }} style={{ width: "100%", boxSizing: 'border-box' }} />
                                    <TxtInput Tlabel="Blood Grp" placeholder="Blood Grp" name="bloodGroup" onChange={handleInputChange} divsStyle={{ width: "25%" }} style={{ width: "100%", boxSizing: 'border-box' }} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <TxtInput Tlabel="phone Number" placeholder="phone Number" name="phoneNo" onChange={handleInputChange} />
                            </td>
                            <td>
                                <TxtInput Tlabel="Emergency Person" placeholder="Emergency Person" name="emergencyPerson" onChange={handleInputChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <TxtInput Tlabel="Email" placeholder="email" name="phoneNo" onChange={handleInputChange} />
                            </td>
                            <td>
                                <TxtInput Tlabel="Emergency phone Number" placeholder="Emergency phone Number" name="emergencyPerson" onChange={handleInputChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <MInput name="drugAllergies" func={handleInputChangeM} suggestions={sug} label="Drug Allergies" list={values.drugAllergies} deleteI={deleteI} />
                            </td>
                            <td>
                                <MInput name="unhealthyHabits" func={handleInputChangeM} suggestions={sug} label="Unhealthy Habits" list={values.unhealthyHabits} deleteI={deleteI} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <MInput name="otherIllness" func={handleInputChangeM} suggestions={sug} label="Other Illness" list={values.otherIllness} deleteI={deleteI} />
                            </td>
                            <td>
                                <MInput name="dietType" func={handleInputChangeM} suggestions={sug} label="Diet Type" list={values.dietType} deleteI={deleteI} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <MInput name="operations" func={handleInputChangeM} suggestions={sug} label="Any Operations" list={values.operations} deleteI={deleteI} />
                            </td>
                            <td>
                                <TxtInput Tlabel="Caffeine Consumption" placeholder="Caffeine Consumption" name="caffeineConsumption" onChange={handleInputChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <MInput name="currentMedications" func={handleInputChangeM} suggestions={sug} label="Current Medications" list={values.currentMedications} deleteI={deleteI} />
                            </td>
                            <td>
                                <TxtInput Tlabel="Smoking Per Day" placeholder="Smoking Per Day" name="smokingPerDay" onChange={handleInputChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <MInput name="otherMedicalIllness" func={handleInputChangeM} suggestions={sug} label="Other MedicalIllness" list={values.otherMedicalIllness} deleteI={deleteI} />
                            </td>
                            <td>
                                <TxtInput Tlabel="Wallet Address" placeholder="Enter the Wallet Address" name="walletAddress" onChange={handleInputChange} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Btn text={"Submit"} func={submit} style={{ margin: "auto" }} />
            </div>
        </div>
    )
}

export default PatientReg;