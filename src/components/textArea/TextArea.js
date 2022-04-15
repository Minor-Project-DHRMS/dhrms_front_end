import React from 'react'
import './TextArea.css'


const TextArea = ({ Tlabel,...inputProps }) => {
    return (
        <div>
            <span className='label'>{Tlabel}</span>
            <textarea
                {...inputProps}
            />
        </div>
    )
}

export default TextArea