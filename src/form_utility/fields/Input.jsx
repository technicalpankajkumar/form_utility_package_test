import React, { memo } from 'react';
import './css/Input.css'
function Input({ name, label, type, outerClass, className, width, ...rest }) {

  return (
    <>
      <div className={outerClass}>
        {label ? <><label htmlFor={name} >{`${label} :`}</label><br /> </> : <></>}
        <input
          type={type}
          name={name}
          id={name}
          className={className || `form-utility-input ${width ? `form-utility-input-${width}` : 'form-utility-input-fixed'}`}
          {...rest}
        />
      </div>
    </>
  )
}

export default memo(Input)