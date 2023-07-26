import React, { memo } from 'react'
import './css/textarea.css'

function Textarea({ name, label, outerClass, className, width, resize,...rest }) {
    return (
        <div className={outerClass}>
            {label ? <><label htmlFor={name}>{`${label} :`}</label><br /></> : <></>}
            <textarea
                id={name}
                name={name}
                className={className ||`form-utility-textarea ${width ? `form-utility-textarea-${width}`:'form-utility-textarea-fixed'} ${resize ? 'form-utility-textarea-resize' : ''}`}
                {...rest}
            ></textarea>
        </div>
    )
}
export default memo(Textarea)