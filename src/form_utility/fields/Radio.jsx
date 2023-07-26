import React, { memo } from 'react';

 function Radio({ label, options,name,outerClass,...mainRest}) {
    return (
        <div className={outerClass}>
           { label ? <><label >{`${label} :`}</label><br /></>:<></>}
            {
                options.map(({label,value,...rest},index) => {
                    return <span key={index}>
                        <input  type='radio' name={name} id={value} value={value} {...mainRest} {...rest} />
                        <label htmlFor={value}>{label}</label> &nbsp;
                    </span>
                })
            }
        </div>
    )
}   

export default memo(Radio)
