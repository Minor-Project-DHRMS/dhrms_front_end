import React from 'react'
import './btn.css'

const Btn = ({text, func , ...BtnParams}) => {
    return (
        <div className='button'
            onClick={func}
            {...BtnParams}
        >
            {text}
        </div>
    )
}

export default Btn