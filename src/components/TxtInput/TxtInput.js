import React from 'react'
import './TxtInput.css'

const TxtInput = ({ Tlabel, divsStyle, ...inputProps }) => {
    return (   
      
        <input
            type = {type}
            placeholder= {placeholder}
            name = {name}
            value ={value}
            style = {style}
            {...inputProps}
        />

        <div className='TINmainCont' style={divsStyle}>
            {Tlabel &&
                <div>
                    <span className='Tlabel'>{Tlabel}</span>
                </div>
            }
            <input
                {...inputProps}
            />
        </div>
    )
}

export default TxtInput