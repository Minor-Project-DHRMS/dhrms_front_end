import React, { useState } from 'react'
import TxtInput from '../TxtInput/TxtInput';
import './MInput.css'


const MInput = ({ func, suggestions, name, label, list, setValues, deleteI }) => {

    const [input, setInput] = useState("");
    const [sug, setSug] = useState(suggestions);
    const [fSug, setFSug] = useState(suggestions);
    const [txt, setTxt] = useState(false);


    const handleSelect = (e) => {
        func(e);
        document.getElementById(name).value = '';
        ChangeComp();
    }

    const filteredSug = (text) => {
        setInput(text)
        if (text) {
            const data = suggestions.filter((item) => {
                return item.toLowerCase().includes(text.toLowerCase())
            })
            setFSug(data);
        }
    }

    const ChangeComp = ()=> {
        if (txt) {
            setInput('');
            setTxt(false);
        }
        else {
            setTxt(true);
        }
        console.log(txt);
    }


    return (
        <div className='MINmainCont'>
            <div className='label'>
                <span>{label}</span> <span onClick={ChangeComp} className={ txt? `plus-cross` : null}>&#10133;</span>
            </div>
            {!txt &&
                <div className='info'>
                    {list.length == 0 && 
                        <div className='allgs' >
                        {`Add ${label}`}
                        </div>
                    }
                    {list?.map((item, index) =>
                        <div className='allgs' key={index} >
                            {item}
                            <span className='cross' onClick={deleteI} name={name} value={item} >&#10005;</span>
                        </div>
                    )}
            </div>
            }
            {txt && <TxtInput className="txtInput" id={name} type={"text"} autoComplete="off" placeholder="Type here..." name={name} onChange={e => filteredSug(e.target.value)} />}

            {input &&
                <ul className='sugList' name={name} >
                    <li name={name} value={input} onClick={handleSelect}>{input}</li>
                    {fSug?.map((sug, index) =>
                        <li name={name} key={index} value={sug} onClick={handleSelect}>{sug}</li>
                    )}
                </ul>
            }
        </div>



    )
}

export default MInput;