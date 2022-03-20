import React from 'react'
import './btn.css'

const Btn = ({text, func}) => {
    return (
        <div className='btn-hos' onClick={func}>
            {text}
        </div>
    )
}

export default Btn