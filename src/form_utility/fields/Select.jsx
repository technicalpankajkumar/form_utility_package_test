import React, { memo } from 'react';
import './css/Select.css'

function Select({ options, onChange, outerClass, name, label, className, width,...rest }) {
    return (
        <div className={outerClass}>
            {label ? <> <label htmlFor={name}>{`${label} :`}</label><br /> </> : <></>}
            <select onChange={onChange} name={name} id={name} defaultValue={'select'} {...rest} className={className || `form-utility-select ${width ? `form-utility-select-${width}`:''}`} >
                <option disabled value={'select'}>Select option.....</option>
                {
                    options.map(({value,label,...rest},index) => {
                        return <option value={value} key={index} {...rest}>{label}</option>
                    })
                }
            </select>
        </div>
    )
}

export default memo(Select)
