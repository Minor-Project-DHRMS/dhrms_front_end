import React from 'react'
import './TxtInput.js'

const TxtInput = ({ type, placeholder, name, value, style, ...inputProps }) => {
    return (
        <input
            type = {type}
            placeholder= {placeholder}
            name = {name}
            value ={value}
            style = {style}
            {...inputProps}
        />

    )
}

TxtInput.defaultProps = {
    type: "text",
    placeholder: "",
    name: "",

}

export default TxtInput