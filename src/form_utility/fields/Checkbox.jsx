import React,{memo} from 'react';

function Checkbox({ options,label,outerClass,checkLabelClass,...rest }) {
    return (
        <div className={outerClass}>
            { label ? <><label >{`${label} :`}</label><br /></>:<></>}
            {
                options.map(({value,label},index) => {
                    return <span key={index}>
                        &nbsp;<input type="checkbox" name={value} id={value} value={value} {...rest} /> &nbsp;
                        <label htmlFor={value} className={checkLabelClass}>{label}</label> &nbsp;
                    </span>
                })
            }

        </div>
    )
} 
export default memo(Checkbox)