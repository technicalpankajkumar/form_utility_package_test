import React, { memo } from 'react'

function SelectOptGroup({ label, name, options, onChange, outerClass, ...rest }) {
    return (
        <div className={outerClass}>
            {label ? <> <label htmlFor={name}>{`${label} :`}</label><br /></> : <></>}
            <select name={name} id={name} onChange={onChange} {...rest} >
                {
                    Object.keys(options).map((label, index) => {
                        return <optgroup label={label} key={index}>
                            {
                                Object.values(options)[index].map(({value,label,...rest},index) => {
                                    return <option value={value} key={index} {...rest}>{label}</option>
                                })
                            }
                        </optgroup>
                    })
                }
            </select>
        </div>
    )
}

export default memo(SelectOptGroup)


